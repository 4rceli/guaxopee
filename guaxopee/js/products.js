/**
 * products.js — lógica da página produtos.html
 * Pesquisa em tempo real + filtros + ordenação, tudo combinável.
 */

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector("[data-produtos-grid]");
  const contagemEl = document.querySelector("[data-resultado-contagem]");

  const campos = {
    categoria: document.querySelector("[data-filtro-categoria]"),
    subcategoria: document.querySelector("[data-filtro-subcategoria]"),
    precoMin: document.querySelector("[data-filtro-preco-min]"),
    precoMax: document.querySelector("[data-filtro-preco-max]"),
    oferta: document.querySelector("[data-filtro-oferta]"),
    destaque: document.querySelector("[data-filtro-destaque]"),
    ordenar: document.querySelector("[data-ordenar]"),
  };

  popularSelectCategorias();

  // Aplica parâmetros vindos da URL (busca, categoria, oferta)
  const params = new URLSearchParams(window.location.search);
  let termoBusca = params.get("busca") || "";
  if (params.get("categoria")) campos.categoria.value = params.get("categoria");
  if (params.get("oferta")) campos.oferta.checked = true;

  atualizarSubcategorias();

  function popularSelectCategorias() {
    const categoriasUnicas = [...new Set(PRODUCTS.map((p) => p.categoria))].sort();
    campos.categoria.innerHTML =
      `<option value="">Todas as categorias</option>` +
      categoriasUnicas.map((c) => `<option value="${c}">${c}</option>`).join("");
  }

  function atualizarSubcategorias() {
    const cat = campos.categoria.value;
    const base = cat ? PRODUCTS.filter((p) => p.categoria === cat) : PRODUCTS;
    const subsUnicas = [...new Set(base.map((p) => p.subcategoria).filter(Boolean))].sort();
    campos.subcategoria.innerHTML =
      `<option value="">Todas</option>` + subsUnicas.map((s) => `<option value="${s}">${s}</option>`).join("");
  }

  function aplicarFiltros() {
    let resultado = [...PRODUCTS];

    if (termoBusca.trim()) {
      const termo = termoBusca.trim().toLowerCase();
      resultado = resultado.filter((p) =>
        [p.nome, p.categoria, p.subcategoria, p.descricao, ...(p.tags || [])]
          .join(" ")
          .toLowerCase()
          .includes(termo)
      );
    }

    if (campos.categoria.value) resultado = resultado.filter((p) => p.categoria === campos.categoria.value);
    if (campos.subcategoria.value) resultado = resultado.filter((p) => p.subcategoria === campos.subcategoria.value);

    const min = parseFloat(campos.precoMin.value);
    const max = parseFloat(campos.precoMax.value);
    if (!isNaN(min)) resultado = resultado.filter((p) => p.preco >= min);
    if (!isNaN(max)) resultado = resultado.filter((p) => p.preco <= max);

    if (campos.oferta.checked) resultado = resultado.filter((p) => p.desconto > 0);
    if (campos.destaque.checked) resultado = resultado.filter((p) => p.destaque);

    resultado = ordenar(resultado, campos.ordenar.value);

    renderizarGrid(grid, resultado);
    atualizarContagem(resultado.length);
  }

  function ordenar(lista, criterio) {
    switch (criterio) {
      case "menor-preco":
        return lista.sort((a, b) => a.preco - b.preco);
      case "maior-preco":
        return lista.sort((a, b) => b.preco - a.preco);
      case "maior-desconto":
        return lista.sort((a, b) => b.desconto - a.desconto);
      case "recentes":
        return lista.sort((a, b) => b.id - a.id);
      default:
        return lista; // mais relevantes = ordem padrão do catálogo
    }
  }

  function atualizarContagem(qtd) {
    const termoTexto = termoBusca.trim() ? ` para "${termoBusca.trim()}"` : "";
    contagemEl.textContent = `${qtd} produto${qtd === 1 ? "" : "s"} encontrado${qtd === 1 ? "" : "s"}${termoTexto}`;
  }

  // Eventos
  Object.entries(campos).forEach(([chave, el]) => {
    if (!el) return;
    const evento = el.tagName === "SELECT" || el.type === "checkbox" ? "change" : "input";
    el.addEventListener(evento, () => {
      if (chave === "categoria") atualizarSubcategorias();
      aplicarFiltros();
    });
  });

  // Campo de busca do header também filtra nesta página, sem recarregar
  const formHeaderBusca = document.querySelector("[data-header-search]");
  if (formHeaderBusca) {
    const input = formHeaderBusca.querySelector("input");
    if (termoBusca) input.value = termoBusca;
    formHeaderBusca.addEventListener("submit", (e) => {
      e.preventDefault();
      termoBusca = input.value;
      aplicarFiltros();
    });
  }

  document.querySelector("[data-limpar-filtros]").addEventListener("click", () => {
    campos.categoria.value = "";
    campos.subcategoria.value = "";
    campos.precoMin.value = "";
    campos.precoMax.value = "";
    campos.oferta.checked = false;
    campos.destaque.checked = false;
    termoBusca = "";
    if (formHeaderBusca) formHeaderBusca.querySelector("input").value = "";
    atualizarSubcategorias();
    aplicarFiltros();
  });

  aplicarFiltros();
});
