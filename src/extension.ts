// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

const INSTRUCTIONS_PATH = '.github/copilot-instructions.md';
const INSTRUCTIONS_CONTENT = `<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->\n\n# Copilot Coding Rules\n\n- No comments in generated code\n- No explanatory comments within code\n- Focus on clean, self-explanatory code\n- Use consistent formatting and clear naming\n- Keep functions focused and single-purpose\n\nThis is a VS Code extension project. Please use the get_vscode_api with a query as input to fetch the latest VS Code API references.\n`;

async function ensureInstructionsFile(showNotification = false) {
	const wsFolders = vscode.workspace.workspaceFolders;
	if (!wsFolders || wsFolders.length === 0) {
		return;
	}
	const rootUri = wsFolders[0].uri;
	const fileUri = vscode.Uri.joinPath(rootUri, INSTRUCTIONS_PATH);
	try {
		await vscode.workspace.fs.stat(fileUri);
		if (showNotification) {
			vscode.window.showInformationMessage('copilot-instructions.md already exists.');
		}
	} catch {
		const githubDir = vscode.Uri.joinPath(rootUri, '.github');
		try {
			await vscode.workspace.fs.stat(githubDir);
		} catch {
			await vscode.workspace.fs.createDirectory(githubDir);
		}
		await vscode.workspace.fs.writeFile(fileUri, Buffer.from(INSTRUCTIONS_CONTENT, 'utf8'));
		vscode.window.showInformationMessage('copilot-instructions.md has been created with your coding rules.');
	}
}

export function activate(context: vscode.ExtensionContext) {
	if (vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders.length > 0) {
		ensureInstructionsFile(false);
	}
	const manualCmd = vscode.commands.registerCommand('copilot-instructions-manager.createOrUpdateInstructions', () => {
		ensureInstructionsFile(true);
	});
	context.subscriptions.push(manualCmd);
}

export function deactivate() {}
