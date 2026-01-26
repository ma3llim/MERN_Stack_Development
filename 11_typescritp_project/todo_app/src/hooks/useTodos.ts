import { useReducer } from "react";
import type { Todo } from "../types/todo";
import todoReducer from "../reducer/todoReducer";
import { toast } from "react-toastify";

const useTodos = (initialTodos: Todo[] = []) => {
    const [todos, dispatch] = useReducer(todoReducer, initialTodos);

    const addTodo = (todo: Todo) => {
        dispatch({ type: "ADD", payload: todo });
        toast.success("Todo added successfully");
    };

    const toggleTodo = (id: number) => {
        dispatch({
            type: "TOGGLE",
            payload: id,
        });
    };

    const deleteTodo = (id: number) => {
        dispatch({ type: "DELETE", payload: id });
    };

    const updateTodo = (id: number, todo: Todo) => {
        dispatch({
            type: "UPDATE",
            payload: { id, todo },
        });
    };

    return { todos, addTodo, toggleTodo, deleteTodo, updateTodo };
};

export default useTodos;
