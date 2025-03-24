"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Banco_1 = __importDefault(require("./Banco"));
const banco = new Banco_1.default();
banco.gerarBoleto(10, 100);
banco.gerarBoleto(30, 100);
banco.gerarBoleto(60, 100);
