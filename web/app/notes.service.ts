import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Note } from './note';
import { Notebook } from './notebook';
import { NOTES } from './mock-notes';

@Injectable()
export class NotesService {
    constructor(private http: Http) { }
    
    getNotes(notebook: Notebook): Promise<Note[]> {
        let result: Note[] = [];
        for (let note of NOTES) {
            for (let id of notebook.noteSet) {
            if (note.id == id)
                result.push(note);
            }
	}
	return Promise.resolve(result);
    }
	
    getAllNotes(): Promise<Note[]> {
    	return Promise.resolve(NOTES);
    }
        
    deleteNote(id: number) {
        let result: number;
        for (let note of NOTES) {
            if (note.id == id)
                result == NOTES.indexOf(note);
        }
        NOTES.splice(result, 1);
    }
    
    create(noteName: string) {
        let note: Note = {id: NOTES.length+1, noteName: noteName, noteText: ""};
        NOTES.push(note);
    }
    
    save(noteId: number, text: string) {
        NOTES[noteId].noteText = text;
    }
}