import React from "react";
import "./styles/modern-normalize.css";
import "./styles/App.css";
import "./styles/components/header.css";
import './styles/components/mobile-nav.css'
import "./styles/components/hero.css";
import "./styles/components/About.css";
import "./styles/components/projects.css";
import "./styles/components/contact.css";
import "./styles/components/footer.css";
import "./styles/utils.css";

//Js file
import mobileNav from './utils/mobile-nav';

// images
import photo from "./assets/propic.jpg";
import abt_photo from "./assets/About_img.jpg";
import project1_photo from "./assets/Portfolio.png";
import project2_photo from ".//assets/Rock.jpg";
import project3_photo from "./assets/Niro's_mart.png";
import project4_photo from "./assets/Super_app.png";
import { useEffect } from "react";

// mobileNav();

function App() {
  useEffect(() => {
    
    // Call the mobileNav function
    mobileNav(); 

    

}, []);
  return (
    
    <div className="App">
      <header className="header container">
        <nav>
          <ul className="header__menu">
            <li>
              <a className="header__link" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="header__link" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="header__link" href="#contact">
                Contact
              </a>
            </li>
            <li className="header__line"></li>
            <li>
              <a className="header__resume btn" href="#">
                Resume
              </a>
            </li>
          </ul>
          <button aria-label="mobile nav button" className="header__bars">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </nav>
      </header>
      {/* Mobile Nav bar Starting */}
      
      <div className="mobile-nav">
        <ul className="mobile-nav__menu">
          <li>
            <a className="mobile-nav__link" href="#about">About</a>
          </li>
          <li>
          <a className="mobile-nav__link" href="#projects">Projects</a>
          </li>
          <li>
          <a className="mobile-nav__link" href="#contact">Contact</a>
          </li>
          <li className="mobile-nav__link-line"></li>
          <li>
          <a className="mobile-nav__btn btn" href="#">Resume</a>
          </li>
        </ul>
      </div>
      {/* Mobile Nav bar end */}
      <main>
        <section className="hero container">
          <img className="hero__img" src={photo} alt="My profile picture" />
          <h2 className="hero__subtitle">Hi, I'm Niroshan Ragulesan 🙋🏽</h2>
          <h1 className="hero__title">
            FRONT-END <br />
            WEB DEVELOPER.
          </h1>
          <p className="hero__description">
            A curious individual with a passion in{" "}
            <strong>Frontend / Fullstack</strong> web developement from India. I
            am an enthusiast specialized in building pixel perfect web
            applications
          </p>
          <a
            id="#contact"
            className="hero__btn btn"
            href="mailto:niroshanr0109@gmail.com"
            target="_blank"
          >
            Reach out
          </a>
        </section>
        <section id="about" className="about container section">
          <div className="about__content">
            <h2 className="about__title">About</h2>
            <p className="about__description">
              Hello there! I'm Niroshan Ragulesan{" "}
              <strong>Frontend / Fullstack</strong> web developer. Everyday, I
              spend some quality time on upskill myself with help of internet.
              all day, everyday.
            </p>
            <p className="about__description">
              As a Web developement enthusiast I'm currently searching for a
              fulltime oppurtunities. If any opening in your organisation
              satisfies my skills, mail me using the <strong>Reach Out</strong>{" "}
              Button.
            </p>
            <p className="about__description">
              I have created some personal personal projects. Please look out
              for them while you scroll!!!
            </p>
            <hr className="about__hr" />
            <h3 className="about__subtitle">Skills</h3>
            <div className="about__ul-container">
              <ul className="about__ul">
                <li className="about__li">HTML</li>
                <li className="about__li">CSS</li>
                <li className="about__li">Javascript</li>
                <li className="about__li">React JS</li>
              </ul>
              <ul className="about__ul">
                <li className="about__li">Node JS</li>
                <li className="about__li">Express JS</li>
                <li className="about__li">MongDB</li>
              </ul>
            </div>
          </div>
          <div className="about__img-wrapper">
            <img className="about__img" src={abt_photo} alt="my-photo" />
          </div>
        </section>
        <section className="projects container section">
          <h2 className="projects__title">Projects</h2>
          <p className="projects__description">
            Mollit pariatur tempor nisi dolor non consequat magna cupidatat
            reprehenderit. Aliquip excepteur ullamco aliquip magna est et
            commodo deserunt ipsum.
          </p>
          <div id="projects" className="projects__container">
            {/* Project 1 */}
            <h3 className="project-title">Portfolio Website</h3>
            <div className="projects__img-wrapper project__image1">
              <img src={project1_photo} alt="" />
            </div>
            <div className="work__project project__content1">
              <h3 className="projects-subtitle">Portfolio Website</h3>
              <p className="projects__description1">
                Developed a front-end web application to show case projects and
                skills. Implemented a filtering and searching feature that
                allows users to find the shoes of their choice in the shop
              </p>
              <p className="projects__description2">
                Utilized responsive design principles to ensure a consistent
                experience across different devices
              </p>
              <div className="projects__links">
                <a className=" btn projects-btn" href="">
                  Website
                </a>
                <a className=" btn projects-btn" href="https://github.com/NiroshanR/Personal_Website">
                  Github
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <h3 className="project-title">Rock Paper Scissors</h3>
            <div className="projects__img-wrapper project__image2">
              <img src={project2_photo} alt="" />
            </div>
            <div className="work__project project__content2">
              <h3 className="projects-subtitle">Rock Paper Scissors</h3>
              <p className="projects__description1">
                Developed the game logic using JavaScript to enable
                player-computer interactions. Designed an engaging user
                interface using HTML and CSS, enhancing the overall user
                experience.
              </p>
              <p className="projects__description2">
                Demonstrated proficiency in front-end web development,
                JavaScript programming, and user interface design.
              </p>
              <div className="projects__links">
                <a className=" btn projects-btn" href="https://module-test-1.vercel.app/">
                  Website
                </a>
                <a className=" btn projects-btn" href="https://github.com/NiroshanR/Module-Test-1">
                  Github
                </a>
              </div>
            </div>
            {/* Project 3 */}
            <h3 className="project-title">Niro's Mart</h3>
            <div className="projects__img-wrapper project__image3">
              <img src={project3_photo} alt="" />
            </div>
            <div className="work__project project__content3">
              <h3 className="projects-subtitle">Niro's Mart</h3>
              <p className="projects__description1">
                Developed a front-end web application to ensure that the user
                has ease of shopping on the website. Implemented a filtering and
                searching feature that allows users to find the shoes of their
                choice in the shop
              </p>
              <p className="projects__description2">
                Demonstrated proficiency front end development using reactj.js
              </p>
              <div className="projects__links">
                <a className=" btn projects-btn" href="https://shop-app-bay-seven.vercel.app/">
                  Website
                </a>
                <a className=" btn projects-btn" href="https://github.com/NiroshanR/Shop-App">
                  Github
                </a>
              </div>
            </div>

            {/* Project 4 */}
            <h3 className="project-title">Super App</h3>
            <div className="projects__img-wrapper project__image4">
              <img src={project4_photo} alt="" />
            </div>
            <div className="work__project project__content4">
              <h3 className="projects-subtitle">Super App</h3>
              <p className="projects__description1">
                Developed a front-end web application that enables user to sign
                or login using react to their personal website like application.
                It has features like timer, weather report, and notepad to store
                their personal notes on them
              </p>
              <p className="projects__description2">
                Enables the user to provide information that will be stored and
                displayed once the user logins in again
              </p>
              <div className="projects__links">
                <a className=" btn projects-btn" href="">
                  Work in Progress
                </a>
                {/* <a className=" btn projects-btn" href="">
                  Github
                </a> */}
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="contact container section">
          <h2 className="contact__title">Get In Contact</h2>
          <p className="contact__description">
            Whether you are hiring or have any enquiries or just want to say hi,
            my inbox is all open for you. Feel to reach me out and I will get
            back to as fast as i can.
          </p>
          <a
            className="contact__btn btn"
            href="mailto:niroshanr0109@gmail.com"
            target="_blank"
          >
            React Out
          </a>
        </section>
      </main>
      <footer className="footer container section">
        <h3 className="footer__title">Made with ❤️ by Niroshan Ragulesan</h3>
      </footer>
    </div>
  );

}

export default App;
