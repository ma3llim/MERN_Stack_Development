import { nanoid } from "nanoid";
import os from "node:os";
import { addNoteInput, NoteFilter, NoteType } from "../types/note.types.js";
import { readNotes, writeNotes } from "../utils/storage.js";
import log from "../utils/logs.js";
import { newNoteAdded, showNotesTable } from "../utils/tables.js";

const addNotes = async (note: addNoteInput): Promise<void> => {
    const id = nanoid(8);
    const timestamps = new Date();
    const userInfo = os.userInfo().username;

    const notes: NoteType = {
        id,
        content: {
            title: note.title,
            description: note.description,
        },
        tags: note.tags,
        status: note.status,
        priority: note.priority,
        timestamps: {
            createdAt: timestamps,
            updatedAt: timestamps,
        },
        auditInfo: {
            createdBy: userInfo,
        },
    };
    const saveNote = await writeNotes(notes);
    newNoteAdded(saveNote);
};

const deleteNotes = (noteId: Pick<NoteType, "id">): void => {};
const updateNotes = (noteId: string, note: Partial<NoteType>): void => {};

const getNotes = async (filter?: NoteFilter): Promise<void> => {
    const notes = await readNotes();

    if (!filter || Object.keys(filter).length === 0) {
        showNotesTable(notes, "Notes Fetch Successfully");
    } else {
        const filtered = notes.filter((note) => {
            const matchPriority = filter.priority ? note.priority === filter.priority : true;
            const matchStatus = filter.status ? note.status === filter.status : true;
            const matchTags = filter.tags?.length ? note.tags?.some((tag) => filter.tags!.includes(tag)) : true;

            return matchPriority && matchStatus && matchTags;
        });
        showNotesTable(filtered, "Notes fetched successfully with applied filter");
    }
};

export { addNotes, deleteNotes, updateNotes, getNotes };
