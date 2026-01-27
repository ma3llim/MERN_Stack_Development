import { ToastContainer } from "react-toastify";
import useTodos from "./hooks/useTodos";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import ListTodos from "./components/ListTodos";

const App = () => {
    const { todos, addTodo, deleteTodo } = useTodos();
    return (
        <>
            <section className="w-screen min-h-screen bg-slate-900 text-white">
                <Header />
                <main className="container mx-auto space-y-4">
                    <AddTodo addTodo={addTodo} />
                    <hr />
                    <ListTodos todos={todos} />
                    <br />
                </main>
            </section>
            <ToastContainer limit={3} />
        </>
    );
};

export default App;
