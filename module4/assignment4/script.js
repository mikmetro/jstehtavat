"use strict";

const resultsDiv = document.getElementById("results");

document.querySelector("form").addEventListener("submit", async (e) => {
  resultsDiv.innerHTML = "";

  e.preventDefault();
  const inputValue = document.querySelector("#query").value;
  const response = await fetch(
    `https://api.tvmaze.com/search/shows?q=${inputValue}`,
  );
  const json = await response.json();

  for (const x of json) {
    const movieTitle = document.createElement("h2");
    movieTitle.innerText = x.show.name;

    const movieLink = document.createElement("a");
    movieLink.innerText = x.show.url;
    movieLink.href = x.show.url;
    movieLink.target = "_blank";

    const movieImage = document.createElement("img");
    movieImage.src = x.show.image.medium
      ? x.show.image.medium
      : "https://via.placeholder.com/210x295?text=Not%20Found";
    movieImage.alt = x.show.name;

    const movieSummary = document.createElement("div");
    movieSummary.innerHTML = x.show.summary;

    const movieArticle = document.createElement("article");

    movieArticle.appendChild(movieTitle);
    movieArticle.appendChild(movieLink);
    movieArticle.appendChild(movieImage);
    movieArticle.appendChild(movieSummary);

    resultsDiv.appendChild(movieArticle);
  }
});
