import { imprimirListaDeAlunos } from '../javascript/imprimirListaDeAlunos.js';
import { imprimirListaEmJson } from '../javascript/imprimirListaEmJson.js';

import PromptSync from 'prompt-sync';
const prompt = PromptSync();

export function selecionarModoDeImpressao() {

    console.log('\n');
    console.log('Selecione o modo de impressão desejado');
    console.log('\n');
    console.log('Digite 1 - Imprimir a lista de alunos');
    console.log('Digite 2 - Imprimir em formato Json');
    console.log('\n');

    let opcao = prompt('Selecione a opção desejada: ');

    switch (opcao) {
        case '1':
            console.log('\n');
            imprimirListaDeAlunos();
            break;

        case '2':
            console.log('\n');
            imprimirListaEmJson();
            break;

        default:
            console.log('Opção inválida! Digite 1 para imprimir a lista de alunos ou 2 para imprimir em format Json.');
            break;
    }
}