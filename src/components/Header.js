import PropTypes from 'prop-types'
import React from 'react'
import random from '../images/random.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond"></span>
    </div>
    <div className="content">
      <div className="inner">
        <div className="image-avatar">
          <img src={random} alt="" />
        </div>
      </div>
      <div className="inner">
        <h1>Michal Krawczykowski</h1>
        <p>
          BSc Computer Science graduate
          <br />
          MSc Advanced Computer Science student
          <br />
          Currently looking for a job in IT industry
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            about
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('projects')
            }}
          >
            projects
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('CV')
            }}
          >
            CV
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
