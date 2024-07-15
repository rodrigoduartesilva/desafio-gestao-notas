import { aluno } from "../javascript/cadastrarAluno.js";

export function imprimirListaEmJson() {
    console.log(JSON.stringify(aluno));
}