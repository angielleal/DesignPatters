"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailNotification = void 0;
const Notification_1 = require("./Notification");
class EmailNotification extends Notification_1.Notification {
    send(message) {
        console.log(`Enviando e-mail: ${message}`);
    }
}
exports.EmailNotification = EmailNotification;
