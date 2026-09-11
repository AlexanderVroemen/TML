export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  intro: string;
  image: string;
  bullets: string[];
  body: string[];
};

export const services: Service[] = [
  {
    slug: "detachering-tennistrainers",
    title: "Detachering tennistrainers",
    eyebrow: "De juiste trainer op de juiste baan",
    intro: "TML koppelt gekwalificeerde, betrokken tennistrainers aan verenigingen in Midden-Limburg en neemt daarbij het werkgeverschap uit handen.",
    image: "/images/tml/tennis-training.webp",
    bullets: ["Gekwalificeerde trainers", "Continuïteit gewaarborgd", "Eén vast aanspreekpunt"],
    body: ["Iedere vereniging heeft een eigen karakter. Daarom kijken we verder dan diploma’s alleen: niveau, persoonlijkheid en clubcultuur moeten bij elkaar passen.", "TML bewaakt de kwaliteit van de trainingen, regelt de personele kant en blijft gedurende de samenwerking nauw betrokken bij bestuur, trainers en leden."],
  },
  {
    slug: "detachering-padeltrainers",
    title: "Detachering padeltrainers",
    eyebrow: "Padel groeit. Kwaliteit groeit mee.",
    intro: "Sinds 2022 verzorgt TML ook padellessen met gemotiveerde trainers die spelers veilig, technisch en met plezier verder helpen.",
    image: "/images/tml/padel-training.webp",
    bullets: ["Voor starters en gevorderden", "Flexibel inzetbaar", "Professionele lesopbouw"],
    body: ["Padel is snel, uitdagend en toegankelijk. Steeds meer tennisverenigingen leggen padelbanen aan om hun club een nieuwe impuls te geven. TML beschikt over gediplomeerde padeltrainers uit de eerste lichting in Limburg.", "Van een nieuw padelaanbod tot uitbreiding van een bestaand programma: TML helpt verenigingen om de juiste trainer en lesstructuur neer te zetten. Binnen aangesloten verenigingen verzorgen we ook padelclinics voor een sterke eerste kennismaking.", "De persoonlijke aanpak blijft hetzelfde. We stemmen het programma af op de vereniging en zorgen voor korte lijnen met de verantwoordelijke manager."],
  },
  {
    slug: "advies-management-verenigingen",
    title: "Advies & management verenigingen",
    eyebrow: "Ruimte voor uw vereniging",
    intro: "Wij ondersteunen en adviseren tennis- en padelverenigingen op het gebied van trainingen, beleid, organisatie en activiteiten.",
    image: "/images/tml/management.webp",
    bullets: ["Werkgeverschap overgenomen", "Kwaliteitsbewaking", "Beleid, organisatie & facturering"],
    body: ["Een samenwerking met TML betekent brede ondersteuning: van het vinden en begeleiden van trainers tot hulp bij open dagen, schooltennis en andere verenigingsprojecten.", "Yannick Quaedvlieg en Bianca Burhenne staan als ervaren clubtrainers en managers klaar met sportieve, organisatorische en financiële kennis."],
  },
  {
    slug: "tennisclinics",
    title: "Tennisclinics",
    eyebrow: "Samen spelen, samen groeien",
    intro: "Een tennisclinic bij uw vereniging of als bedrijfsuitje: TML organiseert clinics voor alle leeftijden en niveaus.",
    image: "/images/tml/clinic.webp",
    bullets: ["Voor iedere gelegenheid", "Gediplomeerde TML-trainers", "Techniek, spel en plezier"],
    body: ["Tijdens de clinic werken deelnemers met afwisselende oefeningen en spellen aan forehand, backhand, service, volley en andere onderdelen van de tennissport.", "Ook wie nog nooit een racket heeft aangeraakt kan direct meedoen. Indien gewenst kan een clinic gecombineerd worden met een demonstratiewedstrijd van voormalig tennisprof Rogier Wassen, aangesloten bij TML."],
  },
  {
    slug: "schooltennis",
    title: "Schooltennis",
    eyebrow: "Een eerste slag die bijblijft",
    intro: "TML laat kinderen op een speelse, laagdrempelige manier kennismaken met tennis en padel, op school of bij de vereniging.",
    image: "/images/tml/tennis-training.webp",
    bullets: ["Succesbeleving voor ieder kind", "Tenniskidsballen en kleinere rackets", "Meer zichtbaarheid voor de vereniging"],
    body: ["In overleg met verenigingen organiseert TML schooltennis voor basisschoolkinderen uit de betreffende plaats. Als alternatief voor de gymles maken kinderen op een laagdrempelige manier kennis met de sport.", "Met speciale tenniskidsballen, kleinere rackets en vaardigheidsoefeningen lukt een rally sneller en beleeft ieder kind succes. Proeflessen op school kunnen worden verbonden aan een kennismakingsweek of vriendjes- en vriendinnetjesles bij de vereniging.", "Schooltennis brengt jeugd in beweging, maakt de vereniging zichtbaar in de regio en kan helpen om het jeugdbestand te vergroten."],
  },
  {
    slug: "ondersteuning-open-dagen",
    title: "Ondersteuning bij open dagen",
    eyebrow: "Een clubdag die beweegt",
    intro: "Heeft uw vereniging een open dag, jubileum of andere feestelijke activiteit? TML helpt met advies en sportieve activiteiten voor jong en oud.",
    image: "/images/tml/clinic.webp",
    bullets: ["Programma op maat", "Tennis- en padelclinics", "Voor leden én bezoekers"],
    body: ["Gediplomeerde TML-trainers verzorgen toegankelijke clinics, oefeningen en demonstraties die passen bij het moment en de doelgroep.", "Zo wordt een open dag niet alleen gezellig, maar ook een sterke kennismaking met de vereniging en de sport."],
  },
  {
    slug: "tenniskampen",
    title: "Organisatie van tenniskampen",
    eyebrow: "Vier dagen vol tennis en avontuur",
    intro: "TML organiseert zomerse tenniskampen voor jeugdspelers vanaf 6 jaar: beginners, gevorderden en wedstrijdspelers zijn welkom.",
    image: "/images/tml/team-action.webp",
    bullets: ["Groepen op gelijk niveau", "Professioneel tennisprogramma", "Sport, zwemmen en Bianca’s Bingo"],
    body: ["Gediplomeerde en ervaren trainers werken aan techniek, tactiek, voetenwerk en mentaliteit. Deelnemers worden ingedeeld in groepen van vergelijkbare sterkte.", "Naast tennis is er een divers recreatief programma met allround sport, een avondprogramma, zwemmen en gezamenlijke maaltijden. Veiligheid en plezier staan voorop."],
  },
  {
    slug: "tennisreizen",
    title: "Organisatie van tennisreizen",
    eyebrow: "Tennis verder dan de baseline",
    intro: "Al ruim tien jaar organiseert TML tennisvakanties naar Hongarije voor jeugdspelers vanaf 12 jaar die op groot veld spelen.",
    image: "/images/tml/yannick-training.webp",
    bullets: ["Tennistraining op niveau", "All-in verblijf en maaltijden", "Cultuur, waterpret en avontuur"],
    body: ["Ervaren TML-trainers verzorgen de trainingen en begeleiding gedurende de hele week. Naast tennis is er ruimte voor een waterpark, Kecskemét, karten, wakeboarden en gezellige activiteiten.", "Jongens en meiden verblijven gescheiden en er is altijd begeleiding aanwezig. Speciale voedingswensen kunnen vooraf worden doorgegeven."],
  },
];

export const clubs = [
  { name: "TC Beegden", place: "Beegden", image: "/images/clubs/tc-beegden.webp", url: "https://sites.google.com/site/tennisclubbeegden/" },
  { name: "HTV ACE", place: "Herten", image: "/images/clubs/ace-herten.webp", url: "https://www.ace-herten.nl/" },
  { name: "TC Linne", place: "Linne", image: "/images/clubs/tc-linne.webp", url: "https://www.tclinne.nl/" },
  { name: "TC Baexem", place: "Baexem", image: "/images/clubs/tc-baexem.webp", url: "https://www.tennisclubbaexem.nl/" },
  { name: "TC Ruiver", place: "Roermond", image: "/images/clubs/tc-ruiver.webp", url: "http://tc-ruiver.nl/" },
  { name: "TC Weert", place: "Weert", image: "/images/clubs/tc-weert.webp", url: "https://www.tcweert.nl/" },
  { name: "TC De Snelle Sprong", place: "Maasbracht", image: "/images/clubs/de-snelle-sprong.webp", url: "http://tcdesnellesprong.nl/home" },
  { name: "TPC Boshoven", place: "Weert", image: "/images/clubs/tpc-boshoven.webp", url: "https://tpcboshoven.nl/" },
  { name: "TPC Helios", place: "Heel", image: "/images/clubs/tpc-helios.webp", url: "https://www.tpchelios.nl/" },
  { name: "TV Koningsbosch", place: "Koningsbosch", image: "/images/clubs/tv-koningsbosch.webp", url: "http://www.tennisverenigingkoningsbosch.nl/" },
  { name: "TV Leveroy", place: "Leveroy", image: "/images/clubs/tv-leveroy.webp", url: "http://tvleveroy.nl/" },
  { name: "T.V. ’t Ell", place: "Ell", image: "/images/clubs/tv-t-ell.webp", url: "https://www.t-ell.nl/" },
  { name: "Gilde Opleidingen", place: "Limburg", image: "/images/clubs/gilde.webp", url: "https://www.gildeopleidingen.nl/" },
];

export const news = [
  { slug: "samenwerking-htv-ace", date: "1 januari 2026", title: "TML gaat samenwerking aan met HTV ACE", image: "/images/clubs/ace-herten.webp", intro: "Met trots verwelkomen we HTV ACE in het TML-netwerk. Samen bouwen we aan continuïteit en kwalitatieve trainingen in Herten.", body: ["Een nieuwe samenwerking die past bij onze ambitie: verenigingen in Midden-Limburg persoonlijk ondersteunen met trainers die bij hun club passen.", "We kijken uit naar een sportieve samenwerking met het bestuur, de trainers en alle leden van HTV ACE."] },
  { slug: "vacature-tennistrainer", date: "31 maart 2022", title: "Enthousiaste tennistrainer gezocht", image: "/images/tml/team-action.webp", intro: "Ben je gedreven, heb je passie voor de sport en geef je graag training aan jeugd en senioren? Dan zoeken we jou.", body: ["Tennis Management Limburg verzorgt professionele tennistrainingen en activiteiten in Midden-Limburg. Door de groei van de tennissport zoeken we versterking voor ons team.", "Herken je jezelf hierin? Mail naar tm.limburg@gmail.com of neem contact op met Bianca Burhenne via 06-27618190."] },
  { slug: "padeltrainer-diploma", date: "9 november 2021", title: "TML-trainers behalen hun padeltrainerdiploma", image: "/images/tml/padel-training.webp", intro: "Onze trainers blijven zich ontwikkelen. Met de nieuwe padelkwalificaties breidt TML het aanbod professioneel uit.", body: ["Padel groeit snel in Limburg. Met opgeleide trainers bieden we verenigingen een stevige basis voor lessen aan starters en gevorderden.", "Kwaliteit, persoonlijke aandacht en plezier blijven daarbij de uitgangspunten."] },
];
