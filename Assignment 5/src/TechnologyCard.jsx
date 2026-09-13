function TechnologyCard({ technology, isAdded, onAddToStack }) {
  const { name, icon, badge, description, category, difficulty, rating } = technology

  return (
    <article className="technology-card">
      <div className="flex items-center justify-between gap-3">
        <img src={icon} alt={`${name} logo`} width="28" height="28" loading="lazy" />
        <span className="technology-badge">{badge}</span>
      </div>
      <h3 className="mt-5 text-lg font-bold">{name}</h3>
      <p className="technology-description">{description}</p>
      <div className="technology-details">
        <span className="category-chip">{category}</span>
        <span>{difficulty}</span>
        <span className="technology-rating" aria-label={`Rating: ${rating} out of 5`}>
          <span className="text-amber-400" aria-hidden="true">★</span> {rating.toFixed(1)}
        </span>
      </div>
      <button
        type="button"
        className="btn add-stack-button"
        disabled={isAdded}
        onClick={() => onAddToStack(technology)}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </article>
  )
}

export default TechnologyCard
