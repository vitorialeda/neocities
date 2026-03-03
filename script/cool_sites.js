const cool_sites = [
  {
    href: "https://malune.net",
    src: "https://file.garden/aZzM6RSvfEnxBY-o/Buttons/malune-3.gif",
    alt: "malune",
    title: "Malune",
  },
  {
    href: "https://aubreyonline.neocities.org/",
    src: "https://file.garden/aZzM6RSvfEnxBY-o/Buttons/aubrey_button.gif",
    alt: "aubreyonline",
    title: "Aubrey",
  },
  {
    href: "https://unicodeangel.neocities.org",
    src: "https://unicodeangel.neocities.org/imgs/UnicodeAngelButton3.gif",
    alt: "unicodeangel",
    title: "Unicodeangel",
  },
  {
    href: "https://astersgarden.neocities.org/",
    src: "https://file.garden/aZzM6RSvfEnxBY-o/Buttons/astersgarden-button-kaito.gif",
    alt: "astersgarden",
    title: "Astersgarden",
  },
  {
    href: "https://nyscyra.net/",
    src: "https://file.garden/aZzM6RSvfEnxBY-o/Buttons/nyscyra.png",
    alt: "nyscyra",
    title: "Nyscyra",
  },
  {
    href: "https://pc98.club",
    src: "https://file.garden/aZzM6RSvfEnxBY-o/Buttons/PC98CLUB.gif",
    alt: "PC98.CLUB",
    title: "PC98.CLUB",
  },
  {
    href: "https://sargx.net/",
    src: "https://file.garden/aZzM6RSvfEnxBY-o/Buttons/sargx.gif",
    alt: "sargx",
    title: "Sargx",
  },
  {
    href: "https://phantasmagorya.neocities.org/",
    src: "https://file.garden/aZzM6RSvfEnxBY-o/Buttons/phompho.png",
    alt: "phantasmagorya",
    title: "Phantasmagorya",
  },
  {
    href: "https://blueazul.neocities.org/",
    src: "https://file.garden/aZzM6RSvfEnxBY-o/Buttons/blueazul3.png",
    alt: "blueazul",
    title: "Blueazul",
  },
  {
    href: "https://disinformation.neocities.org/",
    src: "https://file.garden/aZzM6RSvfEnxBY-o/Buttons/disinformation.gif",
    alt: "disinformation",
    title: "Disinformation",
  },
  {
    href: "https://magilovescats.neocities.org/",
    src: "https://file.garden/aZzM6RSvfEnxBY-o/Buttons/magilovescats.png",
    alt: "magilovescats",
    title: "Magilovescats",
  },
  {
    href: "https://voxnoturna.neocities.org/",
    src: "https://file.garden/aZzM6RSvfEnxBY-o/Buttons/voxnoturna.gif",
    alt: "voxnoturna",
    title: "Voxnoturna",
  },
  {
    href: "https://hnrikaster.neocities.org/",
    src: "https://file.garden/aZzM6RSvfEnxBY-o/Buttons/rike.gif",
    alt: "hnrikaster",
    title: "Hnrikaster",
  },
  {
    href: "https://minkurosu.site/",
    src: "https://file.garden/aZzM6RSvfEnxBY-o/Buttons/minkurosu.png",
    alt: "minkurosu",
    title: "Minkurosu",
  },
  {
    href: "https://dudalog.neocities.org/home/",
    src: "https://file.garden/aZzM6RSvfEnxBY-o/Buttons/dudalog.png",
    alt: "dudalog",
    title: "Dudalog",
  },
  {
    href: "https://mozartsempiano.com/",
    src: "https://file.garden/aZzM6RSvfEnxBY-o/Buttons/mozartsempiano.gif",
    alt: "mozartsempiano",
    title: "Mozartsempiano",
  },
  {
    href: "https://tevito.neocities.org/",
    src: "https://file.garden/aZzM6RSvfEnxBY-o/Buttons/tevito.gif",
    alt: "tevito",
    title: "Tevito",
  },
  {
    href: "https://magspace.neocities.org/",
    src: "https://file.garden/aZzM6RSvfEnxBY-o/Buttons/magspace.png",
    alt: "magspace",
    title: "Magspace",
  },
];

const buttons_div = document.getElementById("buttons");

cool_sites.forEach((site) => {
  const a = document.createElement("a");
  a.href = site.href;
  a.target = "_blank";

  const img = document.createElement("img");
  img.src = site.src;
  img.alt = site.alt;
  img.title = site.title;

  a.appendChild(img);

  buttons_div.appendChild(a);
});
