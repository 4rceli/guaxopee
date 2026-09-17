/**
 * app.js — lógica específica da homepage (index.html)
 */

document.addEventListener("DOMContentLoaded", () => {
  renderizarCategoriasHome();
  renderizarDestaques();
  renderizarOfertas();
});

function renderizarCategoriasHome() {
  const grid = document.querySelector("[data-categorias-grid]");
  if (!grid) return;
  grid.innerHTML = CATEGORIES.map(
    (c) => `
      <a class="categoria-card" href="produtos.html?categoria=${encodeURIComponent(c.nome)}">
        <span class="categoria-card__emoji">${c.emoji}</span>
        <span>${c.nome}</span>
      </a>`
  ).join("");
}

function renderizarDestaques() {
  const grid = document.querySelector("[data-destaques-grid]");
  if (!grid) return;
  const destaques = PRODUCTS.filter((p) => p.destaque).slice(0, 8);
  renderizarGrid(grid, destaques.length ? destaques : PRODUCTS.slice(0, 8));
}

function renderizarOfertas() {
  const grid = document.querySelector("[data-ofertas-grid]");
  if (!grid) return;
  const ofertas = [...PRODUCTS]
    .filter((p) => p.desconto > 0)
    .sort((a, b) => b.desconto - a.desconto)
    .slice(0, 8);
  renderizarGrid(grid, ofertas);
}
