"use strict";

// This file is just a file that helped me in testing password and mail without having to manually write the same stuff over and over again
// and yeah - I need to learn some tool for unit tests

var primitiveTest = function primitiveTest(tested, against) {
    return tested === against;
};

var runMailTests = function runMailTests() {
    var casesTrue = ["asd@o2.pl", "asd@tlen.pl", "21a#d@o2.pl", "21a#d@o2.com", "Axd@tlen.museum"];

    var casesFalse = ["as d@o2.pl", "asd@o 2.pl", "asd @o2.pl", "asd@ o2.pl", "asd@o2pl", "@o2.pl", "asdo2.pl", "asd@o2", " ", ""];

    for (var x = 0; x < casesTrue.length; x++) {
        if (primitiveTest(validateEmail(casesTrue[x]), true) !== true) {
            console.log("test against " + casesTrue[x] + " failed");
        } else {
            console.log('test against ' + casesTrue[x] + ' passed');
        }
    }

    for (var _x = 0; _x < casesFalse.length; _x++) {
        if (primitiveTest(validateEmail(casesFalse[_x]), false) !== true) {
            console.log("test against " + casesFalse[_x] + "failed!!");
        } else {
            console.log('test against ' + casesFalse[_x] + ' passed');
        }
    }
};

var runPasswordTests = function runPasswordTests() {
    var casesTrue = ['aAd123@q', '123@qASx', "123!@#asfgh", "123!@#ASDFGH"];

    var casesFalse = ['asd', 'asd2', 'asd2#4', 'asdfghjk', 'ASDFGHJKLO', '12345678', '!@#$%^&*', '12!@aA', '23#$$$33#4342', "", " "];

    for (var x = 0; x < casesTrue.length; x++) {
        if (primitiveTest(validatePass(casesTrue[x]), true) !== true) {
            console.log("test against " + casesTrue[x] + " failed");
        } else {
            console.log('test against ' + casesTrue[x] + ' passed');
        }
    }

    for (var _x2 = 0; _x2 < casesFalse.length; _x2++) {
        if (primitiveTest(validatePass(casesFalse[_x2]), false) !== true) {
            console.log("test against " + casesFalse[_x2] + "failed!!");
        } else {
            console.log('test against ' + casesFalse[_x2] + ' passed');
        }
    }
};