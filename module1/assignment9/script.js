const addElement = (content) => {
  const node = document.createElement("p");
  node.innerText = content;
  document.body.appendChild(node);
};

const isPrime = (n) => {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
};

const num = +prompt("Enter a number");
addElement(`${num} ${isPrime(num) ? "is" : "is not"} prime`);
