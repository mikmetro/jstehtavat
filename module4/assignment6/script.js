document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const apiQuery = document.getElementById("query").value;
  const response = await fetch(
    `https://api.chucknorris.io/jokes/search?query=${apiQuery}`,
  );
  const jsonResponse = await response.json();

  for (const x of jsonResponse.result) {
    const article = document.createElement("article");
    const paragraph = document.createElement("p");
    paragraph.innerText = x.value;

    article.appendChild(paragraph);

    document.body.appendChild(article);
  }
});
