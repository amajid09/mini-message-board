import React from "react"
import { UserIcon } from 'lucide-react'
interface MessageProps {
    text: string;
    user: string;
}
const Message: React.FC<MessageProps> = ({ text, user }) => {
    return (
        <div className="flex gap-2 items-center">
            <div><UserIcon /></div>
            <div className="bg-card border-border-subtle rounded-md outline flex flex-col gap-2  justify-center p-2 w-sm">
                <p className="font-bold text-sm text-[#ffb3da]">
                    {user}
                </p>
                <p className="text-white">
                    {text}
                </p>
            </div>
        </div>
    )
};

export default Message;
