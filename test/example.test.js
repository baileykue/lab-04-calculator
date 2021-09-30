// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add_two, add } from '../calculations.js';

const test = QUnit.test;

NodeIterator.test;

test('time to test add_two', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add_two(2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

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
