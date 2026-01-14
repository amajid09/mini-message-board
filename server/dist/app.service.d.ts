import { MessagesType } from './app/app.interface';
export declare class AppService {
    private readonly messages;
    getAllMessages(): MessagesType[];
    createMessage(message: Omit<MessagesType, 'added'>): string;
    isUserExist(user: string): boolean;
}
