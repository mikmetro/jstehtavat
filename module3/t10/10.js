const firstName = document.querySelector('input[name="firstname"]');
const lastName = document.querySelector('input[name="lastname"]');

document.getElementById("source").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("target").innerText =
    `Your name is ${firstName.value} ${lastName.value}`;
});
