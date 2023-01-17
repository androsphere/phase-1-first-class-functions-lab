// Code your solution in this file!
const returnFirstTwoDrivers = function(names){
    return names.slice(0,2);
}
const returnLastTwoDrivers = function(names){
    return names.slice(2,4);
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(value){
    return function (fare){
        return fare * value;
    }
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers(names, funct){
    let newnames = funct(names);
    return newnames;
}
