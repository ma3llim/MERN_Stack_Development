import "./App.css";
// import Card from "./components/Card";
import { ChildrenCard } from "./components/ChildrenCard";
// import Counter from "./components/Counter";
// import Form from "./components/Form";
// import List from "./components/List";
import type { Chai } from "./types";

const menu: Chai[] = [
    { id: 1, name: "Masala", price: 30 },
    { id: 2, name: "Ginger", price: 30 },
    { id: 3, name: "Lemon", price: 30 },
    { id: 4, name: "Cardamom", price: 30 },
];
function App() {
    return (
        <div>
            {/* <Card name="Headphone" price={5000} />
            <Counter />
            <div>
                <List items={menu} />
            </div> */}
            {/* <Form
                onSubmit={(order) => {
                    console.log("Placed", order.name, order.cups);
                }}
            /> */}
            <div>
                <ChildrenCard title="TypeScript" footer={<button>Order Now</button>} />
            </div>
        </div>
    );
}

export default App;
