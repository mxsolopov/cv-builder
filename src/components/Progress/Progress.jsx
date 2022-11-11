import React from "react";

import "./Progress.scss";
import classNames from "classnames";

const Progress = ({ num, classname }) => {
  return (
    <div className={classNames("Progress", classname)}>
      <div className="progress">
        <div className="fill-line" style={{ width: num + "%" }}></div>
      </div>
      <span className={classNames("progress-text", "text-sm")}>
        {num + "% резюме заполнено"}
      </span>
    </div>
  );
};

export default Progress;
