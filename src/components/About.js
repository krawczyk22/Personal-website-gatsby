import React from 'react'

const About = props => (
  <article
    id="about"
    className={`${props.article === 'about' ? 'active' : ''} ${
      props.articleTimeout ? 'timeout' : ''
    }`}
    style={{ display: 'none' }}
  >
    <h2 className="major">about</h2>
    <p>
      Born in Poland. Since I was a kid, the only thing I've always been
      passionate is technology. My interest pushed me to go to an IT school,
      where I got my first qualifications as an IT Technician. Completing my
      course left me keen on learning more. Therefore, I left my home country to
      the United Kingdom and started my undergraduate degree at one of the best
      Engineering Faculties in the country at Coventry University. This is where
      I developed my programming skills and deepen my knowledge of current
      technologies. Eager to learn more, I undertook a postgraduate course at
      the University of Birmingham to broaden my knowledge further. This allowed
      me to familiarise myself and understand new concepts of machine learning,
      neural networks, computer vision and Artificial Intelligence
    </p>
    <p>
      Currently, I'm focused on expanding my knowledge about JavaScript, React,
      Node.js, React-Native, Firebase, web development. By working on personal
      projects I'm hoping to develop products that will change the app market ;)
    </p>
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
export default About
