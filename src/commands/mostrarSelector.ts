import * as vscode from 'vscode';

import {
    abrirProfilePickerUI
} from '../ui/profilePickerUI';

export async function mostrarSelectorPerfiles() {

    await abrirProfilePickerUI(); 
}


