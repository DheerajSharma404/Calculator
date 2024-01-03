const inputFeildValue = document.querySelector(".input-div>input");
const keysValue = document.querySelector(".keypad-div");

function calculate(input) {
  const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };

  let [operand1, operator, operand2] = input.split(/([+\-*/])/); // Regular expresion for spliting the input string only for the mathematical operator

  if (operator in operators) {
    return operators[operator](parseFloat(operand1), parseFloat(operand2));
  } else {
    return input;
  }
}

keysValue.addEventListener("click", (e) => {
  if (e.target.classList.contains("keys")) {
    let value = e.target.getAttribute("data-keyValue");
    if (value !== "DEL" && value !== "RESET" && value !== "=") {
      inputFeildValue.value += value;
    }

    if (value === "DEL") {
      inputFeildValue.value = inputFeildValue.value.slice(0, -1);
    }
    if (value === "RESET") {
      inputFeildValue.value = "";
    }
    if (value === "=") {
      const result = calculate(inputFeildValue.value);
      inputFeildValue.value = result.toFixed(3);
    }
  }
});

inputFeildValue.addEventListener("keydown", (e) => {
  e.preventDefault();
  console.log("enter was pressed");
  if (e.key === "Enter") {
    if (!/[+\-*/]$/.test(inputFeildValue.value)) {
      const result = calculate(inputFeildValue.value);
      inputFeildValue.value = result.toFixed(3);
    }
  }
});
