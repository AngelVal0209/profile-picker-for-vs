import * as vscode from 'vscode';

import {
    abrirSelectorOficial,
    crearNuevoPerfil
} from '../services/profileService';

export async function abrirProfileWebview() {

    const panel =
        vscode.window.createWebviewPanel(
            'profilePicker',
            'Startup Profile Picker',
            vscode.ViewColumn.Active,
            {
                enableScripts: true
            }
        );

    panel.webview.html = getHtml();

    panel.webview.onDidReceiveMessage(
        async (message) => {

            switch (message.command) {

                case 'switchProfile':

                    await abrirSelectorOficial();
                    break;

                case 'createProfile':

                    await crearNuevoPerfil();
                    break;

                case 'continue':

                    panel.dispose();
                    break;
            }
        }
    );
}

function getHtml(): string {

    return `
    <!DOCTYPE html>
    <html lang="es">
    <head>

        <meta charset="UTF-8">

        <style>

            body {

                background: #1e1e1e;
                color: white;

                display: flex;
                justify-content: center;
                align-items: center;

                height: 100vh;

                font-family: sans-serif;
            }

            .card {

                width: 420px;

                background: #252526;

                border: 1px solid #333;

                border-radius: 16px;

                padding: 30px;

                box-shadow: 0 10px 30px rgba(0,0,0,.4);
            }

            h1 {

                font-size: 22px;
                margin-bottom: 25px;
            }

            button {

                width: 100%;

                border: none;

                padding: 14px;

                margin-bottom: 12px;

                border-radius: 10px;

                background: #2d2d30;

                color: white;

                cursor: pointer;

                font-size: 15px;

                transition: .2s;
            }

            button:hover {

                background: #3e3e42;
            }

        </style>

    </head>

    <body>

        <div class="card">

            <h1>
                Startup Profile Picker
            </h1>

            <button onclick="switchProfile()">
                🔄 Cambiar perfil
            </button>

            <button onclick="createProfile()">
                ➕ Crear nuevo perfil
            </button>

            <button onclick="continueApp()">
                ➜ Continuar
            </button>

        </div>

        <script>

            const vscode = acquireVsCodeApi();

            function switchProfile() {

                vscode.postMessage({
                    command: 'switchProfile'
                });
            }

            function createProfile() {

                vscode.postMessage({
                    command: 'createProfile'
                });
            }

            function continueApp() {

                vscode.postMessage({
                    command: 'continue'
                });
            }

        </script>

    </body>
    </html>
    `;
}