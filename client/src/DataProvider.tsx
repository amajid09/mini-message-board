import React from "react";

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
        try {
            const response = await fetch('http://localhost:3000/messages');
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
