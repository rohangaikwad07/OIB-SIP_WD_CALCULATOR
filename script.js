function insert(symbol) {
  document.getElementById("display").value += symbol;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  let current = document.getElementById("display").value;
  document.getElementById("display").value = current.slice(0, -1);
}

function calculate() {
  try {
      let expression = document.getElementById("display").value;
      expression = expression.replace('^', '**');  // Replace ^ with ** for exponentiation
      document.getElementById("display").value = eval(expression);
  } catch (e) {
      document.getElementById("display").value = "Error";
  }
}

function sqrt() {
  let current = document.getElementById("display").value;
  document.getElementById("display").value = Math.sqrt(eval(current));
}
