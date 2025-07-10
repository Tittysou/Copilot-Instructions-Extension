# Copilot Instructions Manager

Automatically manages a `copilot-instructions.md` file with your custom coding rules for Copilot in every workspace.

## Features

- On workspace open, checks if `.github/copilot-instructions.md` exists. If not, creates it with your custom rules.
- Adds a command: **Create or Update Copilot Instructions** (from Command Palette) to manually create/update the file.
- Shows a notification when the file is created or updated.
- Ensures your coding standards are always available for Copilot.

## Usage

1. Open any workspace. The extension will automatically check for `.github/copilot-instructions.md` and create it if missing.
2. To manually create or update the instructions file, run the command `Copilot Instructions Manager: Create or Update Copilot Instructions` from the Command Palette.
3. A notification will confirm when the file is created or already exists.

## Coding Rules in copilot-instructions.md

- No comments in generated code
- No explanatory comments within code
- Focus on clean, self-explanatory code
- Use consistent formatting and clear naming
- Keep functions focused and single-purpose

## Release Notes

### 0.0.1

Initial release of Copilot Instructions Manager.

### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z.

---

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Working with Markdown

You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux).
* Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux).
* Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets.

## For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
