import React from 'react'
import cv1 from '../images/CV/CV1.png'
import cv2 from '../images/CV/CV2.png'

const downloadLink = () => {
  return window.open(
    'https://drive.google.com/file/d/1PlYP-ej6SkuKIV1t23k6MeRHc9h6QPRn/view?usp=sharing'
  )
}

const CV = props => (
  <article
    id="CV"
    className={`${props.article === 'CV' ? 'active' : ''} ${
      props.articleTimeout ? 'timeout' : ''
    }`}
    style={{ display: 'none' }}
  >
    <div className="top-bar">
      <h2 className="major">CV</h2>
      <button onClick={downloadLink}>Download</button>
    </div>
    <span className="image cv">
      <img src={cv1} alt="cv1" />
      <img src={cv2} alt="cv2" />
    </span>
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
export default CV
