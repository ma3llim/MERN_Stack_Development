import { Command } from "commander";
import { addNotes, deleteNotes, getNotes, searchNotes, updateNotes } from "../services/files.services.js";
import { NoteId, NoteType } from "../types/note.types.js";

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

const registerUpdateCommand = (program: Command): void => {
    program
        .command("update")
        .description("Update a note by ID")
        .argument("<id>", "Note ID")
        .option("-t, --title <title>", "Update note title")
        .option("-d, --description <description>", "Update note description")
        .option("-s, --status <status>", "active | archived | completed")
        .option("-p, --priority <priority>", "low | medium | high")
        .option("--tags <tags>", "Comma separated tags")
        .action((id: NoteId, options: NoteType) => {
            updateNotes(id, options);
        });
};

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

const registerSearchCommand = (program: Command): void => {
    program
        .command("search")
        .description("Search notes by keyword in title or description")
        .argument("<keyword>", "Keyword to search")
        .action((keyword: string) => {
            searchNotes(keyword);
        });
};

export { registerAddCommand, registerUpdateCommand, registerDeleteCommand, registerGetCommand, registerSearchCommand };
