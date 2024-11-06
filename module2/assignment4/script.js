const nums = [];
while (true) {
  const input = +prompt("Enter a number");
  if (input == 0) break;
  nums.push(input);
}

nums.sort((a, b) => b - a);
for (const i of nums) {
  console.log(i);
}
