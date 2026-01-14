import { z } from 'zod'
export interface MessagesType {
    text: string;
    user: string;
    added: Date;
}


export const createMessageSchema = z.object({
    text: z.string().min(1).max(500),
    user: z.string().min(1).max(100),
})

export type MessageDto = z.infer<typeof createMessageSchema>;