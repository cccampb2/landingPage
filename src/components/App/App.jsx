import "./App.css";
import Hero from "../Hero/Hero.jsx";
import Experience from "../Experience/Experience.jsx";
import Modal from "../Modal/Modal.jsx";
import { useEffect, useState } from "react";
import MetricsFooterSection from "../MetricsFooterSection/MetricsFooterSection.jsx";
function App() {
  useEffect(() => {
    document.addEventListener("click", function (e) {
      const circle = document.createElement("div");
      circle.classList.add("circle");
      circle.style.left = e.pageX + "px";
      circle.style.top = e.pageY + "px";
      document.body.appendChild(circle);

      // Remove circle after animation
      circle.addEventListener("animationend", () => {
        circle.remove();
      });
    });
  }, []);

  const [activeModal, setActiveModal] = useState(null);

  // Modal content data
  const modalContent = {
    about: {
      title: "About Me",
      subtitle: "Software Developer",
      content: (
        <>
          <p>
            Hi, I’m Caleb — a full-stack software engineer in training who loves
            turning ideas into polished, real-world applications. With over a
            year of hands-on development experience and a background in quality
            assurance, I focus on writing clean, scalable code and building
            smooth user experiences. I’m driven by solving complex problems and
            creating products that make life simpler and more intuitive.
          </p>

          <p>
            My approach combines structured problem-solving with practical
            execution. I believe great software isn’t just about how it looks —
            it’s about how reliably it works, how efficiently it performs, and
            how clearly it solves real problems.
          </p>

          <h3>My Philosophy</h3>
          <p>
            Every project is an opportunity to learn, innovate, and push
            boundaries. I'm constantly exploring new techniques and technologies
            to deliver experiences that not only meet expectations but exceed
            them.
          </p>

          <p>
            When I'm not designing or coding, you can find me hiking mountain
            trails, watching Formula 1, or exploring local coffee shops in
            search of the perfect brew.
          </p>
        </>
      ),
    },
    portfolio: {
      title: "Portfolio",
      subtitle: "Selected Works",
      content: (
        <>
          <p>
            Here's a selection of recent projects that showcase my range and
            capabilities. Each one represents a unique challenge and creative
            solution.
          </p>

          <h3>NewsExplorer</h3>
          <p>
            My final project in my full-stack software engineering program.
            Built with React and integrated with a third-party news API, the
            application allows users to search for articles by keyword and save
            selected content to a personalized “Saved Articles” page for later
            viewing.
          </p>

          <h3>What to Wear (WTWR) </h3>
          <p>
            A full-stack web application that helps users choose appropriate
            clothing based on real-time weather conditions in their location.
            Built with React, the platform allows users to browse
            weather-specific outfits, upload their own garments, and manage
            items through a personalized profile page. The application
            implements secure authentication and authorization using JSON Web
            Tokens (JWT), and communicates with a Node.js and Express backend
            with data persisted in MongoDB.
          </p>

          <h3>Fish or Fiction</h3>
          <p>
            As part of an externship, I help develop a trivia-based web
            application for an exotic animal habitat attraction based out of
            Florida. The application is designed to be hosted on on-site kiosks,
            allowing children to play single-player or multiplayer trivia games
            and compete on interactive leaderboards. Built with React and
            TypeScript on the frontend, and powered by a PostgreSQL database
            with Keystone CMS, the application focuses on performance,
            scalability, and an engaging user experience tailored for public
            kiosk environments.
          </p>

          <h3>Shiftxd Souls</h3>
          <p>
            I am currently in the planning phase of a web application for a
            local car club, working through project requirements and
            documentation. The platform will serve both members and non-members,
            providing event scheduling, announcements, and a space for sharing
            photos and updates.
          </p>
        </>
      ),
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Hire Me / Contact",
      content: (
        <>
          <p>
            I’m eager to contribute my skills as a full-stack software engineer.
            If you’re looking for a dedicated developer to join your team or
            organization, I’d love to connect and discuss how I can add value.
          </p>

          <h3>Contact Information</h3>
          <ul>
            <li>Email: calebccampbell19@gmail.com</li>
            <li>Phone: (336) 688-8825</li>
            <li>LinkedIn: https://www.linkedin.com/in/calebccampbell</li>
          </ul>

          <p>
            Looking forward to hearing from you and exploring how we can create
            something amazing together!
          </p>
        </>
      ),
    },
  };

  const handleOpenModal = (modalType) => {
    setActiveModal(modalType);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const currentContent = activeModal ? modalContent[activeModal] : null;
  return (
    <div className="page">
      <main className="page__content">
        <Hero onOpenModal={handleOpenModal} />
        <Experience />
        <MetricsFooterSection />
      </main>
      <Modal
        isOpen={!!activeModal}
        onClose={handleCloseModal}
        title={currentContent?.title}
        subtitle={currentContent?.subtitle}
      >
        {currentContent?.content}
      </Modal>
    </div>
  );
}

export default App;
