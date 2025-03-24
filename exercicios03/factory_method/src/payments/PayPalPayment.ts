import { Payment } from "./Payment";

export class PayPalPayment implements Payment {
    processPayment(amount: number): void {
        console.log(`Pagamento de R$ ${amount} processado via PayPal.`);
    }
}
