import React from 'react'
import MSc from '../images/Qualifications/BSc.png'
//import BSc from '../images/Qualifications/BSc.png'
import ITTech from '../images/Qualifications/ITTech.png'
import ITTechTrans from '../images/Qualifications/ITTechTrans.png'
import PropTypes from 'prop-types'

const downloadBSc = () => {
  return window.open(
    'https://drive.google.com/file/d/1UhDeH4egumzNAgVH-P9BCPJKr4XtZWW9/view?usp=sharing'
  )
}

const downloadITTech = () => {
  return window.open(
    'https://drive.google.com/file/d/13tGlP8kj_xc0i6BKwBkqnS89o-f6bPQG/view?usp=sharing'
  )
}

const downloadITTechTrans = () => {
  return window.open(
    'https://drive.google.com/file/d/1t0rAwn0R4rylPme3G4eA2BxQRXj9ZYrS/view?usp=sharing'
  )
}

const Qualifications = props => (
  <article
    id="qualifications"
    className={`${props.article === 'qualifications' ? 'active' : ''} ${
      props.articleTimeout ? 'timeout' : ''
    }`}
    style={{ display: 'none' }}
  >
    <h2 className="major">Qualifications</h2>
    <div className="grid">
      <div className="card">
        <div
          className="image certificate"
          onClick={downloadBSc}
          onKeyDown={downloadBSc}
          aria-hidden="true"
        >
          <img src={MSc} alt="cv" />
        </div>
        <div className="description">BSc in Computer Science</div>
      </div>
      <div className="card">
        <div
          className="image certificate"
          onClick={downloadITTech}
          onKeyDown={downloadITTech}
          aria-hidden="true"
        >
          <img src={ITTech} alt="cv" />
        </div>
        <div className="description">IT Technician diploma</div>
      </div>
      <div className="card">
        <div
          className="image certificate"
          onClick={downloadITTechTrans}
          onKeyDown={downloadITTechTrans}
          aria-hidden="true"
        >
          <img src={ITTechTrans} alt="cv" />
        </div>
        <div className="description">IT Technician diploma translation</div>
      </div>
    </div>
    <div
      className="close"
      onClick={() => {
        props.onCloseArticle()
      }}
      onKeyDown={() => {
        props.onCloseArticle()
      }}
      aria-hidden="true"
    />
  </article>
)

Qualifications.propTypes = {
  onOpenArticle: PropTypes.func,
  onCloseArticle: PropTypes.func,
}

export default Qualifications
