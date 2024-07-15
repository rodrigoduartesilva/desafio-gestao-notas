import { imprimirListaDeAlunos } from '../javascript/imprimirListaDeAlunos.js';
import { imprimirListaEmJson } from '../javascript/imprimirListaEmJson.js';
import { exibirMenuDeSelecaoDeImpressao } from '../javascript/exibirMenuDeSelecaoDeImpressao.js';

import PromptSync from 'prompt-sync';
const prompt = PromptSync();

let validacaoWhile = true;

export function selecionarModoDeImpressao() {


    do {

        exibirMenuDeSelecaoDeImpressao();
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

            case '3':
                console.log('Aplicação finalizada!');
                validacaoWhile = false;
                break;

            default:
                console.log('\n');
                console.log('Opção inválida!');
                break;
        }

    } while (validacaoWhile);

}