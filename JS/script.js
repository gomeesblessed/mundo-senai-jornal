 const hoje = new Date();

    document.getElementById("data").textContent =
      hoje.toLocaleDateString("pt-BR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
      });

    document.getElementById("ano").textContent =
      hoje.getFullYear();

    const pesquisa = document.getElementById("pesquisa");
    const cards = [...document.querySelectorAll(".card")];
    const contador = document.getElementById("contador");
    const vazio = document.getElementById("vazio");

    let categoriaAtual = "Todas";

    function filtrarNoticias() {
      const termo = pesquisa.value
        .trim()
        .toLocaleLowerCase("pt-BR");

      let quantidade = 0;

      cards.forEach(card => {
        const texto = card.textContent.toLocaleLowerCase("pt-BR");
        const categoria = card.dataset.categoria;

        const correspondeTexto = texto.includes(termo);
        const correspondeCategoria =
          categoriaAtual === "Todas" ||
          categoria === categoriaAtual;

        const mostrar = correspondeTexto && correspondeCategoria;

        card.style.display = mostrar ? "" : "none";

        if (mostrar) quantidade++;
      });

      contador.textContent = `${quantidade} notícia(s)`;
      vazio.style.display = quantidade === 0 ? "block" : "none";
    }

    document.getElementById("formBusca").addEventListener(
      "submit",
      event => {
        event.preventDefault();
        filtrarNoticias();
        document.getElementById("noticias").scrollIntoView({
          behavior: "smooth"
        });
      }
    );

    pesquisa.addEventListener("input", filtrarNoticias);

    document.querySelectorAll("nav a").forEach(link => {
      link.addEventListener("click", () => {
        categoriaAtual = link.dataset.categoria;
        filtrarNoticias();
      });
    });

    // Abrir notícia em uma janela de leitura
    cards.forEach(card => {
      card.querySelector(".ler").addEventListener("click", () => {
        const titulo = card.querySelector("h3").textContent;
        const texto = card.querySelector("p").textContent;
        const categoria = card.dataset.categoria;

        alert(
          categoria.toUpperCase() + "\n\n" +
          titulo + "\n\n" + texto +
          "\n\nEsta é uma notícia demonstrativa."
        );
      });
    });

    filtrarNoticias();