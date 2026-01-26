type Todo = {
    id: number;
    text: string;
    description: string;
};

type TodoAction = { type: "ADD"; payload: Todo } | { type: "TOGGLE"; payload: number } | { type: "DELETE"; payload: number } | { type: "UPDATE"; payload: { id: number; todo: Todo } };

export type { Todo, TodoAction };
