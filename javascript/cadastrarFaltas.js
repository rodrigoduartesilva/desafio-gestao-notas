import PromptSync from 'prompt-sync';
const prompt = PromptSync();

export function cadastrarFaltas(materias) {
    let faltas;

    while (true) {
        try {

            faltas = +prompt('Informe a quantidade de faltas do aluno para esta matéria: ');

            if (isNaN(faltas)) {

                throw new Error('A entrada não é um número válido.');

            }

            break;

        } catch (error) {

            console.error(error.message);

        }
    }

    return materias['faltas'] = faltas;
}