import { Brinquedo } from "./Brinquedo";

export class CarrinhoMadeira implements Brinquedo {
    play(): void {
        console.log("Brincando com um carrinho de madeira!");
    }
}