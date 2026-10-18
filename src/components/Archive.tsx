import { ARCHIVE } from '../data/portfolio'

export default function Archive() {
  return (
    <section className="wrap section section--tight" style={{ paddingBottom: 96 }}>
      <div className="archive__kicker">…and everything else</div>

      {ARCHIVE.map((item) => (
        <a
          className="archive__row"
          href={item.href}
          target="_blank"
          rel="noreferrer"
          key={item.num}
        >
          <span className="archive__num">{item.num}</span>
          <span className="archive__name">{item.name}</span>
          <span className="archive__desc">{item.desc}</span>
          <span className="archive__stack">{item.stack}</span>
          <span>↗</span>
        </a>
      ))}
    </section>
  )
}
