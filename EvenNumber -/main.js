let startInput = document.getElementById("num1");
let endInput = document.getElementById("num2");
let outputDiv = document.getElementById("div");

function evenNumbers() {
  let start = Number(startInput.value);
  let end = Number(endInput.value);

  let i = start;
  let output = 0;

  while (i <= end) {
    if (i % 2 == 0) {
      output = i;
      outputDiv.innerHTML = output + " ";
    }
    i++;
  }
}
