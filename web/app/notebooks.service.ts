import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Notebook } from './notebook';
import { NOTEBOOKS } from './mock-notebooks';

@Injectable ()
export class NotebooksService {
    
    constructor(private http: Http) {}
    
    getNotebooks(): Promise<Notebook[]> {
		return Promise.resolve(NOTEBOOKS);
	}
        
    create(notebookName: string) {
        let notebook: Notebook = {id: NOTEBOOKS.length + 1, notebookName: notebookName, noteSet: []};
        NOTEBOOKS.push(notebook);
    }
}