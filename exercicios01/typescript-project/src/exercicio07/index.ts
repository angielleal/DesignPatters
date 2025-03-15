interface Notificacao {
    enviar(mensagem: string): void;
}

class EmailNotificacao implements Notificacao {
    enviar(mensagem: string): void {
        console.log(`Enviando e-mail: ${mensagem}`);
    }
}

class SmsNotificacao implements Notificacao {
    enviar(mensagem: string): void {
        console.log(`Enviando SMS: ${mensagem}`);
    }
}

class PushNotificacao implements Notificacao {
    enviar(mensagem: string): void {
        console.log(`Enviando push notification: ${mensagem}`);
    }
}

class Usuario {
    constructor(private nome: string) {}

    receberNotificacao(notificacao: Notificacao, mensagem: string): void {
        console.log(`Usuário ${this.nome} recebeu uma notificação:`);
        notificacao.enviar(mensagem);
    }
}

export { EmailNotificacao, SmsNotificacao, PushNotificacao, Usuario };