import { Criatura } from "../creatures/Criatura";

export class SerpenteMarinha implements Criatura {
    attack(): void {
        console.log("A Serpente Marinha lança um jato d'água poderoso!");
    }
}
