import React from 'react'

import FAQLogged from '../images/FAQ/Logged.png'
import FAQNotLogged from '../images/FAQ/NotLogged.png'
import FAQQuestionView from '../images/FAQ/QuestionView.png'
import FAQUnitTesting from '../images/FAQ/UnitTesting.png'

import ABAddActivity from '../images/Activity-booking/AddActivity.png'
import ABLoggedIn from '../images/Activity-booking/LoggedIn.png'
import ABLogin from '../images/Activity-booking/Login.png'
import ABViewActivities from '../images/Activity-booking/ViewActivities.png'

import FAaddStudent from '../images/Facial-attendance/addStudent.png'
import FAverifyAttendance from '../images/Facial-attendance/verifyAttendance.png'

import JSFavourites from '../images/Job-Swiper/Favourites.png'
import JSJobSearchScreen from '../images/Job-Swiper/JobSearchScreen.png'
import JSJobSwipe from '../images/Job-Swiper/JobSwipe.png'
import JSLoginAuthScreen from '../images/Job-Swiper/LoginAuthScreen.png'
import LoginScreen from '../images/Job-Swiper/LoginScreen.png'
import WelcomePage from '../images/Job-Swiper/WelcomePage.png'

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
      See project on &nbsp;
      <a
        href="https://github.com/krawczyk22/JobSwipeApp"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
      &nbsp;&nbsp;&nbsp;&nbsp;
    </h4>
    <p>
      Job searching application with a Tinder-like swiping feature for selecting
      jobs previously specified by the user. Swiping left discards the job from
      the deck of cards whilst swiping right moved the job advertisement into a
      separate tab where the user can apply for it later. The user logs in
      through a third-party app using the Firebase authorisation. Subsequently,
      the user selects the job title (or simply inserts the keywords) and enters
      the job specifications into the appropriate fields. The job advertisements
      are fetched from the Reed.co.uk API and are presented to the user in the
      deck of cards form. The selected jobs are saved on Firebase and fetched
      from there when the user requests to access them. Once the user selects
      appropriate job advertisements, they can come back and apply for them
      later.
    </p>
    <span className="image grid">
      <img src={WelcomePage} alt="" />
      <img src={LoginScreen} alt="" />
      <img src={JSLoginAuthScreen} alt="" />
      <img src={JSJobSearchScreen} alt="" />
      <img src={JSJobSwipe} alt="" />
      <img src={JSFavourites} alt="" />
    </span>
    <span className="image main">
      <iframe
        title="JobSwiper video"
        src="https://www.youtube.com/embed/ptx-PKpxj4Q"
        //width="555"
        //height="315"
        frameborder="0"
        allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen"
        msallowfullscreen="msallowfullscreen"
        oallowfullscreen="oallowfullscreen"
        webkitallowfullscreen="webkitallowfullscreen"
      ></iframe>
    </span>

    <h3>Activity booking system</h3>
    <h4>
      See project on &nbsp;
      <a
        href="https://github.com/krawczyk22/Activity-booking-system"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
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
    <p>
      Activity booking system created in JavaScript split into the backend
      framework in Node.js and frontend framework in React. The application
      benefits from signup and login pages, allows registered users to create
      activities, add other members and collaborate with them. Thus, the system
      aims to help with organising users' free time. The frontend framework
      fully connects to the backend environment through the utilisation of the
      RESTful APIs. The functionality of the project I was responsible for is
      shown on the featuring video.
    </p>
    <span className="image main">
      <img src={ABAddActivity} alt="" />
      <img src={ABLoggedIn} alt="" />
      <img src={ABLogin} alt="" />
      <img src={ABViewActivities} alt="" />
    </span>

    <h3>Automated facial attendance system</h3>
    <h4>
      See project on &nbsp;
      <a
        href="https://github.com/krawczyk22/Facial-attendance-system"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
    </h4>
    <p>
      Automated facial recognition system trained with students' faces which are
      subsequently used for verifying attendance in real-time. The system
      utilises the fusion of the Principal Component Analysis and the Linear
      Discriminant Analysis algorithm which has been used in a research study
      investigating the effect of change of the lighting conditions and facial
      expressions and facewear on the recognition rate of the fusion. The system
      is capable of recognising faces with up to 98% of accuracy due to
      utilising fusion of the algorithms. The system takes advantage of the
      OpenCV Python library and connects to a relational database where the
      students' attendance records are stored.
    </p>
    <span className="image main">
      <img src={FAaddStudent} alt="" />
      <img src={FAverifyAttendance} alt="" />
    </span>

    <h3>FAQ forum website</h3>
    <h4>
      See project on &nbsp;
      <a
        href="https://github.com/krawczyk22/FAQ-forum-website"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
    </h4>
    <p>
      FAQ forum website created in JavaScript benefits from the Node.js
      framework. The system provides a forum facility with the Frequently Asked
      Questions that each of the registered users can add and comment. The
      environment adds gamification by assigning points to the users who give
      reasonable answers to questions and receive positive marks from other team
      members. Thus, encouraging friendly competition amongst its users. The
      website takes advantage of handlebars in HTML formatted in CSS with
      RESTful API connecting the environment to a relational database. The
      system comprises of a full suite of unit and acceptance testing and
      numerous UML diagrams thoroughly describing the developed application.
    </p>
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
      aria-hidden="true"
    />
  </article>
)
export default Projects
