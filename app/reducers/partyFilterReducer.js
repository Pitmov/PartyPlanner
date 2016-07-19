"use strict";
exports.partyFiltersActions = {
    SHOW_ATTENDING: 'SHOW_ATTENDING',
    SHOW_ALL: 'SHOW_ALL',
    SHOW_WITH_GUESTS: 'SHOW_WITH_GUESTS'
};
exports.partyFilter = function (state, action) {
    if (state === void 0) { state = function (person) { return person; }; }
    switch (action.type) {
        case exports.partyFiltersActions.SHOW_ATTENDING:
            return function (person) { return person.attending; };
        case exports.partyFiltersActions.SHOW_ALL:
            return function (person) { return person; };
        case exports.partyFiltersActions.SHOW_WITH_GUESTS:
            return function (person) { return person.guests && person.attending; };
        default:
            return state;
    }
};
//# sourceMappingURL=partyFilterReducer.js.map