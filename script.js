const imgs = document.querySelectorAll(".img-display");
const imagemList = document.querySelector("#imagem-principal");

function trocarImagem() {
  imgs.forEach((i) => i.classList.remove("active"));
  this.classList.add("active");
  imagemList.src = this.src;
}

imgs.forEach((img) => {
  img.addEventListener("click", trocarImagem);
});
