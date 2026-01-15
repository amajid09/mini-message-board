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
    removeMessage: (index: number) => void;
}

const DataContext = React.createContext({} as DataContextType);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [messages, setMessages] = React.useState<MessageType[]>([]);

    const addMessage = (message: MessageType) => {
        setMessages(prevMessages => [...prevMessages, message]);
    }
    const removeMessage = (index: number) => {
        setMessages(prevMessages => prevMessages.filter((_, i) => i !== index));
    }
    const fetchData = async () => {
        const apiUrl = import.meta.env.VITE_REACT_API_LIST_MESSAGES!;
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const responseData = await response.json();

            setMessages(responseData.data);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    }
    return (
        <DataContext.Provider value={{ messages, fetchData, addMessage, removeMessage }}>
            {children}
        </DataContext.Provider>
    )
};

export const useData = () => React.useContext(DataContext);
