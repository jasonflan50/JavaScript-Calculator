// This JS file was made to be used with the JavaScript-Calculator program
let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let shouldResetScreen = false;

const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const displayOld = document.getElementById('display-old');
const displayCurrent = document.getElementById('display-current');
const clearButton = document.getElementById('clear');
const backspaceButton = document.getElementById('backspace');
const equalsButton = document.getElementById('equals');

clearButton.addEventListener('click', clear);
backspaceButton.addEventListener('click', backspace);
equalsButton.addEventListener('click', evaluate);

numberButtons.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.textContent))
)

operatorButtons.forEach((button) =>
  button.addEventListener('click', () => setOperation(button.textContent))
)

function appendNumber(number) {
  if (displayCurrent.textContent === '0' || shouldResetScreen)
    resetScreen();
  displayCurrent.textContent += number;
  shouldResetScreen = false;
}

function setOperation(operator) {
  if (currentOperation !== null) evaluate();
  firstOperand = displayCurrent.textContent;
  currentOperation = operator;
  displayOld.textContent = `${firstOperand} ${currentOperation}`;
  shouldResetScreen = true;
}

function evaluate() {
  if (currentOperation === null || shouldResetScreen) return;
  secondOperand = displayCurrent.textContent;
  displayCurrent.textContent = roundResult(
    operate(firstOperand, secondOperand, currentOperation)
  );
  displayOld.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`;
  currentOperation = null;
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000;
}

function resetScreen(){
  displayCurrent.textContent = '';
}

function clear() {
  displayCurrent.textContent = '0';
  displayOld.textContent = '';
  firstOperand = '';
  secondOperand = '';
  currentOperation = null;
}

function backspace() {
  displayCurrent.textContent = displayCurrent.textContent
    .toString()
    .slice(0, -1)
  if (displayCurrent.textContent == '') clear();
}

function addition(x, y) { return x + y;}

function subtraction(x, y) {return x - y;}

function multiplication(x, y) {return x * y;}

function division(x, y) {return x / y;}

// This function will decide which operation to perform
function operate(first, second, operator) {
  x = Number(first);
  y = Number(second);
  return (operator === '+') ? addition(x, y):
  (operator === '-') ? subtraction(x, y):
  (operator === 'x') ? multiplication(x, y):
  (operator === '/' && y !== 0) ? division(x, y): '';
}