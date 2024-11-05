const addElement = (content) => {
  const node = document.createElement("li");
  node.innerText = content;
  document.querySelector("ul").appendChild(node);
};

const isLeapYear = (year) => {
  if (year % 4 == 0) {
    if ((year % 100 == 0 && year % 400 == 0) || year % 100 != 0) {
      return true;
    }
  }
  return false;
};

const startYear = +prompt("Enter start year");
const endYear = +prompt("Enter end year");
for (let i = startYear; i <= endYear; i++) {
  if (isLeapYear(i)) {
    addElement(i);
  }
}
