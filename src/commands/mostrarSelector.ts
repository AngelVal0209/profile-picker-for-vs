import * as vscode from 'vscode';
import {
    obtenerPerfiles,
    PerfilItem
} from '../services/perfilesService';

export async function mostrarSelectorPerfiles() {

    const perfiles = await obtenerPerfiles();

    const seleccion = await vscode.window.showQuickPick(
        perfiles,
        {
            title: 'Profile Picker',
            placeHolder: 'Selecciona un perfil'
        }
    );

    if (!seleccion) {
        return;
    }

    // Crear nuevo perfil
    if (seleccion.nuevo) {

        await vscode.commands.executeCommand(
            'workbench.profiles.actions.createProfile'
        );

        return;
    }

    // Cambiar perfil
    if (seleccion.profile) {

        await vscode.window.showInformationMessage(
            `Perfil seleccionado: ${seleccion.profile.name}`
        );

        // Abrir selector oficial de cambio
        await vscode.commands.executeCommand(
            'workbench.profiles.actions.switchProfile'
        );
    }
}