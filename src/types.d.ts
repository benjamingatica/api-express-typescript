export interface NoteEntry {
  id: string,
  content: string,
  date: string,
  important: boolean,
}

export type NewNoteEntry = Omit<NoteEntry, 'id'>
