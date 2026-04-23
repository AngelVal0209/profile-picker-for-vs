import * as vscode from 'vscode';

export interface PerfilItem extends vscode.QuickPickItem {
    profile?: vscode.UserDataProfile;
    nuevo?: boolean;
}

export async function obtenerPerfiles(): Promise<PerfilItem[]> {

    try {

        const perfiles = vscode.workspace.userDataProfiles.profiles;

        const items: PerfilItem[] = perfiles.map(perfil => ({
            label: perfil.name,
            description: perfil.isDefault
                ? 'Perfil predeterminado'
                : 'Perfil disponible',
            profile: perfil
        }));

        items.push({
            label: '$(add) Crear nuevo perfil',
            description: 'Crear un nuevo perfil',
            nuevo: true
        });

        return items;

    } catch (error) {

        console.error(error);

        vscode.window.showErrorMessage(
            'No se pudieron cargar los perfiles'
        );

        return [];
    }
}