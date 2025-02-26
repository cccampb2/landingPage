import "./Section.css";
import React from "react";

const Section = React.forwardRef(({ id, name, children }, ref) => (
  <section ref={ref} id={id} className={`section section__${name}`}>
    {children}
  </section>
));

export default Section;
