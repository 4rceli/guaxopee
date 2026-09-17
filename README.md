# 🛍️ Guaxopee

Catálogo estático de produtos com links de afiliados da Shopee. Feito com **HTML5, CSS3 e JavaScript puro**, sem backend, banco de dados ou dependências de servidor — pronto para publicar no **GitHub Pages**.

> O Guaxopee não é uma loja virtual. Ele é uma vitrine: o usuário pesquisa, filtra e visualiza produtos aqui, mas a compra (carrinho, pagamento, entrega) acontece inteiramente na Shopee.

## Estrutura do projeto

```text
guaxopee/
├── index.html          → Homepage (hero, categorias, destaques, ofertas)
├── produtos.html        → Listagem com busca, filtros e ordenação
├── produto.html          → Página individual do produto (produto.html?id=1)
├── css/
│   └── style.css         → Design tokens, layout responsivo e dark mode
├── js/
│   ├── products-data.js   → ⭐ Fonte única dos produtos e categorias
│   ├── utils.js            → Funções compartilhadas (header, tema, cards)
│   ├── app.js               → Lógica da homepage
│   ├── products.js           → Lógica da página de produtos
│   └── product.js             → Lógica da página individual
├── assets/
│   ├── favicon.svg
│   ├── placeholder.svg   → Imagem exibida quando uma foto falha ao carregar
│   └── imagens/            → Imagens dos produtos (SVGs de demonstração)
├── robots.txt
├── sitemap.xml
└── README.md
```

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub (ex.: `guaxopee`) e envie todos estes arquivos para ele.
2. Vá em **Settings → Pages**, escolha a branch `main` e a pasta `/ (root)`.
3. Aguarde alguns minutos — o site ficará disponível em `https://SEU-USUARIO.github.io/guaxopee/`.
4. Atualize os links `SEU-USUARIO` em `robots.txt` e `sitemap.xml` com o endereço real.

Não é necessário nenhum passo de build: os arquivos já estão prontos para produção.

## Como adicionar um novo produto

Abra `js/products-data.js` e adicione um novo objeto ao array `PRODUCTS`, seguindo o modelo:

```javascript
{
  id: 19,                                 // um número único
  nome: "Nome do produto",
  categoria: "Eletrônicos",               // deve bater com uma das CATEGORIES
  subcategoria: "Áudio",
  descricao: "Descrição curta do produto.",
  preco: 29.90,
  precoAnterior: 49.90,                   // ou null se não houver desconto
  imagem: "assets/imagens/produto-19.svg",
  linkAfiliado: "SEU_LINK_DE_AFILIADO_SHOPEE",
  destaque: true,                          // aparece na seção de destaques da home
  tags: ["bluetooth", "fone", "wireless"],
}
```

O campo `desconto` é calculado automaticamente a partir de `preco` e `precoAnterior` — não precisa preencher manualmente. Nenhum HTML precisa ser alterado: as três páginas leem sempre do mesmo array, então o catálogo pode crescer de 15 para 1000+ produtos sem trabalho manual.

## Substituindo as imagens

As imagens em `assets/imagens/` são placeholders SVG gerados apenas para demonstração. Para usar fotos reais dos produtos:

1. Adicione o arquivo de imagem em `assets/imagens/` (formatos `.jpg`, `.png` ou `.webp` funcionam normalmente).
2. Atualize o campo `imagem` do produto correspondente em `products-data.js`.

Se uma imagem falhar ao carregar, o site mostra automaticamente `assets/placeholder.svg` no lugar (nenhuma tela quebrada).

## Links de afiliado

**Nunca são modificados ou mascarados.** O botão "Ver na Shopee" chama sempre a mesma função central:

```javascript
function abrirProduto(produto) {
  window.open(produto.linkAfiliado, "_blank", "noopener");
}
```

Substitua os valores de exemplo (`https://exemplo.com/link-shopee-XX`) pelos seus links reais de afiliado antes de publicar.

## Funcionalidades incluídas

- 🔎 Busca em tempo real (nome, categoria, subcategoria, descrição e tags)
- 🧰 Filtros combináveis: categoria, subcategoria, faixa de preço, ofertas, destaques
- ↕️ Ordenação: relevância, menor/maior preço, maior desconto, mais recentes
- 🌗 Dark mode com preferência salva em `localStorage`
- 📱 Layout mobile-first, com menu de categorias adaptado para toque
- ♿ HTML semântico, `alt` em imagens, foco visível e navegação por teclado
- 🖼️ `loading="lazy"` nas imagens dos cards
- 🧭 SEO básico: `<title>`, meta description, Open Graph, `robots.txt` e `sitemap.xml`
- 🕳️ Estados vazios tratados: nenhum resultado, produto não encontrado, imagem indisponível

## Aviso

Este é um projeto de demonstração. Os links de afiliado incluídos em `products-data.js` são placeholders (`https://exemplo.com/...`) e devem ser substituídos pelos seus links reais antes de publicar o site.
