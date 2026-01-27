import React, { useState } from "react";
import type { Todo } from "../types/todo";
import UpdateTodoModal from "./UpdateTodoModal";

type listTodosTypes = {
    todos: Todo[];
    deleteTodo: (id: string) => void;
    updateTodo: (id: string, todo: { text?: string; description?: string }) => void;
};

const ListTodos: React.FC<listTodosTypes> = ({ todos, deleteTodo, updateTodo }) => {
    const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);
    const [showModel, setShowModel] = useState<boolean>(false);

    const onCloseModel = () => setShowModel(false);

    const handleOpenModel = (todo: Todo) => {
        setSelectedTodo(todo);
        setShowModel(true);
    };
    const handleUpdateTodo = (todo: Todo) => {
        updateTodo(todo.id, todo);
    };
    return (
        <>
            <div className="rounded-xl border border-slate-700 bg-slate-900 shadow-lg">
                <div className="flex flex-col gap-3 border-b border-slate-700 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
                    <h1 className="text-2xl font-bold tracking-wide text-white">📝 Notes</h1>

                    <span className="w-fit rounded-md bg-slate-800 px-3 py-1 text-sm text-slate-300">Total: {todos.length}</span>
                </div>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-slate-300">
                        <thead className="bg-slate-950 text-slate-200">
                            <tr>
                                <th className="px-6 py-3 font-semibold">Title</th>
                                <th className="px-6 py-3 font-semibold">Description</th>
                                <th className="px-6 py-3 text-center font-semibold">Actions</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-slate-700">
                            {todos.length === 0 ? (
                                <tr>
                                    <td colSpan={3} className="px-6 py-10 text-center text-slate-400">
                                        No notes found 📭
                                    </td>
                                </tr>
                            ) : (
                                todos.map((todo) => (
                                    <tr key={todo.id} className="transition-colors hover:bg-slate-800">
                                        <td className="px-6 py-4 font-medium text-white">{todo.text}</td>

                                        <td className="px-6 py-4 text-slate-300">{todo.description}</td>

                                        <td className="px-6 py-4">
                                            <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
                                                <button
                                                    onClick={() => handleOpenModel(todo)}
                                                    className="inline-flex items-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700 transition cursor-pointer"
                                                >
                                                    Edit
                                                </button>

                                                <button
                                                    onClick={() => deleteTodo(todo.id)}
                                                    className="inline-flex items-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-red-700 transition cursor-pointer"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <UpdateTodoModal todo={selectedTodo} show={showModel} onClose={onCloseModel} onUpdate={handleUpdateTodo} />
        </>
    );
};

export default ListTodos;
