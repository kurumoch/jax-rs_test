import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Notebook } from './notebook';
import { NOTEBOOKS } from './mock-notebooks';
import {Observable} from "rxjs";

@Injectable ()
export class NotebooksService {
    constructor(private http: Http) { };

    getNotebooks(): Promise<Notebook[]> {
	return Promise.resolve(NOTEBOOKS);
    }

    getNotebooksFromWeb(): Promise<Notebookp[]> {
        return this.http.get('/rest/resources/user/1/notebooks').map((resp:Response) => resp.json())
            .catch((error:any) => {return Observable.throw(error);});
    }
        
    create(notebookName: string) {
        let notebook: Notebook = {id: NOTEBOOKS.length + 1, notebookName: notebookName, noteSet: []};
        NOTEBOOKS.push(notebook);
    }
    
    addNoteToNotebook(noteId: number, notebookId: number) {
        NOTEBOOKS[notebookId].noteSet.push(noteId);
    }
}