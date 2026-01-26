import { ToastContainer } from "react-toastify";
import useTodos from "./hooks/useTodos";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";

const App = () => {
    const { todos, addTodo, deleteTodo, toggleTodo, updateTodo } = useTodos();

    return (
        <>
            <section className="w-screen h-screen bg-slate-900 text-white">
                <Header />
                <main className="container mx-auto">
                    <AddTodo />
                </main>
            </section>
            <ToastContainer limit={3} />
        </>
    );
};

export default App;
