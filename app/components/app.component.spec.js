/* tslint:disable:no-unused-variable */
"use strict";
var testing_1 = require('@angular/core/testing');
var app_component_1 = require('./app.component');
var store_1 = require('@ngrx/store');
var peopleReducer_1 = require('../reducers/peopleReducer');
var partyFilterReducer_1 = require('../reducers/partyFilterReducer');
testing_1.beforeEachProviders(function () { return [app_component_1.AppComponent,
    store_1.provideStore({ people: peopleReducer_1.peopleReducer, partyFilter: partyFilterReducer_1.partyFilter })]; });
testing_1.describe('App: FactsProject', function () {
    testing_1.it('should create the app', testing_1.inject([app_component_1.AppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('add person function test', testing_1.inject([app_component_1.AppComponent], testing_1.fakeAsync(function (app) {
        app.addPerson('Pitmov');
        testing_1.tick();
        testing_1.expect(app.model.people[0].name).toBe('Pitmov');
    })));
    testing_1.it('remove person function test', testing_1.inject([app_component_1.AppComponent], testing_1.fakeAsync(function (app) {
        app.addPerson('Pitmov');
        testing_1.tick();
        var id = app.model.people[0].id;
        app.addPerson('Test person');
        testing_1.tick();
        testing_1.expect(app.model.people.length).toBe(2);
        app.removePerson(id);
        testing_1.tick();
        testing_1.expect(app.model.people[0].name).toBe('Test person');
        app.removePerson(app.model.people[0].id);
        testing_1.tick();
        testing_1.expect(app.model.people.length).toBe(0);
    })));
    //others function tests here
});
//# sourceMappingURL=app.component.spec.js.map