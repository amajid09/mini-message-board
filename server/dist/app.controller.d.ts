import { AppService } from './app.service';
import { type MessageDto } from './app/app.interface';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getAll(): MessageDto[];
    createMessage(messageDto: MessageDto): string;
}
