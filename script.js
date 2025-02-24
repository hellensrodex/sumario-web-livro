const button = document.getElementById("botao");
const text = document.getElementById("botao-texto");
const iconMinimizar = document.getElementById("icon-minimizar");
const iconExpandir = document.getElementById("icon-expandir");
const sumarioIntro = document.querySelector(".sumario-intro");
const sumarioCaps = document.querySelector(".sumario-caps");
const sumario = document.querySelector(".sumario");
const sumarioBtn = document.querySelector("#botao");
const itemSumario = document.querySelector(".sumario-item");

button.addEventListener("click", () => {
  const btnTexto = button.classList.toggle("minimizar");

  button.classList.toggle("expandir", !btnTexto);
  text.textContent = btnTexto ? "MINIMIZAR" : "EXPANDIR";

  iconMinimizar.classList.toggle("hidden", !btnTexto);
  iconMinimizar.classList.toggle("visible", btnTexto);
  iconExpandir.classList.toggle("hidden", btnTexto);
  iconExpandir.classList.toggle("visible", !btnTexto);
});

const subcapitulos = document.querySelectorAll(".subcap li");
const capitulos = document.querySelectorAll(".capitulo");
const introducao = document.querySelector(".sumario-intro");

subcapitulos.forEach((subcapitulo) => {
  subcapitulo.addEventListener("click", () => {
    subcapitulos.forEach((item) => item.classList.remove("selected"));
    capitulos.forEach((capitulo) => {
      const numeracao = capitulo.querySelector(".numeracao");
      if (numeracao) numeracao.classList.remove("selected");
    });

    subcapitulo.classList.add("selected");

    const capituloAtual = subcapitulo.closest(".capitulo");
    const numeracaoAtual = capituloAtual
      ? capituloAtual.querySelector(".numeracao")
      : null;

    if (numeracaoAtual) numeracaoAtual.classList.add("selected");

    if (introducao) introducao.classList.remove("selected");
  });
});

if (introducao) {
  introducao.addEventListener("click", () => {
    subcapitulos.forEach((item) => item.classList.remove("selected"));
    capitulos.forEach((capitulo) => {
      if (introducao) introducao.classList.remove("selected");
    });

    introducao.classList.add("selected");
  });
}

document.querySelectorAll(".sumario-item").forEach((item) => {
  item.addEventListener("click", function () {
    document.querySelectorAll(".sumario-item, .titulo, .capitulo, .subcap-nome").forEach((el) => el.classList.remove("item-ativo"))
    this.classList.add("item-ativo")

    let parent = this.closest(".capitulo")
    if (parent) {
      parent.classList.add("item-ativo")
      let titulo = parent.querySelector(".titulo")
      if (titulo) {
        titulo.classList.add("item-ativo")
      }
    }

    let subcapNome = this.querySelector(".subcap-nome")
    if (subcapNome) {
      subcapNome.classList.add("item-ativo");
    }
  })
})


sumarioBtn.addEventListener("click", () => {
  sumario.classList.toggle("sumario--minimizado");
});

document.addEventListener("DOMContentLoaded", function () {
    if (sumario) {
        sumario.addEventListener("mouseover", function () {
            this.classList.remove("inativo");
        });

        sumario.addEventListener("mouseout", function () {
            this.classList.add("inativo");
        });
    }
});

let temporizador;
function resetar() {
    clearTimeout(temporizador);
    sumario.classList.remove("sumario--minimizado")

    button.classList.add("minimizar");
    button.classList.remove("expandir");
    text.textContent = "MINIMIZAR";

    iconMinimizar.classList.add("visible");
    iconMinimizar.classList.remove("hidden");
    iconExpandir.classList.add("hidden")
    iconExpandir.classList.remove("visible")

    temporizador = setTimeout(() => {
        sumario.classList.add("sumario--minimizado");

        button.classList.add("expandir");
        button.classList.remove("minimizar");
        text.textContent = "EXPANDIR";

        iconExpandir.classList.add("visible");
        iconExpandir.classList.remove("hidden");
        iconMinimizar.classList.add("hidden");
        iconMinimizar.classList.remove("visible");
    }, 5000);
}

sumarioCaps.addEventListener("mouseover", resetar)


resetar()