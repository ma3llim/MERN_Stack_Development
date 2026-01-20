import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
const Form = ({ onSubmit }) => {
    const [name, setName] = useState("Masala");
    const [cups, setCups] = useState(1);
    const handleSubmtit = (e) => {
        e.preventDefault();
        onSubmit({ name, cups });
    };
    return (_jsxs("form", { onSubmit: handleSubmtit, children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "name", children: "Name" }), _jsx("input", { type: "text", value: name, onChange: (e) => setName(e.target.value) })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "cups", children: "Cups" }), _jsx("input", { type: "number", value: cups, onChange: (e) => setCups(Number(e.target.value)) })] }), _jsx("button", { type: "submit", children: "Submit" })] }));
};
export default Form;
