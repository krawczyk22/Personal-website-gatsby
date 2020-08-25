import React from 'react'
import pic02 from '../images/pic02.jpg'

const Projects = props => (
    <article
          id="projects"
          className={`${props.article === 'projects' ? 'active' : ''} ${
            props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">projects</h2>

          <h3>Activity booking system</h3>
          <h4>
            <a href="https://github.com/krawczyk22/Activity-booking-system"
              target="_blank"
              rel="noreferrer"
            >GitHub URL</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://github.com/krawczyk22/Activity-booking-system"
              target="_blank"
              rel="noreferrer"
            >Website URL</a>
          </h4>
          <p>
            Lorem Ipsum
          </p>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Lorem Ipsum
          </p>

          <h3>Automated facial attendance system</h3>
          <h4>
            <a href="https://github.com/krawczyk22/Facial-attendance-system"
              target="_blank"
              rel="noreferrer"
              >GitHub URL</a>
          </h4>
          <p>
            Lorem Ipsum
          </p>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Lorem Ipsum
          </p>

          <h3>FAQ forum website</h3>
          <h4>
            <a href="https://github.com/krawczyk22/FAQ-forum-website"
              target="_blank"
              rel="noreferrer"
            >GitHub URL</a>
          </h4>
          <p>
            Lorem Ipsum
          </p>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Lorem Ipsum
          </p>
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
export default Projects