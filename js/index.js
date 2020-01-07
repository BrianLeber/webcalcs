// Variables
let number = 4;
let baseNumber;
let factorNumber;

console.log(baseNumber, factorNumber);

// Objects

// Functions

function updateNumbers() {
  baseNumber = document.getElementById("toSquare").value;
  factorNumber = document.getElementById("factorBy").value;
}

function toTheNth(number, factor) {
  let increase = number;
  let n = 1;
  while (n < factor) {
    console.log(number, factor, n, increase);
    increase = increase * number;
    n++;
  }
  return increase;
}

function go() {
  // alert(square(number));
  updateNumbers();
  let result = toTheNth(baseNumber, factorNumber);
  alert(result);
}
