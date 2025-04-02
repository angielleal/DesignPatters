import { Brinquedo } from "./Brinquedo";

export class BonecaPlastico implements Brinquedo {
    play(): void {
        console.log("Brincando com uma boneca de plástico!");
    }
}