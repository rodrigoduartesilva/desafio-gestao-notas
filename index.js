const prompt = require('prompt-sync')();

const materias = [];
const faltas = [];
let qtdMaterias = 0;
let numeroDeFaltas = 0;
let validaQtdMaterias = true;
let nomeMateria
let opcao;

let nome = prompt('Digite o nome do aluno: ');
opcao = prompt('Deseja cadastrar uma matéria para o aluno informado? 1 - Sim | 2 - Não: ');

while (validaQtdMaterias) {

    if (opcao == 1) {

        nomeMateria = prompt('Informe a matéria a ser cadastrada: ');
        materias.push(nomeMateria);
        qtdMaterias++;
        numeroDeFaltas = prompt('Informe a quantidade de faltas do aluno para esta matéria: ');
        faltas.push(numeroDeFaltas);
        opcao = prompt('Deseja cadastrar outra matéria? 1 - Sim | 2 - Não: ');

    } else if (opcao == 2 && qtdMaterias < 3) {

        console.log('Você deve cadastrar no mínimo 3 matérias!');
        nomeMateria = prompt('Informe a matéria a ser cadastrada: ');
        materias.push(nomeMateria);
        qtdMaterias++;
        numeroDeFaltas = prompt('Informe a quantidade de faltas do aluno para esta matéria: ');
        faltas.push(numeroDeFaltas);
        opcao = prompt('Deseja cadastrar outra matéria? 1 - Sim | 2 - Não: ');

    } else if (opcao == 0 || opcao > 2) {

        console.log('Opção inválida! Digite 1 para cadastrar nova matéria ou 2 para finalizar!');
        opcao = prompt('Deseja cadastrar outra matéria? 1 - Sim | 2 - Não: ');

    } else {

        validaQtdMaterias = false;

    }
}

console.log(materias);