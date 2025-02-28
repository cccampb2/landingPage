import "./Animation.css";
import { easeIn, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function Animation({ children, width = "fit-content" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const control = useAnimation();

  useEffect(() => {
    if (isInView) {
      control.start("end");
    }
  }, [isInView]);
  return (
    <div ref={ref} style={{ position: "relative", width }}>
      <motion.div
        variants={{
          initial: { opacity: 0, y: 275, scale: 0 },
          end: { opacity: 1, y: 0, scale: 1 },
        }}
        initial="initial"
        animate={control}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 10,
          duration: 0.5,
          delay: 0.25,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Animation;
