import { useState } from 'react'

type PortfolioImage = {
  src: string
  alt: string
  fit?: 'cover' | 'contain'
}

export type PortfolioLinkProps = {
  eyebrow?: string
  title: string
  note: string
  images: PortfolioImage[]
  href: string
  linkLabel?: string
}

const PortfolioLink = ({ eyebrow, title, note, images, href, linkLabel }: PortfolioLinkProps) => {
  const [activeImage, setActiveImage] = useState(0)
  const hasImages = images.length > 0
  const hasMultipleImages = images.length > 1
  const image = hasImages ? images[activeImage] : null

  const showImage = (direction: number) => {
    setActiveImage((current) => (current + direction + images.length) % images.length)
  }

  return (
    <article className="portfolio-link">
      <div className="portfolio-link__content">
        {eyebrow && <p className="portfolio-link__eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
        <p className="portfolio-link__note">{note}</p>
        {linkLabel && <a className="portfolio-link__cta" href={href} target="_blank" rel="noreferrer">
          {linkLabel} <span aria-hidden="true">↗</span>
        </a>}
      </div>

      <div className={`portfolio-link__media ${image?.fit === 'contain' ? 'portfolio-link__media--contain' : ''} ${!hasImages ? 'portfolio-link__media--empty' : ''}`}>
        {image ? <img key={image.src} src={image.src} alt={image.alt} /> : <p className="portfolio-link__empty-message">Project preview coming soon.</p>}
        {hasMultipleImages && <>
          <div className="portfolio-link__controls">
            <button type="button" onClick={() => showImage(-1)} aria-label={`Show previous image for ${title}`}>←</button>
            <button type="button" onClick={() => showImage(1)} aria-label={`Show next image for ${title}`}>→</button>
          </div>
          <p className="portfolio-link__counter" aria-live="polite">{String(activeImage + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</p>
        </>}
      </div>
    </article>
  )
}

export default PortfolioLink
