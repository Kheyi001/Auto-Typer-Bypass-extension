document.addEventListener('keydown', async (e) => {
    if (e.altKey && e.code === 'KeyV') {
        const data = await chrome.storage.local.get(['textToType', 'fastSpeed', 'slowSpeed']);
        if (data.textToType) {
            e.preventDefault();
            const fastSpeed = data.fastSpeed !== undefined ? data.fastSpeed : 50;
            const slowSpeed = data.slowSpeed !== undefined ? data.slowSpeed : 3000;
            typeText(data.textToType, fastSpeed, slowSpeed);
        }
    }
});

async function typeText(text, fastSpeed, slowSpeed) {
    text = text.replace(/\r\n/g, '\n');
    
    const activeElement = document.activeElement;
    if (!activeElement) return;

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        
        let success = false;
        
        if (char === '\n') {
            success = document.execCommand('insertLineBreak');
            if (!success) success = document.execCommand('insertText', false, '\n');
        } else {
            success = document.execCommand('insertText', false, char);
        }
        
        if (!success && activeElement.value !== undefined) {
            const start = activeElement.selectionStart || 0;
            const end = activeElement.selectionEnd || 0;
            
            activeElement.value = activeElement.value.slice(0, start) + char + activeElement.value.slice(end);
            activeElement.selectionStart = activeElement.selectionEnd = start + 1;
            
            activeElement.dispatchEvent(new Event('input', { bubbles: true }));
        }

        activeElement.dispatchEvent(new KeyboardEvent('keydown', { key: char, bubbles: true }));
        activeElement.dispatchEvent(new KeyboardEvent('keypress', { key: char, bubbles: true }));
        activeElement.dispatchEvent(new KeyboardEvent('keyup', { key: char, bubbles: true }));
        
        let baseDelay = Math.random() < 0.8 ? fastSpeed : slowSpeed;
        
        let variance = baseDelay * 0.2;
        let finalDelay = baseDelay + (Math.random() * variance * 2 - variance);
        finalDelay = Math.max(1, Math.floor(finalDelay));
        
        await new Promise(resolve => setTimeout(resolve, finalDelay)); 
    }
}
