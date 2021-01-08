import React from 'react'
import pic02 from '../images/pic02.jpg'

import FAQLogged from '../images/FAQ/Logged.png'
import FAQNotLogged from '../images/FAQ/NotLogged.png'
import FAQQuestionView from '../images/FAQ/QuestionView.png'
import FAQUnitTesting from '../images/FAQ/UnitTesting.png'

import FAaddStudent from '../images/Facial-attendance/addStudent.png'
import FAverifyAttendance from '../images/Facial-attendance/verifyAttendance.png'

const Projects = props => (
  <article
    id="projects"
    className={`${props.article === 'projects' ? 'active' : ''} ${
      props.articleTimeout ? 'timeout' : ''
    }`}
    style={{ display: 'none' }}
  >
    <h2 className="major">projects</h2>

    <h3>Job Swiper</h3>
    <h4>
      <a
        href="https://github.com/krawczyk22/JobSwipeApp"
        target="_blank"
        rel="noreferrer"
      >
        GitHub URL
      </a>
      &nbsp;&nbsp;&nbsp;&nbsp;
    </h4>
    <p>
      Job searching application with a Tinder-like swiping feature for selecting
      jobs previously specified by the user. Swiping left discards the job from
      the deck of cards whilst swiping right moved the job advertisement into a
      separate tab where the user can apply for it later. The user logs in
      through a third-party app using the secure OAuth2 feature. Subsequently,
      selecting the job title (or simply inserting the keywords) and entering
      the job specifications into the appropriate field. The job advertisements
      are fetched from the Reed.co.uk API and are presented to the user in the
      deck of cards form. Once the user selects appropriate job advertisements,
      they can come back and apply for them later.
    </p>
    <span className="image main">
      <img src={pic02} alt="" />
    </span>

    <h3>Activity booking system</h3>
    <h4>
      <a
        href="https://github.com/krawczyk22/Activity-booking-system"
        target="_blank"
        rel="noreferrer"
      >
        GitHub URL
      </a>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <a
        href="https://www.youtube.com/watch?v=0Jk159DQNLM"
        target="_blank"
        rel="noreferrer"
      >
        Functionality Presentation
      </a>
    </h4>
    <p>Lorem Ipsum</p>
    <span className="image main">
      <img src={pic02} alt="" />
    </span>

    <h3>Automated facial attendance system</h3>
    <h4>
      <a
        href="https://github.com/krawczyk22/Facial-attendance-system"
        target="_blank"
        rel="noreferrer"
      >
        GitHub URL
      </a>
    </h4>
    <p>
      Automated facial recognition system trained with students' faces which are
      subsequently used for verifying attendance in real-time. The system
      utilises the fusion of the Principal Component Analysis and the Linear
      Discriminant Analysis algorithm which has been used in a research study.
      The system is capable of recognising faces with up to 98% of accuracy due
      to utilising fusion of the algorithms. The system takes advantage of the
      OpenCV Python library and connects to a relational database where the
      students' attendance records are stored.
    </p>
    <span className="image main">
      <img src={FAaddStudent} alt="" />
      <img src={FAverifyAttendance} alt="" />
    </span>

    <h3>FAQ forum website</h3>
    <h4>
      <a
        href="https://github.com/krawczyk22/FAQ-forum-website"
        target="_blank"
        rel="noreferrer"
      >
        GitHub URL
      </a>
    </h4>
    <p>Lorem Ipsum</p>
    <span className="image main">
      <img src={FAQLogged} alt="" />
      <img src={FAQNotLogged} alt="" />
      <img src={FAQQuestionView} alt="" />
      <img src={FAQUnitTesting} alt="" />
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
export default Projects
