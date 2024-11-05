const addElement = (content) => {
  const node = document.createElement("p");
  node.innerText = content;
  document.body.appendChild(node);
};

const dice = +prompt("How many dice to roll?");
let result = 0;
for (let i = 0; i < dice; i++) {
  result += Math.floor(Math.random() * 6) + 1;
}
addElement(`Sum of dice throws: ${result}`);
