import { nanoid } from "nanoid";
import os from "node:os";
import { addNoteInput, NoteType } from "../types/note.types.js";
import { saveNote } from "../utils/storage.js";

const addNotes = (note: addNoteInput) => {
    const id = nanoid();
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
    saveNote(notes);
};
const deleteNotes = (noteId: Pick<NoteType, "id">): void => {};
const updateNotes = (noteId: string, note: Partial<NoteType>): void => {};
const getNotes = (): NoteType[] => {
    return [];
};

export { addNotes, deleteNotes, updateNotes, getNotes };
