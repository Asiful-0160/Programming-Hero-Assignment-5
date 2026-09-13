import { useEffect, useState } from 'react'
import TechnologyCard from './TechnologyCard.jsx'

function Technologies() {
  const [technologies, setTechnologies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function loadTechnologies() {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}technologies.json`, {
          signal: controller.signal,
        })
        if (!response.ok) throw new Error('Could not load technologies')

        const data = await response.json()
        setTechnologies(data)
      } catch (error) {
        if (error.name !== 'AbortError') {
          setError('We could not load the technologies. Please refresh the page to try again.')
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    loadTechnologies()
    return () => controller.abort()
  }, [])

  return (
    <section id="technologies" className="technologies-section" aria-labelledby="technologies-heading">
      <h2 id="technologies-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
        Explore the <span className="brand-text">Technologies</span>
      </h2>
      <p className="mt-3 text-base text-slate-500">
        Discover the tools and technologies for your ideal development stack.
      </p>

      {loading ? (
        <div className="flex items-center gap-3 py-10 text-slate-500" role="status">
          <span className="loading loading-spinner loading-sm" aria-hidden="true" />
          Loading technologies…
        </div>
      ) : error ? (
        <p className="py-10 text-red-600" role="alert">{error}</p>
      ) : technologies.length === 0 ? (
        <p className="py-10 text-slate-500">No technologies are available yet.</p>
      ) : (
        <div className="technology-grid">
          {technologies.map((technology) => (
            <TechnologyCard key={technology.id} technology={technology} />
          ))}
        </div>
      )}
    </section>
  )
}

export default Technologies
