"use strict";

const participantsAmount = +prompt("How many participants?");

const participants = [];
for (let i = 1; i <= participantsAmount; i++) {
  participants.push(prompt(`Enter participant ${i} name`));
}
participants.sort();

const listElement = document.querySelector("ol");
for (let i of participants) {
  const listItem = document.createElement("li");
  listItem.innerText = i;
  listElement.appendChild(listItem);
}
