import React from "react";

import "./Form.scss";

import {
  CVTitle,
  Profile,
  Summary,
  Works,
  Education,
  Links,
  Skills,
  AdditionalSections,
} from "../";

const Form = () => {
  return (
    <div className="Form">
      <div className="inner">
        <CVTitle />
        <Profile />
        <Links />
        <Summary />
        <Education />
        <Works />
        <Skills />
        <AdditionalSections />
      </div>
    </div>
  );
};

export default Form;
