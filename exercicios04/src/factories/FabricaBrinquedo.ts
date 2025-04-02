import { Brinquedo } from "../products/Brinquedo";

export interface FabricaBrinquedo {
    criarCarrinho(): Brinquedo;
    criarBoneca(): Brinquedo;
}