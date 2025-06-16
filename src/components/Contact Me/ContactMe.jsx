import "./ContactMe.css";
import Section from "../Section/Section";
import Animation from "../Animation/Animation";
import Divider from "../Divider/Divider";
import Period from "../Period/Period";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

function ContactMe() {
  const [formSubmited, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    return fetch("https://formsubmit.co/calebccampbell19@gmail.com", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        setIsLoading(false);
        setFormSubmitted(true);
        form.reset();
      })
      .catch(console.error);
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
        {isLoading && (
          <div className={`contact__loader`}>
            <Loader />
          </div>
        )}
        {!isLoading && (
          <form
            onSubmit={handleSubmit}
            method="POST"
            className={`contact__form ${
              formSubmited ? "contact__form-disabled" : ""
            }`}
          >
            <h3 className="contact__form-heading">Stay In Touch</h3>
            <input
              type="hidden"
              name="_subject"
              value="New Submission: Someone would like to connect!"
            ></input>
            <input type="hidden" name="_captcha" value="false"></input>
            <label className="contact__form-label">
              Name*
              <input
                className="contact__form-input"
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </label>
            <label className="contact__form-label">
              Email*
              <input
                className="contact__form-input"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </label>
            <label className="contact__form-label">
              Message*
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
        )}
      </Section>
    </Animation>
  );
}

export default ContactMe;
