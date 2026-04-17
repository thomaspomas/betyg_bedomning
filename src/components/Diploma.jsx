export default function Diploma({ name, org, onClose }) {
  const today = new Date().toLocaleDateString('sv-SE', { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <div className="diploma-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="diploma">
        <h2>Kursintyg</h2>
        <p style={{ color: 'var(--muted)', marginBottom: '1rem' }}>Detta intygar att</p>
        <div className="diploma-name">{name || 'Deltagaren'}</div>
        {org && <div style={{ color: 'var(--muted)', fontSize: '.9rem', marginBottom: '.5rem' }}>{org}</div>}
        <div className="diploma-course">
          har genomfört kursen<br />
          <strong style={{ color: 'var(--teal-dark)', fontSize: '1.1rem' }}>Betyg och bedömning</strong><br />
          <span style={{ fontSize: '.9rem' }}>
            – rättssäker, likvärdig och formativ bedömning inom YH
          </span>
        </div>
        <div className="diploma-date">Utfärdat {today}</div>
        <div className="diploma-actions">
          <button className="btn btn-primary" onClick={() => window.print()}>Skriv ut / Spara PDF</button>
          <button className="btn btn-ghost" onClick={onClose}>Stäng</button>
        </div>
      </div>
    </div>
  )
}
