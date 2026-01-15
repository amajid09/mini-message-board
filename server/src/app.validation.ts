import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { z, ZodType } from "zod";
import { MessageDto, UserDto } from "./app/app.interface";
@Injectable()
export class CreateMessagesPipe implements PipeTransform {
    constructor(private schema: ZodType<MessageDto>) { }
    transform(value: any, metadata: ArgumentMetadata) {
        const parsedValue = this.schema.safeParse(value);
        if (!parsedValue.success) {
            const error = { message: "Invalid Message", ...z.treeifyError(parsedValue.error).properties, statusCode: '400' }
            throw new BadRequestException(error);
        } return parsedValue.data
    }
}

@Injectable()
export class UserMessagePipe implements PipeTransform {
    constructor(private schema: ZodType<UserDto>) { }
    transform(value: any, metadata: ArgumentMetadata) {
        const parsedValue = this.schema.safeParse(value);
        if (!parsedValue.success) {
            const error = { message: "Invalid User", ...z.treeifyError(parsedValue.error).properties, statusCode: '400' }
            throw new BadRequestException(error);
        } return parsedValue.data
    }
}