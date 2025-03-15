"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conta {
    constructor(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }
    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}.`);
    }
    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}.`);
        }
        else {
            console.log("Saldo insuficiente.");
        }
    }
    consultarSaldo() {
        console.log(`Saldo da conta ${this.numero}: R$${this.saldo}.`);
    }
}
exports.default = Conta;
