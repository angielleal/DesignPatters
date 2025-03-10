"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = exports.PushNotificacao = exports.SmsNotificacao = exports.EmailNotificacao = void 0;
class EmailNotificacao {
    enviar(mensagem) {
        console.log(`Enviando e-mail: ${mensagem}`);
    }
}
exports.EmailNotificacao = EmailNotificacao;
class SmsNotificacao {
    enviar(mensagem) {
        console.log(`Enviando SMS: ${mensagem}`);
    }
}
exports.SmsNotificacao = SmsNotificacao;
class PushNotificacao {
    enviar(mensagem) {
        console.log(`Enviando push notification: ${mensagem}`);
    }
}
exports.PushNotificacao = PushNotificacao;
class Usuario {
    constructor(nome) {
        this.nome = nome;
    }
    receberNotificacao(notificacao, mensagem) {
        console.log(`Usuário ${this.nome} recebeu uma notificação:`);
        notificacao.enviar(mensagem);
    }
}
exports.Usuario = Usuario;
