const nums = [];
while (true) {
  const input = +prompt("Enter a number");
  if (nums.includes(input)) break;
  nums.push(input);
}

alert("Number already in list! Stopping program...");

nums.sort((a, b) => a - b);
for (const i of nums) {
  console.log(i);
}
