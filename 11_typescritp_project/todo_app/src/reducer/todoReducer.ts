import type { Todo, TodoAction } from "../types/todo";

const todoReducer = (state: Todo[], action: TodoAction): Todo[] => {
    switch (action.type) {
        case "ADD":
            return [
                ...state,
                {
                    id: Date.now(),
                    text: action.payload,
                    completed: false,
                },
            ];

        case "TOGGLE":
            return state.map((todo) => (todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo));

        case "DELETE":
            return state.filter((todo) => todo.id !== action.payload);

        case "UPDATE":
            return state.map((todo) => (todo.id === action.payload.id ? { ...todo, ...action.payload.todo } : todo));

        default:
            return state;
    }
};

export default todoReducer;
