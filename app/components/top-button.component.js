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
var TopButtonComponent = (function () {
    function TopButtonComponent(renderer, element) {
        var _this = this;
        this.renderer = renderer;
        this.element = element;
        this.windowScrollPosition = 0;
        this.renderer.listenGlobal('window', 'scroll', function (evt) {
            _this.windowScrollPosition = window.scrollY;
            _this.elementObj = _this.element.nativeElement.querySelector('a');
            if (_this.windowScrollPosition) {
                _this.elementObj.style.top = '20px';
                _this.elementObj.style.visibility = 'visible';
            }
            else {
                _this.elementObj.style.visibility = 'hidden';
                _this.elementObj.style.top = '-100px';
            }
        });
    }
    TopButtonComponent.prototype.ngAfterViewChecked = function () {
        if (this.element.nativeElement.querySelector('a')) {
        }
    };
    TopButtonComponent.prototype.moveTop = function (duration) {
        event.preventDefault();
        var scrollHeight = window.scrollY, scrollStep = Math.PI / (duration / 15), cosParameter = scrollHeight / 2;
        var scrollCount = 0, scrollMargin, scrollInterval = setInterval(function () {
            if (window.scrollY != 0) {
                scrollCount = scrollCount + 1;
                scrollMargin = cosParameter -
                    cosParameter * Math.cos(scrollCount * scrollStep);
                window.scrollTo(0, (scrollHeight - scrollMargin));
            }
            else
                clearInterval(scrollInterval);
        }, 15);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TopButtonComponent.prototype, "duration", void 0);
    TopButtonComponent = __decorate([
        core_1.Component({
            selector: "top-button",
            template: "\n  <a (click)=\"moveTop(duration)\" href=\"#\"\n  class=\"btn-floating btn-large waves-effect waves-light red blue darken-4\">\n  <i class=\"material-icons\">\n    <i class=\"material-icons\">arrow_upward</i>\n  </i>\n  </a>\n",
            styleUrls: ['./app/components/top-button.component.css']
        }), 
        __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef])
    ], TopButtonComponent);
    return TopButtonComponent;
}());
exports.TopButtonComponent = TopButtonComponent;
//# sourceMappingURL=top-button.component.js.map