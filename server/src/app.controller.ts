import { Body, Controller, Get, Post, UseFilters, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { createMessageSchema, type UserDto, userSchema, type MessageDto } from './app/app.interface';
import { CreateMessagesPipe, UserMessagePipe } from './app.validation';
import { ResponseInterceptor } from './response.interceptor';
import { AppFilter } from './app/app.filter';
import { UserError } from './app/app.error';

@Controller('messages')
@UseInterceptors(new ResponseInterceptor())
@UseFilters(new AppFilter<UserError>())
export class AppController {
  constructor(private readonly appService: AppService) { }
  @Get('/')
  getAll(): MessageDto[] {
    return this.appService.getAllMessages();
  }
  @Post('/check-user')
  isUserExist(@Body(new UserMessagePipe(userSchema)) user: UserDto) {
    return this.appService.isUserExist(user.user);
  }
  @Post('/new')
  createMessage(@Body(new CreateMessagesPipe(createMessageSchema)) messageDto: MessageDto) {
    return this.appService.createMessage(messageDto);
  }
}
