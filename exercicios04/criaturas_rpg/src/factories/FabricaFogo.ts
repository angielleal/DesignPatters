import { FabricaCriatura } from "../factories/FabricaCriatura";
import { Dragao } from "../creatures/Dragao";
import { Salamandra } from "../creatures/Salamandra";
import { Criatura } from "../creatures/Criatura";

export class FabricaFogo implements FabricaCriatura {
    criarCriaturaForte(): Criatura {
        return new Dragao();
    }
    criarCriaturaVeloz(): Criatura {
        return new Salamandra();
    }
}
