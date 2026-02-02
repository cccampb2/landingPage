import "./App.css";
import Hero from "../Hero/Hero.jsx";
import Experience from "../Experience/Experience.jsx";
import Header from "../Header/Header.jsx";
import Modal from "../Modal/Modal.jsx";
import { useState } from "react";
function App() {
  const [activeModal, setActiveModal] = useState(null);

  // Modal content data
  const modalContent = {
    about: {
      title: "About Me",
      subtitle: "Designer & Developer",
      content: (
        <>
          <p>
            Hello! I'm a passionate designer and developer with a love for
            creating beautiful, functional digital experiences. With over 8
            years in the industry, I've worked with clients ranging from
            startups to Fortune 500 companies.
          </p>

          <p>
            My approach combines strategic thinking with creative execution. I
            believe that great design isn't just about aesthetics—it's about
            solving problems and creating meaningful connections between people
            and technology.
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
            trails, experimenting with film photography, or exploring local
            coffee shops in search of the perfect pour-over.
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

          <h3>TechFlow Dashboard</h3>
          <p>
            A comprehensive analytics platform for SaaS companies. Built with
            React and D3.js, featuring real-time data visualization and custom
            reporting tools.
          </p>

          <h3>Bloom Beauty</h3>
          <p>
            Complete brand refresh and e-commerce website for a sustainable
            skincare brand. Shopify development with custom theme and seamless
            checkout experience.
          </p>

          <h3>Urban Trails App</h3>
          <p>
            Mobile-first web app for discovering and sharing hiking trails.
            Features interactive maps, user reviews, and offline functionality
            using PWA technology.
          </p>

          <h3>Meridian Financial</h3>
          <p>
            Corporate website redesign focused on trust and accessibility.
            Modern design system with WCAG AA compliance and integrated CMS.
          </p>
        </>
      ),
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Let's Work Together",
      content: (
        <>
          <p>
            I'm always excited to hear about new projects and opportunities.
            Whether you have a specific project in mind or just want to chat
            about possibilities, I'd love to connect.
          </p>

          <h3>Contact Information</h3>
          <ul>
            <li>Email: hello@yourwebsite.com</li>
            <li>Phone: (555) 123-4567</li>
            <li>LinkedIn: linkedin.com/in/yourprofile</li>
            <li>Twitter: @yourhandle</li>
          </ul>

          <h3>Availability</h3>
          <p>
            I'm currently accepting new projects for Q2 2026. Typical project
            timelines range from 4-12 weeks depending on scope and complexity.
          </p>

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
