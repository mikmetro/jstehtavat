const result = document.getElementById("result");
const inputOne = document.getElementById("num1");
const inputTwo = document.getElementById("num2");
const option = document.getElementById("operation");

document.getElementById("start").addEventListener("click", () => {
  let r;
  const [one, two] = [+inputOne.value, +inputTwo.value];
  switch (option.value) {
    case "add":
      r = one + two;
      break;
    case "sub":
      r = one - two;
      break;
    case "multi":
      r = one * two;
      break;
    case "div":
      r = one / two;
      break;
  }
  result.innerText = r;
});
