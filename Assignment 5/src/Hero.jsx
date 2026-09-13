import bannerStack from './assets/banner-stack.png'

function Hero() {
  return (
    <section id="home" className="hero-section" aria-labelledby="hero-heading">
      <div>
        <h1 id="hero-heading" className="hero-heading">
          Build Your Ideal
          <span className="brand-text block">Development Stack</span>
        </h1>
        <p className="hero-description">
          Explore frontend, backend, database, and tooling options,
          compare them side by side, and put together the stack that fits your
          next project.
        </p>
        <div className="hero-actions">
          <a href="#technologies" className="btn brand-button hero-button">
            Explore Technologies
          </a>
          <a href="#about" className="btn btn-outline hero-button learn-more">
            Learn More
          </a>
        </div>
      </div>
      <img
        src={bannerStack}
        alt="A colorful three-layer development stack illustration"
        className="hero-image"
        width="526"
        height="526"
      />
    </section>
  )
}

export default Hero
