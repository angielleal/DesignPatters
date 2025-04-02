import { FabricaVeiculo } from "./factories/FabricaVeiculo";
import { FabricaTerra } from "./factories/FabricaTerra";
import { FabricaEspaco } from "./factories/FabricaEspaco";

const fabricaTerra: FabricaVeiculo = new FabricaTerra();
const fabricaEspaco: FabricaVeiculo = new FabricaEspaco();

const carroVoador = fabricaTerra.criarVeiculoRapido();
const motoAutonoma = fabricaTerra.criarVeiculoExplorador();
const nave = fabricaEspaco.criarVeiculoRapido();
const exploradorRobotico = fabricaEspaco.criarVeiculoExplorador();

carroVoador.descricao();
motoAutonoma.descricao();
nave.descricao();
exploradorRobotico.descricao();
