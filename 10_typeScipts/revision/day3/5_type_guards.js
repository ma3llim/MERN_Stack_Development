"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isString(value) {
    return typeof value === "string";
}
function isSuccess(res) {
    return "data" in res;
}
function handle(res) {
    if (isSuccess(res)) {
        console.log(res.data);
    }
    else {
        console.log(res.error);
    }
}
