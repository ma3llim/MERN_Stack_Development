import React, { useState, type FormEvent } from "react";
import { nanoid } from "nanoid";
import type { Todo } from "../types/todo";
import { toast } from "react-toastify";

type addTodoProps = {
    addTodo: (todo: Todo) => void;
};

const AddTodo: React.FC<addTodoProps> = ({ addTodo }) => {
    const [text, setText] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!text.trim() || !description.trim()) {
            toast.error("Title and Description is required");
        }

        const newTodo: Todo = {
            id: nanoid(8),
            text: text,
            description: description,
        };
        setText("");
        setDescription("");
        addTodo(newTodo);
    };
    return (
        <form onSubmit={handleSubmit} className="bg-slate-800 rounded-xl shadow-lg p-6 space-y-5">
            <h3 className="text-xl font-semibold text-white">Add Notes 📝</h3>
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-white mb-1">
                    Enter the Title
                </label>
                <input
                    id="title"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter the title"
                    className="w-full rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
            </div>

            <div>
                <label htmlFor="description" className="block text-sm font-medium text-white mb-1">
                    Enter the Description
                </label>
                <textarea
                    id="description"
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter the description"
                    className="w-full rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
            </div>
            <button
                type="submit"
                disabled={!text.trim() || !description.trim()}
                className="w-full rounded-lg px-4 py-2.5 font-medium bg-blue-600 text-white hover:bg-blue-700 focus:outline-none cursor-pointer focus:ring-2 disabled:cursor-not-allowed"
            >
                Add Note
            </button>
        </form>
    );
};

export default AddTodo;
