import * as vscode from 'vscode';

import {
    mostrarSelectorPerfiles
} from './commands/mostrarSelector';

export async function activate(
    context: vscode.ExtensionContext
) {

    console.log(
        'Startup Profile Picker iniciado'
    );

    // Esperar carga completa
    setTimeout(async () => {

        await mostrarSelectorPerfiles();

    }, 1200);

    // Comando manual
    const comando =
        vscode.commands.registerCommand(
            'profile-picker.abrirSelector',

            async () => {

                await mostrarSelectorPerfiles();
            }
        );

    context.subscriptions.push(comando);
}

export function deactivate() {}