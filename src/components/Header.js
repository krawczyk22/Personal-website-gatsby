import PropTypes from 'prop-types'
import React from 'react'
import avatar from '../images/avatar.png'
import logo from '../images/logo-mini.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <div className="icon">
        <img src={logo} alt="logo" className="mini" />
      </div>
    </div>
    <div className="content">
      <div className="inner">
        <div className="image avatar">
          <img src={avatar} alt="" />
        </div>
      </div>
      <div className="inner">
        <h1>Michał Krawczykowski</h1>
        <p>Full-Stack Developer</p>
        <p>MSc Advanced Computer Science student</p>
        <p>BSc Computer Science graduate</p>
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
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('projects')
            }}
          >
            Projects
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
              props.onOpenArticle('qualifications')
            }}
          >
            Qualifications
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
