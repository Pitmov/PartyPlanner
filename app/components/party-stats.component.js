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
var PartyStatsComponent = (function () {
    function PartyStatsComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PartyStatsComponent.prototype, "invited", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PartyStatsComponent.prototype, "attending", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PartyStatsComponent.prototype, "guests", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PartyStatsComponent.prototype, "attendingPercent", void 0);
    PartyStatsComponent = __decorate([
        core_1.Component({
            selector: 'party-stats',
            templateUrl: './app/components/party-stats.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], PartyStatsComponent);
    return PartyStatsComponent;
}());
exports.PartyStatsComponent = PartyStatsComponent;
//# sourceMappingURL=party-stats.component.js.map