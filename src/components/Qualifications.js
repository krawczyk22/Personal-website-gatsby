import React from 'react'
import cv from '../images/CV/CV1.png'

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
          onClick={() => {
            props.onOpenArticle('projects')
          }}
          onKeyDown={() => {
            props.onOpenArticle('projects')
          }}
          role="button"
          tabIndex="0"
        >
          <img src={cv} alt="cv" />
        </div>
        <div className="description">BSc in Computer Science</div>
      </div>
      <div className="card">
        <div className="image certificate">
          <img src={cv} alt="cv" />
        </div>
        <div className="description">IT Technician diploma</div>
      </div>
      <div className="card">
        <div className="image certificate">
          <img src={cv} alt="cv" />
        </div>
        <div className="description">IT Technician diploma translation</div>
      </div>
      <div className="card">
        <div className="image certificate">
          <img src={cv} alt="cv" />
        </div>
        <div className="description">Adobe Certified Associate Dreamweaver</div>
      </div>
      <div className="card">
        <div className="image certificate">
          <img src={cv} alt="cv" />
        </div>
        <div className="description">IT Essentials</div>
      </div>
      <div className="card">
        <div className="image certificate">
          <img src={cv} alt="cv" />
        </div>
        <div className="description">Google Analytics</div>
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

export default Qualifications
