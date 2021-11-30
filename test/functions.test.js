// IMPORT MODULES under test here:
import { 
    addExclamationPoints,
    multiplyBySeven,
    multiplyBy12ThenHalve,
    divideThenMultiply,
    returnAsAnArray,
    returnAsAString,
    makeLuckyGreeting,
    getSecondItem,
    getLastItem,
    getRandomNumber
} from '../functions.js';

const { test, skip } = QUnit;

//addExclamationPoints
test('check to see if addExclamationPoints adds 3x !!! to string', (expect) => {
    const expected1 = 'puppy!!!';

    const actual1 = addExclamationPoints('puppy');

    expect.equal(actual1, expected1, 'this should return "puppy!!!"');


    const expected2 = 'kitty!!!';

    const actual2 = addExclamationPoints('kitty');

    expect.equal(actual2, expected2, 'this should return "kitty!!!"');


    const expected3 = 'lizard!!!';

    const actual3 = addExclamationPoints('lizard');

    expect.equal(actual3, expected3, 'this should return "lizard!!!"');
});

//multiplyBySeven
test('check to see if multiplyBySeven successfully multiplies by 7', (expect) => {
    const expected1 = 28;

    const actual1 = multiplyBySeven(4);

    expect.equal(actual1, expected1, 'this should return 28');


    const expected2 = 35;

    const actual2 = multiplyBySeven(5);

    expect.equal(actual2, expected2, 'this should return 35');


    const expected3 = 70;

    const actual3 = multiplyBySeven(10);

    expect.equal(actual3, expected3, 'this should return 70');
});

//multiplyBy12ThenHalve
test('check to see if multiplyBy12ThenHalve successfully multiplies by 7 then by .5', (expect) => {
    const expected1 = 24;

    const actual1 = multiplyBy12ThenHalve(4);

    expect.equal(actual1, expected1, 'this should return 24');


    const expected2 = 30;

    const actual2 = multiplyBy12ThenHalve(5);

    expect.equal(actual2, expected2, 'this should return 30');


    const expected3 = 60;

    const actual3 = multiplyBy12ThenHalve(10);

    expect.equal(actual3, expected3, 'this should return 60');
});

//divideThenMultiply
test('check to see if divideThenMultiply successfully divides the first by the second, then multiply the result by the third', (expect) => {
    const expected1 = 10;

    const actual1 = divideThenMultiply(8, 4, 5);

    expect.equal(actual1, expected1, 'this should return 10');


    const expected2 = 20;

    const actual2 = divideThenMultiply(10, 2, 4);

    expect.equal(actual2, expected2, 'this should return 20');


    const expected3 = 24;

    const actual3 = divideThenMultiply(12, 3, 6);

    expect.equal(actual3, expected3, 'this should return 24');
});

//returnAsAnArray
test('check to see if returnAsAnArray successfully takes three numbers and returns as an array', (expect) => {
    const expected1 = [8, 4, 5];

    const actual1 = returnAsAnArray(8, 4, 5);

    expect.deepEqual(actual1, expected1, 'this should return [8, 4, 5]');


    const expected2 = [10, 2, 4];

    const actual2 = returnAsAnArray(10, 2, 4);

    expect.deepEqual(actual2, expected2, 'this should return [10, 2, 4]');


    const expected3 = [12, 3, 6];

    const actual3 = returnAsAnArray(12, 3, 6);

    expect.deepEqual(actual3, expected3, 'this should return [12, 3, 6]');
});

//returnAsAString
test('check to see if returnAsAString successfully takes three numbers and returns as mushed string', (expect) => {
    const expected1 = '845';

    const actual1 = returnAsAString(8, 4, 5);

    expect.deepEqual(actual1, expected1, 'this should return "845"');


    const expected2 = '1024';

    const actual2 = returnAsAString(10, 2, 4);

    expect.deepEqual(actual2, expected2, 'this should return "1042"');


    const expected3 = '1236';

    const actual3 = returnAsAString(12, 3, 6);

    expect.deepEqual(actual3, expected3, 'this should return "1236"');
});

//makeLuckyGreeting
test('check to see if makeLuckyGreeting takes in two numbers and return a greeting announcing that the sum of those numbers is today\'s lucky number', (expect) => {
    const expected1 = 'Hello! Your lucky number for the day is 12.';

    const actual1 = makeLuckyGreeting(8, 4);

    expect.deepEqual(actual1, expected1, 'this should return "Hello! Your lucky number for the day is 12."');


    const expected2 = 'Hello! Your lucky number for the day is 13.';

    const actual2 = makeLuckyGreeting(10, 3);

    expect.deepEqual(actual2, expected2, 'this should return "Hello! Your lucky number for the day is 13."');


    const expected3 = 'Hello! Your lucky number for the day is 15.';

    const actual3 = makeLuckyGreeting(12, 3);

    expect.deepEqual(actual3, expected3, 'this should return "Hello! Your lucky number for the day is 15."');
});


//getSecondItem
test('check to see if getSecondItem take an array and return the second item in the array', (expect) => {
    const expected1 = 'bike';

    const actual1 = getSecondItem(['car', 'bike', 'bus']);

    expect.deepEqual(actual1, expected1, 'this should return "bike"');


    const expected2 = 'pear';

    const actual2 = getSecondItem(['apple', 'pear', 'orange', 'banana']);

    expect.deepEqual(actual2, expected2, 'this should return "pear"');


    const expected3 = 'Vespa';

    const actual3 = getSecondItem(['Ford', 'Vespa']);

    expect.deepEqual(actual3, expected3, 'this should return "Vespa"');
});


//getLastItem
test('check to see if getLastItem take an array and return the LAST item in the array, no matter the array\'s length', (expect) => {
    const expected1 = 'bus';

    const actual1 = getLastItem(['car', 'bike', 'bus']);

    expect.deepEqual(actual1, expected1, 'this should return "bike"');


    const expected2 = 'banana';

    const actual2 = getLastItem(['apple', 'pear', 'orange', 'banana']);

    expect.deepEqual(actual2, expected2, 'this should return "pear"');


    const expected3 = 'Vespa';

    const actual3 = getLastItem(['Ford', 'Vespa']);

    expect.deepEqual(actual3, expected3, 'this should return "Vespa"');
});


//BONUS
//getRandomNumber
test('check to see if getRandomNumber makes a random number (integer) between 0 and 5', (expect) => {
    const expected = 'number';

    const actual = getRandomNumber();

    expect.equal(typeof actual, expected, 'this should check if it returns a number');



    expect.equal(true, actual === 0 || actual === 1 || actual === 2 || actual === 3 || actual === 4, 'this should check if the number returned is 0, 1, 2, 3, or 4 ');


    expect.equal(true, actual >= 0 && actual <= 4, 'this should check if the number returned is between 0 and 5 ');

});






// skip('this test should be skipped', (expect) => {
//     const expected = true;

//     const actual = true;

//     expect.equal(actual, expected);
// });

