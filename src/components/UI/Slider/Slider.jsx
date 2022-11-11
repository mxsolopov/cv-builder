import classNames from "classnames";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { editObjItem } from "../../../store/resumeDataSlice";

import "./Slider.scss";

const Slider = ({ objArr, objItem, objId }) => {
  const dispatch = useDispatch();
  const resumeDataValue = useSelector((state) => state.resumeData.resumeData)[
    objArr
  ].find((item) => item.id === objId)[objItem];

  const skillLabels = [
    "Начинающий",
    "Базовый",
    "Продвинутый",
    "Профессионал",
    "Эксперт",
  ];

  return (
    <div className="Slider">
      <div className={classNames("label", "text-md")}>
        {skillLabels[resumeDataValue]}
      </div>
      <input
        type="range"
        min="0"
        max="4"
        step="1"
        value={resumeDataValue}
        onChange={(e) => {
          dispatch(
            editObjItem({
              objArr: objArr,
              id: objId,
              item: objItem,
              value: e.target.value,
            })
          );
        }}
        style={{ backgroundSize: `${25 * resumeDataValue}%` }}
      />
    </div>
  );
};

export default Slider;
