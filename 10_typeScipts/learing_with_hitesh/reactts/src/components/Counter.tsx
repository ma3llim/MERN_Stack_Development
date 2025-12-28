import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Cups Ordered: {count}</p>
            <button onClick={() => setCount(count + 1)}>Order One More</button>
        </div>
    );
};

export default Counter;
