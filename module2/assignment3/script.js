"use strict";

const dogs = [];
for (let i = 1; i <= 6; i++) {
  dogs.push(prompt(`Enter dog ${i} name`));
}
dogs.sort().reverse();

const listElement = document.querySelector("ul");
for (let i of dogs) {
  const listItem = document.createElement("li");
  listItem.innerText = i;
  listElement.appendChild(listItem);
}
