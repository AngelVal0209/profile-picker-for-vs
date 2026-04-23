import * as vscode from 'vscode';

export async function mostrarSelectorPerfiles() {

    const opciones: vscode.QuickPickItem[] = [

        {
            label: '$(person) Cambiar perfil',
            description: 'Abrir selector oficial de perfiles'
        },

        {
            label: '$(add) Crear nuevo perfil',
            description: 'Crear un perfil nuevo'
        }
    ];

    const seleccion = await vscode.window.showQuickPick(
        opciones,
        {
            title: 'Profile Picker',
            placeHolder: 'Selecciona una opción'
        }
    );

    if (!seleccion) {
        return;
    }

    // Crear perfil
    if (seleccion.label.includes('Crear')) {

        await vscode.commands.executeCommand(
            'workbench.profiles.actions.createProfile'
        );

        return;
    }

    // Selector oficial
    await vscode.commands.executeCommand(
        'workbench.profiles.actions.switchProfile'
    );
}