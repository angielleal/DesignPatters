class Conta {
    constructor(public numero: number, public saldo: number) {}

    depositar(valor: number): void {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}.`);
    }

    sacar(valor: number): void {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}.`);
        } else {
            console.log("Saldo insuficiente.");
        }
    }

    consultarSaldo(): void {
        console.log(`Saldo da conta ${this.numero}: R$${this.saldo}.`);
    }
}

export default Conta;