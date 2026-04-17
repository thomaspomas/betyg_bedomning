import kyhLogo from '../../kyh-logo.png'

export default function Diploma({ name, org, onClose }) {
  const today = new Date().toLocaleDateString('sv-SE', { year: 'numeric', month: 'long', day: 'numeric' })

  const handlePrint = () => {
    const win = window.open('', '_blank', 'width=700,height=900')
    win.document.write(`<!DOCTYPE html>
<html lang="sv">
<head>
  <meta charset="UTF-8">
  <title>Kursintyg – Betyg och bedömning</title>
  <style>
    @page { margin: 1.5cm; size: A4 portrait; }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Segoe UI', system-ui, sans-serif;
      display: flex; align-items: center; justify-content: center;
      min-height: 100vh; background: #fff;
    }
    .diploma {
      border: 6px double #E07B39;
      border-radius: 16px;
      padding: 3rem 2.5rem;
      max-width: 520px;
      width: 100%;
      text-align: center;
      position: relative;
    }
    .diploma::before {
      content: '';
      position: absolute; inset: 12px;
      border: 2px solid #F5A96A;
      border-radius: 10px;
      pointer-events: none;
    }
    h2 { font-size: 1.8rem; color: #1D5C5C; margin-bottom: 1rem; }
    .sub { color: #6B6B6B; margin-bottom: 1rem; font-size: 1rem; }
    .diploma-name { font-size: 1.5rem; color: #B85C1A; font-weight: 700; margin: .5rem 0; }
    .org { color: #6B6B6B; font-size: .9rem; margin-bottom: .5rem; }
    .course { margin: 1rem 0; font-size: 1rem; line-height: 1.8; }
    .course strong { color: #1D5C5C; font-size: 1.1rem; }
    .date { font-size: .85rem; color: #6B6B6B; margin-top: 1rem; }
    .logo { max-width: 90px; display: block; margin: 1.5rem auto 0; }
  </style>
</head>
<body>
  <div class="diploma">
    <h2>Kursintyg</h2>
    <p class="sub">Detta intygar att</p>
    <div class="diploma-name">${name || 'Deltagaren'}</div>
    ${org ? `<div class="org">${org}</div>` : ''}
    <div class="course">
      har genomfört KYH:s kurs<br>
      <strong>Betyg och bedömning</strong><br>
      <span style="font-size:.9rem">– rättssäker, likvärdig och formativ bedömning inom YH</span>
    </div>
    <div class="date">Utfärdat ${today}</div>
    <img src="${kyhLogo}" alt="KYH" class="logo" />
  </div>
  <script>window.onload = () => { window.print(); window.onafterprint = () => window.close(); }<\/script>
</body>
</html>`)
    win.document.close()
  }

  return (
    <div className="diploma-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="diploma">
        <h2>Kursintyg</h2>
        <p style={{ color: 'var(--muted)', marginBottom: '1rem' }}>Detta intygar att</p>
        <div className="diploma-name">{name || 'Deltagaren'}</div>
        {org && <div style={{ color: 'var(--muted)', fontSize: '.9rem', marginBottom: '.5rem' }}>{org}</div>}
        <div className="diploma-course">
          har genomfört KYH:s kurs<br />
          <strong style={{ color: 'var(--teal-dark)', fontSize: '1.1rem' }}>Betyg och bedömning</strong><br />
          <span style={{ fontSize: '.9rem' }}>
            – rättssäker, likvärdig och formativ bedömning inom YH
          </span>
        </div>
        <div className="diploma-date">Utfärdat {today}</div>
        <div style={{ marginTop: '1.5rem' }}>
          <img src={kyhLogo} alt="KYH" style={{ maxWidth: '100px', display: 'block', margin: '0 auto' }} />
        </div>
        <div className="diploma-actions">
          <button className="btn btn-primary" onClick={handlePrint}>Skriv ut / Spara PDF</button>
          <button className="btn btn-ghost" onClick={onClose}>Stäng</button>
        </div>
      </div>
    </div>
  )
}
