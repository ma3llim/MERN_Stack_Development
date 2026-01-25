import os from "node:os";
import { access, constants, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { NoteType } from "../types/note.types.js";
import log from "./logs.js";

const filePath = join(process.cwd(), "notes.json");

const ensureFileExists = async (): Promise<void> => {
    try {
        await access(filePath);
    } catch (error) {
        await writeFile(filePath, "[]", "utf-8");
    }
};

const saveNote = async (note: NoteType): Promise<void> => {
    await ensureFileExists();

    try {
        const data = await readFile(filePath, "utf-8");
        const notes: NoteType[] = JSON.parse(data || "[]") as NoteType[];

        notes.push(note);
        await writeFile(filePath, JSON.stringify(notes, null, 2));
        log("Note Added Successfully", "success");
    } catch (error: unknown) {
        if (error instanceof Error) {
            log(`Something went wrong while saving the note: ${error.message}`, "error");
        } else {
            console.log("Something went wrong while saving the note", "error");
        }
    }
};

const getNotes = async (): Promise<NoteType[]> => {
    await ensureFileExists();

    try {
        const data = await readFile(filePath, "utf-8");
        const parsed = JSON.parse(data);
        return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        return [];
    }
};

const getNoteById = async (noteId: string) => {
    await ensureFileExists();

    try {
        const notes = await getNotes();
        const note = notes.find((note) => note.id === noteId);
        if (note) {
            return note;
        } else {
            return "Note Not Found";
        }
    } catch (error) {
        return [];
    }
};

const noteDeleteById = async (noteId: string) => {
    try {
        const notes = await getNotes();
    } catch (error) {
        return;
    }
};
const getNoteByTags = async (tags: string[]) => {
    await ensureFileExists();
    return filePath;
};

export { saveNote, getNotes, getNoteById, getNoteByTags };
