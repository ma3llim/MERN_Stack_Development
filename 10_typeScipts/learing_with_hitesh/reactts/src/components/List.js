import { jsx as _jsx } from "react/jsx-runtime";
import Card from "./Card";
const List = ({ items }) => {
    return (_jsx("div", { children: items.map((item) => (_jsx(Card, { name: item.name, price: item.price }, item.id))) }));
};
export default List;
