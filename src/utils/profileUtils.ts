import * as vscode from 'vscode';

export async function obtenerNombrePerfilActual(): Promise<string> {

    try {

        const title =
            vscode.workspace
                .getConfiguration('window')
                .get<string>('title');

        // Si existe variable profileName
        if (title?.includes('${profileName}')) {

            // Intentar obtener desde title bar
            const profile =
                await vscode.commands.executeCommand<any>(
                    'getContextKeyInfo',
                    'currentProfile'
                );

            if (profile?.value) {
                return profile.value;
            }
        }

        // Fallback
        return 'Perfil activo';

    } catch {

        return 'Perfil activo';
    }
}