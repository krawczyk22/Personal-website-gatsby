import React from 'react'
import cv from '../images/CV/CV1.png'
import PropTypes from 'prop-types'

const downloadMSc = () => {
  return window.open(
    'https://drive.google.com/file/d/1PlYP-ej6SkuKIV1t23k6MeRHc9h6QPRn/view?usp=sharing'
  )
}

const downloadBSc = () => {
  return window.open(
    'https://drive.google.com/file/d/1PlYP-ej6SkuKIV1t23k6MeRHc9h6QPRn/view?usp=sharing'
  )
}

const downloadITTech = () => {
  return window.open(
    'https://drive.google.com/file/d/1PlYP-ej6SkuKIV1t23k6MeRHc9h6QPRn/view?usp=sharing'
  )
}

const downloadITTechTrans = () => {
  return window.open(
    'https://drive.google.com/file/d/1PlYP-ej6SkuKIV1t23k6MeRHc9h6QPRn/view?usp=sharing'
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
          role="button"
          tabIndex="0"
        >
          <img src={cv} alt="cv" />
        </div>
        <div className="description">MSc in Advanced Computer Science</div>
      </div>
      <div className="card">
        <div
          className="image certificate"
          onClick={downloadMSc}
          onKeyDown={downloadMSc}
          role="button"
          tabIndex="0"
        >
          <img src={cv} alt="cv" />
        </div>
        <div className="description">BSc in Computer Science</div>
      </div>
      <div className="card">
        <div
          className="image certificate"
          onClick={downloadITTech}
          onKeyDown={downloadITTech}
          role="button"
          tabIndex="0"
        >
          <img src={cv} alt="cv" />
        </div>
        <div className="description">IT Technician diploma</div>
      </div>
      <div className="card">
        <div
          className="image certificate"
          onClick={downloadITTechTrans}
          onKeyDown={downloadITTechTrans}
          role="button"
          tabIndex="0"
        >
          <img src={cv} alt="cv" />
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
      role="button"
      tabIndex="0"
    >
      Button
    </div>
  </article>
)

Qualifications.propTypes = {
  onOpenArticle: PropTypes.func,
  onCloseArticle: PropTypes.func,
}

export default Qualifications
