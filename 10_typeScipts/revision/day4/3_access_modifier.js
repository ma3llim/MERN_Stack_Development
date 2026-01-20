"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    constructor() {
        this.balance = 0;
    }
    deposite(amount) {
        this.balance += amount;
    }
}
