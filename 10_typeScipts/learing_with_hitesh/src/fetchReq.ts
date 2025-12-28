import axios, { type AxiosResponse } from "axios";

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        if (!response.ok) throw new Error(`HTTP Error ${response.status}`);
        const data: Todo = await response.json();
        console.log(data);
    } catch (error: any) {
        console.log("Unexpected Error:", error);
    }
};
