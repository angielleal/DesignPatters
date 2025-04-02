import { Brinquedo } from "./Brinquedo";

export class BonecaMadeira implements Brinquedo {
    play(): void {
        console.log("Brincando com uma boneca de madeira!");
    }
}