import { aluno } from '../javascript/cadastrarAluno.js';
import { cadastrarFaltas } from './cadastrarFaltas.js';
import { cadastrarNotas } from './cadastrarNotas.js';

import PromptSync from 'prompt-sync';
const prompt = PromptSync();

const listaDeMaterias = [];
let qtdMaterias = 0;
let nomeMateria;

export function cadastrarMaterias() {
    nomeMateria = prompt('Informe a matéria a ser cadastrada: ');
    const materias = new Object();

    aluno['materias'] = listaDeMaterias;
    materias['nomeDaMateria'] = nomeMateria;
    qtdMaterias++;

    let media = cadastrarNotas(materias);

    let faltas = cadastrarFaltas(materias);

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

    listaDeMaterias.push(materias);
}

export { qtdMaterias };