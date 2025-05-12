import { Article, Category } from '../types';

// Helper function to generate random dates within the last 30 days
const getRandomDate = () => {
  const today = new Date();
  const randomDaysAgo = Math.floor(Math.random() * 30);
  const date = new Date(today);
  date.setDate(today.getDate() - randomDaysAgo);
  return date.toISOString().split('T')[0];
};

// Helper function to generate articles for a category
const generateArticlesForCategory = (category: Category, count: number): Article[] => {
  const articles: Article[] = [];
  
  for (let i = 1; i <= count; i++) {
    articles.push({
      id: `${category}-${i}`,
      title: getCategorySpecificTitle(category, i),
      excerpt: getCategorySpecificExcerpt(category, i),
      content: `Contenuto completo dell'articolo ${i} della categoria ${category}. Questo è un testo di esempio che simula il contenuto completo di un articolo di notizie.`,
      image: getCategoryImage(category, i),
      category,
      date: getRandomDate(),
      author: getRandomAuthor(),
      tags: generateRandomTags(category)
    });
  }
  
  return articles;
};

// Mock author names
const authors = [
  'Marco Rossi',
  'Giulia Bianchi',
  'Alessandro Verdi',
  'Francesca Romano',
  'Luca Ferrari',
  'Sofia Esposito'
];

// Get random author from the list
const getRandomAuthor = () => {
  return authors[Math.floor(Math.random() * authors.length)];
};

// Generate random tags based on category
const generateRandomTags = (category: Category): string[] => {
  const allTags = {
    'ultime-notizie': ['Breaking', 'Politica', 'Economia', 'Italia', 'Esteri', 'Sanità', 'COVID', 'Europa'],
    'attualita': ['Società', 'Cultura', 'Scuola', 'Ambiente', 'Tecnologia', 'Innovazione', 'Sostenibilità'],
    'cronaca': ['Incidenti', 'Criminalità', 'Tribunale', 'Polizia', 'Emergenze', 'Sicurezza'],
    'provincia-vercelli': ['Vercelli', 'Comune', 'Eventi locali', 'Territorio', 'Tradizioni', 'Turismo locale']
  };
  
  const categoryTags = allTags[category];
  const tagCount = 2 + Math.floor(Math.random() * 3); // 2-4 tags
  const selectedTags: string[] = [];
  
  for (let i = 0; i < tagCount; i++) {
    const randomTag = categoryTags[Math.floor(Math.random() * categoryTags.length)];
    if (!selectedTags.includes(randomTag)) {
      selectedTags.push(randomTag);
    }
  }
  
  return selectedTags;
};

// Get specific titles for each category
const getCategorySpecificTitle = (category: Category, index: number): string => {
  const titlesByCategory = {
    'ultime-notizie': [
      'Nuovo decreto approvato dal governo: ecco cosa cambia',
      'Emergenza climatica: dichiarato lo stato di allerta',
      'Riforma fiscale: le novità per famiglie e imprese',
      'Tensioni internazionali: nuove sanzioni annunciate',
      'Borsa italiana in ripresa dopo settimane difficili',
      'Approvato il bilancio statale: tagli e nuovi investimenti',
      'Nuovo vaccino disponibile contro variante del virus',
      'Sciopero nazionale dei trasporti: disagi in tutto il paese',
      'Elezioni regionali: i risultati definitivi',
      'Aumentano i prezzi dell\'energia: le misure del governo',
      'Riforma del sistema educativo: cosa cambia per studenti e docenti',
      'Scoperta archeologica importante nel centro Italia',
      'Avanzamenti nella ricerca contro il cancro: nuova terapia sperimentale'
    ],
    'attualita': [
      'Cambiamenti nel sistema pensionistico italiano',
      'Festival culturale di primavera: il programma completo',
      'Nuove tendenze nel mercato del lavoro post-pandemia',
      'Il fenomeno delle app di incontri tra i giovani italiani',
      'Rapporto sulla qualità della vita nelle città italiane',
      'L\'impatto dei social media sulla salute mentale',
      'Innovazioni tecnologiche nel settore agricolo',
      'La crisi abitativa nelle grandi città: analisi e soluzioni',
      'Il ritorno del turismo in Italia: dati e prospettive',
      'Cambiamenti climatici: l\'impatto sull\'agricoltura italiana',
      'Il dibattito sulla settimana lavorativa corta',
      'L\'evoluzione del sistema sanitario dopo la pandemia',
      'Nuove politiche per la famiglia: bonus e incentivi'
    ],
    'cronaca': [
      'Incidente stradale sulla tangenziale: due feriti',
      'Rapina in banca nel centro città: caccia ai responsabili',
      'Incendio in un capannone industriale: intervento dei pompieri',
      'Arrestato hacker responsabile di frodi online',
      'Furti in appartamento: come proteggere la propria casa',
      'Processo per corruzione: condannato ex sindaco',
      'Operazione antidroga: sequestrati 50 kg di sostanze illegali',
      'Truffa agli anziani: i consigli della polizia',
      'Maltempo: esondazione del fiume causa evacuazioni',
      'Violenza domestica: aumentano le denunce durante le festività',
      'Aggressione in centro città: identificato l\'autore',
      'Inchiesta sulla sanità: indagati tre dirigenti',
      'Esplosione in un\'abitazione: probabile fuga di gas'
    ],
    'provincia-vercelli': [
      'Festa patronale di Vercelli: il programma degli eventi',
      'Nuovo parco urbano inaugurato a Vercelli',
      'Lavori stradali: modifiche alla viabilità nel centro storico',
      'Mostra d\'arte contemporanea al museo civico',
      'Stagione teatrale: presentato il cartellone invernale',
      'Iniziativa per le scuole: laboratori di educazione ambientale',
      'Consiglio comunale: approvato il piano urbanistico',
      'Prodotti tipici vercellesi: successo alla fiera regionale',
      'Servizio di trasporto pubblico: nuove linee attivate',
      'Associazioni locali: raccolti fondi per il nuovo centro civico',
      'Sport: la squadra di basket vercellese promossa in serie B',
      'Manifestazione agricola: focus sulla produzione di riso',
      'Concerto di beneficenza al teatro comunale'
    ]
  };
  
  // Use modulo to cycle through the titles if more articles are needed than titles available
  const titleIndex = (index - 1) % titlesByCategory[category].length;
  return titlesByCategory[category][titleIndex];
};

// Get specific excerpts for each category
const getCategorySpecificExcerpt = (category: Category, index: number): string => {
  const excerptsByCategory = {
    'ultime-notizie': [
      'Il Consiglio dei Ministri ha approvato ieri sera un nuovo decreto che introduce importanti modifiche al sistema fiscale e previdenziale...',
      'La Protezione Civile ha dichiarato lo stato di allerta in diverse regioni a causa dell\'ondata di maltempo prevista per i prossimi giorni...',
      'La nuova riforma fiscale introduce agevolazioni per le famiglie numerose e incentivi per le piccole e medie imprese. Ecco tutti i dettagli...',
      'Il Ministero degli Esteri ha annunciato nuove sanzioni economiche in risposta alle crescenti tensioni internazionali...',
      'Dopo settimane di incertezza, la Borsa italiana segna una ripresa significativa, trainata dal settore tecnologico e energetico...',
      'Il Parlamento ha approvato il bilancio statale per il prossimo anno, con tagli alla spesa pubblica e nuovi investimenti in infrastrutture...',
      'Un nuovo vaccino contro la recente variante del virus sarà disponibile a partire dalla prossima settimana nelle farmacie...',
      'Lo sciopero nazionale dei trasporti indetto per domani causerà disagi in tutto il paese. Ecco le fasce orarie garantite...',
      'Si sono concluse le elezioni regionali con risultati che mostrano un cambiamento significativo negli equilibri politici...',
      'L\'aumento dei prezzi dell\'energia preoccupa famiglie e imprese. Il governo ha annunciato misure di sostegno...',
      'La riforma del sistema educativo introduce cambiamenti significativi nei programmi scolastici e nei metodi di valutazione...',
      'Archeologi hanno portato alla luce un\'antica villa romana risalente al II secolo d.C. nel centro Italia...',
      'Ricercatori italiani hanno sviluppato una nuova terapia sperimentale che mostra risultati promettenti nella lotta contro il cancro...'
    ],
    'attualita': [
      'Il governo sta valutando modifiche al sistema pensionistico per garantirne la sostenibilità a lungo termine...',
      'Presentato il programma del Festival culturale di primavera che animerà la città con eventi, mostre e concerti...',
      'Un recente studio analizza come è cambiato il mercato del lavoro dopo la pandemia, con nuove professioni emergenti...',
      'Le app di incontri stanno cambiando le dinamiche relazionali tra i giovani italiani. Uno studio ne analizza l\'impatto...',
      'Pubblicato il rapporto annuale sulla qualità della vita nelle città italiane, con sorprese nella classifica...',
      'Esperti in salute mentale avvertono sui rischi dell\'uso eccessivo dei social media, specialmente tra gli adolescenti...',
      'Droni e intelligenza artificiale stanno rivoluzionando il settore agricolo italiano, migliorando efficienza e sostenibilità...',
      'Nelle grandi città italiane si aggrava la crisi abitativa, con affitti sempre più alti e carenza di alloggi accessibili...',
      'I dati sul turismo mostrano una forte ripresa del settore, con numeri che in alcune località superano quelli pre-pandemia...',
      'I cambiamenti climatici stanno influenzando le colture tradizionali italiane, costringendo gli agricoltori ad adattarsi...',
      'Sempre più aziende italiane stanno sperimentando la settimana lavorativa di quattro giorni, con risultati interessanti...',
      'Come sta evolvendo il sistema sanitario italiano dopo l\'emergenza pandemica? Analisi delle criticità e dei miglioramenti...',
      'Il governo ha introdotto nuove politiche di sostegno alle famiglie, con bonus e incentivi per contrastare il calo demografico...'
    ],
    'cronaca': [
      'Un grave incidente stradale sulla tangenziale ha causato il ferimento di due persone e lunghe code nel traffico...',
      'Una rapina a mano armata è stata messa a segno questa mattina in una filiale bancaria del centro città...',
      'Un vasto incendio è divampato nella notte in un capannone industriale alla periferia della città...',
      'Le forze dell\'ordine hanno arrestato un hacker responsabile di numerose frodi online per un valore di oltre un milione di euro...',
      'Con l\'aumento dei furti in appartamento, la polizia offre consigli pratici ai cittadini per proteggere le proprie abitazioni...',
      'Si è concluso il processo per corruzione che ha visto coinvolto l\'ex sindaco, condannato a quattro anni di reclusione...',
      'Un\'importante operazione antidroga ha portato al sequestro di 50 kg di sostanze stupefacenti e all\'arresto di sette persone...',
      'La polizia postale mette in guardia contro una nuova truffa agli anziani che sta colpendo la nostra regione...',
      'Le forti piogge hanno causato l\'esondazione del fiume locale, con evacuazioni nelle aree più colpite...',
      'Durante le festività si registra un preoccupante aumento delle denunce per violenza domestica. Le autorità intensificano i controlli...',
      'Un\'aggressione in pieno centro città ha scosso i residenti. Le forze dell\'ordine hanno identificato il responsabile...',
      'Tre dirigenti sanitari sono indagati nell\'ambito di un\'inchiesta su presunte irregolarità negli appalti ospedalieri...',
      'Un\'esplosione in un\'abitazione ha provocato danni ingenti. I vigili del fuoco sospettano una fuga di gas...'
    ],
    'provincia-vercelli': [
      'La città di Vercelli si prepara alla festa patronale con un ricco programma di eventi religiosi e culturali...',
      'Inaugurato il nuovo parco urbano di Vercelli, un\'area verde di 5 ettari con percorsi fitness e aree gioco...',
      'Inizieranno lunedì i lavori di rifacimento della pavimentazione nel centro storico di Vercelli...',
      'Il museo civico ospiterà una mostra d\'arte contemporanea con opere di artisti internazionali e locali...',
      'Presentato il cartellone della stagione teatrale invernale con spettacoli di prosa, danza e musica...',
      'Le scuole vercellesi parteciperanno a laboratori di educazione ambientale organizzati dal comune...',
      'Il consiglio comunale ha approvato il nuovo piano urbanistico che prevede la riqualificazione di aree dismesse...',
      'I prodotti tipici vercellesi hanno riscosso grande successo alla fiera regionale dei prodotti enogastronomici...',
      'L\'azienda dei trasporti locali ha attivato nuove linee di autobus per collegare meglio le frazioni...',
      'Le associazioni locali hanno organizzato eventi di raccolta fondi per la costruzione del nuovo centro civico...',
      'Grande soddisfazione per la promozione in serie B della squadra di basket vercellese dopo una stagione eccellente...',
      'La manifestazione agricola di questo fine settimana metterà in primo piano la produzione di riso, eccellenza locale...',
      'Il teatro comunale ospiterà un concerto di beneficenza il cui ricavato sarà devoluto all\'ospedale cittadino...'
    ]
  };
  
  // Use modulo to cycle through the excerpts if more articles are needed than excerpts available
  const excerptIndex = (index - 1) % excerptsByCategory[category].length;
  return excerptsByCategory[category][excerptIndex];
};

// Get images for articles based on category
const getCategoryImage = (category: Category, index: number): string => {
  // Use placeholder images from Pexels for each category
  const categoryImages = {
    'ultime-notizie': [
      'https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg',
      'https://images.pexels.com/photos/4386426/pexels-photo-4386426.jpeg',
      'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg',
      'https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg',
      'https://images.pexels.com/photos/6615076/pexels-photo-6615076.jpeg'
    ],
    'attualita': [
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      'https://images.pexels.com/photos/2422280/pexels-photo-2422280.jpeg',
      'https://images.pexels.com/photos/3755755/pexels-photo-3755755.jpeg',
      'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg',
      'https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg'
    ],
    'cronaca': [
      'https://images.pexels.com/photos/207456/pexels-photo-207456.jpeg',
      'https://images.pexels.com/photos/923681/pexels-photo-923681.jpeg',
      'https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg',
      'https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg',
      'https://images.pexels.com/photos/258174/pexels-photo-258174.jpeg'
    ],
    'provincia-vercelli': [
      'https://images.pexels.com/photos/2346150/pexels-photo-2346150.jpeg',
      'https://images.pexels.com/photos/1739715/pexels-photo-1739715.jpeg',
      'https://images.pexels.com/photos/3601453/pexels-photo-3601453.jpeg',
      'https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg',
      'https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg'
    ]
  };
  
  // Use modulo to cycle through the images
  const imageIndex = (index - 1) % categoryImages[category].length;
  return categoryImages[category][imageIndex];
};

// Generate 13 articles for each category
export const articlesUltimeNotizie = generateArticlesForCategory('ultime-notizie', 13);
export const articlesAttualita = generateArticlesForCategory('attualita', 13);
export const articlesCronaca = generateArticlesForCategory('cronaca', 13);
export const articlesProvinciaVercelli = generateArticlesForCategory('provincia-vercelli', 13);

// All articles combined
export const allArticles = [
  ...articlesUltimeNotizie,
  ...articlesAttualita,
  ...articlesCronaca,
  ...articlesProvinciaVercelli
];

// Export utility functions for article filtering
export const getArticlesByCategory = (category: Category) => {
  return allArticles.filter(article => article.category === category);
};

export const getArticleById = (id: string) => {
  return allArticles.find(article => article.id === id);
};

export const searchArticles = (query: string) => {
  const lowerCaseQuery = query.toLowerCase();
  return allArticles.filter(article => 
    article.title.toLowerCase().includes(lowerCaseQuery) || 
    article.excerpt.toLowerCase().includes(lowerCaseQuery) ||
    article.content.toLowerCase().includes(lowerCaseQuery) ||
    article.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery))
  );
};