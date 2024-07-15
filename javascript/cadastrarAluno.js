import { cadastrarMaterias, qtdMaterias } from './cadastrarMaterias.js';
import { selecionarModoDeImpressao } from '../javascript/selecionarModoDeImpressao.js';

import PromptSync from 'prompt-sync';
const prompt = PromptSync();
const aluno = new Object();
const alunos = [];

export function cadastrarAluno() {
    let validaQtdMaterias = true;
    let opcao;

    let nomeAluno = prompt('Digite o nome do aluno: ');
    aluno['nome'] = nomeAluno;
    opcao = prompt('Deseja cadastrar uma matéria para o aluno informado? 1 - Sim | 2 - Não: ');

    while (validaQtdMaterias) {

        switch (opcao) {
            case '1':

                cadastrarMaterias();
                opcao = prompt('Deseja cadastrar outra matéria? 1 - Sim | 2 - Não: ');
                break;

            case '2':

                if (qtdMaterias < 3) {

                    console.log('Você deve cadastrar no mínimo 3 matérias!');

                    cadastrarMaterias();
                    opcao = prompt('Deseja cadastrar outra matéria? 1 - Sim | 2 - Não: ');
                    break;

                } else {

                    validaQtdMaterias = false;
                    selecionarModoDeImpressao();
                    break;

                }

            default:

                console.log('Opção inválida! Digite 1 para cadastrar nova matéria ou 2 para finalizar!');
                opcao = prompt('Deseja cadastrar outra matéria? 1 - Sim | 2 - Não: ');
                break;

        }
    }

    return alunos.push(aluno);
}

export { alunos, aluno };