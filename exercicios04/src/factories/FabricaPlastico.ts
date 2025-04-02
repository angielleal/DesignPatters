import { FabricaBrinquedo } from "./FabricaBrinquedo";
import { CarrinhoPlastico } from "../products/CarrinhoPlastico";
import { BonecaPlastico } from "../products/BonecaPlastico";
import { Brinquedo } from "../products/Brinquedo";

export class FabricaPlastico implements FabricaBrinquedo {
    criarCarrinho(): Brinquedo {
        return new CarrinhoPlastico();
    }
    criarBoneca(): Brinquedo {
        return new BonecaPlastico();
    }
}