import { access, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { NoteType } from "../types/note.types.js";
import log from "./logs.js";

const filePath = join(process.cwd(), "notes.json");

const ensureFileExists = async () => {
    try {
        await access(filePath);
    } catch {
        await writeFile(filePath, "[]");
    }
};

// Read notes
const readNotes = async (): Promise<NoteType[]> => {
    try {
        await ensureFileExists();

        const data = await readFile(filePath, "utf-8");
        return JSON.parse(data);
    } catch (error: unknown) {
        if (error instanceof Error) {
            log(`Something Went Wrong While Read Notes: ${error.message}`, "error");
        } else {
            log("Something Went Wrong While Read Notes", "error");
        }
        throw error;
    }
};

// Write notes
const writeNotes = async (note: NoteType): Promise<NoteType> => {
    try {
        const notes = await readNotes();

        notes.push(note);

        await writeFile(filePath, JSON.stringify(notes, null, 2), "utf-8");

        return note;
    } catch (error: unknown) {
        if (error instanceof Error) {
            log(`Something Went Wrong While Write Notes: ${error.message}`, "error");
        } else {
            log("Something Went Wrong While Write Notes", "error");
        }
        throw error;
    }
};

const writeAllNotes = async (notes: NoteType[]): Promise<void> => {
    try {
        await writeFile(filePath, JSON.stringify(notes, null, 2), "utf-8");
    } catch (error: unknown) {
        if (error instanceof Error) {
            log(`Something Went Wrong While Write Notes: ${error.message}`, "error");
        } else {
            log("Something Went Wrong While Write Notes", "error");
        }
        throw error;
    }
};

export { readNotes, writeNotes, writeAllNotes };
