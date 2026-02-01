import "./StaggerAnimation.css";
import { motion } from "framer-motion";

const DURATION = 0.3;
const STAGGER = 0.01;

const StaggerAnimation = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="StaggerAnimation"
    >
      <div className="StaggerAnimation__children-1">
        {children.split("").map((letter, i) => {
          return (
            <motion.span
              className="StaggerAnimation__letter"
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
              key={i}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          );
        })}
      </div>
      <div className="StaggerAnimation__children-2">
        {children.split("").map((letter, i) => {
          return (
            <motion.span
              className="StaggerAnimation__letter"
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
              key={i}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          );
        })}
      </div>
    </motion.div>
  );
};

export default StaggerAnimation;
