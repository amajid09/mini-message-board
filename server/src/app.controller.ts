import { Body, Controller, Get, Post, UseFilters, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { createMessageSchema, type MessageDto } from './app/app.interface';
import { CreateMessagesPipe } from './app.validation';
import { ResponseInterceptor } from './response.interceptor';
import { AppFilter } from './app/app.filter';

@Controller('messages')
@UseInterceptors(new ResponseInterceptor())
@UseFilters(new AppFilter())
export class AppController {
  constructor(private readonly appService: AppService) { }
  @Get('/')
  getAll(): MessageDto[] {
    return this.appService.getAllMessages();
  }
  @Post('/new')
  createMessage(@Body(new CreateMessagesPipe(createMessageSchema)) messageDto: MessageDto) {
    return this.appService.createMessage(messageDto);
  }
}
