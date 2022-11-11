import React from "react";
import classNames from "classnames";

import "./InfoIcon.scss";

const InfoIcon = ({ text }) => {
  return (
    <div className="InfoIcon">
      <i className={classNames("icon", "ph-info")}></i>
      <span className={classNames("tooltip", "text-sm")}>{text}</span>
    </div>
  );
};

export default InfoIcon;
