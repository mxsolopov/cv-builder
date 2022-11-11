import React from "react";

import "./Hobbies.scss";
import { TextAreaField, BlockTitle } from "..";
// import classNames from 'classnames'

const Hobbies = () => {
  return (
    <div className="Hobbies">
      <BlockTitle content="Хобби" />
      <TextAreaField
        placeholder="Перечислите свои увлечения"
        singleItem="hobbies"
        rows="3"
      />
    </div>
  );
};

export default Hobbies;
