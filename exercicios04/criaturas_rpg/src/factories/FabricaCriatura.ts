import { Criatura } from "../creatures/Criatura";

export interface FabricaCriatura {
    criarCriaturaForte(): Criatura;
    criarCriaturaVeloz(): Criatura;
}
