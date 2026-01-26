import { useState, type ChangeEvent, type FormEvent } from "react";

type Props = {
    onAdd: (text: string) => void;
};

const TodoInput = ({ onAdd }: Props) => {
    const [text, setText] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onAdd(text);
        setText("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={text} onChange={handleChange} />
            <button>Add</button>
        </form>
    );
};

export default TodoInput;
