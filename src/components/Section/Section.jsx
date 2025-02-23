import "./Section.css";

function Section({ name, children, id }) {
  return (
    <section id={id} className={`section section__${name}`}>
      {children}
    </section>
  );
}

export default Section;
