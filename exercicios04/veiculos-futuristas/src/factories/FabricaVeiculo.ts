import { Veiculo } from "../vehicles/Veiculo";

export interface FabricaVeiculo {
    criarVeiculoRapido(): Veiculo;
    criarVeiculoExplorador(): Veiculo;
}
