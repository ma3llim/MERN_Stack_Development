import chalk from "chalk";
import CliTable3, { Table } from "cli-table3";
import { NoteType } from "../types/note.types.js";
import log from "./logs.js";

const createNotesTable = (notes: NoteType[]): Table => {
    const table: Table = new CliTable3({
        head: [
            chalk.bold.magenta("ID"),
            chalk.bold.magenta("Title"),
            chalk.bold.magenta("Description"),
            chalk.bold.magenta("Tags"),
            chalk.bold.magenta("Status"),
            chalk.bold.magenta("Priority"),
            chalk.bold.magenta("Audit Info"),
            chalk.bold.magenta("Date Time"),
        ],
        wordWrap: true,
        colWidths: [10, 20, 20, 22, 12, 12, 25, 25],
    });

    notes.forEach((note) => {
        table.push([
            note.id,
            chalk.blue(note.content.title),
            note.content.description,
            note.tags && note.tags.length > 0 ? note.tags.join(", ") : chalk.gray("-"),
            chalk.cyan(note.status),
            chalk.yellow(note.priority),
            [
                `Created: ${note.auditInfo.createdBy}`,
                note.auditInfo.lastModifiedBy ? `Modified: ${note.auditInfo.lastModifiedBy}` : "",
            ].join("\n"),
            [
                `Created: ${note.timestamps.createdAt.toLocaleString()}`,
                `Updated: ${note.timestamps.updatedAt.toLocaleString()}`,

                note.timestamps.archivedAt ? `Archived: ${note.timestamps.archivedAt.toLocaleString()}` : "",
            ].join("\n"),
        ]);
    });

    return table;
};

const showOptions = (): void => {
    console.clear();
    console.log(chalk.bold.green("🚀 CLI Notes App\n"));

    const table = new CliTable3({
        head: [chalk.bold.cyan("Options"), chalk.bold.cyan("Description"), chalk.bold.cyan("Command")],
        colWidths: [12, 36, 45],
    });

    table.push(
        [
            chalk.green("📝 add"),
            "Add a new note (title, description, tags)",
            chalk.cyan('notes add "Title" "Desc" "tag1,tag2"'),
        ],
        [chalk.green("📋 list"), "Show all saved notes", chalk.cyan("notes get")],
        [chalk.green("❌ del"), "Delete note by ID", chalk.cyan("notes delete <id>")],
        [chalk.green("🔍 find"), "Search note by word", chalk.cyan('notes search "word"')],
        [chalk.green("💡 help"), "Show this guide", chalk.cyan("notes help")]
    );

    console.log(table.toString());
};

const showNotesTable = (notes: NoteType[], title = "Your Notes"): void => {
    console.clear();
    console.log(chalk.bold.cyan(`\n📚 ${title}\n`));

    if (!notes.length) {
        console.log(chalk.yellow("⚠️ No notes found."));
        return;
    }

    console.log(createNotesTable(notes).toString());
};

const newNoteAdded = (note: NoteType, title = "New Note Added Successfully"): void => {
    console.clear();
    log(title, "success");
    console.log(createNotesTable([note]).toString());
};

/**
 * Shows search results in a table
 */
const searchResultsTable = (notes: NoteType[], title = "Search Results"): void => {
    console.clear();
    log(chalk.bold.cyan(`\n📚 ${title}\n`));

    if (!notes.length) {
        console.log(chalk.yellow("⚠️ No results found."));
        return;
    }

    console.log(createNotesTable(notes).toString());
};

export { showOptions, showNotesTable, newNoteAdded, searchResultsTable };
