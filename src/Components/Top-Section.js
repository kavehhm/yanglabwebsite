import neuro from "../miscpics/neuro2.png";
import geffen from "../miscpics/geffen.png";
import ImageSlider from "./ImageSlider";
import "./Top.css";

const Top = () => {
  return (
    <div className="top">
      <a target="_blank" rel="noreferrer" href="https://medschool.ucla.edu/">
        <img className="geffen" src={geffen} alt="David Geffen" />
      </a>
      <div className="containerStyle">
        <ImageSlider />
      </div>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.uclahealth.org/departments/neurosurgery"
      >
        <img className="neuro" src={neuro} alt="UCLA Neuroscience" />
      </a>
    </div>
  );
};

export default Top;
