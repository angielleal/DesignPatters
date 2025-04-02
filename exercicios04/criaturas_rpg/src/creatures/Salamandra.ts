import { Criatura } from "../creatures/Criatura";

export class Salamandra implements Criatura {
    attack(): void {
        console.log("A Salamandra ataca com uma chama ágil!");
    }
}
