const image = document.getElementById("target");
const trigger = document.getElementById("trigger");

trigger.addEventListener("mouseover", () => {
  image.src = "img/picB.jpg";
});

trigger.addEventListener("mouseout", () => {
  image.src = "img/picA.jpg";
});
