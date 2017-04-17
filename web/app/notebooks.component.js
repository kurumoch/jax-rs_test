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
var notebooks_service_1 = require('./notebooks.service');
var NotebooksComponent = (function () {
    function NotebooksComponent(notebooksService) {
        this.notebooksService = notebooksService;
        this.name = "";
        this.onChanged = new core_1.EventEmitter();
        this.onEdit = new core_1.EventEmitter();
    }
    NotebooksComponent.prototype.onSelect = function (notebook) {
        this.selectedNotebook = notebook;
        this.onChanged.emit(this.selectedNotebook);
    };
    NotebooksComponent.prototype.getNotebooks = function () {
        var _this = this;
        this.notebooksService.getNotebooksFromWeb().then(function (notebooks) { return _this.notebooks = notebooks; });
    };
    NotebooksComponent.prototype.ngOnInit = function () {
        this.getNotebooks();
    };
    NotebooksComponent.prototype.getSelectedNotebook = function () {
        return this.selectedNotebook;
    };
    NotebooksComponent.prototype.create = function () {
        if (this.name != "") {
            this.notebooksService.create(this.name);
            this.onEdit.emit();
        }
    };
    NotebooksComponent.prototype.delete = function () {
    };
    NotebooksComponent.prototype.edit = function () {
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NotebooksComponent.prototype, "onChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NotebooksComponent.prototype, "onEdit", void 0);
    NotebooksComponent = __decorate([
        core_1.Component({
            selector: 'notebooks',
            template: "\n\t\t<div class=\"well\">\n\t\t\t<ul class=\"nav nav-pills nav-stacked\">\n\t\t\t\t<li *ngFor=\"let notebook of notebooks\"\n\t\t\t\t[class.active]=\"notebook === selectedNotebook\"\n\t\t\t\t(click)=\"onSelect(notebook)\">\n\t\t\t\t\t<a href=\"#\">{{notebook.notebookName}}</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class=\"btn-group btn-group-justified\" id=\"accordion\">\n\t\t\t<div class=\"btn-group\">\n\t\t\t\t<button type=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#createNotebook\" class=\"btn btn-primary\">Create</button>\n\t\t\t</div>\n\t\t\t<div class=\"btn-group\">\n\t\t\t\t<button type=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#editNotebook\" class=\"btn btn-primary\">Edit</button>\n\t\t\t</div>\n\t\t\t<div class=\"btn-group\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"delete\">Delete</button>\n\t\t\t</div>\n\t\t</div>\n\t\t<div id=\"createNotebook\" class=\"collapse well\">\n\t\t\t<form>\n\t\t\t\t<label>Name of notebook: </label><br>\n\t\t\t\t<input [(ngModel)]=\"name\" [ngModelOptions]=\"{standalone: true}\">\n\t\t\t\t<input (click)=\"create($event)\" type=\"submit\" value=\"Create\" class=\"btn btn-default btn-primary btn-sm\" >\n\t\t\t</form>\n\t\t</div>\n\t\t<div id=\"editNotebook\" class=\"collapse well\">\n\t\t\t<form>\n\t\t\t\t<label>New name of notebook: </label><br>\n\t\t\t\t<input type=\"text\">\n\t\t\t\t<input type=\"submit\" value=\"Edit\" class=\"btn btn-default btn-primary btn-sm\">\n\t\t\t</form>\n\t\t</div>\n\t",
            providers: [notebooks_service_1.NotebooksService]
        }), 
        __metadata('design:paramtypes', [notebooks_service_1.NotebooksService])
    ], NotebooksComponent);
    return NotebooksComponent;
}());
exports.NotebooksComponent = NotebooksComponent;
//# sourceMappingURL=notebooks.component.js.map