import React from "react";

import "./BlockTitle.scss";

const BlockTitle = ({ content }) => {
  return (
    <div className="BlockTitle">
      <h2 className="h3">{content}</h2>
      <div className="divider"></div>
    </div>
  );
};

export default BlockTitle;
