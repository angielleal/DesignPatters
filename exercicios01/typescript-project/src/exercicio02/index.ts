class GerenciadorTarefas {
    private tarefas: string[] = [];

    adicionarTarefa(tarefa: string): void {
        this.tarefas.push(tarefa);
        console.log(`Tarefa "${tarefa}" adicionada.`);
    }

    listarTarefas(): void {
        console.log("Lista de Tarefas:");
        this.tarefas.forEach((tarefa, index) => {
            console.log(`${index + 1}. ${tarefa}`);
        });
    }

    removerTarefa(index: number): void {
        if (index >= 0 && index < this.tarefas.length) {
            const tarefaRemovida = this.tarefas.splice(index, 1)[0];
            console.log(`Tarefa "${tarefaRemovida}" removida.`);
        } else {
            console.log("Índice inválido.");
        }
    }
}

export default GerenciadorTarefas;