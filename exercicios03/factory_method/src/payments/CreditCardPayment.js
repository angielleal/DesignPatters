"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCardPayment = void 0;
class CreditCardPayment {
    processPayment(amount) {
        console.log(`Pagamento de R$ ${amount} processado via Cartão de Crédito.`);
    }
}
exports.CreditCardPayment = CreditCardPayment;
