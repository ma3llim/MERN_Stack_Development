import React, { useState } from "react";

interface FormProps {
    onSubmit(order: { name: string; cups: number }): void;
}

const Form = ({ onSubmit }: FormProps) => {
    const [name, setName] = useState("Masala");
    const [cups, setCups] = useState(1);

    const handleSubmtit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit({ name, cups });
    };
    return (
        <form onSubmit={handleSubmtit}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="cups">Cups</label>
                <input type="number" value={cups} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCups(Number(e.target.value))} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
