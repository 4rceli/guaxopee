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

  /**
    Dia 20/09
 */

  {
  id: 10,
  nome: "Kit Gamer Teclado Semi Mecânico + Mouse 2400DPI RGB",
  categoria: "Eletrônicos",
  subcategoria: "Periféricos",
  descricao: "Kit gamer com teclado semi mecânico e mouse de 2400 DPI com iluminação RGB para deixar seu setup mais completo.",
  preco: 51.99,
  precoAnterior: null,
  imagem: "assets/imagens/produto-10.svg",
  linkAfiliado: "https://s.shopee.com.br/1BMTCtfsqe?share_channel_code=1",
  destaque: true,
  tags: ["teclado", "mouse", "gamer", "rgb", "2400dpi", "usb"],
},

{
  id: 11,
  nome: "Webcam Preta Full HD 1080p USB 360º com Microfone",
  categoria: "Eletrônicos",
  subcategoria: "Webcams",
  descricao: "Webcam Full HD 1080p com conexão USB, rotação de 360º e microfone integrado para PC e notebook.",
  preco: 74.90,
  precoAnterior: null,
  imagem: "assets/imagens/produto-11.svg",
  linkAfiliado: "https://s.shopee.com.br/1qcA05VLzI?share_channel_code=1",
  destaque: true,
  tags: ["webcam", "full hd", "1080p", "usb", "microfone", "pc"],
},

{
  id: 12,
  nome: "Monitor PC 24\" Full HD HDMI VGA",
  categoria: "Eletrônicos",
  subcategoria: "Monitores",
  descricao: "Monitor para computador com opções de tamanhos, tela Full HD e conexões HDMI e VGA para trabalho, estudos e jogos.",
  preco: 209.98,
  precoAnterior: null,
  imagem: "assets/imagens/produto-12.svg",
  linkAfiliado: "https://s.shopee.com.br/4B04mLnbnh?share_channel_code=1",
  destaque: true,
  tags: ["monitor", "full hd", "hdmi", "vga", "pc", "gamer"],
},

{
  id: 13,
  nome: "Microfone Gamer Condenser USB com LED e Botão Mute",
  categoria: "Eletrônicos",
  subcategoria: "Microfones",
  descricao: "Microfone condensador USB com iluminação LED e botão de mute, ideal para jogos, streaming, podcasts e chamadas.",
  preco: 117.99,
  precoAnterior: null,
  imagem: "assets/imagens/produto-13.svg",
  linkAfiliado: "https://s.shopee.com.br/5AsbyA2Cxt?share_channel_code=1",
  destaque: true,
  tags: ["microfone", "gamer", "usb", "led", "streaming", "podcast"],
},

{
  id: 14,
  nome: "Máscara de LED Neon Fio Duplo para Festas e Halloween",
  categoria: "Moda",
  subcategoria: "Fantasias",
  descricao: "Máscara com fio duplo de LED, alimentada por pilhas, ideal para festas, Halloween, Carnaval e eventos temáticos.",
  preco: 27.30,
  precoAnterior: null,
  imagem: "assets/imagens/produto-14.svg",
  linkAfiliado: "https://s.shopee.com.br/1BMTCVBudK?share_channel_code=1",
  destaque: true,
  tags: ["máscara", "led", "neon", "halloween", "carnaval", "festa"],
},

{
  id: 15,
  nome: "Lente de Contato Anime Cosplay Sharingan Naruto Cat Eyes",
  categoria: "Moda",
  subcategoria: "Cosplay",
  descricao: "Lente de contato temática para cosplay e fantasias inspiradas em anime, Halloween e personagens.",
  preco: 10.90,
  precoAnterior: null,
  imagem: "assets/imagens/produto-15.svg",
  linkAfiliado: "https://s.shopee.com.br/1LftOiI249?share_channel_code=1",
  destaque: true,
  tags: ["lente", "cosplay", "anime", "naruto", "sharingan", "halloween"],
},

{
  id: 16,
  nome: "Fantasia Chapeuzinho Vermelho Feminina para Halloween",
  categoria: "Moda",
  subcategoria: "Fantasias",
  descricao: "Conjunto de fantasia inspirado em Chapeuzinho Vermelho com manto vermelho, ideal para Halloween, festas e cosplay.",
  preco: 132.46,
  precoAnterior: null,
  imagem: "assets/imagens/produto-16.svg",
  linkAfiliado: "https://s.shopee.com.br/gQCbSHBV9?share_channel_code=1",
  destaque: true,
  tags: ["fantasia", "chapeuzinho vermelho", "halloween", "cosplay", "festa"],
},

{
  id: 17,
  nome: "Vestido Gótico com Espartilho e Saia Curta para Halloween",
  categoria: "Moda",
  subcategoria: "Vestidos",
  descricao: "Vestido de estilo gótico com espartilho e saia curta, ideal para Halloween, festas temáticas e cosplay.",
  preco: 154.77,
  precoAnterior: null,
  imagem: "assets/imagens/produto-17.svg",
  linkAfiliado: "https://s.shopee.com.br/40geZY9Z44?share_channel_code=1",
  destaque: true,
  tags: ["vestido", "gótico", "espartilho", "halloween", "cosplay", "fantasia"],
},

{
  id: 18,
  nome: "Capa Ravena Jovens Titãs com Cinto e Broche",
  categoria: "Moda",
  subcategoria: "Cosplay",
  descricao: "Capa inspirada na Ravena dos Jovens Titãs com cinto e broche, disponível para fantasias infantis e adultas.",
  preco: 73.00,
  precoAnterior: null,
  imagem: "assets/imagens/produto-18.svg",
  linkAfiliado: "https://s.shopee.com.br/3B7Xa2LGns?share_channel_code=1",
  destaque: true,
  tags: ["ravena", "jovens titãs", "cosplay", "capa", "halloween", "fantasia"],
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
