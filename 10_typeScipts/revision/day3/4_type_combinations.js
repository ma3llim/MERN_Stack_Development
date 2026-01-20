"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// typeof
function log(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    return value;
}
// instance of
class User {
    constructor() {
        this.name = "Sameer";
    }
}
function handle(input) {
    if (input instanceof User) {
        console.log(input.name);
    }
    else {
        console.log(input.getFullYear());
    }
}
function speak(animal) {
    if ("bark" in animal) {
        animal.bark;
    }
    else {
        animal.meow;
    }
}
