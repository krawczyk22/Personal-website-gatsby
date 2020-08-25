import React from 'react'
import cv from '../images/cv.jpg'

const downloadLink = () => {
    return window.open(
      "https://drive.google.com/file/d/1-l1B90sxVAhbRTS3n9BBijAHdeyWf4ij/view?usp=sharing"
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
            <img src={cv} alt="cv"/>
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
          >Button</div>
    </article>
)
export default CV