import React from "react";
import "../css/main.css";
function ClassNumberTopic({ classNo, topic }) {
  // clculate the class number as we have started on 24-aug and ending on 20 sep. escape sat sunday
  // logic
  return (
    <div className="classDetails">
      <h1>Class {classNo}</h1>
      <h3>{topic}</h3>
    </div>
  );
}

export default ClassNumberTopic;
