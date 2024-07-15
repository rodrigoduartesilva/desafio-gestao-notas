import PromptSync from 'prompt-sync';
const prompt = PromptSync();

// Função para cadastrar as notas
export function cadastrarNotas(materias) {
    const listaNotas = new Array();
    let nota;
    let qtdNotas = 0;
    let media = 0;

    // O loop será executado enquanto a quantidade de notas cadastradas for 3
    while (qtdNotas < 3) {


        try {

            nota = +prompt(`Informe a ${qtdNotas + 1}ª nota: `);

            // Verifica se o valor é numérico, se sim, é executado o else, caso contrario, é exibido uma mensagem informativa
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

    // Insere as notas informadas dentro da chave 'notas' no objeto materias
    materias['notas'] = listaNotas;

    // Soma as notas com o intuito de calcular a media posteriormente
    media = listaNotas.reduce((acumulador, valor) => {
        return acumulador += valor;
    });

    // Insere a media dentro do objeto contendo apenas duas casas decimais
    materias['media'] = (media / 3).toFixed(2);
    qtdNotas = 0;

    return media / 3;
}