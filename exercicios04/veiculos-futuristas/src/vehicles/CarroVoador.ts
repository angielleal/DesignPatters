import { Veiculo } from "./Veiculo";

export class CarroVoador implements Veiculo {
    getModoPropulsao(): string {
        return "Motor a Jato";
    }

    getSistemaControle(): string {
        return "Inteligência Artificial";
    }

    descricao(): void {
        console.log(`Carro Voador - Propulsão: ${this.getModoPropulsao()}, Controle: ${this.getSistemaControle()}`);
    }
}
