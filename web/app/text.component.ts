import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'text',
	template: `
            <div class="well">
                <form>
                    <textarea [(ngModel)]="text" class="form-control" [ngModelOptions]="{standalone: true}"></textarea>
		</form>
            </div>
            <div>
                <button type="button" class="btn btn-primary btn-block" (click)="save($event)">Save</button>
            </div>
	`
})
export class TextComponent {
    text: string;
    @Output() onSaved = new EventEmitter<string>();

    setText(text: string) {
        this.text = text;
    }

    clean() {
        this.text = "";
    }
    
    save() {
        this.onSaved.emit(this.text);
    }
}