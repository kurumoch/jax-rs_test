import { Component, Output, EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';

import { Notebook } from './notebook';
import { NotebooksService } from './notebooks.service';

@Component({
	selector: 'notebooks',
	template: `
		<div class="well">
			<ul class="nav nav-pills nav-stacked">
				<li *ngFor="let notebook of notebooks"
				[class.active]="notebook === selectedNotebook"
				(click)="onSelect(notebook)">
					<a href="#">{{notebook.notebookName}}</a>
				</li>
			</ul>
		</div>
		<div class="btn-group btn-group-justified" id="accordion">
			<div class="btn-group">
				<button type="button" data-toggle="collapse" data-parent="#accordion" data-target="#createNotebook" class="btn btn-primary">Create</button>
			</div>
			<div class="btn-group">
				<button type="button" data-toggle="collapse" data-parent="#accordion" data-target="#editNotebook" class="btn btn-primary">Edit</button>
			</div>
			<div class="btn-group">
				<button type="button" class="btn btn-primary" (click)="delete">Delete</button>
			</div>
		</div>
		<div id="createNotebook" class="collapse well">
			<form>
				<label>Name of notebook: </label><br>
				<input [(ngModel)]="name" [ngModelOptions]="{standalone: true}">
				<input (click)="create($event)" type="submit" value="Create" class="btn btn-default btn-primary btn-sm" >
			</form>
		</div>
		<div id="editNotebook" class="collapse well">
			<form>
				<label>New name of notebook: </label><br>
				<input type="text">
				<input type="submit" value="Edit" class="btn btn-default btn-primary btn-sm">
			</form>
		</div>
	`,
	providers: [NotebooksService]
})
export class NotebooksComponent implements OnInit{
	selectedNotebook: Notebook;
	notebooks: Notebook[];
        name: string = "";
	@Output() onChanged = new EventEmitter<Notebook>();
        @Output() onEdit = new EventEmitter<void>();

	constructor(private notebooksService: NotebooksService) { }
	
	onSelect(notebook: Notebook) {
            this.selectedNotebook = notebook;
            this.onChanged.emit(this.selectedNotebook);
	}
	
	getNotebooks(): void {
            this.notebooksService.getNotebooksFromWeb().then(notebooks => this.notebooks = notebooks);
	}
	
	ngOnInit(): void {
            this.getNotebooks();
	}
	
	getSelectedNotebook(): Notebook {
            return this.selectedNotebook;
	}
	
	create(): void {
            if (this.name != "") {
                this.notebooksService.create(this.name);
                this.onEdit.emit();
            }
	}
	
	delete(): void {
            
	}
	
	edit(): void {
		
	}
}