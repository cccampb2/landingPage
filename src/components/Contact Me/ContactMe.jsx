import "./ContactMe.css";
import Section from "../Section/Section";
import Animation from "../Animation/Animation";
import Divider from "../Divider/Divider";
import Period from "../Period/Period";
import { useEffect, useState } from "react";

function ContactMe() {
  const [formSubmited, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    setFormSubmitted(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  }, [formSubmited]);

  return (
    <Animation width={"100%"}>
      <Section name={"contact"} id={"contact"}>
        <h2 className="contact__heading">
          <div className="contact__heading-content">
            <Animation>
              Contact Me
              <Period />
            </Animation>
          </div>
          <Divider />
        </h2>
        <div
          className={`contact__message-success ${
            formSubmited ? "contact__message-success-submitted" : ""
          }`}
        >
          <h3 className="contact__message-thanks">
            Thanks, your message has been received
            <Period />
          </h3>

          <p className="contact__message-reachout">
            I will reach out to you soon!
          </p>
        </div>{" "}
        <form
          onSubmit={handleSubmit}
          action=""
          className={`contact__form ${
            formSubmited ? "contact__form-disabled" : ""
          }`}
        >
          <h3 className="contact__form-heading">Stay In Touch</h3>
          <label className="contact__form-label">
            <input
              className="contact__form-input"
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </label>
          <label className="contact__form-label">
            {" "}
            <input
              className="contact__form-input"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </label>
          <label className="contact__form-label">
            {" "}
            <textarea
              className="contact__form-textarea"
              type="text"
              name="message"
              placeholder="Write a message"
              required
            />
          </label>

          <button className="contact__form-btn" type="submit">
            Send
          </button>
        </form>
      </Section>
    </Animation>
  );
}

export default ContactMe;
