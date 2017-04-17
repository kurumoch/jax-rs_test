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
var http_1 = require("@angular/http");
var mock_notebooks_1 = require("./mock-notebooks");
var NotebooksService = (function () {
    function NotebooksService(http) {
        this.http = http;
    }
    NotebooksService.prototype.getNotebooks = function () {
        return Promise.resolve(mock_notebooks_1.NOTEBOOKS);
    };
    NotebooksService.prototype.create = function (notebookName) {
        var notebook = { id: mock_notebooks_1.NOTEBOOKS.length + 1, notebookName: notebookName, noteSet: [] };
        mock_notebooks_1.NOTEBOOKS.push(notebook);
    };
    return NotebooksService;
}());
NotebooksService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], NotebooksService);
exports.NotebooksService = NotebooksService;
//# sourceMappingURL=notebooks.service.js.map