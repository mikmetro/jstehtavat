"use strict";

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const inputValue = document.querySelector("#query").value;
  const response = await fetch(
    `https://api.tvmaze.com/search/shows?q=${inputValue}`,
  );
  const json = await response.json();
  console.log(json);
});
