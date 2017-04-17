import { Component, ViewChild } from '@angular/core';
import { Notebook } from './notebook';
import { Note } from './note';
import { NotebooksComponent } from './notebooks.component';
import { NotesComponent} from "./notes.component";
import { TextComponent } from "./text.component";

     
@Component({
    selector: 'my-app',
    template: `
		<div class="row">
			<div class="col-sm-4">
				<notebooks (onChanged)="changedSelectedNotebook($event)"
                                           (onEdit)="editedNotebooks($event)"></notebooks>
			</div>

			<div class="col-sm-4">
				<notes (onChangedSelectedNote)="changedSelectedNote($event)"
                                       (onEdit)="editedNotes($event)"></notes>
			</div>

			<div class="col-sm-4 highest">
				<text (onSaved)="savedNote($event)"></text>
			</div>
		</div>
	`,
	styleUrls: ['app/equal.css']
})
export class AppComponent { 
    selectedNotebook: Notebook = undefined;
    selectedNote: Note = undefined;

    @ViewChild(NotebooksComponent)
    private notebooksComponent: NotebooksComponent;

    @ViewChild(NotesComponent)
    private notesComponent: NotesComponent;

    @ViewChild(TextComponent)
    private textComponent: TextComponent;
	
    changedSelectedNotebook(notebook) {
	this.selectedNotebook = notebook;
	this.notesComponent.uploadNotes(this.selectedNotebook);
	this.textComponent.clean();
        this.selectedNote = undefined;
    }

    changedSelectedNote(note) {
	this.selectedNote = note;
        this.textComponent.setText(this.selectedNote.noteText);
    }
    
    editedNotes() {
        this.notesComponent.uploadNotes(this.selectedNotebook);
    }
    
    editedNotebooks() {
        this.notebooksComponent.getNotebooks();
    }
    
    savedNote(text: string) {
        this.notesComponent.save(this.selectedNote.id, text);
    }
}