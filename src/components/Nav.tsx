import { useState } from 'react'
import { CONTACT } from '../data/portfolio'

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className={`nav${open ? ' is-open' : ''}`}>
      <a className="nav__brand" href="#top" onClick={() => setOpen(false)}>
        jerono.__
      </a>

      <button
        className="nav__toggle"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? '✕' : '☰'}
      </button>

      <div className="nav__links">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a
          className="nav__resume"
          href={CONTACT.resume}
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          Résumé
        </a>
      </div>
    </nav>
  )
}
