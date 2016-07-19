"use strict";
exports.partyModel = function () {
    return function (state) { return state
        .map(function (_a) {
        var people = _a[0], filter = _a[1];
        return {
            total: people.length,
            people: people.filter(filter),
            attending: people.filter(function (person) { return person.attending; }).length,
            guests: people.reduce(function (acc, curr) { return acc + curr.guests; }, 0),
            attendingPercent: attendingPercentCalculation(people)
        };
    }); };
};
var attendingPercentCalculation = function (people) {
    var totalAttending = people.filter(function (person) { return person.attending; }).length;
    var total = people.length;
    return total > 0 ? Math.round((totalAttending / total) * 100) : 0;
};
//# sourceMappingURL=partyModelSelectors.js.map