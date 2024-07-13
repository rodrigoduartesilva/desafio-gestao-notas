const prompt = require('prompt-sync')();
const aluno = new Object();

const alunos = [];
const listaDeMaterias = [];

let nomeAluno;
let faltas;
let nota;
let qtdNotas = 0;
let qtdMaterias = 0;
let validaQtdMaterias = true;
let nomeMateria;
let opcao;


nomeAluno = prompt('Digite o nome do aluno: ');
aluno['nome'] = nomeAluno;
opcao = prompt('Deseja cadastrar uma matéria para o aluno informado? 1 - Sim | 2 - Não: ');

while (validaQtdMaterias) {

    switch (opcao) {
        case '1':

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

            if (media / 3)

                qtdNotas = 0;

            faltas = +prompt('Informe a quantidade de faltas do aluno para esta matéria: ');
            materias['faltas'] = faltas;

            listaDeMaterias.push(materias);

            console.log(media);
            console.log(media / 3);
            opcao = prompt('Deseja cadastrar outra matéria? 1 - Sim | 2 - Não: ');

            break;

        case '2':

            if (qtdMaterias < 3) {

                console.log('Você deve cadastrar no mínimo 3 matérias!');

                aluno['materias'] = prompt('Informe a matéria a ser cadastrada: ');
                qtdMaterias++;

                while (qtdNotas < 3) {
                    aluno['materias']['nota'] = +prompt(`Informe a ${qtdNotas + 1} nota: `);
                    qtdNotas++;
                }
                qtdNotas = 0;

                aluno['faltas'] = +prompt('Informe a quantidade de faltas do aluno para esta matéria: ');

                opcao = prompt('Deseja cadastrar outra matéria? 1 - Sim | 2 - Não: ');
                break;

            } else {

                validaQtdMaterias = false;
                break;

            }


        default:
            console.log('Opção inválida! Digite 1 para cadastrar nova matéria ou 2 para finalizar!');
            opcao = prompt('Deseja cadastrar outra matéria? 1 - Sim | 2 - Não: ');
            break;
    }
}

alunos.push(aluno);

alunos.forEach((item, index) => {
    console.log(`Aluno ${index + 1}:`);
    console.log(`Nome: ${item.nome}`);
    console.log('Matérias:');
    item.materias.forEach((materia) => {
        console.log(`  - Nome da Matéria: ${materia.nomeDaMateria}`);
        console.log(`    Notas: ${materia.notas.join(', ')}`);
        console.log(`    Media: ${materia.media}`);
        console.log(`    Faltas: ${materia.faltas}`);
    });
});

console.log(JSON.stringify(aluno));