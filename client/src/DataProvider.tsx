import React from "react";
import 'dotenv/config';

type MessageType = {
    text: string;
    user: string;
    date: Date;
}
type DataContextType = {
    messages: MessageType[];
    fetchData: () => Promise<void>;
    addMessage: (message: MessageType) => void;
}

const DataContext = React.createContext({} as DataContextType);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [messages, setMessages] = React.useState<MessageType[]>([]);

    const addMessage = (message: MessageType) => {
        setMessages(prevMessages => [...prevMessages, message]);
    }
    const fetchData = async () => {
        const apiUrl = import.meta.env.VITE_REACT_API_LIST_MESSAGES || 'http://localhost:3000/messages';
        try {
            const response = await fetch(apiUrl);
            const { data: resposneData } = await response.json();
            setMessages(resposneData);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    }
    return (
        <DataContext.Provider value={{ messages, fetchData, addMessage }}>
            {children}
        </DataContext.Provider>
    )
};

export const useData = () => React.useContext(DataContext);
