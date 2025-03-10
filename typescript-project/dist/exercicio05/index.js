"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circulo = exports.Retangulo = void 0;
class Retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }
    calcularArea() {
        return this.largura * this.altura;
    }
    calcularPerimetro() {
        return 2 * (this.largura + this.altura);
    }
    exibirDetalhes() {
        console.log(`Retângulo: Largura = ${this.largura}, Altura = ${this.altura}, Área = ${this.calcularArea()}, Perímetro = ${this.calcularPerimetro()}`);
    }
}
exports.Retangulo = Retangulo;
class Circulo {
    constructor(raio) {
        this.raio = raio;
    }
    calcularArea() {
        return Math.PI * this.raio * this.raio;
    }
    calcularPerimetro() {
        return 2 * Math.PI * this.raio;
    }
    exibirDetalhes() {
        console.log(`Círculo: Raio = ${this.raio}, Área = ${this.calcularArea()}, Perímetro = ${this.calcularPerimetro()}`);
    }
}
exports.Circulo = Circulo;
