"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shery {
}
Shery.version = 1.0;
class Payment {
    constructor(amount) {
        this.amount = amount;
    }
    isPaymentValid(amount) {
        return amount > 0;
    }
}
