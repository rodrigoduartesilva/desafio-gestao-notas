import { aluno } from "../javascript/cadastrarAluno.js";

// Função chamada para impressao do aluno cadastrado em formato Json
export function imprimirListaEmJson() {
    console.log(JSON.stringify(aluno, null, 2));
}