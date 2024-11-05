const addElement = (content) => {
  const node = document.createElement("p");
  node.innerText = content;
  document.body.appendChild(node);
};

const name = prompt("Anna nimi");

const rng = Math.random();
let wizardClass;
if (rng < 0.25) {
  wizardClass = "Gryffindor";
} else if (rng < 0.5) {
  wizardClass = "Slytherin";
} else if (rng < 0.75) {
  wizardClass = "Hufflepuff";
} else {
  wizardClass = "Ravenclaw";
}
addElement(`${name}, you are ${wizardClass}`);
