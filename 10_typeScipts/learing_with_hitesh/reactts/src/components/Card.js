import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Card = ({ name, price, isSpecial = false }) => {
    return (_jsxs("article", { children: [_jsxs("h2", { children: [name, " ", isSpecial && _jsx("span", { children: "\u2B50" })] }), _jsx("p", { children: price })] }));
};
export default Card;
