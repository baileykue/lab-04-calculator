// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add , subtract , multiply , divide , modulo } from '../calculations.js';

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

test('multiplication function', (expect) => {
    const input1 = 9;
    const input2 = 4;
    const expected = 36;

    const actual = multiply(input1, input2);

    expect.equal(actual, expected, 'sucess! test 9x4=36');
});

test('multiplication function', (expect) => {
    const input1 = 7;
    const input2 = 3;
    const expected = 21;

    const actual = multiply(input1, input2);

    expect.equal(actual, expected, 'sucess! test 7x3=21');
});

test('division function', (expect) => {
    const input1 = 9;
    const input2 = 3;
    const expected = 3;

    const actual = divide(input1, input2);

    expect.equal(actual, expected, 'sucess! test 9/3=3');
});

test('division function', (expect) => {
    const input1 = 45;
    const input2 = 9;
    const expected = 5;

    const actual = divide(input1, input2);

    expect.equal(actual, expected, 'sucess! test 45/9=5');
});

test('modulo function', (expect) => {
    const input1 = 4;
    const input2 = 2;
    const expected = 0;

    const actual = modulo(input1, input2);

    expect.equal(actual, expected, 'sucess! test 4%2=0');
});

test('modulo function', (expect) => {
    const input1 = 35;
    const input2 = 4;
    const expected = 3;

    const actual = modulo(input1, input2);

    expect.equal(actual, expected, 'sucess! test 35%4=3');
});
