import PromptSync from 'prompt-sync';
const prompt = PromptSync();

export function cadastrarFaltas(materias) {
    let faltas;
    faltas = +prompt('Informe a quantidade de faltas do aluno para esta matéria: ');
    return materias['faltas'] = faltas;
}