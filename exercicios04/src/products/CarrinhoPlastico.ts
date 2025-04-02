import { Brinquedo } from "./Brinquedo";

export class CarrinhoPlastico implements Brinquedo {
    play(): void {
        console.log("Brincando com um carrinho de plástico!");
    }
}