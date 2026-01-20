"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
let u1 = new User("sam", 25);
