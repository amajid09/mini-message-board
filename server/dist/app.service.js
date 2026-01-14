"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const app_error_1 = require("./app/app.error");
let AppService = class AppService {
    messages = [
        {
            text: "Hi there!",
            user: "Amando",
            added: new Date()
        },
        {
            text: "Hello World!",
            user: "Charles",
            added: new Date()
        }
    ];
    getAllMessages() {
        return this.messages;
    }
    createMessage(message) {
        if (this.isUserExist(message.user)) {
            throw new app_error_1.UserError("User already exists");
        }
        const newMessage = {
            ...message,
            added: new Date()
        };
        this.messages.push(newMessage);
        return "Message created successfully";
    }
    isUserExist(user) {
        return this.messages.some(message => message.user === user);
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map