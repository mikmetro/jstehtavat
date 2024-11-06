const target = document.getElementById("target");
const names = ["First", "Second", "Third"];
for (const i of names) {
  const li = document.createElement("li");
  li.innerText = `${i} item`;
  target.appendChild(li);
}

target.childNodes[1].classList.add("my-item");
