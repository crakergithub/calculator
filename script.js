let display = document.getElementById('display');
let expression = '';

function clearDisplay() {
  display.value = '';
  expression = '';
}

function appendNumber(number) {
  display.value += number;
  expression += number;
}

function appendOperator(operator) {
  display.value += operator;
  expression += operator;
}

function deleteLastCharacter() {
  display.value = display.value.slice(0, -1);
  expression = expression.slice(0, -1);
}

function calculate() {
  let result = eval(expression);
  display.value = result;
  expression = '';
}
