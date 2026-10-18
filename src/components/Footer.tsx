import { CONTACT, SOCIALS } from '../data/portfolio'

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer__inner">
        <div className="footer__kicker">what's next?</div>

        <div className="footer__row">
          <div className="footer__big">
            Say
            <br />
            <span className="italic">hello</span>
            <span className="accent">.</span>
          </div>

          <div className="footer__aside">
            <p>
              I'm currently looking for new opportunities. Whether you have a question, a project,
              or just want to say hi — my inbox is open.
            </p>
            <a
              className="footer__email"
              href={`mailto:${CONTACT.email}?subject=Hello%20from%20your%20portfolio`}
            >
              {CONTACT.email} →
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <span>Designed &amp; built by Rhodah Jerono</span>
          <div className="footer__socials">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
