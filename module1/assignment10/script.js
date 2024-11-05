const addElement = (content) => {
  const node = document.createElement("p");
  node.innerText = content;
  document.body.appendChild(node);
};

const dice = +prompt("How many dice to roll?");
const sum = +prompt("What is the sum of the dice?");

let result = 0;
for (let i = 0; i < 10000; i++) {
  let s = 0;
  for (let j = 0; j < dice; j++) {
    s += Math.floor(Math.random() * 6) + 1;
  }
  if (s == sum) result++;
}
addElement(
  `Probability to get sum ${sum} with ${dice} dice is ${(result / 100).toFixed(2)}%`,
);
