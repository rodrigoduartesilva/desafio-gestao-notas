import PromptSync from 'prompt-sync';
const prompt = PromptSync();

export function cadastrarNotas(materias) {
    const listaNotas = new Array();
    let nota;
    let qtdNotas = 0;
    let media = 0;

    while (qtdNotas < 3) {


        try {

            nota = +prompt(`Informe a ${qtdNotas + 1}ª nota: `);

            // Verifica se o valor é numérico
            if (isNaN(nota)) {

                throw new Error('Valor em texto não é permitido. Por favor, digite um número válido.');

            } else {

                listaNotas.push(nota);
                qtdNotas++;

            }

        } catch (error) {
            // Captura e exibe o erro
            console.error(error.message);
        }

    }

    materias['notas'] = listaNotas;

    media = listaNotas.reduce((acumulador, valor) => {
        return acumulador += valor;
    });

    materias['media'] = (media / 3).toFixed(2);
    qtdNotas = 0;

    return media / 3;
}