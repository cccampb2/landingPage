import MetricsGrid from "../MetricsGrid/MetricsGrid";
import Footer from "../Footer/Footer";
import "./MetricsFooterSection.css";
import Section from "../Section/Section";

const MetricsFooterSection = () => {
  return (
    <Section name={"metrics-footer-section"}>
      <MetricsGrid />
      <Footer />
    </Section>
  );
};

export default MetricsFooterSection;
