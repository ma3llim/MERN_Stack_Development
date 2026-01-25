import { Command } from "commander";
import { addNotes, deleteNotes, getNotes } from "../services/files.services.js";

const registerAddCommand = (program: Command): void => {
    program
        .command("add")
        .description("Add a New Note")
        .argument("<title>", "Note title")
        .argument("<description>", "Note Description")
        .option("-p, --priority <priority>", "low | medium | high")
        .option("-t, --tags <tags>", "comma separated tags")
        .option("-s, --status <status>", "active | archived | completed")
        .action((title, description, options) => {
            const input = {
                title,
                description,
                tags: options.tags ? options.tags.split(",").map((t: string) => t.trim()) : undefined,
                status: options.status ? options.status : "action",
                priority: options.priority ? options.priority : "low",
            };
            addNotes(input);
        });
};

const registerUpdateCommand = (program: Command): void => {};
const registerDeleteCommand = (program: Command): void => {
    program
        .command("delete")
        .description("Delete a note by ID")
        .argument("<id>", "Note ID")
        .action((options) => {
            deleteNotes(options);
        });
};

const registerGetCommand = (program: Command): void => {
    program
        .command("get")
        .description("Get all notes")
        .option("-p, --priority <priority>", "low | medium | high")
        .option("-t, --tags <tags>", "comma separated tags")
        .option("-s, --status <status>", "active | archived | completed")
        .action((options) => {
            getNotes(options);
        });
};

export { registerAddCommand, registerUpdateCommand, registerDeleteCommand, registerGetCommand };
