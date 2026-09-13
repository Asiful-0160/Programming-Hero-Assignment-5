import { useEffect, useState } from 'react'

const links = ['Home', 'Technologies', 'Projects', 'About', 'Contact']

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(() => window.location.hash || '#home')

  useEffect(() => {
    function updateActiveSection() {
      setActiveSection(window.location.hash || '#home')
    }

    window.addEventListener('hashchange', updateActiveSection)
    return () => window.removeEventListener('hashchange', updateActiveSection)
  }, [])

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
          onKeyDown={(event) => {
            if (event.key === 'Escape') closeMenu()
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {menuOpen ? (
              <path d="m4 4 12 12M16 4 4 16" stroke="currentColor" strokeWidth="2" />
            ) : (
              <path d="M1 3h18M1 10h18M1 17h18" stroke="currentColor" strokeWidth="2" />
            )}
          </svg>
        </button>

        <a href="#home" className="brand" aria-label="Dev Stack home" onClick={closeMenu}>
          <span className="brand-icon" aria-hidden="true">DS</span>
          <span className="brand-name brand-text">Dev Stack</span>
        </a>

        <ul className="desktop-links">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                aria-current={activeSection === `#${link.toLowerCase()}` ? 'location' : undefined}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="auth-buttons">
          <button type="button" className="sign-in">Sign In</button>
          <button type="button" className="btn brand-button sign-up">Sign Up</button>
        </div>

        {menuOpen && (
          <ul id="mobile-navigation" className="mobile-links" onKeyDown={(event) => {
            if (event.key === 'Escape') closeMenu()
          }}>
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  aria-current={activeSection === `#${link.toLowerCase()}` ? 'location' : undefined}
                  onClick={closeMenu}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}

export default Navbar
