import { Input, Component, EventEmitter, Output } from '@angular/core';

import { Note } from './note';
import { Notebook } from './notebook';
import { NotesService } from './notes.service';

@Component({
	selector: 'notes',
	template: `
            <div class="well">
		<ul class="nav nav-pills nav-stacked">
                    <li *ngFor="let note of notes"
			[class.active]="note === selectedNote" 
			(click)="onSelect(note)">
			<a href="#">{{note.noteName}}</a>
                    </li>
		</ul>
            </div>
            <div class="btn-group btn-group-justified" id="accordion">
		<div class="btn-group">
                    <button type="button" data-toggle="collapse" data-parent="#accordion" data-target="#createNote" class="btn btn-primary">Create</button>
		</div>
		<div class="btn-group">
                    <button type="button" data-toggle="collapse" data-parent="#accordion" data-target="#editNote" class="btn btn-primary">Edit</button>
		</div>
                <div class="btn-group">
                    <button type="button" class="btn btn-primary" (click)="deleteNote($event)">Delete</button>
		</div>
            </div>
            <div id="createNote" class="collapse well">
		<form class="block">
                    <label>Name of note: </label><br>
                    <input name="name" type="text">
                    <input type="submit" value="Create" class="btn btn-default btn-primary btn-sm">
		</form>
            </div>
            <div id="editNote" class="collapse well">
		<form>
                    <label>New name of note: </label><br>
                    <input [(ngModel)]="name" [ngModelOptions]="{standalone: true}">
                    <input type="submit" value="Edit" class="btn btn-default btn-primary btn-sm">
		</form>
                <h1>{{name}}</h1>
            </div>
	`,
	providers: [ NotesComponent ]
})
export class NotesComponent {
	selectedNote: Note = undefined;
	notes: Note[];
        name: string = "";
	@Output() onChangedSelectedNote = new EventEmitter<Note>();
        @Output() onEdit = new EventEmitter<void>();
	
	constructor(private notesService: NotesService) { }
	
	onSelect(note: Note) {
            this.selectedNote = note;
            this.onChangedSelectedNote.emit(this.selectedNote);
	}
        
        reload() {
            this.selectedNote = undefined;
        }
	
	uploadNotes(notebook: Notebook): void {
            this.notesService.getNotes(notebook).then(notes => this.notes = notes);
            this.reload();
	}
	
	create(): void {
            if (this.name != "") {
                this.notesService.create(this.name);
                this.onEdit.emit();
            }
	}
	
	deleteNote(): void {
            if (this.selectedNote != undefined) {
                this.notesService.deleteNote(this.selectedNote.id);
                this.onEdit.emit();
            }
	}
	
	edit(): void {
            
	}
        
        save(noteId: number, text: string) {
            this.notesService.save(noteId, text);
        }
}