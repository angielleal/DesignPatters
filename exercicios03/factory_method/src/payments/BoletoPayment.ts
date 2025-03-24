import { Payment } from "./Payment";

export class BoletoPayment implements Payment {
    processPayment(amount: number): void {
        console.log(`Pagamento de R$ ${amount} processado via Boleto Bancário.`);
    }
}
