const list = document.querySelector("ul");
const rollDice = (sides) => {
  return Math.floor(Math.random() * sides) + 1;
};

const sides = +prompt("Number of sides on the dice");

const results = [];
while (true) {
  const result = rollDice(sides);
  results.push(result);
  if (result == sides) break;
}

for (let i of results) {
  const li = document.createElement("li");
  li.innerText = i;
  list.appendChild(li);
}
