import "./Section.css";

const Section = ({ name, children }) => (
  <section className={`section section__${name}`}>{children}</section>
);

export default Section;
