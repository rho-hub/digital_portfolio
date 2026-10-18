/**
 * The KSL card can show a real screenshot instead of the striped placeholder:
 * set KSL_IMAGE to a path (e.g. '/assets/ksl-model.png') and drop the file in public/assets.
 */

export default function Work() {
  return (
    <section id="work" className="wrap section section--tight" style={{ paddingBottom: 72 }}>
      <div className="section-head section-head--rule">
        <h2 className="section-title">Selected work</h2>
        <span className="section-kicker">the good stuff first</span>
      </div>

      <div className="work-grid">
        {/* KSL Recognition Model */}
        <a
          className="work-card work-card--dark work-card--tall"
          href="https://github.com/rho-hub/Data_analysis.git"
          target="_blank"
          rel="noreferrer"
        >
          <div className="work-card__top">
            <span className="work-card__label work-card__label--dim">
              FEATURED · MACHINE LEARNING
            </span>
            <span className="work-card__arrow">↗</span>
          </div>
          
          <div>
            <div className="work-card__title work-card__title--xl">KSL Recognition Model</div>
            <div className="work-card__desc work-card__desc--dim">
              A model that reads Kenyan Sign Language and turns it into text — technology that
              includes everyone.
            </div>
            <div className="work-card__stack work-card__stack--dim">
              <span>Python</span>·<span>OpenCV</span>·<span>MediaPipe</span>·<span>LSTM</span>
            </div>
          </div>
        </a>

        {/* Activity WebApp */}
        <a
          className="work-card work-card--accent work-card--tall"
          href="https://events-three-eosin.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="work-card__top">
            <span className="work-card__label work-card__label--soft">FEATURED · WEB</span>
            <span className="work-card__arrow">↗</span>
          </div>
          <div>
            <div className="work-card__title work-card__title--lg">Activity WebApp</div>
            <div className="work-card__desc work-card__desc--soft">
              Uses your location to find fun things happening near you, right now.
            </div>
            <div className="work-card__stack work-card__stack--soft">
              <span>React</span>·<span>NodeJS</span>·<span>CloudAPI</span>
            </div>
          </div>
        </a>

        {/* Churn Prediction Models */}
        <a
          className="work-card work-card--paper work-card--short"
          href="https://github.com/rho-hub/churn-prediction-model"
          target="_blank"
          rel="noreferrer"
        >
          <div className="work-card__top">
            <span className="work-card__label work-card__label--brown">FEATURED · DATA</span>
            <span className="work-card__arrow work-card__arrow--sm">↗</span>
          </div>
          <div>
            <div className="work-card__title work-card__title--md">Churn Prediction Models</div>
            <div className="work-card__desc work-card__desc--paper">
              Predicting which customers are about to leave — before they do.
            </div>
            <div className="work-card__stack work-card__stack--brown">
              <span>Random Forest</span>·<span>XGBoost</span>·<span>CatBoost</span>
            </div>
          </div>
        </a>

        {/* EventAPI */}
        <a
          className="work-card work-card--paper work-card--short"
          href="https://github.com/rho-hub/Events_API"
          target="_blank"
          rel="noreferrer"
        >
          <div className="work-card__top">
            <span className="work-card__label work-card__label--brown">FEATURED · API</span>
            <span className="work-card__arrow work-card__arrow--sm">↗</span>
          </div>
          <div>
            <div className="work-card__title work-card__title--md">EventAPI</div>
            <div className="work-card__desc work-card__desc--paper">
              An API for events across Kenya, with a friendly dashboard to manage them.
            </div>
            <div className="work-card__stack work-card__stack--brown">
              <span>NodeJS</span>·<span>Express</span>·<span>MongoDB</span>
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}
