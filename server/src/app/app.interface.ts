import { z } from 'zod'
export interface MessagesType {
    text: string;
    user: string;
    added: Date;
}

export const userSchema = z.object({
    user: z.string().min(1).max(100),
})
export const createMessageSchema = z.object({
    text: z.string().min(1).max(500),
    user: z.string().min(1).max(100),
})


export type UserDto = z.infer<typeof userSchema>;
export type MessageDto = z.infer<typeof createMessageSchema>;