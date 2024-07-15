import { aluno } from '../javascript/cadastrarAluno.js';
import { cadastrarFaltas } from './cadastrarFaltas.js';
import { cadastrarNotas } from './cadastrarNotas.js';

import PromptSync from 'prompt-sync';
const prompt = PromptSync();

const listaDeMaterias = [];
let qtdMaterias = 0;
let nomeMateria;

// Função para cadastro de materias
export function cadastrarMaterias() {

    // Validação de valores numericos
    try {

        nomeMateria = prompt('Informe a matéria a ser cadastrada: ');

        // Verifica se o valor é um texto, se sim, a condição executada será o else, realizando o cadastro de materias
        if (!isNaN(nomeMateria)) {

            throw new Error('Valor numérico não é permitido. Por favor, digite um nome válido.');

        } else {

            // Criação do objeto materias
            const materias = new Object();

            aluno['materias'] = listaDeMaterias;
            materias['nomeDaMateria'] = nomeMateria;
            qtdMaterias++;

            let media = cadastrarNotas(materias);

            let faltas = cadastrarFaltas(materias);

            // Validação do status de aprovação do aluno
            if (media < 5 || faltas > 5) {
                if (media < 5 && faltas < 6) {
                    materias['statusDeAprovacao'] = 'O aluno está reprovado por média';
                } else if (media >= 5 && faltas > 5) {
                    materias['statusDeAprovacao'] = 'O aluno está reprovado por faltas';
                } else {
                    materias['statusDeAprovacao'] = 'O aluno foi reprovado por media e faltas';
                }
            } else if (media >= 5 && media < 7) {
                materias['statusDeAprovacao'] = 'O aluno precisará fazer uma prova de recuperação';
            } else {
                materias['statusDeAprovacao'] = 'O aluno foi aprovado';
            }

            // Insere os valores dentro do objeto materias
            listaDeMaterias.push(materias);

        }

    } catch (error) {
        // Captura e exibe o erro
        console.error(error.message);
    }
}

export { qtdMaterias };