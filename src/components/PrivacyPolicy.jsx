export default function PrivacyPolicy({ onClose }) {
  return (
    <div className="privacy-overlay" onClick={onClose}>
      <div className="privacy-modal" onClick={e => e.stopPropagation()}>
        <button className="privacy-close" onClick={onClose} aria-label="Stäng">×</button>
        <h2>Integritetspolicy</h2>
        <p className="privacy-date">Senast uppdaterad: 17 april 2026</p>

        <h3>1. Personuppgiftsansvarig</h3>
        <p>KYH – Kompetens och Yrkeshögskolan ansvarar för behandlingen av dina personuppgifter i denna kursapplikation.</p>

        <h3>2. Vilka uppgifter vi samlar in</h3>
        <p>Vi samlar in och lagrar följande uppgifter när du använder tjänsten:</p>
        <ul>
          <li><strong>E-postadress</strong> – för inloggning och identifiering</li>
          <li><strong>Namn och organisation</strong> – som du anger vid registrering</li>
          <li><strong>Kursframsteg</strong> – vilka moduler och avsnitt du har slutfört</li>
          <li><strong>Reflektioner</strong> – text du skriver i reflektionsuppgifterna</li>
          <li><strong>Övningsresultat</strong> – vilka övningar du har genomfört</li>
        </ul>

        <h3>3. Varför vi behandlar uppgifterna</h3>
        <p>Uppgifterna används för att:</p>
        <ul>
          <li>Möjliggöra inloggning och autentisering</li>
          <li>Spara ditt kursframsteg så att du kan fortsätta där du slutade</li>
          <li>Utfärda diplom vid avslutad kurs</li>
          <li>Förbättra kursinnehållet</li>
        </ul>
        <p>Rättslig grund: berättigat intresse samt fullgörande av utbildningsavtal.</p>

        <h3>4. Lagring och säkerhet</h3>
        <p>Dina uppgifter lagras i Supabase, en molntjänst med servrar inom EU. Supabase är ISO 27001-certifierat och uppfyller GDPR-krav. Kommunikation sker krypterat via HTTPS.</p>

        <h3>5. Hur länge vi sparar uppgifterna</h3>
        <p>Uppgifterna sparas så länge ditt konto är aktivt. Du kan när som helst begära radering (se punkt 6).</p>

        <h3>6. Dina rättigheter</h3>
        <p>Enligt GDPR har du rätt att:</p>
        <ul>
          <li>Få tillgång till dina personuppgifter</li>
          <li>Begära rättelse av felaktiga uppgifter</li>
          <li>Begära radering av ditt konto och alla uppgifter</li>
          <li>Invända mot behandlingen</li>
          <li>Inge klagomål till Integritetsskyddsmyndigheten (IMY)</li>
        </ul>
        <p>Kontakta oss på <a href="mailto:info@kyh.se">info@kyh.se</a> för att utöva dina rättigheter.</p>

        <h3>7. Delning med tredje part</h3>
        <p>Vi delar inte dina personuppgifter med tredje part, förutom Supabase som teknisk driftsleverantör och som behandlar uppgifterna enligt våra instruktioner.</p>

        <h3>8. Kontakt</h3>
        <p>Frågor om denna policy skickas till <a href="mailto:info@kyh.se">info@kyh.se</a>.</p>
      </div>
    </div>
  )
}
