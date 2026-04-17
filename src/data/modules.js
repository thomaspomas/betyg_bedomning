export const MODULES = [
  {
    id: 1,
    title: 'Grunder i betyg och bedömning inom YH',
    desc: 'Förstå MYH:s syn på rättssäkerhet, skillnaden mellan bedömning och betyg, och vanliga fallgropar.',
    time: '~12 min',
    sections: [
      {
        id: 'intro',
        title: 'Vad är betyg och bedömning?',
        type: 'theory',
        html: `
<div class="content-block">
  <h3>Bedömning och betyg – två olika saker</h3>
  <p>Inom Yrkeshögskolan används ofta orden "bedömning" och "betyg" som om de vore synonymer – men de är det inte.</p>
  <div class="info-box"><strong>Bedömning</strong> En process där läraren samlar in och tolkar information om vad den studerande kan och förstår. Kan vara formativ (för lärande) eller summativ (för betygssättning).</div>
  <div class="info-box"><strong>Betyg</strong> En formell, summativ värdering som dokumenterar den studerandes kunskapsnivå i förhållande till kursmålen.</div>
  <h4>Tre betygsgrader inom YH</h4>
  <ul>
    <li><span class="grade grade-vg">VG</span> <strong>Väl Godkänd</strong> – Studenten uppfyller kraven på ett väl godkänt sätt</li>
    <li><span class="grade grade-g">G</span> <strong>Godkänd</strong> – Studenten uppfyller minimikraven</li>
    <li><span class="grade grade-ig">IG</span> <strong>Icke Godkänd</strong> – Studenten uppfyller inte minimikraven</li>
  </ul>
  <div class="warning-box"><strong>Viktigt att tänka på</strong>Betyget IG är inte ett "straff" – det är information. Det signalerar att studeranden behöver mer tid och stöd för att nå målen.</div>
</div>
<div class="content-block">
  <h3>MYH:s tre grundprinciper</h3>
  <div class="three-cols">
    <div class="col-card"><div class="col-icon">⚖️</div><div class="col-title">Rättssäkerhet</div><p>Studeranden har rätt till en förutsägbar och rättvis prövning baserad på tydliga kriterier.</p></div>
    <div class="col-card"><div class="col-icon">🎯</div><div class="col-title">Likvärdighet</div><p>Samma prestation ska bedömas på samma sätt, oavsett vem som är lärare.</p></div>
    <div class="col-card"><div class="col-icon">🔍</div><div class="col-title">Transparens</div><p>Studeranden ska förstå vad som bedöms, hur och varför.</p></div>
  </div>
</div>`,
      },
      {
        id: 'fallgropar',
        title: 'Vanliga fallgropar',
        type: 'theory',
        html: `
<div class="content-block">
  <h3>Vanliga fallgropar i YH-bedömning</h3>
  <h4>1. Att bedöma ansträngning istället för lärande</h4>
  <p>Studenten var ambitiös och aktiv på lektionerna – men uppnår inte läranderesultaten. Betyget ska spegla <em>vad</em> studenten kan, inte <em>hur hårt</em> de kämpade.</p>
  <div class="example-box"><div class="ex-label">Exempel</div>
    <p><strong>Fel:</strong> "Erik la ner enormt mycket tid på uppgiften, jag kan inte ge IG."</p>
    <p><strong>Rätt:</strong> "Eriks prestation uppfyller inte kriteriet [X]. Han behöver komplettera eller göra om uppgiften."</p>
  </div>
  <h4>2. Att låta helhetsintrycket påverka enskilda delmoment</h4>
  <p>Det är lätt att en generellt stark student automatiskt bedöms högt även i delar där prestationen faktiskt inte räcker – och tvärtom. Varje kriterium ska bedömas för sig, utifrån vad studenten faktiskt visat.</p>
  <h4>3. Att använda aktivitet som bedömningsgrund</h4>
  <p>Närvaro, deltagande i diskussioner och visad entusiasm är värdefulla – men de kan inte ersätta bevis på att läranderesultaten uppnåtts.</p>
  <div class="warning-box"><strong>MYH:s ståndpunkt</strong>Bedömningen ska baseras på <em>läranderesultat</em> – de kunskaper, färdigheter och kompetenser som kursplanen definierar. Inga andra faktorer.</div>
  <h4>4. Otydliga eller saknade bedömningskriterier</h4>
  <p>Om läraren inte formulerat tydliga kriterier i förväg riskerar bedömningen att bli godtycklig. Studeranden kan då inte förutse vad som krävs – vilket är en rättssäkerhetsfråga.</p>
  <h4>5. Att inte dokumentera beslutsgrunden</h4>
  <p>Betyg ska kunna motiveras och följas upp. Om en studerande överklagar måste du kunna visa <em>varför</em> du satte det betyget du satte.</p>
</div>`,
      },
      { id: 'quiz1', title: 'Quiz: Grunderna', type: 'quiz1' },
      { id: 'ref1', title: 'Reflektion', type: 'reflection', prompt: 'Vilken av fallgroparna känner du igen från din egen undervisning eller från kollegor? Hur kan du konkret motverka den i din kurs?', key: 'mod1_ref1' },
    ],
  },
  {
    id: 2,
    title: 'Läranderesultat som grund för bedömning',
    desc: 'Hur man tolkar och konkretiserar läranderesultat – från kursplan till bedömning.',
    time: '~14 min',
    sections: [
      {
        id: 'lr-intro',
        title: 'Vad är ett läranderesultat?',
        type: 'theory',
        html: `
<div class="content-block">
  <h3>Läranderesultat – kärnan i YH-bedömning</h3>
  <p>Alla kurser inom YH har <strong>läranderesultat</strong> som definierar vad den studerande ska kunna göra, veta eller förstå efter avslutad kurs. Det är dessa – och bara dessa – som utgör grunden för betygssättning.</p>
  <div class="info-box"><strong>Definition (MYH)</strong>Läranderesultat beskriver vad den studerande förväntas <em>kunna demonstrera</em> efter avslutad kurs – i termer av kunskaper, färdigheter och kompetenser.</div>
  <h4>Läranderesultat är inte samma som undervisningsmål</h4>
  <div class="two-cols">
    <div style="background:#fff1f2;border-radius:8px;padding:14px;">
      <div style="font-weight:700;color:#dc2626;margin-bottom:6px;font-size:0.85rem;">UNDERVISNINGSMÅL (läraren)</div>
      <p style="font-size:0.88rem;">Fokuserar på <em>vad läraren ska göra</em>: genomgångar, övningar, diskussioner. Kan inte direkt bedömas.</p>
      <div class="example-box" style="margin-top:10px;"><p style="font-size:0.85rem;font-style:italic;">"Studenterna ska gå igenom byggprocessens faser och delta i ett projekteringsarbete."</p></div>
    </div>
    <div style="background:#dcfce7;border-radius:8px;padding:14px;">
      <div style="font-weight:700;color:#16a34a;margin-bottom:6px;font-size:0.85rem;">LÄRANDERESULTAT (studenten)</div>
      <p style="font-size:0.88rem;">Fokuserar på <em>vad studenten ska kunna</em> vid kursens slut. Konkret, bedömbart och synligt.</p>
      <div class="example-box" style="margin-top:10px;"><p style="font-size:0.85rem;font-style:italic;">"Studenten ska kunna beskriva byggprocessens faser och redogöra för varje aktörs ansvar."</p></div>
    </div>
  </div>
</div>
<div class="content-block">
  <h3>Tre dimensioner av läranderesultat</h3>
  <p>Läranderesultat inom YH täcker tre dimensioner, enligt EQF-ramverket:</p>
  <table class="data-table">
    <tr><th>Dimension</th><th>Innebär</th><th>Exempel</th></tr>
    <tr><td><strong>Kunskaper</strong></td><td>Fakta, förståelse, principer</td><td>Redogöra för, beskriva, förklara</td></tr>
    <tr class="alt"><td><strong>Färdigheter</strong></td><td>Praktisk tillämpning, hantverk</td><td>Utföra, använda, tillämpa, lösa</td></tr>
    <tr><td><strong>Ansvar och självständighet</strong></td><td>Autonomi, ansvar, omdöme</td><td>Värdera, ta ansvar, anpassa, välja</td></tr>
  </table>
</div>`,
      },
      {
        id: 'lr-identify',
        title: 'Vad går att bedöma?',
        type: 'theory',
        html: `
<div class="content-block">
  <h3>Att konkretisera vad som faktiskt bedöms</h3>
  <p>Läranderesultat är ofta skrivna på en abstrakt nivå. Läraren behöver <em>konkretisera</em> dem – bryta ned till vad studenten faktiskt ska visa upp.</p>
  <div class="example-box"><div class="ex-label">Från kursplan – läranderesultat</div>
    <p style="font-weight:600;">"Den studerande ska ha kunskaper om lagar och regler inom området samt förmåga att tillämpa dessa i yrkesutövningen."</p>
  </div>
  <h4>Nedbrytning: Vad ska studenten faktiskt visa?</h4>
  <ol>
    <li><strong>Kunskaper:</strong> Studenten kan korrekt redogöra för relevanta lagar och föreskrifter</li>
    <li><strong>Tillämpning:</strong> Studenten kan i ett givet case-scenario identifiera vilken lagstiftning som är relevant och motivera varför</li>
    <li><strong>Yrkesutövning:</strong> Studenten kan i en simulerad arbetsuppgift agera lagenligt och motivera sina val</li>
  </ol>
  <div class="info-box"><strong>Princip</strong> För varje läranderesultat: Fråga dig "Hur vet jag att studenten kan detta?" Det svaret är ditt bedömningsunderlag.</div>
  <h4>Vanliga verb och deras bedömningsimplikationer</h4>
  <table class="data-table">
    <tr><th>Verb</th><th>Nivå</th><th>Lämplig bedömningsform</th></tr>
    <tr><td>Redogöra för, beskriva</td><td>Kunskap</td><td>Skriftlig uppgift, muntlig presentation</td></tr>
    <tr class="alt"><td>Tillämpa, utföra</td><td>Färdighet</td><td>Praktisk uppgift, case, laboration</td></tr>
    <tr><td>Analysera, värdera</td><td>Ansvar och självständighet</td><td>Rapport, reflektion, diskussion</td></tr>
    <tr class="alt"><td>Ta ansvar, samordna</td><td>Ansvar och självständighet</td><td>Projektarbete, observation</td></tr>
  </table>
</div>`,
      },
      { id: 'lr-exercise', title: 'Övning: Identifiera bedömningsbara delar', type: 'lr-exercise' },
      { id: 'ref2', title: 'Reflektion', type: 'reflection', prompt: 'Välj ett läranderesultat från en kurs du undervisar i. Hur konkretiserar du det till bedömningsbara delar? Vad är svårast att mäta?', key: 'mod2_ref1' },
    ],
  },
  {
    id: 3,
    title: 'Bedömningskriterier och bedömningsmatriser',
    desc: 'Bygg effektiva matriser kopplade till betygsnivåer och läranderesultat.',
    time: '~15 min',
    sections: [
      {
        id: 'criteria',
        title: 'Vad är ett bedömningskriterium?',
        type: 'theory',
        html: `
<div class="content-block">
  <h3>Bedömningskriterier – läranderesultatens operationalisering</h3>
  <p>Ett <strong>bedömningskriterium</strong> beskriver vad som krävs av en studerandes prestation för att den ska nå en viss betygsnivå.</p>
  <div class="info-box"><strong>Ett bra bedömningskriterium är:</strong>
    <ul style="margin-top:6px;padding-left:18px;">
      <li>Kopplat till ett specifikt läranderesultat</li>
      <li>Observerbart – det beskriver vad studenten <em>gör</em> eller <em>visar</em></li>
      <li>Tydligt avgränsat – inga "och/eller"-konstruktioner</li>
      <li>Differentierat – beskriver skillnaden mellan G och VG</li>
    </ul>
  </div>
  <h4>Progression: Hur ser skillnaden ut mellan G och VG?</h4>
  <div class="four-cols">
    <div class="col-card sm"><div class="col-title">Komplexitet</div><p>G: enkla fall → VG: komplexa, motstridiga situationer</p></div>
    <div class="col-card sm"><div class="col-title">Självständighet</div><p>G: med viss handledning → VG: autonomt och initiativrikt</p></div>
    <div class="col-card sm"><div class="col-title">Precision</div><p>G: tillräcklig noggrannhet → VG: konsekvent och träffsäker</p></div>
    <div class="col-card sm"><div class="col-title">Reflektion</div><p>G: beskriver → VG: analyserar och värderar kritiskt</p></div>
  </div>
</div>`,
      },
      {
        id: 'matrix',
        title: 'Bedömningsmatriser',
        type: 'theory',
        html: `
<div class="content-block">
  <h3>Bedömningsmatrisen – ett centralt verktyg</h3>
  <p>En bedömningsmatris sammanställer alla bedömningskriterier i ett överskådligt format.</p>
  <h4>Exempel: Matris för skriftlig uppgift i "Byggnadsteknik"</h4>
  <p style="margin-bottom:12px;font-size:0.85rem;color:#6b7280;">Läranderesultat: "Studeranden ska kunna tolka byggritningar och tillämpa relevanta BBR-krav."</p>
  <div style="overflow-x:auto;">
    <table class="matrix-table">
      <tr><th style="min-width:140px;">Kriterium</th><th class="th-ig">IG</th><th class="th-g">G</th><th class="th-vg">VG</th></tr>
      <tr>
        <td class="criteria-name">Tolkning av byggritning</td>
        <td>Kan inte identifiera grundläggande måttsättning, skalor eller beteckningar.</td>
        <td>Identifierar korrekt mått, skalor och standardbeteckningar på en given plan- eller sektionsritning.</td>
        <td>Tolkar ritningen självständigt, uppmärksammar avvikelser och motiverar vad dessa innebär i praktiken.</td>
      </tr>
      <tr>
        <td class="criteria-name">Tillämpning av BBR</td>
        <td>Saknar koppling till BBR eller hänvisar till fel kapitel.</td>
        <td>Identifierar vilket BBR-avsnitt som är relevant och redovisar kravet korrekt.</td>
        <td>Tillämpar BBR-kravet på ett specifikt byggfall, motiverar tolkningen och lyfter eventuella tolkningssvårigheter.</td>
      </tr>
      <tr>
        <td class="criteria-name">Slutsatser och åtgärdsförslag</td>
        <td>Slutsatser saknas eller är inte kopplade till ritningen eller BBR.</td>
        <td>Drar korrekta slutsatser och föreslår en konkret åtgärd utifrån identifierat krav.</td>
        <td>Motiverar åtgärdsförslaget med hänsyn till både tekniska krav och praktiska förutsättningar.</td>
      </tr>
    </table>
  </div>
  <div class="success-box" style="margin-top:16px;"><strong>Tips</strong> För betyget <span class="grade grade-g">G</span> ska studenten uppfylla <em>alla</em> G-kriterier. För <span class="grade grade-vg">VG</span> ska alla VG-kriterier uppfyllas.</div>
</div>
<div class="content-block">
  <h3>Vanliga misstag i matriser</h3>
  <div class="warning-box"><strong>Dessa formuleringar ska undvikas</strong></div>
  <table class="data-table">
    <tr><th>Problematisk formulering</th><th>Varför det är ett problem</th><th>Bättre alternativ</th></tr>
    <tr><td>"Visar god förståelse"</td><td>Subjektivt – vad är "god"?</td><td>"Kan förklara tre centrala begrepp och ge ett relevant exempel"</td></tr>
    <tr class="alt"><td>"Lämnar in en komplett rapport"</td><td>Bedömer aktivitet, inte lärande</td><td>"Rapporten innehåller en genomförd analys med slutsatser"</td></tr>
    <tr><td>"Deltar aktivt"</td><td>Aktivitetsbedömning</td><td>"Kan motivera sin synpunkt med ett argument"</td></tr>
    <tr class="alt"><td>"Bra och väl" (VG)</td><td>Cirkelreferens</td><td>Beskriv konkret vad som skiljer VG från G</td></tr>
  </table>
</div>`,
      },
      { id: 'matrix-sim', title: 'Simulering: Bedöm ett kriterium', type: 'matrix-sim' },
      { id: 'ref3', title: 'Reflektion', type: 'reflection', prompt: 'Titta på en bedömningsmatris du använder. Är progressionen mellan G och VG tydlig? Vad skulle du vilja förtydliga?', key: 'mod3_ref1' },
    ],
  },
  {
    id: 4,
    title: 'Primär och sekundär bedömning',
    desc: 'Kollegial kalibrering, samsyn och dokumentation för rättssäker bedömning.',
    time: '~13 min',
    sections: [
      {
        id: 'primary',
        title: 'Primär och sekundär bedömning',
        type: 'theory',
        html: `
<div class="content-block">
  <h3>Primär bedömning – kurslärarens ansvar</h3>
  <p>Den <strong>primära bedömningen</strong> görs av den lärare som ansvarar för kursen.</p>
  <ul>
    <li>Läraren samlar in bedömningsunderlag (uppgifter, prov, observationer)</li>
    <li>Läraren värderar prestationerna mot bedömningskriterierna</li>
    <li>Läraren fattar betygsbeslut och dokumenterar det</li>
  </ul>
  <div class="info-box"><strong>Dokumentation</strong> All primär bedömning ska dokumenteras så att beslutet går att spåra i efterhand. Spara bedömningsunderlag och notera mot vilka kriterier betyget sattes.</div>
</div>
<div class="content-block">
  <h3>Sekundär bedömning – extern kontroll</h3>
  <p>I många YH-utbildningar används <strong>sekundär bedömning</strong> – en extern examinator eller en kollegas granskning. Det är ett viktigt rättssäkerhetsinstrument.</p>
  <h4>När används sekundär bedömning?</h4>
  <ul>
    <li>Vid examinationsmoment med höga krav på likvärdighet</li>
    <li>För betyget VG, om det är specificerat i utbildningsplanen</li>
    <li>Vid oklara eller tveksamma gränsfall</li>
    <li>Vid kompletteringar och omprövningar</li>
  </ul>
</div>
<div class="content-block">
  <h3>Kalibrering och samsyn</h3>
  <p>Om flera lärare bedömer samma kurs är <strong>kalibrering</strong> avgörande för likvärdighet.</p>
  <div class="example-box"><div class="ex-label">Hur en kalibreringssession kan se ut</div>
    <ol style="font-size:0.88rem;">
      <li>Alla lärare bedömer samma anonymiserade uppgift oberoende av varandra</li>
      <li>Bedömningarna jämförs och skillnader diskuteras</li>
      <li>Lärarna enas om tolkningar av gränsfall och oklara fall</li>
      <li>Gemensamt dokument upprättas med samsynen</li>
    </ol>
  </div>
  <div class="warning-box"><strong>Viktigt</strong> Kalibrering handlar inte om att alla alltid ska komma fram till exakt samma betyg. Det handlar om att ha en gemensam förståelse för vad kriterierna innebär.</div>
</div>`,
      },
      { id: 'case4', title: 'Mini-case: Bedömningsskillnad', type: 'case-mod4' },
      { id: 'ref4', title: 'Reflektion', type: 'reflection', prompt: 'Hur sker kalibrering av bedömning i din utbildning idag? Vad fungerar bra och vad skulle kunna förbättras?', key: 'mod4_ref1' },
    ],
  },
  {
    id: 5,
    title: 'Från bedömning till betyg',
    desc: 'Hur bedömningsunderlag vägs samman, hantering av gränsfall och transparens.',
    time: '~14 min',
    sections: [
      {
        id: 'weighing',
        title: 'Att väga samman underlag',
        type: 'theory',
        html: `
<div class="content-block">
  <h3>Det sammantagna betygsbeslut</h3>
  <p>Betyget sätts sällan på en enda uppgift. Oftast finns flera bedömningsunderlag som ska <strong>vägas samman</strong> till ett samlat betygsbeslut.</p>
  <div class="info-box"><strong>Princip</strong> Det sammantagna betygsbeslut baseras på <em>helheten</em> av insamlad information om studerandens kunskaper, färdigheter och kompetenser i relation till läranderesultaten.</div>
  <h4>Tre modeller för sammanvägning</h4>
  <p><strong>1. Viktad modell</strong> – Varje bedömningsmoment tilldelas en vikt som framgår av kursplanen.</p>
  <p><strong>2. Kriteriematris-modell</strong> – Alla läranderesultat ska vara minst G för att få G i kursen.</p>
  <p><strong>3. Samlad helhetsbedömning</strong> – Läraren gör en professionell helhetsbedömning av all prestation.</p>
  <div class="warning-box"><strong>Undvik matematisk beräkning som enda metod</strong>Procentgränser måste hänga ihop med vad studenten faktiskt kan demonstrera – inte bara hur många rätt de fått.</div>
</div>
<div class="content-block">
  <h3>Gränsfall – när det inte är uppenbart</h3>
  <h4>Riktlinjer för gränsfall:</h4>
  <ol>
    <li>Gå tillbaka till kriterierna – inte till din magkänsla</li>
    <li>Fråga: "Har studenten <em>visat</em> att de kan [kriteriet]?" – inte "Kan studenten förmodligen [kriteriet]?"</li>
    <li>Om ett G-kriterium inte är uppfyllt → betyget kan inte vara G</li>
    <li>Dokumentera ditt resonemang skriftligt</li>
    <li>Vid tveksamhet – kalibrering med kollega</li>
  </ol>
  <div class="example-box"><div class="ex-label">Vanligt gränsfall</div>
    <p style="font-size:0.88rem;">"Sofias analys är på G-nivå, men hennes slutsatser är på VG-nivå. Hon uppfyller 4 av 5 VG-kriterier." → Betyget G. VG kräver att <em>alla</em> VG-kriterier är uppfyllda.</p>
  </div>
</div>`,
      },
      { id: 'grade-decision', title: 'Övning: Sätt betyget', type: 'grade-decision' },
      {
        id: 'transparency',
        title: 'Transparens mot studerande',
        type: 'theory',
        html: `
<div class="content-block">
  <h3>Att kommunicera betygsbeslut</h3>
  <p>Transparens innebär att studeranden förstår <em>varför</em> de fått det betyget de fått.</p>
  <h4>Tre delar i ett transparent betygsbeslut:</h4>
  <ol>
    <li><strong>Vad bedömdes</strong> – Vilka läranderesultat och kriterier gällde?</li>
    <li><strong>Hur prestationen förhåller sig</strong> – Mot vilka kriterier uppfylldes de och inte?</li>
    <li><strong>Vad är nästa steg</strong> – Vad behöver studenten göra för att nå nästa nivå?</li>
  </ol>
  <div class="example-box"><div class="ex-label">Exempel: Transparent betygskommunikation (IG)</div>
    <p style="font-size:0.88rem;">"Din rapport uppfyller G-kriterierna för analys och källhantering. Däremot uppfyller den ännu inte G-kriteriet för slutsatser: slutsatserna behöver följa logiskt av analysen. För att nå G behöver du revidera avsnittet om slutsatser. Jag föreslår att vi ses under handledningen onsdag."</p>
  </div>
  <div class="info-box"><strong>Studerandens rätt</strong>Studeranden har rätt att begära en motivering till betyget. Denna motivering ska kunna ges skriftligt och baseras på bedömningskriterierna.</div>
</div>`,
      },
      { id: 'ref5', title: 'Reflektion', type: 'reflection', prompt: 'Hur kommunicerar du idag dina betygsbeslut till studeranden? Vad kan förbättras?', key: 'mod5_ref1' },
    ],
  },
  {
    id: 6,
    title: 'Formativ bedömning och feed-forward',
    desc: 'Feedback som stärker lärande – skillnaden mellan feedback och feed-forward.',
    time: '~12 min',
    sections: [
      {
        id: 'formative',
        title: 'Formativ bedömning',
        type: 'theory',
        html: `
<div class="content-block">
  <h3>Bedömning för lärande – inte bara av lärande</h3>
  <div class="two-cols">
    <div style="background:#fdf8f5;border-radius:8px;padding:16px;border:2px solid #e4d5c8;">
      <div style="font-weight:700;color:#6b7280;margin-bottom:6px;font-size:0.85rem;">SUMMATIV BEDÖMNING</div>
      <div style="font-weight:600;color:#8b3a0d;margin-bottom:8px;">Bedömning av lärande</div>
      <p style="font-size:0.88rem;">Mäter vad studenten kan vid en given tidpunkt. Resulterar i ett betyg.</p>
    </div>
    <div style="background:#f0faf5;border-radius:8px;padding:16px;border:2px solid #86efac;">
      <div style="font-weight:700;color:#16a34a;margin-bottom:6px;font-size:0.85rem;">FORMATIV BEDÖMNING</div>
      <div style="font-weight:600;color:#8b3a0d;margin-bottom:8px;">Bedömning för lärande</div>
      <p style="font-size:0.88rem;">Stödjer studentens lärprocess. Äger rum under kursens gång. Fokus på framsteg och nästa steg.</p>
    </div>
  </div>
  <p style="margin-top:16px;">Forskning visar tydligt att <strong>formativ bedömning är det enskilt mest effektiva sättet</strong> att förbättra studerandens lärande (Black &amp; Wiliam, 1998).</p>
</div>
<div class="content-block">
  <h3>Feedback vs. Feed-forward</h3>
  <p>Traditionell återkoppling (feedback) blickar bakåt. Feed-forward blickar framåt: "Det här är konkret vad du ska göra härnäst."</p>
  <div class="feedback-compare">
    <div class="fb-box bad"><div class="fb-label">Feedback (bakåtblickande)</div><p>"Bra analys men slutsatserna är svaga. Du borde ha kopplat bättre till teorin."</p></div>
    <div class="fb-box good"><div class="fb-label">Feed-forward (framåtblickande)</div><p>"Din analys är stark. I nästa version: skriv om slutsatserna så att varje slutsats direkt hänvisar till ett specifikt analysresultat från avsnitt 3."</p></div>
  </div>
  <div class="feedback-compare" style="margin-top:12px;">
    <div class="fb-box bad"><div class="fb-label">Feedback</div><p>"Du har inte förstått hur man läser en byggritning."</p></div>
    <div class="fb-box good"><div class="fb-label">Feed-forward</div><p>"På ritning A3: läs av väggtjocklekarna och ange dem i din svarstabell. Det är just det steget som saknas för G-kriteriet om ritningsavläsning."</p></div>
  </div>
</div>`,
      },
      { id: 'feedforward-ex', title: 'Övning: Omskriv till feed-forward', type: 'feedforward' },
      {
        id: 'timing',
        title: 'Tajming och språk',
        type: 'theory',
        html: `
<div class="content-block">
  <h3>Effektiv feed-forward: tajming och språk</h3>
  <h4>Tajming är allt</h4>
  <p>Återkoppling ska ges <em>medan studenten kan göra något åt det</em>. Feedback på en betygssatt uppgift som inte kan göras om har minimalt lärsvärde.</p>
  <div class="example-box"><div class="ex-label">Princip för tajming</div>
    <ul style="font-size:0.88rem;">
      <li>Ge återkoppling på utkast, inte bara på slutprodukter</li>
      <li>Bygg in återkopplingstillfällen mitt i kursen</li>
      <li>Snabb, enkel återkoppling (checklistor) är ofta bättre än detaljerade kommentarer sent</li>
    </ul>
  </div>
  <h4>Språk som stärker – inte krossar</h4>
  <ol>
    <li><strong>Specifikt</strong> – Peka på exakt vad i texten/arbetet som avses</li>
    <li><strong>Konstruktivt</strong> – Beskriv vad som ska göras annorlunda, inte bara vad som är fel</li>
    <li><strong>Kalibrerat</strong> – Anpassa detaljrikedomen till studerandens nivå</li>
  </ol>
  <div class="warning-box"><strong>Undvik "sandwich-feedback"</strong>Att alltid börja och sluta med positiva kommentarer kan göra att studeranden missar det centrala budskapet. Var direkt och tydlig – men alltid respektfull.</div>
</div>`,
      },
      { id: 'ref6', title: 'Reflektion', type: 'reflection', prompt: 'Tänk på ett tillfälle då du gav återkoppling till en studerande. Var det feedback eller feed-forward? Hur skulle du formulera om det nu?', key: 'mod6_ref1' },
    ],
  },
  {
    id: 7,
    title: 'Studerande som aktiva i sin bedömning',
    desc: 'Självbedömning, kamratbedömning och hur studerande kan använda matriser.',
    time: '~10 min',
    sections: [
      {
        id: 'student-active',
        title: 'Studeranden i fokus',
        type: 'theory',
        html: `
<div class="content-block">
  <h3>Varför involvera studeranden i bedömningen?</h3>
  <ul>
    <li>Förstår vad som förväntas av dem (<strong>transparens</strong>)</li>
    <li>Kan reflektera över sin egen prestation (<strong>självbedömning</strong>)</li>
    <li>Ger och tar emot bedömning från kurskamrater (<strong>kamratbedömning</strong>)</li>
    <li>Tar ansvar för sin lärutveckling (<strong>agency</strong>)</li>
  </ul>
  <div class="info-box"><strong>Koppling till YH:s mål</strong>YH utbildar yrkesverksamma som ska kunna reflektera över och vidareutveckla sin kompetens i arbetslivet. Självbedömningsförmåga är i sig ett centralt yrkeskompetens.</div>
</div>
<div class="content-block">
  <h3>Självbedömning i praktiken</h3>
  <p>Självbedömning handlar inte om att studenten sätter sitt eget betyg – det är lärarens ansvar. Det handlar om att studenten <em>tränar förmågan att bedöma sin prestation</em> mot givna kriterier.</p>
  <h4>Tre steg för framgångsrik självbedömning:</h4>
  <ol>
    <li>Studenten får tillgång till bedömningskriterierna <em>innan</em> uppgiften påbörjas</li>
    <li>Studenten fyller i en självskattning mot varje kriterium</li>
    <li>Läraren jämför sin bedömning med studentens – diskrepanser blir underlag för lärsamtal</li>
  </ol>
</div>
<div class="content-block">
  <h3>Kamratbedömning – värdefullt men krävande</h3>
  <h4>Förutsättningar för att det ska fungera:</h4>
  <ul>
    <li>Tydliga kriterier och exempel på vad G/VG ser ut i uppgiften</li>
    <li>Strukturerat format – studenten ska sätta ord på observationer, inte bara ge en siffra</li>
    <li>Psykologisk trygghet – ingen ska räds att bedömas av en kurskamrat</li>
    <li>Läraren har slutgiltigt ansvar för betygssättning</li>
  </ul>
  <div class="warning-box"><strong>Vanlig fallgrop</strong>Kamratbedömning som inte har tydliga ramar leder till "kompisbedömning" – alla får bra omdömen för att ingen vill verka kritisk.</div>
</div>`,
      },
      { id: 'planning', title: 'Planera för aktiva studeranden', type: 'planning' },
      { id: 'ref7', title: 'Reflektion och planering', type: 'reflection', prompt: 'Välj EN konkret sak du vill prova i din nästa kurs för att göra studeranden mer aktiva i sin bedömning. Beskriv vad du ska göra, när och hur du ska följa upp effekten.', key: 'mod7_ref1' },
    ],
  },
]
