import { add , subtract , multiply , divide , modulo } from './calculations.js';

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

const divideInput1 = document.getElementById('divide-input1');
const divideInput2 = document.getElementById('divide-input2');
const divideButton = document.getElementById('divide-button');
const divideAnswer = document.getElementById('divide-answer');

divideButton.addEventListener('click', ()=>{
  const value1 = Number(divideInput1.value);
  const value2 = Number(divideInput2.value);
  const result = divide(value1, value2);
  divideAnswer.textContent = result; 
});

const moduloInput1 = document.getElementById('modulo-input1');
const moduloInput2 = document.getElementById('modulo-input2');
const moduloButton = document.getElementById('modulo-button');
const moduloAnswer = document.getElementById('modulo-answer');

moduloButton.addEventListener('click', ()=>{
  const value1 = Number(moduloInput1.value);
  const value2 = Number(moduloInput2.value);
  const result = modulo(value1, value2);
  moduloAnswer.textContent = result; 
});