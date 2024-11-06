const concat = (arr) => {
  let result = "";
  for (let i of arr) {
    result += i;
  }
  return result;
};

const names = ["one", "two", "four", "three"];

const span = document.createElement("span");
span.innerText = concat(names);
document.body.appendChild(span);
