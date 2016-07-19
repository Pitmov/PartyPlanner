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
var store_log_monitor_1 = require('@ngrx/store-log-monitor');
var userModel_1 = require('../models/userModel');
var store_1 = require('@ngrx/store');
var peopleReducer_1 = require('../reducers/peopleReducer');
var person_list_component_1 = require('./person-list.component');
var person_input_component_1 = require('./person-input.component');
var party_filter_component_1 = require('./party-filter.component');
var party_stats_component_1 = require('./party-stats.component');
var Rx_1 = require('rxjs/Rx');
var partyModelSelectors_1 = require('../models/partyModelSelectors');
var angular2_materialize_1 = require("angular2-materialize");
var top_button_component_1 = require("./top-button.component");
var AppComponent = (function () {
    function AppComponent(_store) {
        var _this = this;
        this._store = _store;
        this.counter = 0;
        this.subscription = Rx_1.Observable.combineLatest(_store.select('people'), _store.select('partyFilter')).let(partyModelSelectors_1.partyModel()).subscribe(function (model) { return _this.model = model; });
    }
    AppComponent.prototype.id = function () {
        this.counter++;
        return Date.now() + this.counter;
    };
    AppComponent.prototype.updateFilter = function (filterAction) {
        this._store.dispatch({
            type: filterAction
        });
    };
    AppComponent.prototype.addPerson = function (name) {
        this._store.dispatch({
            type: peopleReducer_1.peopleActionMap.ADD_PERSON,
            payload: new userModel_1.User(this.id(), name, 0, false)
        });
    };
    AppComponent.prototype.removePerson = function (id) {
        this._store.dispatch({
            type: peopleReducer_1.peopleActionMap.REMOVE_PERSON,
            payload: id
        });
    };
    AppComponent.prototype.addGuest = function (id) {
        this._store.dispatch({
            type: peopleReducer_1.peopleActionMap.ADD_GUEST,
            payload: id
        });
    };
    AppComponent.prototype.removeGuest = function (id) {
        this._store.dispatch({
            type: peopleReducer_1.peopleActionMap.REMOVE_GUEST,
            payload: id
        });
    };
    AppComponent.prototype.toggleAttending = function (id) {
        this._store.dispatch({
            type: peopleReducer_1.peopleActionMap.TOGGLE_ATTENDING,
            payload: id
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-root',
            templateUrl: 'app.component.html',
            directives: [
                store_log_monitor_1.StoreLogMonitorComponent,
                person_list_component_1.PersonListComponent,
                person_input_component_1.PersonInputComponent,
                party_stats_component_1.PartyStatsComponent,
                party_filter_component_1.PartyFilterComponent,
                angular2_materialize_1.MaterializeDirective,
                top_button_component_1.TopButtonComponent
            ]
        }), 
        __metadata('design:paramtypes', [store_1.Store])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map