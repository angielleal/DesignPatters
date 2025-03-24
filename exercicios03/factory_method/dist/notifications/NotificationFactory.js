"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationFactory = void 0;
const EmailNotification_1 = require("./EmailNotification");
const SMSNotification_1 = require("./SMSNotification");
class NotificationFactory {
    static createNotification(type) {
        if (type === "email") {
            return new EmailNotification_1.EmailNotification();
        }
        else if (type === "sms") {
            return new SMSNotification_1.SMSNotification();
        }
        else {
            throw new Error("Tipo de notificação inválido");
        }
    }
}
exports.NotificationFactory = NotificationFactory;
