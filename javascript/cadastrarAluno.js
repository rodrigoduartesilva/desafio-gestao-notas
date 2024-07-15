import { cadastrarMaterias, qtdMaterias } from './cadastrarMaterias.js';
import { selecionarModoDeImpressao } from '../javascript/selecionarModoDeImpressao.js';

import PromptSync from 'prompt-sync';
const prompt = PromptSync();

const aluno = new Object();
const alunos = [];

export function cadastrarAluno() {
    let validaQtdMaterias = true;
    let opcao;
    let nomeAluno;

    while (true) {

        try {
            nomeAluno = prompt('Digite o nome do aluno: ');

            // Verifica se o valor é numérico -> Caso seja um número, a aplicação irá direto para o catch e será finalizada.
            if (!isNaN(nomeAluno)) {

                throw new Error('Valor numérico não é permitido. Por favor, digite um nome válido.');

            }

            aluno['nome'] = nomeAluno;

            break;

        } catch (error) {
            // Captura e exibe o erro
            console.error(error.message);
        }

    }



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