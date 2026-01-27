import type { Todo, TodoAction } from "../types/todo";

const todoReducer = (state: Todo[], action: TodoAction): Todo[] => {
    switch (action.type) {
        case "ADD":
            return [
                ...state,
                {
                    id: action.payload.id,
                    text: action.payload.text,
                    description: action.payload.description,
                },
            ];

        case "DELETE":
            return state.filter((todo) => todo.id !== action.payload);

        case "UPDATE":
            return state.map((todo) => (todo.id === action.payload.id ? { ...todo, ...action.payload.todo } : todo));

        default:
            return state;
    }
};

export default todoReducer;
