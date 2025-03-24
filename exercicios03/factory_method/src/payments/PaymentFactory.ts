import { Payment } from "./Payment";
import { CreditCardPayment } from "./CreditCardPayment";
import { PayPalPayment } from "./PayPalPayment";
import { BoletoPayment } from "./BoletoPayment";

export class PaymentFactory {
    static createPayment(type: string): Payment {
        if (type === "credit_card") {
            return new CreditCardPayment();
        } else if (type === "paypal") {
            return new PayPalPayment();
        } else if (type === "boleto") {
            return new BoletoPayment();
        } else {
            throw new Error("Método de pagamento inválido");
        }
    }
}
