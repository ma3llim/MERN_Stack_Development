import { jsx as _jsx } from "react/jsx-runtime";
import "./App.css";
// import Card from "./components/Card";
import { ChildrenCard } from "./components/ChildrenCard";
const menu = [
    { id: 1, name: "Masala", price: 30 },
    { id: 2, name: "Ginger", price: 30 },
    { id: 3, name: "Lemon", price: 30 },
    { id: 4, name: "Cardamom", price: 30 },
];
function App() {
    return (_jsx("div", { children: _jsx("div", { children: _jsx(ChildrenCard, { title: "TypeScript", footer: _jsx("button", { children: "Order Now" }) }) }) }));
}
export default App;
