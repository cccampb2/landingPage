import "./Hero.css";
import Section from "../Section/Section";
import avatar from "../../assets/calebcampbellavatar.png";
import Header from "../Header/Header";

const Hero = ({ onOpenModal }) => {
  return (
    <Section data_header={"transparent"} name={"hero"}>
      <Header onOpenModal={onOpenModal} />
      <div className="hero">
        <div className="hero__intro">
          <h1 className="hero__title">
            CALEB <span className="hero__lastName">CAMPBELL</span>
          </h1>
          <span className="hero__subtitle">
            <span className="hero__accent">Software Engineer</span> focused on
            clean code and great user experiences.
          </span>
        </div>
        <div className="hero__avatar">
          <img src={avatar} alt="Caleb-Campbell-Avatar" />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
