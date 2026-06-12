const galleryData = [
  {
    src: "https://files.malune.net/f/aaeri/desenhos/20260612.jpg",
    date: "12/06/2026",
    detail: "pintano redraw de um desenho da lune",
  },
  {
    src: "https://files.malune.net/f/aaeri/desenhos/20260520.jpg",
    date: "20/05/2026",
    detail: "redraw de um desenho da lune",
  },
  {
    src: "https://files.malune.net/f/aaeri/desenhos/20260507.jpg",
    date: "07/05/2026",
    detail: "",
  },
  {
    src: "https://files.malune.net/f/aaeri/desenhos/20260401.jpg",
    date: "30/03/2026",
    detail: "redraw",
  },
  {
    src: "https://files.malune.net/f/aaeri/desenhos/20260330.jpg",
    date: "30/03/2026",
    detail: "",
  },
  {
    src: "https://files.malune.net/f/aaeri/desenhos/20260328.jpg",
    date: "28/03/2026",
    detail: "kagami reimu",
  },
  {
    src: "https://files.malune.net/f/aaeri/desenhos/20260322.jpg",
    date: "22/03/2026",
    detail: "JOLYYYYNE",
  },
  {
    src: "https://files.malune.net/f/aaeri/desenhos/20260103.jpeg",
    date: "03/01/2026",
    detail: "konatanatanata",
  },
  {
    src: "https://file.garden/aZzM6RSvfEnxBY-o/Art/20251211.jpg",
    date: "11/12/2025",
    detail:
      "Makoto de Street Fighter 3rd Strike. Sou apaixonada no design dos jogos de luta",
  },
  {
    src: "https://file.garden/aZzM6RSvfEnxBY-o/Art/20251107.jpg",
    date: "07/11/2025",
    detail: "Um rascunhozin q por algum motivo acho legal",
  },
  {
    src: "https://file.garden/aZzM6RSvfEnxBY-o/Art/20251009.jpg",
    date: "09/10/2025",
    detail: "Outro rascunhozin",
  },
  {
    src: "https://file.garden/aZzM6RSvfEnxBY-o/Art/20241210.png",
    date: "10/12/2024",
    detail: "",
  },
  {
    src: "https://file.garden/aZzM6RSvfEnxBY-o/Art/20240630.png",
    date: "30/06/2024",
    detail: "Mizuho de sonny boy",
  },
  {
    src: "https://file.garden/aZzM6RSvfEnxBY-o/Art/20240100.jpg",
    date: "09/06/2024",
    detail:
      "Ainda não assisti O Quinto Elemento mas sou apaixonada na Milla Jovovich",
  },
  {
    src: "https://file.garden/aZzM6RSvfEnxBY-o/Art/20240000.jpg",
    date: "23/04/2024",
    detail: "gosto desse aq",
  },
  {
    src: "https://file.garden/aZzM6RSvfEnxBY-o/Art/20220315.png",
    date: "15/03/2022",
    detail: "Autorretrato :^)",
  },
  {
    src: "https://file.garden/aZzM6RSvfEnxBY-o/Art/20220106.png",
    date: "06/01/2022",
    detail: "Minha mãe gosta dessa",
  },
  {
    src: "https://file.garden/aZzM6RSvfEnxBY-o/Art/20220102.png",
    date: "02/01/2022",
    detail: "",
  },
  {
    src: "https://file.garden/aZzM6RSvfEnxBY-o/Art/20210701.png",
    date: "01/07/2021",
    detail:
      "Desculpa a má qualidade, não achei a original :'^) Foi uma commission q fiz. Acabou me rendendo mtas comissions também. Sou muito grata a ela.",
  },
  {
    src: "https://file.garden/aZzM6RSvfEnxBY-o/Art/20210326.jpg",
    date: "01/07/2021",
    detail: "Essa é meio emo mas acho massa",
  },
  {
    src: "https://file.garden/aZzM6RSvfEnxBY-o/Art/20210320.jpg",
    date: "20/03/2021",
    detail:
      "Chloe e Max saudades de life is strange. hmmmm eu mudaria muitas coisas aqui mas n seria justo",
  },
  {
    src: "https://file.garden/aZzM6RSvfEnxBY-o/Art/20200429.png",
    date: "29/04/2020",
    detail: "",
  },
  {
    src: "https://file.garden/aZzM6RSvfEnxBY-o/Art/20190625.png",
    date: "25/06/2019",
    detail: "",
  },
  {
    src: "https://file.garden/aZzM6RSvfEnxBY-o/Art/20190220.png",
    date: "20/02/2019",
    detail: "",
  },
  {
    src: "https://file.garden/aZzM6RSvfEnxBY-o/Art/20170806.png",
    date: "06/08/2017",
    detail: "",
  },
  {
    src: "https://file.garden/aZzM6RSvfEnxBY-o/Art/20170805.png",
    date: "05/08/2017",
    detail: "Infelizmente não encontrei muita coisa dessa época",
  },
  {
    src: "https://file.garden/aZzM6RSvfEnxBY-o/Art/20150315.png",
    date: "15/03/2015",
    detail:
      "Meus cadernos tinham mais desenhos do q qualquer conteudo da escola askdjas era viciada",
  },
  {
    src: "https://file.garden/aZzM6RSvfEnxBY-o/Art/20150220.png",
    date: "20/02/2015",
    detail:
      "Definitivamente uma das eras que mais gosto. Eu realmente me divertia desenhando",
  },
  {
    src: "https://file.garden/aZzM6RSvfEnxBY-o/Art/20150213.png",
    date: "13/02/2015",
    detail:
      "Eu amava desenhar menininhas com armonas quando era pequena adasdajd",
  },
  {
    src: "https://file.garden/aZzM6RSvfEnxBY-o/Art/20140731.png",
    date: "31/07/2014",
    detail: "",
  },
  {
    src: "https://file.garden/aZzM6RSvfEnxBY-o/Art/20140705.png",
    date: "05/07/2014",
    detail: "Tem um volume ali",
  },
  {
    src: "https://file.garden/aZzM6RSvfEnxBY-o/Art/20140328.png",
    date: "28/03/2014",
    detail:
      "Do fundo do deviantart essa é uma das primeiras artes digitais que consegui recuperar. Se não me engano aqui eu usava uma wacom bamboo creative q durou aaaanos",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".gallery-grid");

  galleryData.forEach((item) => {
    const div = document.createElement("div");
    div.className = "gallery-item";
    div.setAttribute("data-date", item.date);
    div.setAttribute("data-detail", item.detail);
    div.onclick = () => openLightbox(div);

    div.innerHTML = `
      <img src="${item.src}" alt="Desenho" />
    `;

    grid.appendChild(div);
  });
});

function openLightbox(item) {
  const overlay = document.querySelector(".lightbox-overlay");
  const img = item.querySelector("img");
  const date = item.getAttribute("data-date") || "";
  const detail = item.getAttribute("data-detail") || "";

  overlay.querySelector("img").src = img.src;
  const dateEl = overlay.querySelector(".lightbox-desc");
  dateEl.textContent = date;
  dateEl.style.display = date ? "block" : "none";

  const detailEl = overlay.querySelector(".lightbox-detail");
  detailEl.textContent = detail;
  detailEl.style.display = detail ? "block" : "none";

  overlay.classList.add("active");
}

function closeLightbox(e) {
  // Não fecha se clicar na info
  if (e && e.target.closest(".lightbox-info")) return;
  document.querySelector(".lightbox-overlay").classList.remove("active");
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});
