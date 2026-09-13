function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-top">
          <div id="about" className="footer-brand-block">
            <a href="#home" className="brand" aria-label="Dev Stack home">
              <span className="brand-icon" aria-hidden="true">DS</span>
              <span className="brand-text text-lg font-bold">Dev Stack</span>
            </a>
            <p className="footer-description">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <nav id="contact" className="footer-socials" aria-label="Social links">
              <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">Twitter</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
            </nav>
          </div>

          <nav className="footer-link-group" aria-label="Product">
            <h2>Product</h2>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#technologies">Technologies</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </nav>

          <nav className="footer-link-group" aria-label="Company">
            <h2>Company</h2>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </nav>

          <nav className="footer-link-group" aria-label="Legal">
            <h2>Legal</h2>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          <nav className="flex gap-6" aria-label="Privacy and terms">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
