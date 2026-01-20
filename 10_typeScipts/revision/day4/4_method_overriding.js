"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Logger {
    log(message) {
        console.log(message);
    }
}
class FileLogger extends Logger {
    log(message) {
        console.log(`File: ${message}`);
    }
}
const log = new FileLogger();
log.log("Test");
