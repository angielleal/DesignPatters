"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }
    calcularArea() {
        return this.largura * this.altura;
    }
    exibirArea() {
        const area = this.calcularArea();
        console.log(`A área do retângulo é: ${area}`);
    }
}
exports.default = Retangulo;
