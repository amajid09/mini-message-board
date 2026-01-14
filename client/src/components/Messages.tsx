import React, { useEffect } from "react"
import Message from "./Message";
import { useData } from "../DataProvider";

const Messages: React.FC = () => {
    const { messages, fetchData } = useData();
    const scrollEndRef = React.useRef<HTMLDivElement>(null);
    useEffect(() => {
        fetchData();
    }, []);
    useEffect(() => {
        scrollEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);
    return (
        <div className="overflow-y-auto scroll-auto h-full flex-1 p-4 scrollbar-hide">
            <ul className="flex flex-col gap-5">
                {messages.map((msg, index) => (
                    <Message key={index} text={msg.text} user={msg.user} />
                ))}
                <div ref={scrollEndRef}></div>
            </ul>
        </div>
    )
};

export default Messages;
