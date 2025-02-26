import Section from "../Section/Section";
import "./Experience.css";
import Period from "../Period/Period";
import Animation from "../Animation/Animation";
import Divider from "../Divider/Divider";
import { motion, useTransform } from "framer-motion";
import { useScroll } from "motion/react";
import { useRef } from "react";

function Experience() {
  const experienceRef = useRef(null);
  const trackerPath = useRef(null);
  console.log(experienceRef);
  const { scrollYProgress } = useScroll({
    target: experienceRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, trackerPath.current.offsetHeight]
  );

  return (
    <Section ref={experienceRef} name={"experience"} id={"experience"}>
      <h2 className="experience__heading">
        <div className="experience__heading-content">
          <Animation>
            Experience
            <Period />
          </Animation>
        </div>
        <Divider />
      </h2>
      <div ref={trackerPath} className="experience__line">
        <motion.div style={{ y }} className="experience__tracker"></motion.div>
      </div>
    </Section>
  );
}

export default Experience;
