import kyhLogo from '../../kyh-logo.png'

export default function Home({ profile, modules, getModuleProgress, allModulesDone, onOpenModule, onOpenDiploma, onCompletion }) {
  return (
    <div>
      <div className="home-hero">
        <img src={kyhLogo} alt="KYH" />
        <h1>Betyg och bedömning</h1>
        <p>En kurs för YH-lärare om rättssäker, likvärdig och formativ bedömning.</p>
        {profile && (
          <p style={{ marginTop: '.75rem', opacity: .8, fontSize: '.9rem' }}>
            Inloggad som <strong>{profile.name}</strong>
            {profile.organisation ? ` – ${profile.organisation}` : ''}
          </p>
        )}
      </div>

      <div className="home-content">
        {allModulesDone && (
          <div className="completion-banner">
            <h2>🎉 Kursen genomförd!</h2>
            <p>Du har slutfört alla moduler. Ladda ner ditt diplom!</p>
            <button className="btn" onClick={onOpenDiploma}>Hämta diplom</button>
          </div>
        )}

        <div className="section-title">Kursmoduler</div>
        <div className="modules-grid">
          {modules.map(mod => {
            const pct = getModuleProgress(mod.id)
            const done = pct === 100
            return (
              <div
                key={mod.id}
                className={`module-card${done ? ' done' : ''}`}
                onClick={() => onOpenModule(mod)}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && onOpenModule(mod)}
              >
                <div className="mod-num">Modul {mod.id}</div>
                {done && <span className="badge-done">✓ Klar</span>}
                <h3>{mod.title}</h3>
                <p>{mod.subtitle}</p>
                <div className="progress-bar-wrap">
                  <div className="progress-bar-fill" style={{ width: `${pct}%` }} />
                </div>
                <div style={{ fontSize: '.8rem', color: 'var(--muted)' }}>{pct}% klar</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
