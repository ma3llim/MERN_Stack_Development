import axios, { type AxiosResponse } from "axios";

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

// axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
//     console.log(response.data);
// });

const fetchData = async () => {
    try {
        const response: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        console.log("Todo", response.data);
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            console.log("Axios Error:", error.message);
        } else {
            console.log("Unexpected Error:", error);
        }
    }
};
