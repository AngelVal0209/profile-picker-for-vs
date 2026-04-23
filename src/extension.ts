import * as vscode from 'vscode';

import {
    mostrarSelectorPerfiles
} from './commands/mostrarSelector';

export function activate(context: vscode.ExtensionContext) {

    console.log('Startup Profile Picker iniciado');

    const cmd = vscode.commands.registerCommand(
        'profile-picker.abrirSelector',
        mostrarSelectorPerfiles
    );

    context.subscriptions.push(cmd);

    setTimeout(() => {
    vscode.commands.executeCommand(
        'profile-picker.abrirSelector'
    );
}, 800);
}

export function deactivate() { }