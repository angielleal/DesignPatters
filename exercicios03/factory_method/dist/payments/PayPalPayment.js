"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayPalPayment = void 0;
class PayPalPayment {
    processPayment(amount) {
        console.log(`Pagamento de R$ ${amount} processado via PayPal.`);
    }
}
exports.PayPalPayment = PayPalPayment;
