import { aluno } from '../javascript/cadastrarAluno.js';

import PromptSync from 'prompt-sync';
const prompt = PromptSync();

const listaDeMaterias = [];
let faltas;
let nota;
let qtdMaterias = 0;
let qtdNotas = 0;
let nomeMateria;

export function cadastrarMaterias() {
    nomeMateria = prompt('Informe a matéria a ser cadastrada: ');
    const materias = new Object();
    const listaNotas = new Array();
    let media = 0;

    aluno['materias'] = listaDeMaterias;
    materias['nomeDaMateria'] = nomeMateria;
    qtdMaterias++;

    while (qtdNotas < 3) {
        nota = +prompt(`Informe a ${qtdNotas + 1} nota: `);
        listaNotas.push(nota);
        qtdNotas++;
    }
    materias['notas'] = listaNotas;

    media = listaNotas.reduce((acumulador, valor) => {
        return acumulador += valor;
    });

    materias['media'] = (media / 3).toFixed(2);
    qtdNotas = 0;

    faltas = +prompt('Informe a quantidade de faltas do aluno para esta matéria: ');
    materias['faltas'] = faltas;

    if (media / 3 < 5 || faltas > 5) {
        if (media / 3 < 5 && faltas < 6) {
            materias['statusDeAprovacao'] = 'O aluno está reprovado por média';
        } else if (media / 3 >= 5 && faltas > 5) {
            materias['statusDeAprovacao'] = 'O aluno está reprovado por faltas';
        } else {
            materias['statusDeAprovacao'] = 'O aluno foi reprovado por media e faltas';
        }
    } else if (media / 3 >= 5 && media / 3 < 7) {
        materias['statusDeAprovacao'] = 'O aluno precisará fazer uma prova de recuperação';
    } else {
        materias['statusDeAprovacao'] = 'O aluno foi aprovado';
    }

    listaDeMaterias.push(materias);
}

export { qtdMaterias };