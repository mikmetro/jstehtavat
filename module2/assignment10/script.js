const numberOfCandidates = +prompt("Enter number of candidates");
const candidateLookup = {};
const candidates = [];
for (let i = 1; i <= numberOfCandidates; i++) {
  const nameOfCandidate = prompt(`Name for candidate ${i}`);
  candidates.push({ name: nameOfCandidate, votes: 0 });

  candidateLookup[nameOfCandidate] = i - 1;
}

const numberOfVoters = +prompt("Enter number of voters");
for (let i = 0; i < numberOfVoters; i++) {
  const nameOfCandidate = prompt(`Name who to vote for`);
  const index = candidateLookup[nameOfCandidate];
  if (candidates[index]) candidates[index].votes++;
}

candidates.sort((a, b) => b.votes - a.votes);
console.log(
  `The winner is ${candidates[0].name} with ${candidates[0].votes} votes.`,
);

console.log("Results:");
for (const i of candidates) {
  console.log(`${i.name}: ${i.votes} votes`);
}
