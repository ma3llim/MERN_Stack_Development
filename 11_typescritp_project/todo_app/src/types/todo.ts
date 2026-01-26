type Todo = {
    id: number;
    text: string;
    completed: boolean;
};

type TodoAction = { type: "ADD"; payload: string } | { type: "TOGGLE"; payload: number } | { type: "DELETE"; payload: number };

export type { Todo, TodoAction };
