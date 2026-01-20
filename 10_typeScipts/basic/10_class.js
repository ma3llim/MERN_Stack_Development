"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Hyderabad";
    }
    get getAppleEmail() {
        return `Apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course Count Should Be More Than 1");
        }
        this._courseCount = courseNum;
    }
}
const sameer = new User("sameer@gmail.com", "Mohd Sameer");
