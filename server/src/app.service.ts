import { Injectable } from '@nestjs/common';
import { MessagesType, UserDto } from './app/app.interface';
import { UserError } from './app/app.error';

@Injectable()
export class AppService {
  private readonly messages: MessagesType[] = [
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

  getAllMessages(): MessagesType[] {
    return this.messages;
  }
  createMessage(message: Omit<MessagesType, 'added'>) {
    const newMessage: MessagesType = {
      ...message,
      added: new Date()
    };
    this.messages.push(newMessage);
    return "Message created successfully";
  }
  isUserExist(user: string): boolean {
    return this.messages.some(message => message.user === user);
  }
}
