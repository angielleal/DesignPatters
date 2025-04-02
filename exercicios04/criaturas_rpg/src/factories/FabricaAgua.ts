import { FabricaCriatura } from "../factories/FabricaCriatura";
import { SerpenteMarinha } from "../creatures/SerpenteMarinha";
import { Tritao } from "../creatures/Tritao";
import { Criatura } from "../creatures/Criatura";

export class FabricaAgua implements FabricaCriatura {
    criarCriaturaForte(): Criatura {
        return new SerpenteMarinha();
    }
    criarCriaturaVeloz(): Criatura {
        return new Tritao();
    }
}
