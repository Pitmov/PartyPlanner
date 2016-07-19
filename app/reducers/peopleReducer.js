"use strict";
var userModel_1 = require('../models/userModel');
exports.peopleActionMap = {
    ADD_GUEST: 'ADD_GUEST',
    REMOVE_GUEST: 'REMOVE_GUEST',
    TOGGLE_ATTENDING: 'TOOGLE_ATTENDING',
    ADD_PERSON: 'ADD_PERSON',
    REMOVE_PERSON: 'REMOVE_PERSON'
};
var details = function (state, action) {
    switch (action.type) {
        case exports.peopleActionMap.ADD_GUEST:
            if (state.id === action.payload) {
                return Object.assign({}, state, { guests: state.guests + 1 });
            }
            return state;
        case exports.peopleActionMap.REMOVE_GUEST:
            if (state.id === action.payload && state.guests > 0) {
                return Object.assign({}, state, { guests: state.guests - 1 });
            }
            return state;
        case exports.peopleActionMap.TOGGLE_ATTENDING:
            if (state.id === action.payload) {
                return Object.assign({}, state, { attending: !state.attending });
            }
            return state;
        default:
            return state;
    }
};
exports.peopleReducer = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case exports.peopleActionMap.ADD_PERSON:
            return state.concat([
                new userModel_1.User(action.payload.id, action.payload.name, 0, false)
            ]);
        case exports.peopleActionMap.REMOVE_PERSON:
            return state.filter(function (person) { return person.id !== action.payload; });
        case exports.peopleActionMap.ADD_GUEST:
            return state.map(function (person) { return details(person, action); });
        case exports.peopleActionMap.REMOVE_GUEST:
            return state.map(function (person) { return details(person, action); });
        case exports.peopleActionMap.TOGGLE_ATTENDING:
            return state.map(function (person) { return details(person, action); });
        default:
            return state;
    }
};
//# sourceMappingURL=peopleReducer.js.map