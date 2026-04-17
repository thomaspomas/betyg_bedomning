export default function Completion({ profile, onHome, onDiploma }) {
  return (
    <div className="completion-page">
      <div className="trophy">🏆</div>
      <h1>Grattis{profile?.name ? `, ${profile.name}` : ''}!</h1>
      <p>Du har genomfört kursen <strong>Betyg och bedömning</strong> och nu har du verktygen för att bedöma rättssäkert, likvärdigt och formativt.</p>
      <div className="completion-btns">
        <button className="btn" style={{ background: '#fff', color: 'var(--teal-dark)', fontWeight: 700 }} onClick={onDiploma}>
          Hämta diplom
        </button>
        <button className="btn" style={{ background: 'rgba(255,255,255,.2)', color: '#fff', border: '2px solid rgba(255,255,255,.5)' }} onClick={onHome}>
          Tillbaka till start
        </button>
      </div>
    </div>
  )
}
