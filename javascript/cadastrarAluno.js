// Import das funções que serão usadas dentro do arquivo
import { cadastrarMaterias, qtdMaterias } from './cadastrarMaterias.js';
import { selecionarModoDeImpressao } from '../javascript/selecionarModoDeImpressao.js';

// Import do PromptSync para input via teclado de valores
import PromptSync from 'prompt-sync';
const prompt = PromptSync();

// Declaracação de um objeto aluno onde os valores serão posteriormente armazenados, calculados e exibidos
const aluno = new Object();
const alunos = [];

// Função de cadastro dos alunos
export function cadastrarAluno() {
    let validaQtdMaterias = true;
    let opcao;
    let nomeAluno;

    while (true) {

        // Validação das entradas de valores, impedindo o input de caracteres numericos
        try {
            nomeAluno = prompt('Digite o nome do aluno: ');

            // Verifica se o valor é numérico -> Caso seja um número, a aplicação irá direto para o catch, exibindo uma mensagem informando o erro
            if (!isNaN(nomeAluno)) {

                throw new Error('Valor numérico não é permitido. Por favor, digite um nome válido.');

            }

            // Atribuindo o valor 'nomeAluno' ao objeto aluno na chave nome
            aluno['nome'] = nomeAluno;

            break;

        } catch (error) {
            // Captura e exibe o erro
            console.error(error.message);
        }

    }

    // Input de seleção de cadastro de materias
    opcao = prompt('Deseja cadastrar uma matéria para o aluno informado? 1 - Sim | 2 - Não: ');

    while (validaQtdMaterias) {

        switch (opcao) {
            // Caso 1 seja selecionado, a função de cadastrar materias será chamada
            case '1':

                cadastrarMaterias();
                console.log('\n');
                opcao = prompt('Deseja cadastrar outra matéria? 1 - Sim | 2 - Não: ');
                break;

            // Caso 2 seja selecionado, algumas verificações serão realizadas
            case '2':

                // Se a quantidade de materias cadastradas até o momento, for menor 3, uma mensagem informativa será exibida, senão, a solicitação de cadastro de materias será finalizada e será chamada a função de impressao dos dados do aluno
                if (qtdMaterias < 3) {

                    console.log('Você deve cadastrar no mínimo 3 matérias!');

                    cadastrarMaterias();
                    console.log('\n');
                    opcao = prompt('Deseja cadastrar outra matéria? 1 - Sim | 2 - Não: ');
                    break;

                } else {

                    validaQtdMaterias = false;
                    selecionarModoDeImpressao();
                    break;

                }

            // Qualquer valor diferente dos dois primeiros, cairá no default, informando ao usuário que a opção digitada é incopativel com o que foi solicitado, e pedindo novamente que o valor correto seja inserido
            default:

                console.log('Opção inválida! Digite 1 para cadastrar nova matéria ou 2 para finalizar!');
                opcao = prompt('Deseja cadastrar outra matéria? 1 - Sim | 2 - Não: ');
                break;

        }
    }

    // Ao final, o objeto aluno será inserido em uma lista(vetor) de alunos
    return alunos.push(aluno);
}

// export dos valores para uso em outras funções dentro da aplicação
export { alunos, aluno };