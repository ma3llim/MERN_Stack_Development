import { access, constants, writeFile } from "node:fs/promises";
import { join } from "node:path";

const filePath = join(process.cwd(), "notes.json");

const ensureFileExists = async (filePath: string): Promise<void> => {
    try {
        await access(filePath, constants.F_OK);
    } catch (error) {
        await writeFile(filePath, JSON.stringify([], null, 2));
    }
};

const saveNote = async (note: NoteType): Promise<void> => {
    await ensureFileExists(filePath);
};

const getNote = async (): Promise<NoteType[]> => {
    await ensureFileExists(filePath);
    return [];
};

const getNoteById = async (noteId: string) => {
    await ensureFileExists(filePath);
};

const getNoteByTags = async (tags: string[]) => {
    await ensureFileExists(filePath);
    return filePath;
};

export { saveNote, getNote, getNoteById, getNoteByTags };
