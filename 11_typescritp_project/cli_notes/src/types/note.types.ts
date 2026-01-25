type NoteId = string;
type Tag = string;
type NoteStatus = "active" | "archived" | "completed";
type NotePriority = "low" | "medium" | "high";

interface NoteContent {
    title: string;
    description: string;
}

interface Timestamps {
    createdAt: Date;
    updatedAt: Date;
    archivedAt?: Date;
}

interface AuditInfo {
    createdBy: string;
    lastModifiedBy?: string;
}

interface NoteType {
    id: NoteId;
    content: NoteContent;
    tags?: Tag[];
    status: NoteStatus;
    priority: NotePriority;
    timestamps: Timestamps;
    auditInfo: AuditInfo;
}

interface addNoteInput {
    title: string;
    description: string;
    tags: Tag[];
    status: NoteStatus;
    priority: NotePriority;
}

interface NoteFilter {
    priority?: NotePriority;
    status?: NoteStatus;
    tags?: Tag[];
}

export { NoteId, Tag, NoteStatus, NotePriority, NoteType, addNoteInput, NoteFilter };
