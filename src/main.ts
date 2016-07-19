import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import { AppComponent } from './app';
import { environment } from './app';
import { provideStore } from '@ngrx/store';
import { peopleReducer } from './app/reducers/peopleReducer';
import { partyFilter } from './app/reducers/partyFilterReducer';
import { instrumentStore } from '@ngrx/store-devtools';
import { useLogMonitor } from '@ngrx/store-log-monitor';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import "angular2-materialize";

let providers = [
  disableDeprecatedForms(),
  provideForms(),
  provideStore({people: peopleReducer, partyFilter: partyFilter})
];

if (environment.production) {
  enableProdMode();
}

if (!environment.production) {
  providers.push(instrumentStore({
    monitor: useLogMonitor({
      visible: false,
      position: 'bottom'
    })
  }));
}

bootstrap(AppComponent, providers).catch((e) => {
  console.log(e);
}) ;
