type Todo = {
    id: string;
    text: string;
    description: string;
};

type TodoAction = { type: "ADD"; payload: Todo } | { type: "DELETE"; payload: string } | { type: "UPDATE"; payload: { id: string; todo: Partial<Pick<Todo, "text" | "description">> } };

export type { Todo, TodoAction };
