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
var TextComponent = (function () {
    function TextComponent() {
        this.onSaved = new core_1.EventEmitter();
    }
    TextComponent.prototype.setText = function (text) {
        this.text = text;
    };
    TextComponent.prototype.clean = function () {
        this.text = "";
    };
    TextComponent.prototype.save = function () {
        this.onSaved.emit(this.text);
    };
    return TextComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TextComponent.prototype, "onSaved", void 0);
TextComponent = __decorate([
    core_1.Component({
        selector: 'text',
        template: "\n            <div class=\"well\">\n                <form>\n                    <textarea [(ngModel)]=\"text\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\"></textarea>\n\t\t</form>\n            </div>\n            <div>\n                <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"save($event)\">Save</button>\n            </div>\n\t"
    })
], TextComponent);
exports.TextComponent = TextComponent;
//# sourceMappingURL=text.component.js.map