"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importações dos exercícios
const index_1 = __importDefault(require("./exercicio01/index"));
const index_2 = __importDefault(require("./exercicio02/index"));
const index_3 = __importDefault(require("./exercicio03/index"));
const index_4 = __importDefault(require("./exercicio04/index"));
const index_5 = require("./exercicio05/index");
const index_6 = require("./exercicio06/index");
const index_7 = require("./exercicio07/index");
const index_8 = require("./exercicio08/index");
const index_9 = require("./exercicio09/index");
// Exercício 01: Área do Retângulo
console.log("=== Exercício 01 ===");
const retangulo = new index_1.default(10, 5);
retangulo.exibirArea(); // Saída: A área do retângulo é: 50
// Exercício 02: Lista de Tarefas
console.log("\n=== Exercício 02 ===");
const gerenciador = new index_2.default();
gerenciador.adicionarTarefa("Estudar TypeScript");
gerenciador.adicionarTarefa("Fazer exercícios de POO");
gerenciador.listarTarefas();
gerenciador.removerTarefa(0);
gerenciador.listarTarefas();
// Exercício 03: Sistema Bancário
console.log("\n=== Exercício 03 ===");
const conta = new index_3.default(123, 1000);
conta.depositar(500);
conta.sacar(200);
conta.consultarSaldo();
// Exercício 04: Gerenciamento de Tarefas Pessoais
console.log("\n=== Exercício 04 ===");
const gerenciadorTarefas = new index_4.default();
gerenciadorTarefas.adicionarTarefa("Estudar TypeScript");
gerenciadorTarefas.adicionarTarefa("Fazer exercícios de POO");
gerenciadorTarefas.exibirTarefas();
gerenciadorTarefas.marcarTarefaComoConcluida(0);
gerenciadorTarefas.exibirTarefas();
// Exercício 05: Calculadora de Formas Geométricas
console.log("\n=== Exercício 05 ===");
const retanguloEx05 = new index_5.Retangulo(10, 5);
retanguloEx05.exibirDetalhes();
const circulo = new index_5.Circulo(7);
circulo.exibirDetalhes();
// Exercício 06: Sistema de Cadastro de Produtos
console.log("\n=== Exercício 06 ===");
const cadastro = new index_6.CadastroProdutos();
const produto1 = new index_6.Produto("Notebook", 3000, 10);
const produto2 = new index_6.Produto("Smartphone", 1500, 20);
cadastro.adicionarProduto(produto1);
cadastro.adicionarProduto(produto2);
cadastro.exibirRelatorio();
cadastro.atualizarPreco("Notebook", 2800);
cadastro.exibirRelatorio();
// Exercício 07: Sistema de Notificações
console.log("\n=== Exercício 07 ===");
const usuario = new index_7.Usuario("João");
usuario.receberNotificacao(new index_7.EmailNotificacao(), "Você tem uma nova mensagem.");
usuario.receberNotificacao(new index_7.SmsNotificacao(), "Lembrete: Reunião às 15h.");
usuario.receberNotificacao(new index_7.PushNotificacao(), "Atualização disponível.");
// Exercício 08: Sistema de Pagamentos
console.log("\n=== Exercício 08 ===");
const compra = new index_8.Compra(100);
compra.realizarPagamento(new index_8.CartaoCredito());
compra.realizarPagamento(new index_8.PayPal());
compra.realizarPagamento(new index_8.Boleto());
// Exercício 09: Sistema de Relatórios
console.log("\n=== Exercício 09 ===");
const gerente = new index_9.Gerente();
const dados = ["Vendas: R$1000", "Despesas: R$500", "Lucro: R$500"];
gerente.solicitarRelatorio(new index_9.PdfRelatorio(), dados);
gerente.solicitarRelatorio(new index_9.ExcelRelatorio(), dados);
gerente.solicitarRelatorio(new index_9.HtmlRelatorio(), dados);
