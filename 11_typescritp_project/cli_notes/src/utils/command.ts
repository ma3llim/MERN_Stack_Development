import { NotePriority } from "../types/note.types.js";
import os from "os";

const addCommand = (
    title: string,
    description?: string,
    options?: {
        tags?: string;
        priority?: NotePriority;
    }
): void => {
    const now = new Date();
};

export { addCommand };
