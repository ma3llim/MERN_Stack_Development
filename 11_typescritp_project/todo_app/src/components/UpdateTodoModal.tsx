import React, { type FormEvent } from "react";

export interface Todo {
    id: number | string;
    title: string;
    description: string;
}

interface UpdateTodoModalProps {
    show: boolean;
    todo: Todo;
    onClose: () => void;
    onUpdate: (todo: Todo) => void;
}

const UpdateTodoModal: React.FC<UpdateTodoModalProps> = ({ show, todo, onClose, onUpdate }) => {
    if (!show) return null;

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onUpdate(todo);
        onClose();
    };

    return (
        <>
            <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
                    <form onSubmit={handleSubmit}>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold">Update Note ✏️</h2>
                            <button type="button" onClick={onClose} className="text-gray-400 hover:text-gray-600">
                                ✕
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Title</label>
                                <input
                                    type="text"
                                    className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={todo.title}
                                    onChange={(e) =>
                                        onUpdate({
                                            ...todo,
                                            title: e.target.value,
                                        })
                                    }
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Description</label>
                                <textarea
                                    rows={3}
                                    className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={todo.description}
                                    onChange={(e) =>
                                        onUpdate({
                                            ...todo,
                                            description: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>

                        <div className="flex justify-end gap-3 mt-6">
                            <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg border hover:bg-gray-100">
                                Cancel
                            </button>
                            <button type="submit" className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
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
