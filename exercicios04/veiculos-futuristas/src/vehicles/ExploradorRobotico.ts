import { Veiculo } from "./Veiculo";

export class ExploradorRobotico implements Veiculo {
    getModoPropulsao(): string {
        return "Motores Eletromagnéticos";
    }

    getSistemaControle(): string {
        return "Controle Remoto e Autônomo";
    }

    descricao(): void {
        console.log(`Explorador Robótico - Propulsão: ${this.getModoPropulsao()}, Controle: ${this.getSistemaControle()}`);
    }
}
