export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'Pastas' | 'Mochilas' | 'Acessórios';
  image: string;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Bolsas com madeira',
    price: 8000,
    description: 'Pasta elegante em couro legítimo com design contemporâneo e acabamento artesanal impecável.',
    category: 'Pastas',
    image: 'https://lh3.googleusercontent.com/d/1-wkLYORBr3rrmsI4U9LbyW4OIoBsKKjT=s1200'
  },
  {
    id: '2',
    name: 'Bolsas sem madeira',
    price: 8000,
    description: 'Uma peça que une a força da tradição com a funcionalidade moderna para o dia a dia.',
    category: 'Pastas',
    image: 'https://lh3.googleusercontent.com/d/10-n9XJH9-tE96GYfixWKz4CGpFyH7RCg=s1200'
  },
  {
    id: '3',
    name: 'Bolsas com madeira',
    price: 8000,
    description: 'Minimalismo e sofisticação em cada detalhe, ideal para momentos marcantes.',
    category: 'Pastas',
    image: 'https://lh3.googleusercontent.com/d/10Oec3aHwc4qb3ciDd9IamO9rXdQw9KjQ=s1200'
  },
  {
    id: '4',
    name: 'Bolsas sem madeira',
    price: 8000,
    description: 'Texturas inspiradas na alma africana, carregando essência e história.',
    category: 'Pastas',
    image: 'https://lh3.googleusercontent.com/d/11K3dH2N6-fiz0JVCW-mwwljuiEhjWoyz=s1200'
  },
  {
    id: '5',
    name: 'Mochila Nala Urbano',
    price: 8500,
    description: 'Versatilidade e conforto sem perder a elegância artesanal da Mona D’Ami.',
    category: 'Mochilas',
    image: 'https://lh3.googleusercontent.com/d/1217HTgM8oGzeJ1VSe8sfmc-YFSVWlfJV=s1200'
  },
  {
    id: '6',
    name: 'Bolsas com madeira',
    price: 8000,
    description: 'Tons terrosos que celebram a conexão com a natureza e as raíidas africanas.',
    category: 'Pastas',
    image: 'https://lh3.googleusercontent.com/d/12EE3r-Vus-0eNx593q0K2jtWMAaPkYOk=s1200'
  },
  {
    id: '7',
    name: 'Acessório Tribal Gold',
    price: 2500,
    description: 'O detalhe que faltava para completar seu estilo com um toque cultural.',
    category: 'Acessórios',
    image: 'https://lh3.googleusercontent.com/d/12oAeorZgfipctAs21eLJekBDP01-gVxr=s1200'
  },
  {
    id: '8',
    name: 'Bolsas sem madeira',
    price: 8000,
    description: 'Design escuro e sofisticado para quem busca destaque com discrição.',
    category: 'Pastas',
    image: 'https://lh3.googleusercontent.com/d/135i1BxvibVvl9IhdQSjag06YmAnYW_0E=s1200'
  },
  {
    id: '9',
    name: 'Bolsas com madeira',
    price: 8000,
    description: 'Inspirada nas cores do deserto, uma peça leve e cheia de personalidade.',
    category: 'Pastas',
    image: 'https://lh3.googleusercontent.com/d/1378PO9Um-KAuCx6dRWiEb1p2vZ_VPwyL=s1200'
  },
  {
    id: '10',
    name: 'Bolsas sem madeira',
    price: 8000,
    description: 'Formas orgânicas e design fluido que acompanha o seu ritmo.',
    category: 'Pastas',
    image: 'https://lh3.googleusercontent.com/d/13NLgbTBo6RdMnatOA6hcq610KcEW7pcF=s1200'
  },
  {
    id: '11',
    name: 'Carteira Sol de Huíla',
    price: 2500,
    description: 'Compacta e vibrante, perfeita para carregar o essencial com estilo.',
    category: 'Acessórios',
    image: 'https://lh3.googleusercontent.com/d/14FGR-NT7FD3VctEr9PAhBLz9fYlZs8zi=s1200'
  },
  {
    id: '12',
    name: 'Mochila Tribal High',
    price: 9500,
    description: 'A união perfeita entre espaço e design artístico contemporâneo.',
    category: 'Mochilas',
    image: 'https://lh3.googleusercontent.com/d/14qAlFbQ_bS5ka1s79CawUr8n5uj7iP4e=s1200'
  },
  {
    id: '13',
    name: 'Bolsas com madeira',
    price: 8000,
    description: 'Elegância banhada pelo sol, com detalhes que remetem à costa angolana.',
    category: 'Pastas',
    image: 'https://lh3.googleusercontent.com/d/15KDFLgYS9zhA5-BrfKxKpHMXmeh0W-g7=s1200'
  },
  {
    id: '14',
    name: 'Bolsas sem madeira',
    price: 8000,
    description: 'A peça definitiva para a mulher de negócios do sul de Angola.',
    category: 'Pastas',
    image: 'https://lh3.googleusercontent.com/d/15SgeJEfaPQlw_0Z6gXLReJJqTLI3Y8HU=s1200'
  },
  {
    id: '15',
    name: 'Clutch Africana Chic',
    price: 3500,
    description: 'Pequena no tamanho, imensa no estilo e na representatividade.',
    category: 'Acessórios',
    image: 'https://lh3.googleusercontent.com/d/15xsg7LmZDD3T6gk9yMDbwue1ORiPmOdL=s1200'
  },
  {
    id: '16',
    name: 'Bolsas com madeira',
    price: 8000,
    description: 'Tons verdes profundos que evocam a natureza exuberante de Malanje.',
    category: 'Pastas',
    image: 'https://lh3.googleusercontent.com/d/16AGNSR9ZDSn99iUNAq3LYzhPkDGnQ5Oq=s1200'
  },
  {
    id: '17',
    name: 'Bolsas sem madeira',
    price: 8000,
    description: 'Design floral geométrico inspirado na cidade das flores.',
    category: 'Pastas',
    image: 'https://lh3.googleusercontent.com/d/16UU6f7NcvFfgPzWo6NGqsklOcSXqPeEg=s1200'
  },
  {
    id: '18',
    name: 'Mochila Luanda Urban',
    price: 9800,
    description: 'Dinâmica e resistente, ideal para a correria da capital com sofisticação.',
    category: 'Mochilas',
    image: 'https://lh3.googleusercontent.com/d/17S-iw6bi13cIGFcZbgfT8ONiC3f--XWX=s1200'
  },
  {
    id: '19',
    name: 'Bolsas com madeira',
    price: 8000,
    description: 'Uma homenagem à riqueza e profundidade da cultura de Cabinda.',
    category: 'Pastas',
    image: 'https://lh3.googleusercontent.com/d/18n-RzL-RwJ5v0ozuFCpyabyy-FFOuy7Q=s1200'
  },
  {
    id: '20',
    name: 'Bolsas sem madeira',
    price: 8000,
    description: 'Texturas que lembram as dunas e a resistência do povo do sul.',
    category: 'Pastas',
    image: 'https://lh3.googleusercontent.com/d/18nUWiH8mpfbCTgrcbH3-OiCP6Hbiu6Gd=s1200'
  },
  {
    id: '21',
    name: 'Bolsas com madeira',
    price: 8000,
    description: 'Um toque de realeza em couro trabalhado, inspirada no Reino do Congo.',
    category: 'Pastas',
    image: 'https://lh3.googleusercontent.com/d/19UzD2iUdE_BhXNxDNI6UnALS0IVq7kXu=s1200'
  },
  {
    id: '22',
    name: 'Mochila Bié Heritage',
    price: 8900,
    description: 'A herança de uma terra central traduzida em conforto e estilo.',
    category: 'Mochilas',
    image: 'https://lh3.googleusercontent.com/d/19d76sbaZdfk_3JW0N1mr8rTDMApARRGL=s1200'
  },
  {
    id: '23',
    name: 'Porta-Cartões African Icon',
    price: 2500,
    description: 'Pequenos detalhes que carregam grandes ícones da nossa cultura.',
    category: 'Acessórios',
    image: 'https://lh3.googleusercontent.com/d/1AUTlMC0wKKJz31vOmXPmzGc5JRr3Dnb6=s1200'
  },
  {
    id: '24',
    name: 'Bolsas sem madeira',
    price: 8000,
    description: 'Como as águas do Rio Kwanza, esta peça traz fluidez e presença.',
    category: 'Pastas',
    image: 'https://lh3.googleusercontent.com/d/1AkhObIxyfSrliXOfUFey64FbDx--N9y2=s1200'
  }
];

export const BRAND_INFO = {
  name: 'Mona D’Ami',
  whatsapp: '+244 952 567 577',
  instagram: 'https://instagram.com/monadami',
  facebook: 'https://facebook.com/monadami',
  websiteAmi: 'https://ami-associa-o-de-mulheres-inspirado.vercel.app/',
  location: 'Lubango-Huila-Angola- Bairro Cmdt Cow-Boy',
  about: 'Nascida da paixão pela fusão entre o contemporâneo e o artesanal, a Mona D’Ami celebra a essência feminina através de acessórios que contam histórias. Nossas peças são inspiradas pela diversidade e riqueza da cultura africana, traduzidas em um design elegante, minimalista e atemporal.',
  slogan: 'Elegância que carrega a sua essência'
};
