import React from "react";
import classNames from "classnames";

import "./Button.scss";

const Button = ({
  type,
  size,
  icon = false,
  textcontent = false,
  disabled = false,
  addClasses = [],
  handler,
}) => {
  const typeClass = `Button_${type}`;
  const sizeClass = `Button_${size}`;

  let btnClass = classNames("Button", typeClass, sizeClass, ...addClasses);

  return (
    <button className={btnClass} disabled={disabled} onClick={handler}>
      {textcontent ? <div className="textcontent">{textcontent}</div> : <></>}
      {icon ? <i className={classNames("icon", icon)}></i> : <></>}
    </button>
  );
};

export default Button;
