import { add , subtract , multiply } from './calculations.js';

const addInput1 = document.getElementById('add-input1');
const addInput2 = document.getElementById('add-input2');
const addButton = document.getElementById('add-button');
const addAnswer = document.getElementById('add-answer');

addButton.addEventListener('click', ()=>{
  const value1 = Number(addInput1.value);
  const value2 = Number(addInput2.value);
  const result = add(value1, value2);
  addAnswer.textContent = result;
});

const subtractInput1 = document.getElementById('subtract-input1');
const subtractInput2 = document.getElementById('subtract-input2');
const subtractButton = document.getElementById('subtract-button');
const subtractAnswer = document.getElementById('subtract-answer');

subtractButton.addEventListener('click', ()=>{
  const value1 = Number(subtractInput1.value);
  const value2 = Number(subtractInput2.value);
  const result = subtract(value1, value2);
  subtractAnswer.textContent = result; 
});

const multiplyInput1 = document.getElementById('multiply-input1');
const multiplyInput2 = document.getElementById('multiply-input2');
const multiplyButton = document.getElementById('multiply-button');
const multiplyAnswer = document.getElementById('multiply-answer');

multiplyButton.addEventListener('click', ()=>{
  const value1 = Number(multiplyInput1.value);
  const value2 = Number(multiplyInput2.value);
  const result = multiply(value1, value2);
  multiplyAnswer.textContent = result; 
});

