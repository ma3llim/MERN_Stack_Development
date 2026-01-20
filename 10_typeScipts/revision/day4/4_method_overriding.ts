class Logger {
    log(message: string) {
        console.log(message);
    }
}

class FileLogger extends Logger {
    log(message: string) {
        console.log(`File: ${message}`);
    }
}

const log = new FileLogger();
log.log("Test");
