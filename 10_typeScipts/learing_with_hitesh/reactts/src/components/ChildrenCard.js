import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function ChildrenCard({ title, children, footer }) {
    return (_jsxs("section", { children: [_jsx("h2", { children: title }), _jsx("div", { children: children }), footer ? _jsx("footer", { children: footer }) : null] }));
}
