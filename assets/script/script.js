const calculator = {
  displayValue: "0",
  secondDisplayValue: "0",
  firstNumber: null,
  waitingForSecondNumber: null,
  operator: null,
  result: "0",
};

let input = document.getElementById("input");
let recent = document.getElementById("recent");

function resetCalculator() {
  input.value = "0";
  recent.value = "";
  calculator.displayValue = "0";
  calculator.secondDisplayValue = "0";
  calculator.firstNumber = null,
  calculator.waitingForSecondNumber = null,
  calculator.operator = null
}

function inputDigit(digit) {
  if (calculator.displayValue === "0") {
    calculator.displayValue = digit;
  } else {
    calculator.displayValue = calculator.displayValue + digit;
  }
  input.value = calculator.displayValue;
}

function inputDecimal(dot) {
  if (!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot;
  }
  input.value = calculator.displayValue;
}

function handleOperator(nextOperator) {
  recent.value = input.value;
  calculator.firstNumber = input.value;
  input.value = "0";
  calculator.displayValue = "0";
  calculator.operator = nextOperator;
}

const performCalculation = {
  "/": (firstNumber, secondNumber) =>
    (calculator.result = firstNumber / secondNumber),
  "*": (firstNumber, secondNumber) =>
    (calculator.result = firstNumber * secondNumber),
  "+": (firstNumber, secondNumber) =>
    (calculator.result = firstNumber + secondNumber),
  "-": (firstNumber, secondNumber) =>
    (calculator.result = firstNumber - secondNumber),
  "%": (firstNumber, secondNumber) =>
    (calculator.result = firstNumber % secondNumber),
};

function handleResult() {
  calculator.result = performCalculation[calculator.operator](
    parseFloat(calculator.firstNumber),
    parseFloat(input.value)
  );
  input.value = calculator.result;
  resetCalculator();
}

function handleDelete() {
  calculator.displayValue = calculator.displayValue.slice(
    0,
    calculator.displayValue.length - 1
  );
  input.value = calculator.displayValue;
}
