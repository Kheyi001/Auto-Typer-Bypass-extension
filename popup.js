document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const fastSpeedInput = document.getElementById('fastSpeed');
    const slowSpeedInput = document.getElementById('slowSpeed');
    const saveBtn = document.getElementById('saveBtn');
    const status = document.getElementById('status');
  
    chrome.storage.local.get(['textToType', 'fastSpeed', 'slowSpeed'], (data) => {
      if (data.textToType !== undefined) {
        textInput.value = data.textToType;
      }
      if (data.fastSpeed !== undefined) {
        fastSpeedInput.value = data.fastSpeed;
      }
      if (data.slowSpeed !== undefined) {
        slowSpeedInput.value = data.slowSpeed;
      }
    });
  
    saveBtn.addEventListener('click', () => {
      const text = textInput.value;
      const fast = parseInt(fastSpeedInput.value, 10) || 50;
      const slow = parseInt(slowSpeedInput.value, 10) || 3000;

      chrome.storage.local.set({ 
        textToType: text,
        fastSpeed: fast,
        slowSpeed: slow
      }, () => {
        status.style.display = 'block';
        setTimeout(() => {
          status.style.display = 'none';
        }, 2000);
      });
    });
  });
