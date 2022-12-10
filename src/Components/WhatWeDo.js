import "./WhatDoWeDo.css";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { forwardRef } from "react";


const Desc = forwardRef((props, ref) => {
  
  return (
    <div className="cont">
      <div className="info-cont" ref={ref}>
        <h1>The Yang Lab</h1>
        <h2>Studying Brain tumors and SSCD</h2>
        <p>
          The Yang Lab at the University of California, Los Angeles (UCLA)
          focuses primarily on brain tumor research, in particular glioblastoma,
          meningioma, and vestibular schwannoma; and superior semicircular canal
          dehiscence. As a team of students, physicians, and scientists, we take
          a multidisciplinary approach encompassing both clinical and
          translational research to work towards optimizing patient outcomes.
        </p>
      </div>
      <div className="twitter-feed">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="TheYangLab1"
          options={{ height: 400, width: 350 }}
        />
      </div>
    </div>
  );
});

export default Desc;
