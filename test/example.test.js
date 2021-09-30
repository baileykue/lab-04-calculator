// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add , subtract} from '../calculations.js';

const test = QUnit.test;

NodeIterator.test;

test('add function', (expect) => {
    const input1 = 3;
    const input2 = 2;
    const expected = 5;

    const actual = add(input1, input2);

    expect.equal(actual, expected, 'success! test 3+2=5'); 
});

test('add function', (expect) => {
    const input1 = 5;
    const input2 = 4;
    const expected = 9;

    const actual = add(input1, input2);

    expect.equal(actual, expected, 'success! test 4+5=9'); 
});

test('subtraction function', (expect) => {
    const input1 = 10;
    const input2 = 4;
    const expected = 6;

    const actual = subtract(input1, input2);

    expect.equal(actual, expected, 'sucess! test 10-4=6');
});

test('subtraction function', (expect) => {
    const input1 = 90;
    const input2 = 40;
    const expected = 50;

    const actual = subtract(input1, input2);

    expect.equal(actual, expected, 'sucess! test 90-40=50');
});