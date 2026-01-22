// Discriminated Unions (FOUNDATION of safe logic)

import { add } from "./types/my-lib.js";
import { testMessage } from "@/folder/subfolder/test.js";

type ApiResponse = { status: "success"; data: string } | { status: "error"; error: string };

function handle(res: ApiResponse) {
    if (res.status === "success") {
        return res.status;
    } else {
        return res.error;
    }
}

type state = { type: "loading" } | { type: "success"; data: string } | { type: "error"; error: string };
const obj = add(2, 5);
console.log(obj);
