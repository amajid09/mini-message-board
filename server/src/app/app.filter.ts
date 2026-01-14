import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common';
import { UserError } from './app.error';
import { Request, Response } from 'express';

@Catch(UserError)
export class AppFilter implements ExceptionFilter {
  catch(exception: UserError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    
    const { message } = exception
    
    return response
      .status(HttpStatus.UNAUTHORIZED)
      .json({
        statusCode: HttpStatus.UNAUTHORIZED,
        timestamp: new Date().toISOString(),
        path: request.url,
        message
      });
  }
}
