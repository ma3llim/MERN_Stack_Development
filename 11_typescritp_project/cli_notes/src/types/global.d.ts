export {}; // make it a module

declare global {
    interface NoteType {
        id: string;
        title: string;
        description: string;
        tags?: string[];
        status: "active" | "archived";
        createdAt: Date;
        updatedAt: Date;
    }
}
