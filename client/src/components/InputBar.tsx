import React from "react"
import { useData } from "../DataProvider";

const InputBar: React.FC = () => {
    const { addMessage } = useData();
    const [input, setInput] = React.useState("");
    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        // Handle form submission logic here
        fetch('http://localhost:3000/messages/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text: input,
                user: localStorage.getItem("userName") || "Anonymous",
                date: new Date()
            }),
        })
            .then(response => response.json())
            .then(() => {
                addMessage({ text: input, user: localStorage.getItem("userName") || "Anonymous", date: new Date() });
                setInput("");
            })
            .catch((error) => {
                console.error('Error:', error);
            }
            )
    }
    return (
        <form className="flex gap-2" onSubmit={handleSubmit}>
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" name="message" className="flex-1 bg-white border-border-subtle rounded-md outline p-2 text-black placeholder:text-gray-500" placeholder="Enter message" />
            <button type='submit' className="bg-[#ff9acb] hover:bg-[#ffb3da] cursor-pointer px-6 rounded-md text-black font-bold" >Send</button>
        </form>
    )
};

export default InputBar;
