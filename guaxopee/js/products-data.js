/**
 * products-data.js
 * Fonte única de dados do catálogo Guaxopee.
 * Para adicionar um novo produto, basta incluir um novo objeto no array PRODUCTS.
 * Nenhuma outra parte do site precisa ser alterada manualmente.
 */

const CATEGORIES = [
  { slug: "ofertas", nome: "Ofertas", emoji: "🔥" },
  { slug: "eletronicos", nome: "Eletrônicos", emoji: "📱" },
  { slug: "moda", nome: "Moda", emoji: "👕" },
  { slug: "casa", nome: "Casa", emoji: "🏠" },
  { slug: "informatica", nome: "Informática", emoji: "💻" },
  { slug: "games", nome: "Games", emoji: "🎮" },
  { slug: "celulares", nome: "Celulares", emoji: "📱" },
  { slug: "beleza", nome: "Beleza", emoji: "💄" },
  { slug: "pet", nome: "Pet", emoji: "🐶" },
  { slug: "esportes", nome: "Esportes", emoji: "⚽" },
  { slug: "outros", nome: "Outros", emoji: "🎁" },
];

// Nota: os links abaixo são placeholders de demonstração.
// Substitua "linkAfiliado" pelo seu link real de afiliado da Shopee em cada produto.
const PRODUCTS = [
  { id: 1, nome: "Fone Bluetooth Pro X20", categoria: "Eletrônicos", subcategoria: "Áudio", descricao: "Fone de ouvido sem fio com cancelamento de ruído e 30h de bateria.", preco: 89.9, precoAnterior: 149.9, imagem: "assets/imagens/produto-01.svg", linkAfiliado: "https://exemplo.com/link-shopee-01", destaque: true, tags: ["bluetooth", "fone", "wireless", "audio"] },
  { id: 2, nome: "Caixa de Som Portátil Bass+", categoria: "Eletrônicos", subcategoria: "Áudio", descricao: "Caixa de som à prova d'água com graves potentes e conexão bluetooth 5.0.", preco: 119.9, precoAnterior: null, imagem: "assets/imagens/produto-02.svg", linkAfiliado: "https://exemplo.com/link-shopee-02", destaque: false, tags: ["caixa de som", "bluetooth", "portatil"] },
  { id: 3, nome: "Camiseta Oversized Streetwear", categoria: "Moda", subcategoria: "Camisetas", descricao: "Camiseta 100% algodão, modelagem oversized, caimento confortável.", preco: 39.9, precoAnterior: 59.9, imagem: "assets/imagens/produto-03.svg", linkAfiliado: "https://exemplo.com/link-shopee-03", destaque: true, tags: ["camiseta", "moda", "streetwear"] },
  { id: 4, nome: "Tênis Casual Confort Walk", categoria: "Moda", subcategoria: "Calçados", descricao: "Tênis leve para o dia a dia, com solado em EVA e cabedal respirável.", preco: 129.9, precoAnterior: 179.9, imagem: "assets/imagens/produto-04.svg", linkAfiliado: "https://exemplo.com/link-shopee-04", destaque: false, tags: ["tenis", "calcado", "moda"] },
  { id: 5, nome: "Luminária de Mesa LED Touch", categoria: "Casa", subcategoria: "Iluminação", descricao: "Luminária com 3 tons de luz, controle touch e entrada USB.", preco: 54.9, precoAnterior: 79.9, imagem: "assets/imagens/produto-05.svg", linkAfiliado: "https://exemplo.com/link-shopee-05", destaque: false, tags: ["luminaria", "led", "casa", "decoracao"] },
  { id: 6, nome: "Organizador de Gavetas 8 Divisórias", categoria: "Casa", subcategoria: "Organização", descricao: "Kit organizador multiuso para gavetas, armários e banheiro.", preco: 29.9, precoAnterior: null, imagem: "assets/imagens/produto-06.svg", linkAfiliado: "https://exemplo.com/link-shopee-06", destaque: false, tags: ["organizador", "casa", "gaveta"] },
  { id: 7, nome: "Mouse Gamer RGB 7200 DPI", categoria: "Informática", subcategoria: "Periféricos", descricao: "Mouse gamer com sensor de precisão, iluminação RGB e 6 botões programáveis.", preco: 69.9, precoAnterior: 99.9, imagem: "assets/imagens/produto-07.svg", linkAfiliado: "https://exemplo.com/link-shopee-07", destaque: true, tags: ["mouse", "gamer", "rgb", "informatica"] },
  { id: 8, nome: "Teclado Mecânico Compacto 60%", categoria: "Informática", subcategoria: "Periféricos", descricao: "Teclado mecânico switch blue, layout compacto e retroiluminação RGB.", preco: 149.9, precoAnterior: 219.9, imagem: "assets/imagens/produto-08.svg", linkAfiliado: "https://exemplo.com/link-shopee-08", destaque: false, tags: ["teclado", "mecanico", "gamer"] },
  { id: 9, nome: "Controle Sem Fio Universal", categoria: "Games", subcategoria: "Acessórios", descricao: "Controle compatível com PC, celular e principais consoles via bluetooth.", preco: 99.9, precoAnterior: 139.9, imagem: "assets/imagens/produto-09.svg", linkAfiliado: "https://exemplo.com/link-shopee-09", destaque: true, tags: ["controle", "games", "bluetooth"] },
  { id: 10, nome: "Suporte de Celular para Jogos", categoria: "Games", subcategoria: "Acessórios", descricao: "Suporte ajustável para celular, ideal para jogar ou assistir vídeos.", preco: 24.9, precoAnterior: null, imagem: "assets/imagens/produto-10.svg", linkAfiliado: "https://exemplo.com/link-shopee-10", destaque: false, tags: ["suporte", "celular", "games"] },
  { id: 11, nome: "Capinha Anti-Impacto Universal", categoria: "Celulares", subcategoria: "Acessórios", descricao: "Capinha reforçada com proteção nas bordas contra quedas e impactos.", preco: 19.9, precoAnterior: 34.9, imagem: "assets/imagens/produto-11.svg", linkAfiliado: "https://exemplo.com/link-shopee-11", destaque: false, tags: ["capinha", "celular", "protecao"] },
  { id: 12, nome: "Carregador Turbo 33W Duplo USB", categoria: "Celulares", subcategoria: "Carregadores", descricao: "Carregador de parede com carga rápida e duas portas USB.", preco: 34.9, precoAnterior: 49.9, imagem: "assets/imagens/produto-12.svg", linkAfiliado: "https://exemplo.com/link-shopee-12", destaque: true, tags: ["carregador", "celular", "turbo"] },
  { id: 13, nome: "Paleta de Sombras 12 Cores", categoria: "Beleza", subcategoria: "Maquiagem", descricao: "Paleta compacta com cores neutras e vibrantes de alta pigmentação.", preco: 44.9, precoAnterior: 64.9, imagem: "assets/imagens/produto-13.svg", linkAfiliado: "https://exemplo.com/link-shopee-13", destaque: false, tags: ["maquiagem", "beleza", "paleta"] },
  { id: 14, nome: "Secador de Cabelo Íon 2000W", categoria: "Beleza", subcategoria: "Cuidados", descricao: "Secador com tecnologia íon, reduz o frizz e seca mais rápido.", preco: 79.9, precoAnterior: 119.9, imagem: "assets/imagens/produto-14.svg", linkAfiliado: "https://exemplo.com/link-shopee-14", destaque: false, tags: ["secador", "cabelo", "beleza"] },
  { id: 15, nome: "Brinquedo Mordedor para Cães", categoria: "Pet", subcategoria: "Brinquedos", descricao: "Brinquedo resistente em borracha atóxica para cães de pequeno e médio porte.", preco: 22.9, precoAnterior: null, imagem: "assets/imagens/produto-15.svg", linkAfiliado: "https://exemplo.com/link-shopee-15", destaque: false, tags: ["pet", "cachorro", "brinquedo"] },
  { id: 16, nome: "Coleira Ajustável com Guia", categoria: "Pet", subcategoria: "Acessórios", descricao: "Kit coleira e guia acolchoados, ajustáveis para diversos portes.", preco: 32.9, precoAnterior: 45.9, imagem: "assets/imagens/produto-16.svg", linkAfiliado: "https://exemplo.com/link-shopee-16", destaque: true, tags: ["pet", "coleira", "cachorro"] },
  { id: 17, nome: "Garrafa Térmica Inox 1L", categoria: "Esportes", subcategoria: "Acessórios", descricao: "Garrafa térmica que mantém a temperatura por até 12 horas.", preco: 42.9, precoAnterior: 59.9, imagem: "assets/imagens/produto-17.svg", linkAfiliado: "https://exemplo.com/link-shopee-17", destaque: false, tags: ["garrafa", "esporte", "termica"] },
  { id: 18, nome: "Faixa de Resistência Kit 5 Níveis", categoria: "Esportes", subcategoria: "Fitness", descricao: "Kit de faixas elásticas para treino funcional em casa ou na academia.", preco: 27.9, precoAnterior: null, imagem: "assets/imagens/produto-18.svg", linkAfiliado: "https://exemplo.com/link-shopee-18", destaque: false, tags: ["fitness", "treino", "esporte"] },
];

// Calcula o desconto percentual automaticamente quando há precoAnterior
PRODUCTS.forEach((p) => {
  p.desconto = p.precoAnterior ? Math.round((1 - p.preco / p.precoAnterior) * 100) : 0;
});
