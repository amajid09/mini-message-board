import React, { useState } from "react";
import { X } from "lucide-react";

interface PopupUserProps {
    isOpen: boolean;
    onClose: () => void;
}

const PopupUser: React.FC<PopupUserProps> = ({ isOpen, onClose }) => {
    const [username, setUsername] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (username.trim()) {
            localStorage.setItem("userName", username.trim());
            setUsername("");
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-[var(--bg-card)] rounded-[var(--radius-lg)] p-8 w-96 shadow-lg border border-[var(--border-strong)]">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-[var(--text-primary)]">
                        Enter Username
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition"
                    >
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                        className="w-full bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-[var(--radius-md)] px-4 py-2 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-pink)] transition"
                        autoFocus
                    />

                    <div className="flex gap-3 pt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 bg-[var(--bg-secondary)] hover:opacity-80 text-[var(--text-primary)] font-semibold py-2 rounded-[var(--radius-md)] transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-1 bg-[var(--accent-pink)] hover:bg-[var(--accent-pink-hover)] text-black font-semibold py-2 rounded-[var(--radius-md)] transition"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PopupUser;
