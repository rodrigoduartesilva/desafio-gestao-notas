import PromptSync from 'prompt-sync';
const prompt = PromptSync();

export function cadastrarNotas(materias) {
    const listaNotas = new Array();
    let nota;
    let qtdNotas = 0;
    let media = 0;

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

    return media / 3;
}