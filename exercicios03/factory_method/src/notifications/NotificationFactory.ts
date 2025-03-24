import { Notification } from "./Notification";
import { EmailNotification } from "./EmailNotification";
import { SMSNotification } from "./SMSNotification";

export class NotificationFactory {
    static createNotification(type: string): Notification {
        if (type === "email") {
            return new EmailNotification();
        } else if (type === "sms") {
            return new SMSNotification();
        } else {
            throw new Error("Tipo de notificação inválido");
        }
    }
}
