import { useState } from "react";
import './ResearchForm.css'
import Research from "./Research";
import { forwardRef } from "react";


const ResearchForm = forwardRef((props,ref) => {
  const [research, setResearch] = useState("SSCD");

  const formChangeHandler = (event) => {
    setResearch(event.target.value);
  };
  return (
    <div>
      <div ref={ref} className="desc-cont">
        <label htmlFor="researches">Browse Our Research: </label>
        <select
          defaultValue={research}
          onChange={formChangeHandler}
          name="researches"
          id="researches"
        >
          <option value="SSCD">SSCD</option>
          <option value="Glioblastoma">Glioblastoma</option>
          <option value="Meningioma">Meningioma</option>
          <option value="Vestibular Schwannomas">Vestibular Schwannomas</option>
        </select>
      </div>
      <Research research={research} />
    </div>
  );
});

export default ResearchForm;
