import { Efetivo } from "./exercicio_01/Efetivo";
import { Terceirizado } from "./exercicio_01/Terceirizado";
import { Onibus } from "./exercicio_02/Onibus";
import { Taxi } from "./exercicio_02/Taxi";
import { ContaCorrente } from "./exercicio_03/ContaCorrente";
import { ContaPoupanca } from "./exercicio_03/ContaPoupanca";
import { PedidoPresencial } from "./exercicio_04/PedidoPresencial";
import { PedidoDelivery } from "./exercicio_04/PedidoDelivery";
import { Artigo } from "./exercicio_05/Artigo";
import { Video } from "./exercicio_05/Video";

console.log("===== EXERCÍCIO 01: FUNCIONÁRIOS =====");
const efetivo = new Efetivo("Carlos", 3000, "Engenheiro", 500);
const terceirizado = new Terceirizado("Ana", 2500, "Designer", 300);
console.log(`Funcionário Efetivo: ${efetivo.nome} - Vencimentos: R$ ${efetivo.calcularVencimentos()}`);
console.log(`Funcionário Terceirizado: ${terceirizado.nome} - Vencimentos: R$ ${terceirizado.calcularVencimentos()}`);
console.log("----------------------------------------");

console.log("===== EXERCÍCIO 02: VEÍCULOS =====");
const onibus = new Onibus("Mercedes", 40, 2);
const taxi = new Taxi("Fiat", 4, 5);
console.log(`Ônibus (${onibus.modelo}) - Consumo em 100km: ${onibus.calcularConsumo(100)} litros`);
console.log(`Táxi (${taxi.modelo}) - Custo em 10km: R$ ${taxi.calcularConsumo(10)}`);
console.log("----------------------------------------");

console.log("===== EXERCÍCIO 03: CONTAS BANCÁRIAS =====");
const cc = new ContaCorrente("001", 1000, 500);
const cp = new ContaPoupanca("002", 1500, 0.02);
cc.sacar(1200);
cp.aplicarJuros();
console.log(`Conta Corrente (001) - Saldo após saque: R$ ${cc.saldo}`);
console.log(`Conta Poupança (002) - Saldo após juros: R$ ${cp.saldo}`);
console.log("----------------------------------------");

console.log("===== EXERCÍCIO 04: PEDIDOS =====");
const pedido1 = new PedidoPresencial(1, [{ nome: "Pizza", preco: 30 }]);
const pedido2 = new PedidoDelivery(2, [{ nome: "Hambúrguer", preco: 20 }], 5);
console.log(`Pedido Presencial (1) - Total: R$ ${pedido1.calcularTotal()}`);
console.log(`Pedido Delivery (2) - Total (com taxa): R$ ${pedido2.calcularTotal()}`);
console.log("----------------------------------------");

console.log("===== EXERCÍCIO 05: PUBLICAÇÕES =====");
const artigo = new Artigo("Design Patterns", "João");
const video = new Video("SOLID Principles", "Maria");
console.log(`Artigo: ${artigo.obterDescricao()}`);
console.log(`Vídeo: ${video.obterDescricao()}`);
console.log("========================================");
