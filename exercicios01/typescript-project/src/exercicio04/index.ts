class Tarefa {
    constructor(public descricao: string, public concluida: boolean = false) {}

    marcarComoConcluida(): void {
        this.concluida = true;
        console.log(`Tarefa "${this.descricao}" marcada como concluída.`);
    }

    exibirDetalhes(): void {
        console.log(`Tarefa: ${this.descricao} | Status: ${this.concluida ? 'Concluída' : 'Pendente'}`);
    }
}

class GerenciadorTarefas {
    private tarefas: Tarefa[] = [];

    adicionarTarefa(descricao: string): void {
        const novaTarefa = new Tarefa(descricao);
        this.tarefas.push(novaTarefa);
        console.log(`Tarefa "${descricao}" adicionada.`);
    }

    marcarTarefaComoConcluida(index: number): void {
        if (index >= 0 && index < this.tarefas.length) {
            this.tarefas[index].marcarComoConcluida();
        } else {
            console.log("Índice inválido.");
        }
    }

    exibirTarefas(): void {
        console.log("Lista de Tarefas:");
        this.tarefas.forEach((tarefa, index) => {
            console.log(`${index + 1}.`);
            tarefa.exibirDetalhes();
        });
    }
}

export default GerenciadorTarefas;