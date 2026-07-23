import PortfolioLink from './components/portfolio-link/portfolio-link'
import PastProjects from './components/past-projects/past-projects'
import rootedLogo from './assets/rooted-logo.png'
import rootedMain from './assets/mobile-affirmation-img.png';
import rootedAdd from './assets/mobile-affirmation-add-img.png';
import thingsLogo from './assets/things-reminders-logo.png';
import thingsHome from './assets/things-home-img.png';
import thingsNotes from './assets/things-notes-img.png';
import affirmationsLogo from './assets/partner-affirmations-logo.png';
import affirmationsAdd from './assets/partner-affirmations-add-img.png';
import affirmationsHome from './assets/partner-affirmations-home-img.png';
import pcd from './assets/pcd.png';

const projects = [
  {
    eyebrow: 'Featured project',
    title: 'Rooted Together: Affirmations',
    note: 'User affirmation application in which the user can schedule daily affirmations to themselves and their friends! Availabe in the App Store.',
    images: [
      {
        src: rootedLogo,
        alt: 'Rooted Together: Affirmations logo',
      },
      {
        src: rootedMain,
        alt: 'Image from Rooted Together: Affirmations app',
        fit: 'contain',
      },
      {
        src: rootedAdd,
        alt: 'Image from Rooted Together: Affirmations app add logic',
        fit: 'contain',
      },
    ],
    href: 'https://github.com/agerber0902/RootedTogether',
    linkLabel: 'Explore project',
  },
]

const pastProjects = [
  {
    eyebrow: 'Mobile Development',
    title: 'Things + Reminders',
    note: 'iOS application for a user to log \'Things\' and set reminders for themselves. Available in the App Store.',
    images: [
      {
        src: thingsLogo,
        alt: 'Things + Reminders Logo',
      },
      {
        src: thingsHome,
        alt: 'Things + Reminders Home',
      },
      {
        src: thingsNotes,
        alt: 'Things + Reminders Notes',
      },
    ],
    href: 'https://github.com/agerber0902/Things',
    linkLabel: 'Explore project',
  },
  {
    eyebrow: 'Mobile Development',
    title: 'Partner Affirmations',
    note: 'Version 1 of RootedTogether: Affirmations. Created strictly for one on one user connections, where the user\'s messages are sent to partner each day. Available on the App Store.',
    images: [
      {
        src: affirmationsLogo,
        alt: 'Partner Affirmations Logo',
      },
      {
        src: affirmationsHome,
        alt: 'Partner Affirmations Home',
      },
      {
        src: affirmationsAdd,
        alt: 'Partner Affirmations Add',
      },
    ],
  },
  {
    eyebrow: 'Hardware Design',
    title: 'Plant Sensor',
    note: 'Designed and fabricated PCB for plant sensor that logs temperature, moisture, and uv index. Using ESP32 communication to trigger watering system.',
    images: [
      {
        src: pcd,
        alt: 'PCB board image',
      },
    ],
    href: 'https://github.com/agerber0902/PlantSensor',
    linkLabel: 'Explore project',
  },
]

function App() {
  return (
    <main className="portfolio">
      <section className="portfolio__intro" aria-labelledby="portfolio-title">
        <p className="portfolio__kicker">Full Stack Software engineer &amp; product builder</p>
        <h1 id="portfolio-title">Andrew Gerber<span className="portfolio__period">.</span></h1>
        <p className="portfolio__bio">
          Full Stack Software Engineer with a passion for creating web and mobile applications, starting with an idea and creating a real product.
          {/* I build polished web and mobile products from the first idea through a reliable launch. */}
        </p>
      </section>

      <section className="portfolio__links" aria-label="Projects and links">
        {projects.map((project) => <PortfolioLink key={project.title} {...project} />)}
      </section>

      <PastProjects projects={pastProjects} />

      <footer className="portfolio__footer" id="contact">
        <div className="portfolio__footer-links">
          <a href="mailto:agerber0902@gmail.com" target="_blank" rel="noreferrer">Let&apos;s connect <span aria-hidden="true">↗</span></a>
          <a className="portfolio__resume-link" href="/resume.pdf" target="_blank" rel="noreferrer">Resume <span aria-hidden="true">↗</span></a>
        </div>
      </footer>
    </main>
  )
}

export default App
