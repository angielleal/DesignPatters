"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compra = exports.Boleto = exports.PayPal = exports.CartaoCredito = void 0;
class CartaoCredito {
    pagar(valor) {
        console.log(`Pagamento de R$${valor} realizado com cartão de crédito.`);
    }
}
exports.CartaoCredito = CartaoCredito;
class PayPal {
    pagar(valor) {
        console.log(`Pagamento de R$${valor} realizado via PayPal.`);
    }
}
exports.PayPal = PayPal;
class Boleto {
    pagar(valor) {
        console.log(`Pagamento de R$${valor} realizado com boleto.`);
    }
}
exports.Boleto = Boleto;
class Compra {
    constructor(valor) {
        this.valor = valor;
    }
    realizarPagamento(metodo) {
        metodo.pagar(this.valor);
    }
}
exports.Compra = Compra;
