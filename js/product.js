/**
 * product.js — lógica da página produto.html
 * Lê o parâmetro ?id= da URL e renderiza os detalhes do produto correspondente.
 */

document.addEventListener("DOMContentLoaded", () => {
  const id = parseInt(getQueryParam("id"), 10);
  const produto = PRODUCTS.find((p) => p.id === id);

  const container = document.getElementById("produto-container");
  const naoEncontrado = document.querySelector("[data-produto-nao-encontrado]");
  const relacionadosSecao = document.querySelector("[data-relacionados-secao]");

  if (!produto) {
    container.remove();
    relacionadosSecao.remove();
    naoEncontrado.classList.remove("is-hidden");
    return;
  }

  document.title = `${produto.nome} — Guaxopee`;
  document.querySelector("[data-meta-descricao]").setAttribute("content", produto.descricao);

  container.innerHTML = `
    <div class="produto-detalhe">
      <div class="produto-detalhe__imagem">
        <img
          src="${produto.imagem}"
          alt="${escapeHtml(produto.nome)}"
          onerror="this.onerror=null;this.src='assets/placeholder.svg';"
        />
      </div>
      <div>
        <p class="produto-detalhe__categoria">${escapeHtml(produto.categoria)}${produto.subcategoria ? " · " + escapeHtml(produto.subcategoria) : ""}</p>
        <h1 class="produto-detalhe__nome">${escapeHtml(produto.nome)}</h1>

        <div class="produto-detalhe__precos">
          ${formatarPreco(produto.precoAnterior) ? `<span class="produto-detalhe__preco-anterior">${formatarPreco(produto.precoAnterior)}</span>` : ""}
          <span class="produto-detalhe__preco">${formatarPreco(produto.preco) || "Ver preço na Shopee"}</span>
          ${produto.desconto > 0 ? `<span class="produto-detalhe__desconto">${produto.desconto}% OFF</span>` : ""}
        </div>

        <p class="produto-detalhe__descricao">${escapeHtml(produto.descricao)}</p>

        <div class="produto-detalhe__tags">
          ${produto.tags.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("")}
        </div>

        <button type="button" class="btn btn--primary btn--lg btn--full" data-ver-shopee ${produto.linkAfiliado ? "" : "disabled title=\"Link indisponível\""}>
          🛒 Ver produto na Shopee
        </button>

        <p class="aviso-shopee">
          Você está sendo direcionado para a Shopee. A compra, o pagamento e a entrega são realizados diretamente
          pela Shopee.
        </p>
      </div>
    </div>
  `;

  container.querySelector("[data-ver-shopee]").addEventListener("click", () => abrirProduto(produto));

  renderizarRelacionados(produto);
});

function renderizarRelacionados(produtoAtual) {
  const grid = document.querySelector("[data-relacionados-grid]");
  if (!grid) return;
  const relacionados = PRODUCTS.filter(
    (p) => p.id !== produtoAtual.id && p.categoria === produtoAtual.categoria
  ).slice(0, 4);

  if (!relacionados.length) {
    document.querySelector("[data-relacionados-secao]").remove();
    return;
  }
  renderizarGrid(grid, relacionados);
}
