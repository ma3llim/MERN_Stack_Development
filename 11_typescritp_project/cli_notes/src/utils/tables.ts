import chalk from "chalk";
import CliTable3 from "cli-table3";

const createNotesTable = (notes: NoteType[]) => {
    const table = new CliTable3({
        head: [
            chalk.bold.green("ID"),
            chalk.bold.blue("Title"),
            chalk.bold.magenta("Description"),
            chalk.bold.cyan("Tags"),
            chalk.bold.gray("Created At"),
        ],
        wordWrap: true,
        colWidths: [10, 25, 45, 25, 25],
    });

    // notes.forEach((n) => {
    //     table.push([n.id, chalk.green(n.title), n.description, n.tags?.length ? n.tags : chalk.gray("-"), n.createdAt]);
    // });

    return table;
};

const showOptions = () => {
    console.clear();
    console.log(chalk.bold.green("🚀 CLI Notes App"));

    // Creating table
    const table = new CliTable3({
        head: [chalk.bold.cyan("Options"), chalk.bold.cyan("Description"), chalk.bold.cyan("Command")],
        colWidths: [12, 36, 45],
    });

    // Adding Tables Options
    table.push(
        [
            chalk.green("📝 add"),
            "Add a new note (title, desc, tags)",
            chalk.cyan('yarn dev add "Title" "Desc" "tag1,tag2"'),
        ],
        [chalk.green("📋 list"), "Show all saved notes", chalk.cyan("yarn dev list")],
        [chalk.green("❌ del"), "Delete note by ID", chalk.cyan("yarn dev delete <id>")],
        [chalk.green("🔍 find"), "Search note by word", chalk.cyan('yarn dev search "word"')],
        [chalk.green("💡 help"), "Show this guide", chalk.cyan("yarn dev help")]
    );

    console.log(table.toString());
};

const showNotesTable = (notes: NoteType[], title = "Your Notes") => {
    console.clear();
    console.log(chalk.bold.cyan(`\n📚 ${title}\n`));

    if (!notes.length) {
        console.log(chalk.yellow("⚠️ No notes found."));
        return;
    }

    console.log(createNotesTable(notes).toString());
};

const newNoteAdded = (note: NoteType, title = "New Added Successfuly") => {
    console.clear();
    console.log(chalk.bold.cyan(`\n➕ ${title}\n`));
    // Create a new table
    const table = new CliTable3({
        head: [
            chalk.bold.green("ID"),
            chalk.bold.blue("Title"),
            chalk.bold.magenta("Description"),
            chalk.bold.cyan("Tags"),
            chalk.bold.gray("Created At"),
        ],
        wordWrap: true,
    });
    // table.push([note.id, chalk.green(note.title), note.description, note?.tags || chalk.gray("-"), note.createdAt]);

    console.log(table.toString());
};

const searchResultsTables = (notes: NoteType[], title = "Search Result Are") => {
    console.clear();
    console.log(chalk.bold.cyan(`\n📚 ${title}\n`));

    // Create a new table
    const table = new CliTable3({
        head: [
            chalk.bold.green("ID"),
            chalk.bold.blue("Title"),
            chalk.bold.magenta("Description"),
            chalk.bold.cyan("Tags"),
            chalk.bold.gray("Created At"),
        ],
        wordWrap: true,
        colWidths: [10, 25, 45, 25, 25],
    });

    // notes.forEach((n) => {
    //     table.push([n.id, chalk.green(n.title), n.description, n.tags || chalk.gray("-"), n.createdAt]);
    // });
    console.log(table.toString());
};

export { showOptions, newNoteAdded, searchResultsTables, showNotesTable };
