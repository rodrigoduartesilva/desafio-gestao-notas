import { alunos } from "../javascript/cadastrarAluno.js";

export function imprimirListaDeAlunos() {
    return alunos.forEach((item, index) => {
        console.log(`Aluno ${index + 1}:`);
        console.log(`Nome: ${item.nome}`);
        console.log('Matérias:');
        item.materias.forEach((materia) => {
            console.log(`  - Nome da Matéria: ${materia.nomeDaMateria}`);
            console.log(`    Notas: ${materia.notas.join(', ')}`);
            console.log(`    Media: ${materia.media}`);
            console.log(`    Faltas: ${materia.faltas}`);
            console.log(`    Status de Aprovação: ${materia.statusDeAprovacao}`);
        });
    });
}