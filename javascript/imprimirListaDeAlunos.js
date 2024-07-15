import { aluno } from "../javascript/cadastrarAluno.js";


export function imprimirListaDeAlunos() {

    console.log(`Nome: ${aluno.nome}`);
    console.log('Matérias:');
    aluno.materias.forEach((materia) => {
        console.log('\n');
        console.log(`  - Nome da Matéria: ${materia.nomeDaMateria}`);
        console.log(`    Notas: ${materia.notas.join(', ')}`);
        console.log(`    Media: ${materia.media}`);
        console.log(`    Faltas: ${materia.faltas}`);
        console.log(`    Status de Aprovação: ${materia.statusDeAprovacao}`);
    });

}