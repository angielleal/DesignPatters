import { Criatura } from "../creatures/Criatura";

export class Dragao implements Criatura {
    attack(): void {
        console.log("O Dragão cospe fogo ferozmente!");
    }
}
