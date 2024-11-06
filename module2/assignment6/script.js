const list = document.querySelector("ul");
const rollDice = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const results = [];
while (true) {
  const result = rollDice();
  results.push(result);
  if (result == 6) break;
}

for (let i of results) {
  const li = document.createElement("li");
  li.innerText = i;
  list.appendChild(li);
}
