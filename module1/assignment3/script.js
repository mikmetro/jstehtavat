const x = prompt("Anna luku 1");
const y = prompt("Anna luku 2");
const z = prompt("Anna luku 3");
const arr = [+x, +y, +z];

const addElement = (content) => {
  const node = document.createElement("p");
  node.innerText = content;
  document.body.appendChild(node);
};

addElement(`Sum ${arr.reduce((a, b) => a + b, 0)}`);
addElement(`Product ${arr.reduce((a, b) => a * b, 1)}`);
addElement(`Average ${arr.reduce((a, b) => a + b, 0) / arr.length}`);
