const addElement = (content) => {
  const node = document.createElement("p");
  node.innerText = content;
  document.body.appendChild(node);
};

const calculate = confirm("Should I calculate the square root?");
if (calculate) {
  const num = +prompt("Enter a positive number");
  if (num < 0) {
    addElement("The square root of a negative number is not defined");
  } else {
    addElement(Math.sqrt(num));
  }
} else {
  addElement("The square root is not calculated.");
}
