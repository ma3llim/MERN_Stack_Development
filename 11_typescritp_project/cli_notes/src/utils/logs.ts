import chalk from "chalk";

type LogType = "info" | "success" | "warn" | "error" | "debug";

const log = (message: string, type: LogType = "info") => {
    switch (type) {
        case "success":
            console.log(chalk.green.bold("✔ " + message));
            break;
        case "error":
            console.error(chalk.red.bold("✖ " + message));
            break;
        case "warn":
            console.warn(chalk.yellow.bold("⚠ " + message));
            break;
        case "debug":
            console.log(chalk.cyan("[DEBUG] ") + message);
            break;
        case "info":
        default:
            console.log(chalk.blue(message));
            break;
    }
};

export default log;
