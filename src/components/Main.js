import PropTypes from 'prop-types'
import React from 'react'
import About from "./About"
import Contact from "./Contact"
import Projects from "./Projects"
import CV from "./CV"
import Qualifications from "./Qualifications"

const Main = props => (
      <div
        ref={props.setWrapperRef}
        id="main"
        style={props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <About {...props} />
        <Projects {...props} />
        <CV {...props} />
        <Qualifications {...props} />
        <Contact {...props} />
      </div>
)

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
