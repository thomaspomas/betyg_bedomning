export const LR_ITEMS = [
  { text: 'Studeranden ska gå igenom byggprocessens olika skeden.', bedömbar: false },
  { text: 'Studeranden ska kunna beskriva byggprocessens skeden och redogöra för varje aktörs ansvar.', bedömbar: true },
  { text: 'Studeranden ska delta aktivt på lektioner om byggmaterial.', bedömbar: false },
  { text: 'Studeranden ska kunna välja lämpligt byggmaterial för en given konstruktion och motivera valet utifrån tekniska och ekonomiska krav.', bedömbar: true },
  { text: 'Studeranden ska genomgå en introduktion till Boverkets Byggregler.', bedömbar: false },
  { text: 'Studeranden ska kunna tillämpa relevanta BBR-krav på ett givet byggprojekt och motivera sin tolkning.', bedömbar: true },
]

export const MATRIX_CRITERIA = [
  {
    text: 'Studenten visar god förståelse för byggregler.',
    ok: false,
    tip: "Otydligt! 'God förståelse' är subjektivt och inte observerbart. Beskriv istället vad studenten konkret ska kunna göra.",
  },
  {
    text: 'Studenten kan identifiera vilket BBR-avsnitt som gäller för en given byggnadstyp och redovisa det aktuella kravet.',
    ok: true,
    tip: 'Utmärkt! Konkret, observerbart och mätbart. Du kan direkt se om studenten pekar ut rätt avsnitt och återger kravet korrekt.',
  },
  {
    text: 'Studenten är aktiv och deltar på APL-plats.',
    ok: false,
    tip: 'Detta är aktivitetsbedömning – det mäter om studenten är på plats, inte vad de kan. Byt fokus till vad studenten ska kunna utföra.',
  },
]

export const FF_QUESTIONS = [
  {
    original: 'Din ritningsläsning var rörig och det var svårt att följa dina svar.',
    options: [
      { text: 'I nästa uppgift: gå igenom ritningen i ordning – börja med att identifiera skalan, sedan väggtjocklekar, sedan dörr- och fönsterplaceringar. Skriv ett svar per punkt.', correct: true },
      { text: 'Du behöver träna mer på att läsa ritningar.', correct: false },
      { text: 'Rörigheten berodde förmodligen på att du inte förberedde dig tillräckligt.', correct: false },
    ],
  },
  {
    original: 'Du har inte utfört fogningen korrekt.',
    options: [
      { text: 'Se till att läsa instruktionerna igen innan nästa uppgift.', correct: false },
      { text: 'I din nästa praktiska uppgift: se till att grundningssteget är helt torrt innan fogmassan appliceras. Det är just det steget som saknades och som gör att fogen inte håller tätt.', correct: true },
      { text: 'Fogningen uppfyllde inte kraven.', correct: false },
    ],
  },
]

export const PLANNING_OPTIONS = [
  {
    title: 'Självskattning med matris',
    desc: 'Studenten skattar sin prestation mot varje kriterium innan inlämning.',
    how: '<ol><li>Dela bedömningsmatrisen i kursstart – inte bara inför inlämning</li><li>Be studenten fylla i en kolumn "Min bedömning" bredvid varje kriterium</li><li>Studenten skriver en konkret mening om var i uppgiften kriteriet uppfylls</li><li>Läraren jämför sin bedömning med studentens – olikheter ger lärsamtalspunkter</li></ol>',
  },
  {
    title: 'Kamratbedömning med checklistor',
    desc: 'Studeranden ger strukturerad återkoppling till en kurskamrats arbete.',
    how: '<ol><li>Skapa en checklista (3–5 frågor) baserad på bedömningskriterierna</li><li>Para ihop studeranden anonymt eller öppet</li><li>Varje student fyller i checklistans frågor om kamratens arbete + ger ett specifikt förbättringsförslag</li><li>Läraren samlar in checklistor för att se mönster</li></ol>',
  },
  {
    title: 'Granskning av exemplarisk prestation',
    desc: 'Studeranden analyserar anonymiserade exempeluppgifter mot kriterierna.',
    how: '<ol><li>Välj 2–3 anonymiserade uppgifter från tidigare kurs på G/VG-nivå</li><li>Studeranden bedömer dem mot matrisen – i grupp eller enskilt</li><li>Diskutera varför respektive uppgift uppfyller kriterierna</li><li>Studeranden formulerar ett mål för sin egen uppgift</li></ol>',
  },
]

export const QUIZ_1 = {
  id: 'q1',
  question: 'En studerande har lagt ner stor ansträngning i kursen och deltagit aktivt på alla lektioner, men har inte uppnått ett av de tre läranderesultaten. Vad ska betyget bli?',
  options: [
    { text: 'G, eftersom ansträngning och deltagande ska vägas in', correct: false },
    { text: 'G, om de andra läranderesultaten uppnås på VG-nivå', correct: false },
    { text: 'IG, eftersom alla läranderesultat måste vara uppnådda för betyget G', correct: true },
    { text: 'VG, för att premiera det starka engagemanget', correct: false },
  ],
  feedbackCorrect: 'Alla läranderesultat måste vara uppnådda för betyget G. Ansträngning och närvaro kan aldrig kompensera för att ett läranderesultat inte uppnåtts.',
  feedbackWrong: 'Kom ihåg: alla läranderesultat måste uppnås för G. Ansträngning och deltagande bedöms inte i betyget.',
}

export const QUIZ_2 = {
  id: 'q2',
  question: 'Vilken av dessa principer innebär att samma prestation ska bedömas på samma sätt oavsett lärare?',
  options: [
    { text: 'Rättssäkerhet', correct: false },
    { text: 'Likvärdighet', correct: true },
    { text: 'Transparens', correct: false },
  ],
  feedbackCorrect: 'Likvärdighet innebär att samma prestation ska bedömas på samma sätt oavsett vem som bedömer.',
  feedbackWrong: 'Rättssäkerhet handlar om studerandens rätt till förutsägbar bedömning. Transparens handlar om att synliggöra kriterierna. Likvärdighet handlar om att samma prestation bedöms lika.',
}

export const CASE_MOD4 = {
  key: 'mod4_case1',
  scenario: 'Lärare A och lärare B bedömer samma projektrapport av studeranden Yusra. Lärare A sätter G, lärare B sätter VG. Lärare B motiverar: "Yusras analys är imponerande och håller klart VG-nivå." Lärare A svarar: "Ja, analysen är bra, men hennes slutsatser saknar den egna reflektionen som kriteriet kräver för VG."',
  question: 'Hur ska situationen hanteras?',
  options: [
    { text: 'Lärare A ceder till lärare B eftersom VG alltid är bättre för studenten.', correct: false, feedback: 'Betygsbeslut ska fattas utifrån kriterierna – inte för att gynna studenten. Det vore inte rättssäkert gentemot andra studeranden.' },
    { text: 'Lärare B ceder till lärare A utan vidare diskussion.', correct: false, feedback: 'Det kan vara rätt slutsats, men processen är fel. Båda lärarna bör gå igenom kriteriet gemensamt och grunda beslutet i texten, inte i vem som ger med sig.' },
    { text: 'Lärarna läser rapporten gemensamt mot VG-kriteriet om slutsatser och fattar ett gemensamt motiverat beslut.', correct: true, feedback: 'Rätt! Kalibrering innebär att gemensamt gå tillbaka till kriterierna och grunda beslutet i dem – inte i vem som är mest envis. Dokumentera sedan den gemensamma bedömningen.' },
    { text: 'Man låter en tredje lärare fatta beslut utan att diskutera.', correct: false, feedback: 'Att lägga hela beslutet på en tredje part utan att de inblandade lärarna har diskuterat igenom kriterierna löser inte grundproblemet och skapar ingen samsyn.' },
  ],
}

export const GRADE_DECISION = {
  key: 'ex_grade',
  student: 'Björn',
  course: 'Byggnadsteknik och byggregler',
  moments: [
    { name: 'Skriftlig BBR-uppgift (40%)', criterion: 'Tillämpa BBR-krav på ett byggfall', grade: 'VG', comment: 'Korrekt tillämpning med välmotiverade slutsatser' },
    { name: 'Ritningsläsning (30%)', criterion: 'Tolka plan- och sektionsritning', grade: 'G', comment: 'Korrekt avläsning på grundläggande nivå' },
    { name: 'Muntlig redovisning (30%)', criterion: 'Redovisa och motivera ett byggtekniskt val', grade: 'IG', comment: 'Motivering saknas, redovisningen är otydlig' },
  ],
  feedbackIG: 'Rätt! Björn ska ha IG. En IG på den muntliga redovisningen innebär att ett läranderesultat inte är uppnått. Alla läranderesultat måste vara uppnådda på minst G-nivå för betyget G. Björn bör ges möjlighet till komplettering.',
  feedbackG: 'Inte rätt. Även om BBR-uppgiften är VG och ritningsläsningen är G, har Björn IG på den muntliga redovisningen. Det innebär att ett läranderesultat inte uppnåtts – och alla läranderesultat krävs för betyget G.',
  feedbackVG: 'Inte rätt. VG kräver att alla VG-kriterier uppfylls, men Björn har IG på ett moment. Kursbetyget kan inte vara VG – och inte ens G. Resultatet ska vara IG med möjlighet till komplettering.',
}
