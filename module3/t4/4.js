"use strict";
const students = [
  {
    name: "John",
    id: "2345768",
  },
  {
    name: "Paul",
    id: "2134657",
  },
  {
    name: "Jones",
    id: "5423679",
  },
];
const target = document.getElementById("target");

for (const i of students) {
  const li = document.createElement("option");
  li.innerText = i.name;
  li.value = i.id;
  target.appendChild(li);
}
