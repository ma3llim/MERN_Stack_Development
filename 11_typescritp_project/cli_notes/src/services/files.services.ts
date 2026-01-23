const addNotes = (note: NoteType) => {
    console.log("test file services");
};
const deleteNotes = (noteId: Pick<NoteType, "id">): void => {};
const updateNotes = (noteId: string, note: Partial<NoteType>): void => {};
const getNotes = (): NoteType[] => {
    return [];
};

export { addNotes, deleteNotes, updateNotes, getNotes };
