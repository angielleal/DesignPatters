import { Veiculo } from "./Veiculo";

export class MotoAutonoma implements Veiculo {
    getModoPropulsao(): string {
        return "Elétrico Ultra Potente";
    }

    getSistemaControle(): string {
        return "Controle Manual e Automático";
    }

    descricao(): void {
        console.log(`Moto Autônoma - Propulsão: ${this.getModoPropulsao()}, Controle: ${this.getSistemaControle()}`);
    }
}
