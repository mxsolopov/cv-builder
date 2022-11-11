import React from "react";

import "./Summary.scss";
import { TextAreaField, BlockTitle } from "..";
// import classNames from 'classnames'

const Summary = () => {
  return (
    <div className="Summary">
      <BlockTitle content="Характеристика" />
      <p className="text-md">
        Напишите 2-4 коротких и энергичных предложения, чтобы заинтересовать
        читателя! Упомяните свою роль, опыт и самое главное - свои самые большие
        достижения, лучшие качества и навыки.
      </p>
      <TextAreaField
        placeholder="Начните печатать"
        singleItem="summary"
        rows="5"
      />
    </div>
  );
};

export default Summary;
