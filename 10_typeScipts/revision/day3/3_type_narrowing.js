"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function print(id) {
    if (typeof id === "string") {
        id.toUpperCase();
    }
    else {
        print(id);
    }
}
