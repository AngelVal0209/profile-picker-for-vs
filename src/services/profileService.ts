import * as vscode from 'vscode';

export async function abrirSelectorOficial() {

    vscode.window.showInformationMessage(
        'ESC para cerrar si ya estás en el perfil correcto'
    );

    await vscode.commands.executeCommand(
        'workbench.profiles.actions.switchProfile'
    );

    setTimeout(async () => {

        await vscode.commands.executeCommand(
            'workbench.action.reloadWindow'
        );

    }, 1000);
}

export async function crearNuevoPerfil() {

    await vscode.commands.executeCommand(
        'workbench.profiles.actions.createProfile'
    );
}