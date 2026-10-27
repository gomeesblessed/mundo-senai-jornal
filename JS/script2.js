
const events = [
  {
    year: "1760",
    title: "A Revolução Industrial",
    category: "mundo",
    place: "Inglaterra",
    description: "A mecanização da produção transforma o trabalho e impulsiona o crescimento das fábricas.",
    details: "A expansão do sistema fabril contribuiu para o crescimento do proletariado urbano. Jornadas extensas, baixos salários e ambientes perigosos marcaram a experiência de muitos trabalhadores."
  },
  {
    year: "1811",
    title: "O movimento ludista",
    category: "mundo",
    place: "Inglaterra",
    description: "Trabalhadores têxteis protestam contra mudanças na produção e a perda de seus meios de subsistência.",
    details: "Os ludistas atacaram determinadas máquinas em um contexto de insegurança econômica e transformação das relações de trabalho. O movimento expressava conflitos sobre salários, empregos e condições de vida."
  },
  {
    year: "1848",
    title: "Manifesto Comunista",
    category: "mundo",
    place: "Europa",
    description: "Karl Marx e Friedrich Engels publicam uma obra influente sobre a luta de classes.",
    details: "O texto tornou-se uma referência para movimentos socialistas e operários. O ano de 1848 também foi marcado por revoluções e mobilizações políticas em diferentes regiões europeias."
  },
  {
    year: "1886",
    title: "A luta pela jornada de oito horas",
    category: "mundo",
    place: "Estados Unidos",
    description: "Greves e manifestações em Chicago colocam a redução da jornada no centro das reivindicações.",
    details: "Os acontecimentos de maio de 1886 e o caso de Haymarket tornaram-se referências históricas do movimento operário. O Dia Internacional dos Trabalhadores, celebrado em 1º de maio, está ligado a essa trajetória."
  },
  {
    year: "1888",
    title: "A abolição da escravidão no Brasil",
    category: "brasil",
    place: "Brasil",
    description: "A Lei Áurea extingue legalmente a escravidão, após séculos de resistência negra.",
    details: "A abolição foi resultado de lutas de pessoas escravizadas, movimentos abolicionistas e outras pressões sociais. Sem políticas amplas de inclusão e reparação, a liberdade legal não eliminou as desigualdades raciais e econômicas."
  },
  {
    year: "1917",
    title: "Greve Geral em São Paulo",
    category: "brasil",
    place: "Brasil",
    description: "Uma grande mobilização operária reivindica melhores salários e condições de trabalho.",
    details: "A greve ocorreu em meio à inflação, aos baixos salários e às longas jornadas. Trabalhadores de diferentes setores participaram, e a mobilização tornou-se um marco do movimento operário brasileiro."
  },
  {
    year: "1930",
    title: "A reorganização das leis do trabalho",
    category: "brasil",
    place: "Brasil",
    description: "O governo de Getúlio Vargas amplia a atuação estatal nas relações de trabalho.",
    details: "A década de 1930 foi marcada pela criação de instituições trabalhistas e pela regulamentação de aspectos das relações entre empregadores e empregados. Esse processo combinou conquistas sociais, controle sindical e conflitos políticos."
  },
  {
    year: "1943",
    title: "A Consolidação das Leis do Trabalho",
    category: "brasil",
    place: "Brasil",
    description: "A CLT reúne e sistematiza normas importantes das relações de trabalho no país.",
    details: "Promulgada em 1º de maio de 1943, a CLT consolidou regras sobre temas como jornada, férias e relações individuais de trabalho. Os direitos trabalhistas brasileiros continuaram a mudar nas décadas seguintes."
  },
  {
    year: "1988",
    title: "A Constituição Cidadã",
    category: "brasil",
    place: "Brasil",
    description: "A nova Constituição estabelece direitos sociais e amplia garantias para trabalhadores.",
    details: "A Constituição de 1988 reconheceu direitos como o FGTS, o seguro-desemprego, o décimo terceiro salário e o limite geral de 44 horas semanais para a jornada normal, entre outras garantias."
  },
  {
    year: "2000–hoje",
    title: "Novos desafios do trabalho",
    category: "mundo",
    place: "Mundo",
    description: "A tecnologia, a economia digital e a informalidade transformam as relações de trabalho.",
    details: "O trabalho por plataformas digitais, a automação e as novas formas de organização reacendem debates sobre proteção social, remuneração, segurança, direitos sindicais e o futuro do emprego."
  }
];

const timeline = document.getElementById("timeline");
const counter = document.getElementById("counter");
const filters = document.querySelectorAll(".filter");

function renderEvents(filter = "todos") {
  const filtered = events.filter(event =>
    filter === "todos" || event.category === filter
  );

  counter.textContent = `${filtered.length} acontecimentos`;

  timeline.innerHTML = filtered.map((event, index) => `
    <article class="event" style="animation-delay:${index * 0.06}s">
      <div class="event-year">${event.year}</div>

      <div class="event-card">
        <div class="event-meta">
          <span class="tag">
            ${event.category === "brasil" ? "HISTÓRIA DO BRASIL" : "HISTÓRIA MUNDIAL"}
          </span>
          <span class="period-count">${event.place}</span>
        </div>

        <h3>${event.title}</h3>
        <p>${event.description}</p>

        <div class="details">
          <p>${event.details}</p>
        </div>

        <button class="more-btn" aria-expanded="false">
          Ver contexto histórico +
        </button>
      </div>
    </article>
  `).join("");
}

filters.forEach(button => {
  button.addEventListener("click", () => {
    filters.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    renderEvents(button.dataset.filter);
  });
});

timeline.addEventListener("click", event => {
  const button = event.target.closest(".more-btn");
  if (!button) return;

  const card = button.closest(".event");
  const isOpen = card.classList.toggle("open");

  button.textContent = isOpen
    ? "Fechar contexto −"
    : "Ver contexto histórico +";

  button.setAttribute("aria-expanded", String(isOpen));
});

renderEvents();
