import React, { useEffect, useState, type FormEvent } from "react";
import type { Todo } from "../types/todo";

interface UpdateTodoModalProps {
    show: boolean;
    todo: Todo | null;
    onClose: () => void;
    onUpdate: (todo: Todo) => void;
}

const UpdateTodoModal: React.FC<UpdateTodoModalProps> = ({ show, todo, onClose, onUpdate }) => {
    const [formTodo, setFormTodo] = useState<Todo | null>(null);

    useEffect(() => {
        if (todo) setFormTodo(todo);
    }, [todo]);

    if (!show || !formTodo) return null;

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onUpdate(formTodo);
        onClose();
    };

    return (
        <>
            <div className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm" onClick={onClose} />

            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                <div className="w-full max-w-md rounded-xl border border-slate-700 bg-slate-900 p-6 shadow-xl">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-5 flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-white">✏️ Update Note</h2>
                            <button type="button" onClick={onClose} className="text-slate-400 hover:text-white">
                                ✕
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm text-slate-300">Title</label>
                                <input
                                    className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white"
                                    value={formTodo.text}
                                    onChange={(e) =>
                                        setFormTodo({
                                            ...formTodo,
                                            text: e.target.value,
                                        })
                                    }
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-slate-300">Description</label>
                                <textarea
                                    rows={3}
                                    className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white"
                                    value={formTodo.description}
                                    onChange={(e) =>
                                        setFormTodo({
                                            ...formTodo,
                                            description: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>

                        <div className="mt-6 flex justify-end gap-3">
                            <button type="button" onClick={onClose} className="rounded-lg border border-slate-700 px-4 py-2 text-slate-300">
                                Cancel
                            </button>
                            <button type="submit" className="rounded-lg bg-blue-600 px-4 py-2 text-white">
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default UpdateTodoModal;
