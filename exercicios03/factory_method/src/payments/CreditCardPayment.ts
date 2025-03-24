import { Payment } from "./Payment";

export class CreditCardPayment implements Payment {
    processPayment(amount: number): void {
        console.log(`Pagamento de R$ ${amount} processado via Cartão de Crédito.`);
    }
}
