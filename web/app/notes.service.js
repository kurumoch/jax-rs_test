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
var core_1 = require('@angular/core');
var mock_notes_1 = require('./mock-notes');
var NotesService = (function () {
    function NotesService() {
    }
    NotesService.prototype.getNotes = function (notebook) {
        var result = [];
        for (var _i = 0, NOTES_1 = mock_notes_1.NOTES; _i < NOTES_1.length; _i++) {
            var note = NOTES_1[_i];
            for (var _a = 0, _b = notebook.noteSet; _a < _b.length; _a++) {
                var id = _b[_a];
                if (note.id == id)
                    result.push(note);
            }
        }
        return Promise.resolve(result);
    };
    NotesService.prototype.getAllNotes = function () {
        return Promise.resolve(mock_notes_1.NOTES);
    };
    NotesService.prototype.deleteNote = function (id) {
        var result;
        for (var _i = 0, NOTES_2 = mock_notes_1.NOTES; _i < NOTES_2.length; _i++) {
            var note = NOTES_2[_i];
            if (note.id == id)
                result == mock_notes_1.NOTES.indexOf(note);
        }
        mock_notes_1.NOTES.splice(result, 1);
    };
    NotesService.prototype.create = function (noteName) {
        var note = { id: mock_notes_1.NOTES.length + 1, noteName: noteName, noteText: "" };
        mock_notes_1.NOTES.push(note);
        return note.id;
    };
    NotesService.prototype.save = function (noteId, text) {
        mock_notes_1.NOTES[noteId].noteText = text;
    };
    NotesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], NotesService);
    return NotesService;
}());
exports.NotesService = NotesService;
//# sourceMappingURL=notes.service.js.map