import "./Hero.css";
import Section from "../Section/Section";
import avatar from "../../assets/calebcampbellavatar.png";

const Hero = ({}) => {
  return (
    <Section name={"hero"}>
      <div className="hero">
        <div className="hero__intro"></div>
        <div className="hero__avatar">
          <img className="avatar" src={avatar} alt="Caleb-Campbell-Avatar" />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
