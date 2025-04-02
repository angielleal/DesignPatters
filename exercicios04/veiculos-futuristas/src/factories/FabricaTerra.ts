import { FabricaVeiculo } from "./FabricaVeiculo";
import { CarroVoador } from "../vehicles/CarroVoador";
import { MotoAutonoma } from "../vehicles/MotoAutonoma";
import { Veiculo } from "../vehicles/Veiculo";

export class FabricaTerra implements FabricaVeiculo {
    criarVeiculoRapido(): Veiculo {
        return new CarroVoador();
    }

    criarVeiculoExplorador(): Veiculo {
        return new MotoAutonoma();
    }
}
