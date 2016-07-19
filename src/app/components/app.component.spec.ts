/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject, tick, fakeAsync
} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideStore } from '@ngrx/store';
import { peopleReducer } from '../reducers/peopleReducer';
import { partyFilter } from '../reducers/partyFilterReducer';

beforeEachProviders(() => [AppComponent,
  provideStore({people: peopleReducer, partyFilter: partyFilter})]);

describe('App: FactsProject', () => {
  it('should create the app',
      inject([AppComponent], (app: AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('add person function test',
      inject([AppComponent], fakeAsync((app: AppComponent) => {
    app.addPerson('Pitmov');
    tick();
    expect(app.model.people[0].name).toBe('Pitmov');
  })));

  it('remove person function test',
      inject([AppComponent], fakeAsync((app: AppComponent) => {
    app.addPerson('Pitmov');
    tick();
    let id = app.model.people[0].id;
    app.addPerson('Test person');
    tick();
    expect(app.model.people.length).toBe(2);
    app.removePerson(id);
    tick();
    expect(app.model.people[0].name).toBe('Test person');
    app.removePerson(app.model.people[0].id);
    tick();
    expect(app.model.people.length).toBe(0);
  })));

  //others function tests here
});
