"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CadastroProdutos = exports.Produto = void 0;
// src/exercicio06/index.ts
class Produto {
    constructor(nome, preco, quantidadeEmEstoque) {
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }
    atualizarPreco(novoPreco) {
        this.preco = novoPreco;
        console.log(`Preço do produto "${this.nome}" atualizado para R$${this.preco}.`);
    }
    adicionarEstoque(quantidade) {
        this.quantidadeEmEstoque += quantidade;
        console.log(`${quantidade} unidades adicionadas ao estoque do produto "${this.nome}".`);
    }
    removerEstoque(quantidade) {
        if (this.quantidadeEmEstoque >= quantidade) {
            this.quantidadeEmEstoque -= quantidade;
            console.log(`${quantidade} unidades removidas do estoque do produto "${this.nome}".`);
        }
        else {
            console.log("Estoque insuficiente.");
        }
    }
    exibirDetalhes() {
        console.log(`Produto: ${this.nome} | Preço: R$${this.preco} | Quantidade em Estoque: ${this.quantidadeEmEstoque}`);
    }
}
exports.Produto = Produto;
class CadastroProdutos {
    constructor() {
        this.produtos = [];
    }
    adicionarProduto(produto) {
        this.produtos.push(produto);
        console.log(`Produto "${produto.nome}" cadastrado.`);
    }
    atualizarPreco(nome, novoPreco) {
        const produto = this.produtos.find(p => p.nome === nome);
        if (produto) {
            produto.atualizarPreco(novoPreco);
        }
        else {
            console.log("Produto não encontrado.");
        }
    }
    exibirRelatorio() {
        console.log("Relatório de Produtos:");
        this.produtos.forEach(produto => produto.exibirDetalhes());
    }
}
exports.CadastroProdutos = CadastroProdutos;
