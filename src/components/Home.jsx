import { useState } from 'react'
import kyhLogo from '../../kyh-logo.png'
import PrivacyPolicy from './PrivacyPolicy'

export default function Home({ profile, modules, getModuleProgress, allModulesDone, onOpenModule, onOpenDiploma, onCompletion, onLogout }) {
  const [showPrivacy, setShowPrivacy] = useState(false)
  return (
    <div>
      {showPrivacy && <PrivacyPolicy onClose={() => setShowPrivacy(false)} />}
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
        <button onClick={onLogout} style={{ marginTop: '1rem', background: 'transparent', border: '1px solid rgba(255,255,255,.6)', color: '#fff', borderRadius: '20px', padding: '.3rem 1rem', fontSize: '.85rem', cursor: 'pointer' }}>
          Logga ut
        </button>
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

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} KYH. Alla rättigheter förbehållna.</p>
        <button className="btn-ghost" style={{ fontSize: '.8rem', padding: 0, border: 'none', outline: 'none' }} onClick={() => setShowPrivacy(true)}>
          Integritetspolicy
        </button>
      </footer>
    </div>
  )
}
