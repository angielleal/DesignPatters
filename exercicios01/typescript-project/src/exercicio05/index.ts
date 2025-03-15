class Retangulo {
    constructor(private largura: number, private altura: number) {}

    calcularArea(): number {
        return this.largura * this.altura;
    }

    calcularPerimetro(): number {
        return 2 * (this.largura + this.altura);
    }

    exibirDetalhes(): void {
        console.log(`Retângulo: Largura = ${this.largura}, Altura = ${this.altura}, Área = ${this.calcularArea()}, Perímetro = ${this.calcularPerimetro()}`);
    }
}

class Circulo {
    constructor(private raio: number) {}

    calcularArea(): number {
        return Math.PI * this.raio * this.raio;
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.raio;
    }

    exibirDetalhes(): void {
        console.log(`Círculo: Raio = ${this.raio}, Área = ${this.calcularArea()}, Perímetro = ${this.calcularPerimetro()}`);
    }
}

export { Retangulo, Circulo };