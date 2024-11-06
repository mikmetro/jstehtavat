"use strict";

const inputs = [];
for (let i = 1; i <= 5; i++) {
  inputs.push(+prompt(`Anna luku ${i}`));
}

for (let i = inputs.length - 1; i >= 0; i--) {
  console.log(inputs[i]);
}
