let numberOne = document.getElementById("num1");
let numberTwo = document.getElementById("num2");
let operator = document.getElementById("operator");
let calculateButton = document.getElementById("calculate");
let resultDiv = document.getElementById("result");

calculateButton.addEventListener("click", function () {
  let numOne = Number(numberOne.value);
  let numTwo = Number(numberTwo.value);
  let op = operator.value;
  let result;

  switch (op) {
    case "+":
      result = numOne + numTwo;
      break;
    case "-":
      result = numOne - numTwo;
      break;
    case "*":
      result = numOne * numTwo;
      break;
    case "/":
      result = numOne / numTwo;
      break;
  }
  resultDiv.innerHTML = "The result is: " + result;
});
