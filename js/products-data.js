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

const PRODUCTS = [
  {
    id: 1,
    nome: "Pelúcia Monster",
    categoria: "Casa",
    subcategoria: "Pelúcias",
    descricao: "Pelúcia Monster para deixar sua coleção ou decoração ainda mais divertida.",
    preco: null,
    precoAnterior: null,
    imagem: "https://down-bs-br.img.susercontent.com/sg-11134201-8259p-msqzu0p821hi2e.webp",
    linkAfiliado: "https://s.shopee.com.br/3qNA5FC1nk",
    destaque: true,
    tags: ["pelúcia", "monster", "decoração", "presente"],
  },

  {
    id: 2,
    nome: "Boneco Articulado",
    categoria: "Outros",
    subcategoria: "Bonecos",
    descricao: "Boneco articulado ideal para brincar, colecionar ou usar na decoração.",
    preco: null,
    precoAnterior: null,
    imagem: "https://down-bs-br.img.susercontent.com/br-11134207-7r98o-m7zfbak2evapac.webp",
    linkAfiliado: "https://s.shopee.com.br/1ARVosBpo",
    destaque: true,
    tags: ["boneco", "articulado", "brinquedo", "coleção"],
  },

  {
    id: 3,
    nome: "Caneca Shrek",
    categoria: "Casa",
    subcategoria: "Canecas",
    descricao: "Caneca temática do Shrek para deixar seu café ou presente muito mais divertido.",
    preco: null,
    precoAnterior: null,
    imagem: "https://down-bs-br.img.susercontent.com/br-11134207-820l4-mqks5souf40169.webp",
    linkAfiliado: "https://s.shopee.com.br/6VNvFc2DJ6",
    destaque: true,
    tags: ["caneca", "shrek", "filmes", "presente"],
  },

  {
    id: 4,
    nome: "Funko Personalizada",
    categoria: "Outros",
    subcategoria: "Bonecos",
    descricao: "Boneco personalizado em estilo Funko para presentear ou colecionar.",
    preco: null,
    precoAnterior: null,
    imagem: "https://down-bs-br.img.susercontent.com/br-11134201-820lg-msxlzr3j2ebo17.webp",
    linkAfiliado: "https://s.shopee.com.br/2gBCgSO2C5",
    destaque: true,
    tags: ["funko", "personalizado", "boneco", "colecionável", "presente"],
  },

  {
    id: 5,
    nome: "Caneca Gatinho",
    categoria: "Casa",
    subcategoria: "Canecas",
    descricao: "Caneca com temática de gatinho, perfeita para quem ama gatos e itens fofos.",
    preco: null,
    precoAnterior: null,
    imagem: "https://down-bs-br.img.susercontent.com/br-11134207-7qukw-lil5n0cw20qdcd.webp",
    linkAfiliado: "https://s.shopee.com.br/40gaGlVOTM",
    destaque: false,
    tags: ["caneca", "gato", "gatinho", "fofo", "presente"],
  },

  {
    id: 6,
    nome: "Caneca Lula",
    categoria: "Casa",
    subcategoria: "Canecas",
    descricao: "Caneca temática do Lula para colecionadores e fãs de produtos personalizados.",
    preco: null,
    precoAnterior: null,
    imagem: "https://down-bs-br.img.susercontent.com/br-11134201-820lb-mqyrl9cld2pwb2.webp",
    linkAfiliado: "https://s.shopee.com.br/7fZsdPbSP0",
    destaque: false,
    tags: ["caneca", "lula", "presente"],
  },

  {
    id: 7,
    nome: "Fantasma Decorativo",
    categoria: "Casa",
    subcategoria: "Decoração",
    descricao: "Fantasma decorativo para dar um toque divertido e diferente ao ambiente.",
    preco: null,
    precoAnterior: null,
    imagem: "https://down-bs-br.img.susercontent.com/br-11134207-820ll-mncz28ey3qps2b.webp",
    linkAfiliado: null,
    destaque: false,
    tags: ["fantasma", "decoração", "halloween", "fofo"],
  },

  {
    id: 8,
    nome: "Nuvens Decorativas",
    categoria: "Casa",
    subcategoria: "Decoração",
    descricao: "Nuvens decorativas para criar um ambiente delicado, criativo e aconchegante.",
    preco: null,
    precoAnterior: null,
    imagem: "https://down-bs-br.img.susercontent.com/cn-11134207-820l4-mndrc1j4a877e7.webp",
    linkAfiliado: "https://s.shopee.com.br/8plpiPWrbf",
    destaque: false,
    tags: ["nuvens", "decoração", "quarto", "fofo"],
  },

  {
    id: 9,
    nome: "Tapete Decorativo",
    categoria: "Casa",
    subcategoria: "Tapetes",
    descricao: "Tapete decorativo para complementar o ambiente com estilo e personalidade.",
    preco: null,
    precoAnterior: null,
    imagem: "https://down-bs-br.img.susercontent.com/sg-11134201-7rfh0-m40g46xn01ob71.webp",
    linkAfiliado: "https://s.shopee.com.br/3qN9l7arOk",
    destaque: false,
    tags: ["tapete", "decoração", "casa", "quarto"],
  },
];

// Calcula o desconto percentual automaticamente quando há preço anterior
PRODUCTS.forEach((p) => {
  if (
    typeof p.preco === "number" &&
    typeof p.precoAnterior === "number" &&
    p.precoAnterior > p.preco
  ) {
    p.desconto = Math.round(
      (1 - p.preco / p.precoAnterior) * 100
    );
  } else {
    p.desconto = 0;
  }
});
