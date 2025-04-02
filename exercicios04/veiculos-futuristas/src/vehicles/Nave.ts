import { Veiculo } from "./Veiculo";

export class Nave implements Veiculo {
    getModoPropulsao(): string {
        return "Propulsão a Plasma";
    }

    getSistemaControle(): string {
        return "Inteligência Artificial Avançada";
    }

    descricao(): void {
        console.log(`Nave Espacial - Propulsão: ${this.getModoPropulsao()}, Controle: ${this.getSistemaControle()}`);
    }
}
