import { FabricaBrinquedo } from "./FabricaBrinquedo";
import { CarrinhoMadeira } from "../products/CarrinhoMadeira";
import { BonecaMadeira } from "../products/BonecaMadeira";
import { Brinquedo } from "../products/Brinquedo";

export class FabricaMadeira implements FabricaBrinquedo {
    criarCarrinho(): Brinquedo {
        return new CarrinhoMadeira();
    }
    criarBoneca(): Brinquedo {
        return new BonecaMadeira();
    }
}