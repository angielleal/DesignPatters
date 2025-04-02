import { FabricaVeiculo } from "./FabricaVeiculo";
import { Nave } from "../vehicles/Nave";
import { ExploradorRobotico } from "../vehicles/ExploradorRobotico";
import { Veiculo } from "../vehicles/Veiculo";

export class FabricaEspaco implements FabricaVeiculo {
    criarVeiculoRapido(): Veiculo {
        return new Nave();
    }

    criarVeiculoExplorador(): Veiculo {
        return new ExploradorRobotico();
    }
}
