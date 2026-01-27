import React from "react";
import type { Todo } from "../types/todo";

type listTodosTypes = {
    todos: Todo[];
    deleteTodo: (id: string) => void;
};

const ListTodos: React.FC<listTodosTypes> = ({ todos, deleteTodo }) => {
    return (
        <div className="rounded-xl border border-slate-700 bg-slate-900 shadow-lg">
            <div className="flex flex-col gap-3 border-b border-slate-700 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
                <h1 className="text-2xl font-bold tracking-wide text-white">📝 Notes</h1>

                <span className="w-fit rounded-md bg-slate-800 px-3 py-1 text-sm text-slate-300">Total: {todos.length}</span>
            </div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-slate-300">
                    <thead className="bg-slate-800 text-slate-200">
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
                                                onClick={() => (todo.id, todo)}
                                                className="inline-flex items-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700 transition"
                                            >
                                                Edit
                                            </button>

                                            <button
                                                onClick={() => deleteTodo(todo.id)}
                                                className="inline-flex items-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-red-700 transition"
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
    );
};

export default ListTodos;
