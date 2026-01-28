import "./Hero.css";
import Section from "../Section/Section";
import avatar from "../../assets/calebcampbellavatar.png";

const Hero = ({}) => {
  return (
    <Section name={"hero"}>
      <div className="hero">
        <div className="hero__intro">HI, I'M CALEB</div>
        <div className="hero__avatar">
          <img src={avatar} alt="Caleb-Campbell-Avatar" />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
