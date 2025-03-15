// src/exercicio06/index.ts
export class Produto {
    constructor(
        public nome: string,
        public preco: number,
        public quantidadeEmEstoque: number
    ) {}

    atualizarPreco(novoPreco: number): void {
        this.preco = novoPreco;
        console.log(`Preço do produto "${this.nome}" atualizado para R$${this.preco}.`);
    }

    adicionarEstoque(quantidade: number): void {
        this.quantidadeEmEstoque += quantidade;
        console.log(`${quantidade} unidades adicionadas ao estoque do produto "${this.nome}".`);
    }

    removerEstoque(quantidade: number): void {
        if (this.quantidadeEmEstoque >= quantidade) {
            this.quantidadeEmEstoque -= quantidade;
            console.log(`${quantidade} unidades removidas do estoque do produto "${this.nome}".`);
        } else {
            console.log("Estoque insuficiente.");
        }
    }

    exibirDetalhes(): void {
        console.log(`Produto: ${this.nome} | Preço: R$${this.preco} | Quantidade em Estoque: ${this.quantidadeEmEstoque}`);
    }
}

export class CadastroProdutos {
    private produtos: Produto[] = [];

    adicionarProduto(produto: Produto): void {
        this.produtos.push(produto);
        console.log(`Produto "${produto.nome}" cadastrado.`);
    }

    atualizarPreco(nome: string, novoPreco: number): void {
        const produto = this.produtos.find(p => p.nome === nome);
        if (produto) {
            produto.atualizarPreco(novoPreco);
        } else {
            console.log("Produto não encontrado.");
        }
    }

    exibirRelatorio(): void {
        console.log("Relatório de Produtos:");
        this.produtos.forEach(produto => produto.exibirDetalhes());
    }
}