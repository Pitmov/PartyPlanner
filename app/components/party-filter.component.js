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
var partyFilterReducer_1 = require("../reducers/partyFilterReducer");
var PartyFilterComponent = (function () {
    function PartyFilterComponent() {
        this.filters = [
            { friendly: "All", action: partyFilterReducer_1.partyFiltersActions.SHOW_ALL },
            { friendly: "Attending", action: partyFilterReducer_1.partyFiltersActions.SHOW_ATTENDING },
            {
                friendly: 'Attending with Guests',
                action: partyFilterReducer_1.partyFiltersActions.SHOW_WITH_GUESTS
            }
        ];
        this.updateFilter = new core_1.EventEmitter();
    }
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PartyFilterComponent.prototype, "updateFilter", void 0);
    PartyFilterComponent = __decorate([
        core_1.Component({
            selector: "party-filter",
            templateUrl: './app/components/party-filter.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], PartyFilterComponent);
    return PartyFilterComponent;
}());
exports.PartyFilterComponent = PartyFilterComponent;
//# sourceMappingURL=party-filter.component.js.map