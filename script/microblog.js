const blogPosts = [
  {
    type: "image",
    image:
      "https://file.garden/aZzM6RSvfEnxBY-o/Microblog/eu_queria_ser_o_seu_caderninho.jpg",
    body: `<p>Usar as mãos p criar coisas é legal. Já tinha tido uma experiência com costura de cadernos mas dessa vez usei um método diferente, a costura japonesa. Ela é bem simples e prática, rapidin ce consegue ter um caderninho funcional nas mãos.<br/> Além de ser meio terapêutico, criar o próprio caderno me passa uma sensação de liberdade para com o conteúdo, pelo menos pra mim. Não sinto aquela preocupação em fazer desenhos lindos e anotações perfeitas :D Tenho usado bastante pra documentar o dia (ajuda a organizar os pensamentos). Enfim, o primeiro q eu fiz n ficou muito legal então peguei pra mim uahsduas mas com o aprendizado fiz e refiz outro e até q fiquei satisfeita com o resultado.<br/>Se existe mesmo essa parada de linguagens de amor a minha seria presentear.<br/><a href="https://youtu.be/1Snjfao47DI?si=q8UdC5YS9QbMwlfq">Link do vídeo tutorial :)))</a></p>`,
    tags: ["diy"],
    date: "08 mar 2026",
  },
  {
    type: "image",
    image:
      "https://i.pinimg.com/736x/2c/db/a7/2cdba7f219f0a15880bb6286c15fadf1.jpg",
    body: `<p>Recentemente terminei de assistir Vento Aureo e nossa eu tinha esquecido de como Jojo é divertido. As lutas são tão mirabolantes, o Araki escreve com a criatividade de crianças brincando de luta na escola sla e particulamente eu amo isso :D recomendo muiiito, top de balada.<br/>Arrivederci B^)</p>`,
    tags: ["anime"],
    date: "08 mar 2026",
  },
  {
    type: "image",
    image:
      "https://i.pinimg.com/736x/9a/ea/db/9aeadb2a68814c6cc753a2560f997a1b.jpg",
    body: `<p>Oi pessoal, esse é meu microblog 🥸 <br/>Devo usar pra descarregar os pensamentos que vierem por ai</p>`,
    date: "08 mar 2026",
  },
];

function renderPostHeader(post) {
  return `
        <div class="post-header">
            <img class="post-avatar" src="https://i.pinimg.com/736x/bb/d1/4c/bbd14c259e5feaed4f81afa4e539563b.jpg" alt="avatar" />
            <div class="post-meta">
                <span class="post-username">aaeri</span>
                <span class="post-date">${post.date}</span>
            </div>
        </div>
    `;
}

function renderPostTags(post) {
  if (!post.tags || post.tags.length === 0) return "";
  return `
        <div class="post-tags">
            ${post.tags.map((t) => `<a href="#">#${t}</a>`).join(" ")}
        </div>
    `;
}

function renderTextPost(post, index) {
  return `
        <article class="post-card">
            ${renderPostHeader(post)}
            <div class="post-body">
                ${post.title ? `<h2>${post.title}</h2>` : ""}
                ${post.body}
            </div>
            ${renderPostTags(post)}
        </article>
    `;
}

function renderImagePost(post, index) {
  return `
        <article class="post-card">
            ${renderPostHeader(post)}
            <img class="post-image" src="${post.image}" alt="" loading="lazy" />
            <div class="post-body">
                ${post.body || ""}
            </div>
            ${renderPostTags(post)}
        </article>
    `;
}

function renderQuotePost(post, index) {
  return `
        <article class="post-card">
            ${renderPostHeader(post)}
            <div class="post-quote">
                <blockquote>"${post.quote}"</blockquote>
                <p class="quote-source">— ${post.source}</p>
            </div>
            ${renderPostTags(post)}
        </article>
    `;
}

function renderPost(post, index) {
  switch (post.type) {
    case "image":
      return renderImagePost(post, index);
    case "quote":
      return renderQuotePost(post, index);
    case "text":
    default:
      return renderTextPost(post, index);
  }
}

let activeTag = null;

function filterByTag(tag) {
  if (activeTag === tag) {
    activeTag = null;
  } else {
    activeTag = tag;
  }
  renderFeed();
}

function renderFeed() {
  const feed = document.querySelector(".blog-feed");
  if (!feed) return;

  const allTags = [...new Set(blogPosts.flatMap((p) => p.tags || []))].sort();

  const tagsContainer = document.querySelector(".tags-list");
  if (tagsContainer) {
    tagsContainer.innerHTML = allTags
      .map(
        (t) =>
          `<a href="#" class="${activeTag === t ? "active-tag" : ""}" onclick="filterByTag('${t}'); return false;">#${t}</a>`,
      )
      .join("");
  }

  const filtered = activeTag
    ? blogPosts.filter((p) => p.tags && p.tags.includes(activeTag))
    : blogPosts;

  const postsHTML = filtered
    .map((post, i) => {
      const realIndex = blogPosts.indexOf(post);
      return renderPost(post, realIndex);
    })
    .join("");

  feed.innerHTML = postsHTML;
}

document.addEventListener("DOMContentLoaded", renderFeed);
