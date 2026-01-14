import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
import { ZodType } from "zod";
import { MessageDto } from "./app/app.interface";
export declare class CreateMessagesPipe implements PipeTransform {
    private schema;
    constructor(schema: ZodType<MessageDto>);
    transform(value: any, metadata: ArgumentMetadata): {
        text: string;
        user: string;
    };
}
