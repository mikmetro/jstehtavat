fetch("https://api.chucknorris.io/jokes/random")
  .then((r) => r.json())
  .then((json) => console.log(json.value));
