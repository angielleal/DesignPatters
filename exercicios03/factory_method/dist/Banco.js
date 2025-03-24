"use strict";
// src/Banco.ts
Object.defineProperty(exports, "__esModule", { value: true });
class Banco {
    gerarBoleto(vencimento, valor) {
        console.log(`Gerando boleto com vencimento de ${vencimento} dias e valor R$ ${valor}`);
    }
}
exports.default = Banco;
