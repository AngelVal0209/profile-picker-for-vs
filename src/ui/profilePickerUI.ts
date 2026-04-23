import * as vscode from 'vscode';

import {
    abrirSelectorOficial,
    crearNuevoPerfil
} from '../services/profileService';

import {
    AccionPerfil
} from '../types/profile';

export async function abrirProfilePickerUI() {

    const quickPick =
        vscode.window.createQuickPick<AccionPerfil>();

    // Header moderno
    quickPick.title =
        'Profile Picker';

    quickPick.placeholder =
        'Gestiona tus perfiles rápidamente';

    // Estilo visual más limpio
    quickPick.matchOnDescription = true;

    quickPick.items = [

        {
            kind: vscode.QuickPickItemKind.Separator,
            label: 'PERFILES'
        },

        {
            label: '$(sync) Cambiar perfil',
            description: 'Abrir selector oficial de perfiles'
        },

        {
            label: '$(add) Crear nuevo perfil',
            description: 'Crear un entorno nuevo'
        },

        {
            kind: vscode.QuickPickItemKind.Separator,
            label: 'GENERAL'
        },

        {
            label: '$(arrow-right) Continuar',
            description: 'Cerrar selector'
        }
    ];

    quickPick.onDidAccept(async () => {

        const seleccion =
            quickPick.selectedItems[0];

        if (!seleccion) {
            return;
        }

        // Cambiar perfil
        if (
            seleccion.label.includes(
                'Cambiar'
            )
        ) {

            quickPick.hide();

            await abrirSelectorOficial();

            return;
        }

        // Crear perfil
        if (
            seleccion.label.includes(
                'Crear'
            )
        ) {

            quickPick.hide();

            await crearNuevoPerfil();

            return;
        }

        // Continuar
        quickPick.hide();
    });

    quickPick.show();
}