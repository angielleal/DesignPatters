import { Criatura } from "../creatures/Criatura";

export class Tritao implements Criatura {
    attack(): void {
        console.log("O Tritão golpeia com sua lança aquática!");
    }
}
