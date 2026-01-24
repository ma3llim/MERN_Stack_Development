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
}

export { NoteId, Tag, NoteStatus, NotePriority, NoteContent, Timestamps, AuditInfo, NoteType };
