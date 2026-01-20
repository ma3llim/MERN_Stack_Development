"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Union is the types of different data types combination
let score = 33;
let john = {
    name: "john",
    id: 13,
};
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
getDbId(3);
getDbId("3");
// Array
const data = [1, 2, 3, "4"];
let seatAllotment;
seatAllotment = "asile";
