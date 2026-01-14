import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { UserError } from './app.error';
import { Response } from 'express';
export declare class AppFilter implements ExceptionFilter {
    catch(exception: UserError, host: ArgumentsHost): Response<any, Record<string, any>>;
}
