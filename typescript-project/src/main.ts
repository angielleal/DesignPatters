// Importações dos exercícios
import Retangulo from './exercicio01/index';
import GerenciadorTarefas from './exercicio02/index';
import Conta from './exercicio03/index';
import GerenciadorTarefasPessoais from './exercicio04/index';
import { Retangulo as RetanguloEx05, Circulo } from './exercicio05/index';
import { Produto, CadastroProdutos } from './exercicio06/index';
import { EmailNotificacao, SmsNotificacao, PushNotificacao, Usuario } from './exercicio07/index';
import { CartaoCredito, PayPal, Boleto, Compra } from './exercicio08/index';
import { PdfRelatorio, ExcelRelatorio, HtmlRelatorio, Gerente } from './exercicio09/index';

// Exercício 01: Área do Retângulo
console.log("=== Exercício 01 ===");
const retangulo = new Retangulo(10, 5);
retangulo.exibirArea(); // Saída: A área do retângulo é: 50

// Exercício 02: Lista de Tarefas
console.log("\n=== Exercício 02 ===");
const gerenciador = new GerenciadorTarefas();
gerenciador.adicionarTarefa("Estudar TypeScript");
gerenciador.adicionarTarefa("Fazer exercícios de POO");
gerenciador.listarTarefas();
gerenciador.removerTarefa(0);
gerenciador.listarTarefas();

// Exercício 03: Sistema Bancário
console.log("\n=== Exercício 03 ===");
const conta = new Conta(123, 1000);
conta.depositar(500);
conta.sacar(200);
conta.consultarSaldo();

// Exercício 04: Gerenciamento de Tarefas Pessoais
console.log("\n=== Exercício 04 ===");
const gerenciadorTarefas = new GerenciadorTarefasPessoais();
gerenciadorTarefas.adicionarTarefa("Estudar TypeScript");
gerenciadorTarefas.adicionarTarefa("Fazer exercícios de POO");
gerenciadorTarefas.exibirTarefas();
gerenciadorTarefas.marcarTarefaComoConcluida(0);
gerenciadorTarefas.exibirTarefas();

// Exercício 05: Calculadora de Formas Geométricas
console.log("\n=== Exercício 05 ===");
const retanguloEx05 = new RetanguloEx05(10, 5);
retanguloEx05.exibirDetalhes();

const circulo = new Circulo(7);
circulo.exibirDetalhes();

// Exercício 06: Sistema de Cadastro de Produtos
console.log("\n=== Exercício 06 ===");
const cadastro = new CadastroProdutos();
const produto1 = new Produto("Notebook", 3000, 10);
const produto2 = new Produto("Smartphone", 1500, 20);

cadastro.adicionarProduto(produto1);
cadastro.adicionarProduto(produto2);
cadastro.exibirRelatorio();
cadastro.atualizarPreco("Notebook", 2800);
cadastro.exibirRelatorio();

// Exercício 07: Sistema de Notificações
console.log("\n=== Exercício 07 ===");
const usuario = new Usuario("João");
usuario.receberNotificacao(new EmailNotificacao(), "Você tem uma nova mensagem.");
usuario.receberNotificacao(new SmsNotificacao(), "Lembrete: Reunião às 15h.");
usuario.receberNotificacao(new PushNotificacao(), "Atualização disponível.");

// Exercício 08: Sistema de Pagamentos
console.log("\n=== Exercício 08 ===");
const compra = new Compra(100);
compra.realizarPagamento(new CartaoCredito());
compra.realizarPagamento(new PayPal());
compra.realizarPagamento(new Boleto());

// Exercício 09: Sistema de Relatórios
console.log("\n=== Exercício 09 ===");
const gerente = new Gerente();
const dados = ["Vendas: R$1000", "Despesas: R$500", "Lucro: R$500"];

gerente.solicitarRelatorio(new PdfRelatorio(), dados);
gerente.solicitarRelatorio(new ExcelRelatorio(), dados);
gerente.solicitarRelatorio(new HtmlRelatorio(), dados);