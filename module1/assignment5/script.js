const addElement = (content) => {
  const node = document.createElement("p");
  node.innerText = content;
  document.body.appendChild(node);
};

const year = +prompt("Anna vuosi");
let isLeapYear = "is not";
if (year % 4 == 0) {
  if ((year % 100 == 0 && year % 400 == 0) || year % 100 != 0) {
    isLeapYear = "is";
  }
}

addElement(`Vuosi ${year} ${isLeapYear} a leap year`);
