// This file is just a file that helped me in testing password and mail without having to manually write the same stuff over and over again
// and yeah - I need to learn some tool for unit tests

const primitiveTest = function(tested, against) {
    return tested === against;
};

const runMailTests = () => {
    const casesTrue = [
        "asd@o2.pl",
        "asd@tlen.pl",
        "21a#d@o2.pl",
        "21a#d@o2.com",
        "Axd@tlen.museum"
    ];

    const casesFalse = [
        "as d@o2.pl",
        "asd@o 2.pl",
        "asd @o2.pl",
        "asd@ o2.pl",
        "asd@o2pl",
        "@o2.pl",
        "asdo2.pl",
        "asd@o2",
        " ",
        ""
    ];

    for(let x = 0; x < casesTrue.length; x++) {
        if((primitiveTest(validateEmail(casesTrue[x]), true)) !== true){
            console.log("test against " + casesTrue[x] + " failed");
        } else {
            console.log('test against ' + casesTrue[x] + ' passed')
        }
    }

    for(let x = 0; x < casesFalse.length; x++) {
        if((primitiveTest(validateEmail(casesFalse[x]), false)) !== true){
            console.log("test against " + casesFalse[x] + "failed!!");
        } else {
            console.log('test against ' + casesFalse[x] + ' passed')
        }
    }

};

const runPasswordTests = () => {
    const casesTrue = [
        'aAd123@q',
        '123@qASx',
        "123!@#asfgh",
        "123!@#ASDFGH"
    ];

    const casesFalse = [
        'asd',
        'asd2',
        'asd2#4',
        'asdfghjk',
        'ASDFGHJKLO',
        '12345678',
        '!@#$%^&*',
        '12!@aA',
        '23#$$$33#4342',
        "",
        " "
    ];

    for(let x = 0; x < casesTrue.length; x++) {
        if((primitiveTest(validatePass(casesTrue[x]), true)) !== true){
            console.log("test against " + casesTrue[x] + " failed");
        } else {
            console.log('test against ' + casesTrue[x] + ' passed')
        }
    }

    for(let x = 0; x < casesFalse.length; x++) {
        if((primitiveTest(validatePass(casesFalse[x]), false)) !== true){
            console.log("test against " + casesFalse[x] + "failed!!");
        } else {
            console.log('test against ' + casesFalse[x] + ' passed')
        }
    }
};