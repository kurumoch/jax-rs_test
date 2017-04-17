"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var notes_service_1 = require("./notes.service");
var NotesComponent = NotesComponent_1 = (function () {
    function NotesComponent(notesService) {
        this.notesService = notesService;
        this.selectedNote = undefined;
        this.name = "";
        this.onChangedSelectedNote = new core_1.EventEmitter();
        this.onEdit = new core_1.EventEmitter();
    }
    NotesComponent.prototype.onSelect = function (note) {
        this.selectedNote = note;
        this.onChangedSelectedNote.emit(this.selectedNote);
    };
    NotesComponent.prototype.reload = function () {
        this.selectedNote = undefined;
    };
    NotesComponent.prototype.uploadNotes = function (notebook) {
        var _this = this;
        this.notesService.getNotes(notebook).then(function (notes) { return _this.notes = notes; });
        this.reload();
    };
    NotesComponent.prototype.create = function () {
        if (this.name != "") {
            this.notesService.create(this.name);
            this.onEdit.emit();
        }
    };
    NotesComponent.prototype.deleteNote = function () {
        if (this.selectedNote != undefined) {
            this.notesService.deleteNote(this.selectedNote.id);
            this.onEdit.emit();
        }
    };
    NotesComponent.prototype.edit = function () {
    };
    NotesComponent.prototype.save = function (noteId, text) {
        this.notesService.save(noteId, text);
    };
    return NotesComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], NotesComponent.prototype, "onChangedSelectedNote", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], NotesComponent.prototype, "onEdit", void 0);
NotesComponent = NotesComponent_1 = __decorate([
    core_1.Component({
        selector: 'notes',
        template: "\n            <div class=\"well\">\n\t\t<ul class=\"nav nav-pills nav-stacked\">\n                    <li *ngFor=\"let note of notes\"\n\t\t\t[class.active]=\"note === selectedNote\" \n\t\t\t(click)=\"onSelect(note)\">\n\t\t\t<a href=\"#\">{{note.noteName}}</a>\n                    </li>\n\t\t</ul>\n            </div>\n            <div class=\"btn-group btn-group-justified\" id=\"accordion\">\n\t\t<div class=\"btn-group\">\n                    <button type=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#createNote\" class=\"btn btn-primary\">Create</button>\n\t\t</div>\n\t\t<div class=\"btn-group\">\n                    <button type=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#editNote\" class=\"btn btn-primary\">Edit</button>\n\t\t</div>\n                <div class=\"btn-group\">\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteNote($event)\">Delete</button>\n\t\t</div>\n            </div>\n            <div id=\"createNote\" class=\"collapse well\">\n\t\t<form class=\"block\">\n                    <label>Name of note: </label><br>\n                    <input name=\"name\" type=\"text\">\n                    <input type=\"submit\" value=\"Create\" class=\"btn btn-default btn-primary btn-sm\">\n\t\t</form>\n            </div>\n            <div id=\"editNote\" class=\"collapse well\">\n\t\t<form>\n                    <label>New name of note: </label><br>\n                    <input [(ngModel)]=\"name\" [ngModelOptions]=\"{standalone: true}\">\n                    <input type=\"submit\" value=\"Edit\" class=\"btn btn-default btn-primary btn-sm\">\n\t\t</form>\n                <h1>{{name}}</h1>\n            </div>\n\t",
        providers: [NotesComponent_1]
    }),
    __metadata("design:paramtypes", [notes_service_1.NotesService])
], NotesComponent);
exports.NotesComponent = NotesComponent;
var NotesComponent_1;
//# sourceMappingURL=notes.component.js.map