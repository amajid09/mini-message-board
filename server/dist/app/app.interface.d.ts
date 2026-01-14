import { z } from 'zod';
export interface MessagesType {
    text: string;
    user: string;
    added: Date;
}
export declare const createMessageSchema: z.ZodObject<{
    text: z.ZodString;
    user: z.ZodString;
}, z.core.$strip>;
export type MessageDto = z.infer<typeof createMessageSchema>;
