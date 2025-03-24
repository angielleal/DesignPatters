import { Notification } from "./Notification";

export class EmailNotification extends Notification {
    send(message: string): void {
        console.log(`Enviando e-mail: ${message}`);
    }
}
