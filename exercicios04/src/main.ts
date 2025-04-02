import { FabricaBrinquedo } from "./factories/FabricaBrinquedo";
import { FabricaPlastico } from "./factories/FabricaPlastico";
import { FabricaMadeira } from "./factories/FabricaMadeira";

const fabricaPlastico: FabricaBrinquedo = new FabricaPlastico();
const fabricaMadeira: FabricaBrinquedo = new FabricaMadeira();

const carrinhoPlastico = fabricaPlastico.criarCarrinho();
const bonecaPlastico = fabricaPlastico.criarBoneca();
const carrinhoMadeira = fabricaMadeira.criarCarrinho();
const bonecaMadeira = fabricaMadeira.criarBoneca();

carrinhoPlastico.play();
bonecaPlastico.play();
carrinhoMadeira.play();
bonecaMadeira.play();