import { nanoid } from "nanoid";
import os from "node:os";
import { addNoteInput, NoteFilter, NoteType } from "../types/note.types.js";
import { readNotes, writeNotes } from "../utils/storage.js";
import log from "../utils/logs.js";
import { newNoteAdded } from "../utils/tables.js";

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

const getNotes = async (filter?: NoteFilter): Promise<NoteType[]> => {
    const notes = await fetchNote();

    if (!filter || Object.keys(filter).length === 0) {
        log("Notes Fetch Successfully", "info");
        return notes;
    }

    const filtered = notes.filter((note) => {
        const matchPriority = filter.priority ? note.priority === filter.priority : true;
        const matchStatus = filter.status ? note.status === filter.status : true;
        const matchTags = filter.tags?.length ? note.tags?.some((tag) => filter.tags!.includes(tag)) : true;

        return matchPriority && matchStatus && matchTags;
    });
    log("Notes fetched successfully with applied filter", "info");
    return filtered;
};

export { addNotes, deleteNotes, updateNotes, getNotes };
