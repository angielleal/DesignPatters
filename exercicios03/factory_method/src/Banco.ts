// src/Banco.ts

export default class Banco {
    gerarBoleto(vencimento: number, valor: number): void {
        console.log(`Gerando boleto com vencimento de ${vencimento} dias e valor R$ ${valor}`);
    }
}
