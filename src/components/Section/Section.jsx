import "./Section.css";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function Section({ name, children, id }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const control = useAnimation();

  useEffect(() => {
    if (isInView) {
      control.start("end");
    }
  }, [isInView]);

  return (
    <motion.section
      id={id}
      ref={ref}
      variants={{ initial: { opacity: 0, y: 75 }, end: { opacity: 1, y: 0 } }}
      initial="initial"
      animate={control}
      transition={{ duration: 0.5, delay: 0.25 }}
      className={`section section__${name}`}
    >
      {children}
    </motion.section>
  );
}

export default Section;
