class Retangulo {
    constructor(private largura: number, private altura: number) {}

    calcularArea(): number {
        return this.largura * this.altura;
    }

    exibirArea(): void {
        const area = this.calcularArea();
        console.log(`A área do retângulo é: ${area}`);
    }
}

export default Retangulo;