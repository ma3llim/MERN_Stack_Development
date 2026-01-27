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

    const deleteTodo = (id: string) => {
        dispatch({ type: "DELETE", payload: id });
    };

    const updateTodo = (id: string, todo: Todo) => {
        dispatch({
            type: "UPDATE",
            payload: { id, todo },
        });
    };

    return { todos, addTodo, deleteTodo, updateTodo };
};

export default useTodos;
