import { SKILLS } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="wrap section">
      <div className="section-head">
        <h2 className="section-title">About me</h2>
        <span className="section-kicker">the short version</span>
      </div>

      <div className="about__grid">
        <div className="about__prose">
          <p style={{ margin: 0 }}>
            I design and build web and Android apps that don't just look good — they feel good to
            use. I care a lot about making technology that includes everyone.
          </p>
          <p style={{ margin: 0 }}>
            The other half of me lives in data. I enjoy turning messy numbers into stories that
            help people and businesses make smarter decisions.
          </p>
          <p style={{ margin: 0 }}>
            These days I run <a href="#experience">Onor Consultancy</a>, building digital products
            for Kenyan businesses this is after helping take Terp360, an AI sign-language tool at{' '}
            <a href="https://Signvrse.com" target="_blank" rel="noreferrer">
              Signvrse
            </a>
            , from beta to production. When I'm not building, find me by the pool or tucked somewhere reading a fictional book.
          </p>
        </div>

        <figure className="about__media" style={{ margin: 0 }}>
          <img
            className="about__sticker"
            src="/assets/sticker-rj-desk.png"
            alt="Cartoon sticker of Rhodah at her desk with code and charts"
          />
          <figcaption className="about__caption">me, in sticker form ✌</figcaption>
        </figure>
      </div>

      <div className="skills">
        {SKILLS.map((s) => (
          <div className="skill-card" key={s.title}>
            <div className="skill-card__title">
              {s.title} <span className="italic accent">{s.accentSuffix}</span>
            </div>
            <div className="skill-card__tags">
              {s.tags.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
