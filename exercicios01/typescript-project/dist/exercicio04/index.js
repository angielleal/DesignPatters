"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tarefa {
    constructor(descricao, concluida = false) {
        this.descricao = descricao;
        this.concluida = concluida;
    }
    marcarComoConcluida() {
        this.concluida = true;
        console.log(`Tarefa "${this.descricao}" marcada como concluída.`);
    }
    exibirDetalhes() {
        console.log(`Tarefa: ${this.descricao} | Status: ${this.concluida ? 'Concluída' : 'Pendente'}`);
    }
}
class GerenciadorTarefas {
    constructor() {
        this.tarefas = [];
    }
    adicionarTarefa(descricao) {
        const novaTarefa = new Tarefa(descricao);
        this.tarefas.push(novaTarefa);
        console.log(`Tarefa "${descricao}" adicionada.`);
    }
    marcarTarefaComoConcluida(index) {
        if (index >= 0 && index < this.tarefas.length) {
            this.tarefas[index].marcarComoConcluida();
        }
        else {
            console.log("Índice inválido.");
        }
    }
    exibirTarefas() {
        console.log("Lista de Tarefas:");
        this.tarefas.forEach((tarefa, index) => {
            console.log(`${index + 1}.`);
            tarefa.exibirDetalhes();
        });
    }
}
exports.default = GerenciadorTarefas;
