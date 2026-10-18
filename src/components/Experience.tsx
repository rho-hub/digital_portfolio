import { EXPERIENCE } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="wrap section section--tight">
      <div className="section-head section-head--rule">
        <h2 className="section-title">Where I've worked</h2>
      </div>

      <div className="exp-list">
        {EXPERIENCE.map((job) => (
          <article
            className={`exp-card${job.lead ? ' exp-card--lead' : ''}`}
            key={`${job.role}-${job.date}`}
          >
            <div className="exp-card__head">
              <h3 className={`exp-card__role${job.lead ? ' exp-card__role--lead' : ''}`}>
                {job.role} ·{' '}
                {job.orgHref ? (
                  <a className="italic accent" href={job.orgHref} target="_blank" rel="noreferrer">
                    {job.org}
                  </a>
                ) : (
                  <span className="italic accent">{job.org}</span>
                )}
              </h3>
              <span className="exp-card__date">{job.date}</span>
            </div>

            {job.bullets && (
              <div className="exp-card__bullets">
                {job.bullets.map((b) => (
                  <div className="exp-card__bullet" key={b}>
                    <span className="accent">✦</span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            )}

            {job.body && <p className="exp-card__body" style={{ margin: '12px 0 0' }}>{job.body}</p>}

            {job.stack && (
              <div className="exp-card__stack">
                {job.stack.map((s) => (
                  <span className="exp-card__chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
