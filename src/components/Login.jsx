import { useState } from 'react'
import kyhLogo from '../../kyh-logo.png'
import PrivacyPolicy from './PrivacyPolicy'

export default function Login({ onLogin, supabase, profileOnly = false }) {
  const [mode, setMode] = useState('login') // 'login' | 'register' | 'forgot'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [org, setOrg] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [showPrivacy, setShowPrivacy] = useState(false)

  // If we just need to collect profile info (user is authed but has no profile yet)
  if (profileOnly) {
    return (
      <div className="login-page">
        <div className="login-card">
          <img src={kyhLogo} alt="KYH" className="login-logo" />
          <h1>Välkommen!</h1>
          <p>Fyll i dina uppgifter för att komma igång.</p>
          <input
            type="text"
            placeholder="Ditt namn"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Organisation / Företag (t.ex. KYH)"
            value={org}
            onChange={e => setOrg(e.target.value)}
          />
          {error && <p style={{ color: '#c0392b', fontSize: '.9rem', marginBottom: '.5rem' }}>{error}</p>}
          <button
            className="btn btn-primary"
            onClick={async () => {
              if (!name.trim()) { setError('Ange ditt namn.'); return }
              setLoading(true)
              await onLogin(name.trim(), org.trim())
              setLoading(false)
            }}
            disabled={loading}
          >
            {loading ? 'Sparar…' : 'Starta kursen'}
          </button>
        </div>
      </div>
    )
  }

  const handleLogin = async () => {
    setError(''); setMessage('')
    if (!email || !password) { setError('Fyll i e-post och lösenord.'); return }
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    setLoading(false)
    if (error) setError('Felaktig e-post eller lösenord.')
  }

  const handleForgot = async () => {
    setError(''); setMessage('')
    if (!email) { setError('Ange din e-postadress.'); return }
    setLoading(true)
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.href,
    })
    setLoading(false)
    if (error) setError('Något gick fel. Kontrollera e-postadressen.')
    else setMessage('Ett återställningsmail har skickats. Kolla din inkorg.')
  }

  const handleRegister = async () => {
    setError(''); setMessage('')
    if (!email || !password || !name) { setError('Fyll i alla fält.'); return }
    if (password.length < 6) { setError('Lösenordet måste vara minst 6 tecken.'); return }
    setLoading(true)
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name: name.trim(), organisation: org.trim() } },
    })
    setLoading(false)
    if (error) {
      setError(error.message)
    } else {
      // Sign in right away (Supabase auto-confirms in some configs)
      const { error: loginError } = await supabase.auth.signInWithPassword({ email, password })
      if (loginError) {
        setMessage('Konto skapat! Kontrollera din e-post för bekräftelse, logga sedan in.')
        setMode('login')
      }
      // If login succeeded the auth listener in App will pick it up → profileOnly flow
    }
  }

  return (
    <div className="login-page">
      {showPrivacy && <PrivacyPolicy onClose={() => setShowPrivacy(false)} />}
      <div className="login-card">
        <img src={kyhLogo} alt="KYH" className="login-logo" />
        <h1>Betyg och bedömning</h1>
        <p>En kurs för YH-lärare om rättssäker, likvärdig och formativ bedömning.</p>

        {message && <p style={{ color: 'var(--teal-dark)', marginBottom: '1rem', fontSize: '.9rem' }}>{message}</p>}

        {mode === 'login' && (
          <>
            <input type="email" placeholder="E-postadress" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Lösenord" value={password} onChange={e => setPassword(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleLogin()} />
            {error && <p style={{ color: '#c0392b', fontSize: '.9rem', marginBottom: '.5rem' }}>{error}</p>}
            <button className="btn btn-primary" onClick={handleLogin} disabled={loading}>
              {loading ? 'Loggar in…' : 'Logga in'}
            </button>
            <button className="btn btn-ghost" style={{ marginTop: '.25rem', fontSize: '.85rem' }} onClick={() => { setMode('forgot'); setError('') }}>
              Glömt lösenordet?
            </button>
            <div className="login-divider">eller</div>
            <button className="btn btn-outline" onClick={() => { setMode('register'); setError('') }}>
              Skapa nytt konto
            </button>
          </>
        )}

        {mode === 'forgot' && (
          <>
            <p style={{ fontSize: '.9rem', color: 'var(--muted)', marginBottom: '1rem' }}>
              Ange din e-postadress så skickar vi ett återställningsmail.
            </p>
            <input type="email" placeholder="E-postadress" value={email} onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleForgot()} />
            {error && <p style={{ color: '#c0392b', fontSize: '.9rem', marginBottom: '.5rem' }}>{error}</p>}
            <button className="btn btn-primary" onClick={handleForgot} disabled={loading}>
              {loading ? 'Skickar…' : 'Skicka återställningsmail'}
            </button>
            <div className="login-divider">eller</div>
            <button className="btn btn-ghost" onClick={() => { setMode('login'); setError(''); setMessage('') }}>
              Tillbaka till inloggning
            </button>
          </>
        )}

        {mode === 'register' && (
          <>
            <input type="text" placeholder="Ditt namn" value={name} onChange={e => setName(e.target.value)} />
            <input type="text" placeholder="Organisation / Företag (t.ex. KYH)" value={org} onChange={e => setOrg(e.target.value)} />
            <input type="email" placeholder="E-postadress" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Lösenord (minst 6 tecken)" value={password} onChange={e => setPassword(e.target.value)} />
            {error && <p style={{ color: '#c0392b', fontSize: '.9rem', marginBottom: '.5rem' }}>{error}</p>}
            <button className="btn btn-primary" onClick={handleRegister} disabled={loading}>
              {loading ? 'Skapar konto…' : 'Skapa konto och börja'}
            </button>
            <div className="login-divider">eller</div>
            <button className="btn btn-ghost" onClick={() => { setMode('login'); setError('') }}>
              Jag har redan ett konto
            </button>
          </>
        )}
        <p style={{ fontSize: '.8rem', color: 'var(--muted)', marginTop: '1.5rem' }}>
          <button className="btn-ghost" style={{ fontSize: '.8rem', padding: 0 }} onClick={() => setShowPrivacy(true)}>
            Integritetspolicy
          </button>
        </p>
      </div>
    </div>
  )
}
