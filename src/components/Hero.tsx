import { CONTACT } from '../data/portfolio'

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero__eyebrow">hi, I'm Rhodah — Nairobi, Kenya</div>

      <h1 className="hero__title">
        I build secure software <span className="italic accent">and</span> make sense of data.
      </h1>

      <p className="hero__lede">
        Websites, apps and machine-learning models that are useful, friendly, and built with
        care. From the first sketch to the day they ship.
      </p>

      <img
        className="hero__sticker"
        src="/assets/sticker-rj-face.png"
        alt="Cartoon sticker of Rhodah waving hello"
      />

      <div className="hero__cta">
        <a className="btn btn--solid" href="#work">
          See my work ↓
        </a>
        <a className="btn btn--ghost" href={`mailto:${CONTACT.email}`}>
          Say hello
        </a>
      </div>
    </header>
  )
}
