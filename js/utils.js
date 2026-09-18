/**
 * utils.js
 * Funções compartilhadas entre index.html, produtos.html e produto.html.
 */

/* ---------- Formatação ---------- */

function formatarPreco(valor) {
  if (typeof valor !== "number" || isNaN(valor)) return null;
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

/* ---------- Tema (claro/escuro) ---------- */

function initTheme() {
  const salvo = localStorage.getItem("guaxopee-theme");
  const preferido = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const tema = salvo || preferido;
  document.documentElement.setAttribute("data-theme", tema);
  atualizarIconeTema(tema);
}

function alternarTema() {
  const atual = document.documentElement.getAttribute("data-theme");
  const novo = atual === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", novo);
  localStorage.setItem("guaxopee-theme", novo);
  atualizarIconeTema(novo);
}

function atualizarIconeTema(tema) {
  const btn = document.querySelector("[data-theme-toggle]");
  if (btn) btn.textContent = tema === "dark" ? "☀️" : "🌙";
}

/* ---------- Header / navegação ---------- */

function initHeader() {
  const btnMenu = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-nav]");
  if (btnMenu && nav) {
    btnMenu.addEventListener("click", () => {
      const aberto = nav.classList.toggle("is-open");
      btnMenu.setAttribute("aria-expanded", aberto ? "true" : "false");
    });
  }

  const btnTema = document.querySelector("[data-theme-toggle]");
  if (btnTema) btnTema.addEventListener("click", alternarTema);

  // Busca do header e do Hero redirecionam para produtos.html?busca=...
  document.querySelectorAll("[data-header-search]").forEach((formBusca) => {
    formBusca.addEventListener("submit", (e) => {
      e.preventDefault();
      const termo = formBusca.querySelector("input").value.trim();
      window.location.href = `produtos.html${termo ? "?busca=" + encodeURIComponent(termo) : ""}`;
    });
  });

  renderizarMenuCategorias();
}

function renderizarMenuCategorias() {
  const containers = document.querySelectorAll("[data-categorias-nav]");
  if (!containers.length) return;
  const html = CATEGORIES.map(
    (c) => `<a href="produtos.html?categoria=${encodeURIComponent(c.nome)}" class="nav-categoria">${c.emoji} ${c.nome}</a>`
  ).join("");
  containers.forEach((el) => (el.innerHTML = html));
}

/* ---------- Ação de afiliado ---------- */

function abrirProduto(produto) {
  if (!produto || !produto.linkAfiliado) return;
  window.open(produto.linkAfiliado, "_blank", "noopener");
}

/* ---------- Cards de produto ---------- */

function criarCardProduto(produto) {
  const card = document.createElement("article");
  card.className = "card-produto";
  card.setAttribute("data-id", produto.id);

  const temDesconto = produto.desconto > 0;
  const precoFormatado = formatarPreco(produto.preco);
  const precoAnteriorFormatado = formatarPreco(produto.precoAnterior);
  const temLink = Boolean(produto.linkAfiliado);

  card.innerHTML = `
    <a href="produto.html?id=${produto.id}" class="card-produto__link" aria-label="Ver ${escapeHtml(produto.nome)}">
      <div class="card-produto__imagem-wrap">
        ${temDesconto ? `<span class="card-produto__badge">${produto.desconto}% OFF</span>` : ""}
        <img
          src="${produto.imagem}"
          alt="${escapeHtml(produto.nome)}"
          loading="lazy"
          class="card-produto__imagem"
          onerror="this.onerror=null;this.src='assets/placeholder.svg';"
        />
      </div>
      <div class="card-produto__corpo">
        <span class="card-produto__categoria">${escapeHtml(produto.categoria)}</span>
        <h3 class="card-produto__nome">${escapeHtml(produto.nome)}</h3>
        <div class="card-produto__precos">
          ${precoAnteriorFormatado ? `<span class="card-produto__preco-anterior">${precoAnteriorFormatado}</span>` : ""}
          <span class="card-produto__preco">${precoFormatado || "Ver preço na Shopee"}</span>
        </div>
        <div class="card-produto__tags">
          ${produto.tags.slice(0, 3).map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("")}
        </div>
      </div>
    </a>
    <button type="button" class="btn btn--primary btn--full card-produto__cta" data-ver-shopee="${produto.id}" ${temLink ? "" : "disabled title=\"Link indisponível\""}>
      Ver na Shopee →
    </button>
  `;

  card.querySelector("[data-ver-shopee]").addEventListener("click", () => abrirProduto(produto));

  return card;
}

function renderizarGrid(container, produtos) {
  container.innerHTML = "";
  if (!produtos.length) {
    container.parentElement.querySelector("[data-estado-vazio]")?.classList.remove("is-hidden");
    return;
  }
  container.parentElement.querySelector("[data-estado-vazio]")?.classList.add("is-hidden");
  const frag = document.createDocumentFragment();
  produtos.forEach((p) => frag.appendChild(criarCardProduto(p)));
  container.appendChild(frag);
}

/* ---------- Helpers ---------- */

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function getQueryParam(nome) {
  return new URLSearchParams(window.location.search).get(nome);
}

// Inicializações comuns a todas as páginas
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initHeader();
  const anoEl = document.querySelector("[data-ano]");
  if (anoEl) anoEl.textContent = new Date().getFullYear();
});
