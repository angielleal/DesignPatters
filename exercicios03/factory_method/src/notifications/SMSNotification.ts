import { Notification } from "./Notification";

export class SMSNotification extends Notification {
    send(message: string): void {
        console.log(`Enviando SMS: ${message}`);
    }
}
