"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var app_1 = require('./app');
var app_2 = require('./app');
var store_1 = require('@ngrx/store');
var peopleReducer_1 = require('./app/reducers/peopleReducer');
var partyFilterReducer_1 = require('./app/reducers/partyFilterReducer');
var store_devtools_1 = require('@ngrx/store-devtools');
var store_log_monitor_1 = require('@ngrx/store-log-monitor');
var forms_1 = require('@angular/forms');
require("angular2-materialize");
var providers = [
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms(),
    store_1.provideStore({ people: peopleReducer_1.peopleReducer, partyFilter: partyFilterReducer_1.partyFilter })
];
if (app_2.environment.production) {
    core_1.enableProdMode();
}
if (!app_2.environment.production) {
    providers.push(store_devtools_1.instrumentStore({
        monitor: store_log_monitor_1.useLogMonitor({
            visible: false,
            position: 'bottom'
        })
    }));
}
platform_browser_dynamic_1.bootstrap(app_1.AppComponent, providers).catch(function (e) {
    console.log(e);
});
//# sourceMappingURL=main.js.map