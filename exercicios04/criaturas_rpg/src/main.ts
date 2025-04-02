import { FabricaCriatura } from "./factories/FabricaCriatura";
import { FabricaFogo } from "./factories/FabricaFogo";
import { FabricaAgua } from "./factories/FabricaAgua";

const fabricaFogo: FabricaCriatura = new FabricaFogo();
const fabricaAgua: FabricaCriatura = new FabricaAgua();

const dragao = fabricaFogo.criarCriaturaForte();
const salamandra = fabricaFogo.criarCriaturaVeloz();
const serpenteMarinha = fabricaAgua.criarCriaturaForte();
const tritao = fabricaAgua.criarCriaturaVeloz();

dragao.attack();
salamandra.attack();
serpenteMarinha.attack();
tritao.attack();
