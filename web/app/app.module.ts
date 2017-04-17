import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }   from './app.component';
import { NotebooksComponent } from './notebooks.component';
import { NotesComponent } from './notes.component';
import { TextComponent } from './text.component';
import { NotebooksService } from './notebooks.service';
import { NotesService } from './notes.service';

@NgModule({
    imports:      [ 
        BrowserModule, 
        FormsModule,
        HttpModule
        ],
    declarations: [ 
        AppComponent, 
	NotebooksComponent, 
	NotesComponent, 
	TextComponent
	],
    bootstrap:    [ 
        AppComponent 
        ],
    providers: [ 
        NotebooksService, 
        NotesService 
        ]
})
export class AppModule { }