"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoletoPayment = void 0;
class BoletoPayment {
    processPayment(amount) {
        console.log(`Pagamento de R$ ${amount} processado via Boleto Bancário.`);
    }
}
exports.BoletoPayment = BoletoPayment;
