<h1 align="center">👑 Auto Typer Bypass</h1>

<p align="center">
  <strong>A Chrome extension that bypasses copy/paste restrictions by simulating realistic human typing.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Manifest-V3-blue?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Manifest V3"/>
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License"/>
  <img src="https://img.shields.io/badge/Version-1.0-purple?style=for-the-badge" alt="Version"/>
  <img src="https://img.shields.io/badge/Platform-Chrome-yellow?style=for-the-badge&logo=googlechrome" alt="Chrome"/>
</p>

---

## Description

**Auto Typer Bypass** is a Chrome extension that lets you bypass copy/paste restrictions on websites that block them. It works by **simulating real human typing** — character by character — with randomized delays between keystrokes to mimic natural behavior.

---

##  Features

| Feature | Description |
|---------|-------------|
|  **Human-Like Typing** | Types text character by character, just like a real person |
|  **Adjustable Speeds** | Full control over normal and slow typing speeds |
|  **Randomized Delays** | ±20% random variation on each keystroke timing |
|  **Quick Shortcut** | Press `Alt + V` to start typing instantly |
|  **Auto Save** | Automatically saves your text and settings |
|  **Works Everywhere** | Compatible with all websites |
|  **Advanced Editor Support** | Works with React, Vue, and any web-based text editor |

---

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/auto-typer-bypass.git
   ```
   Or download the ZIP and extract it.

2. **Open Chrome Extensions page**
   ```
   chrome://extensions/
   ```

3. **Enable Developer Mode**
   
   Toggle **Developer mode** in the top-right corner.

4. **Load the extension**
   
   Click **Load unpacked** and select the project folder.

5. **Ready to use!**

---

##  Usage

### Step 1: Save Your Text
1. Click the extension icon in the Chrome toolbar.
2. Paste the text or code you want to type into the text area.
3. (Optional) Adjust speed settings:
   - **Normal Speed** — delay in ms applied to 80% of characters.
   - **Slow Speed** — delay in ms applied to 20% of characters (simulates thinking pauses).
4. Click **Save Text**.

### Step 2: Auto Type
1. Navigate to the target website.
2. Click on the input field where you want to type.
3. Press `Alt + V` — and it starts typing automatically!

---

## Speed Settings

| Setting | Default | Description |
|---------|---------|-------------|
| **Normal Speed** | `50ms` | Delay between 80% of characters |
| **Slow Speed** | `3000ms` | Delay between 20% of characters (simulates thinking) |

> **Tip**: Use higher values for Slow Speed to make typing look more realistic, as if the person is pausing to think.

---

## Project Structure

```
auto-typer-bypass/
├── 📄 manifest.json      # Extension config (Manifest V3)
├── 🎨 popup.html         # User interface
├── ⚡ popup.js           # Settings save logic
├── 🤖 content.js         # Auto-typing script
├── 👑 icon.png           # Original icon
├── 👑 icon128.png        # 128x128 icon
├── 👑 icon48.png         # 48x48 icon
├── 👑 icon16.png         # 16x16 icon
└── 📖 README.md          # This file
```

---

## How It Works

1. The user pastes text into the extension popup and saves it to **Chrome Storage**.
2. On any webpage, pressing `Alt + V` triggers the **Content Script**.
3. The script types each character one by one using `execCommand('insertText')`.
4. If `execCommand` fails (e.g., on some standard `<input>` fields), it falls back to **direct value manipulation** with `dispatchEvent`.
5. Full keyboard events (`keydown`, `keypress`, `keyup`) are fired for each character to mimic a real user.
6. Each keystroke has a **randomized delay** (±20% variance) to appear human-like.

---

##  Contributing

Contributions are welcome! If you'd like to improve the extension:

1. **Fork** the repository
2. Create a new branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit** your changes:
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. Push your branch:
   ```bash
   git push origin feature/amazing-feature
   ```
5. Open a **Pull Request**

---

##  License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

##  Disclaimer

> This tool is designed for educational purposes and personal productivity. Use it responsibly and in accordance with the terms of service of the websites you interact with. The developer is not responsible for any misuse.

---
