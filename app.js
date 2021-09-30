import { add , subtract } from './calculations.js';

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
