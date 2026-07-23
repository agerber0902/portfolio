import { useRef, useState, type TouchEvent } from 'react'
import PortfolioLink, { type PortfolioLinkProps } from '../portfolio-link/portfolio-link'

type PastProjectsProps = { projects: PortfolioLinkProps[] }

const PastProjects = ({ projects }: PastProjectsProps) => {
  const [activeProject, setActiveProject] = useState(0)
  const touchStart = useRef<number | null>(null)
  const hasMultipleProjects = projects.length > 1

  const showProject = (direction: number) => {
    setActiveProject((current) => (current + direction + projects.length) % projects.length)
  }

  const handleTouchEnd = (event: TouchEvent) => {
    if (touchStart.current === null) return
    const swipeDistance = event.changedTouches[0].clientX - touchStart.current
    touchStart.current = null
    if (Math.abs(swipeDistance) >= 40) showProject(swipeDistance > 0 ? -1 : 1)
  }

  if (!projects.length) return null

  return (
    <section className="past-projects" aria-labelledby="past-projects-title">
      <div className="past-projects__heading">
        <div>
          {/* <p className="past-projects__eyebrow">Selected work</p> */}
          <h2 id="past-projects-title">Past Projects</h2>
        </div>
        {hasMultipleProjects && <div className="past-projects__controls">
          <button type="button" onClick={() => showProject(-1)} aria-label="Show previous past project">←</button>
          <button type="button" onClick={() => showProject(1)} aria-label="Show next past project">→</button>
        </div>}
      </div>

      <div className="past-projects__viewport" onTouchStart={(event) => { touchStart.current = event.touches[0].clientX }} onTouchEnd={handleTouchEnd}>
        <div className="past-projects__track" style={{ transform: `translateX(-${activeProject * 100}%)` }}>
          {projects.map((project) => (
            <div className="past-projects__slide" key={project.title}>
              <PortfolioLink
                {...project}
                images={project.images.map((image) => ({ ...image, fit: image.fit ?? 'contain' }))}
              />
            </div>
          ))}
        </div>
      </div>

      {hasMultipleProjects && <p className="past-projects__counter" aria-live="polite">{String(activeProject + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</p>}
    </section>
  )
}

export default PastProjects
