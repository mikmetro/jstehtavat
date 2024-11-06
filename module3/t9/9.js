const calculation = document.getElementById("calculation");
const start = document.getElementById("start");
const result = document.getElementById("result");

const VALID_NUMBERS = "0123456789";

const calculate = (calc) => {
  let numStackOne = "";
  let numStackTwo = "";
  let operator = "";
  let counter = 0;
  calc += " ";
  for (const i of calc) {
    if (VALID_NUMBERS.includes(i)) {
      if (operator == "") numStackOne += i;
      else numStackTwo += i;
    } else if ("+-*/".includes(i) || (operator && i == " ")) {
      let currResult;
      if (operator == "") {
        operator = i;
        continue;
      }
      switch (operator) {
        case "+":
          currResult = +numStackOne + +numStackTwo;
          break;
        case "-":
          currResult = +numStackOne - +numStackTwo;
          break;
        case "*":
          currResult = +numStackOne * +numStackTwo;
          break;
        case "/":
          currResult = +numStackOne / +numStackTwo;
          break;
      }
      const newCalc =
        currResult +
        calc.slice(
          numStackOne.length + numStackTwo.length + 1,
          calc.length - 1,
        );
      return calculate(newCalc);
    }
  }
  return numStackOne;
};

start.addEventListener("click", () => {
  result.innerText = calculate(calculation.value);
});
