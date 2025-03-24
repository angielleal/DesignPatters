"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentFactory = void 0;
const CreditCardPayment_1 = require("./CreditCardPayment");
const PayPalPayment_1 = require("./PayPalPayment");
const BoletoPayment_1 = require("./BoletoPayment");
class PaymentFactory {
    static createPayment(type) {
        if (type === "credit_card") {
            return new CreditCardPayment_1.CreditCardPayment();
        }
        else if (type === "paypal") {
            return new PayPalPayment_1.PayPalPayment();
        }
        else if (type === "boleto") {
            return new BoletoPayment_1.BoletoPayment();
        }
        else {
            throw new Error("Método de pagamento inválido");
        }
    }
}
exports.PaymentFactory = PaymentFactory;
