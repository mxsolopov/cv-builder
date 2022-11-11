import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { editItem } from "../../store/resumeBaseSlice";
import base from "../../assets/img/base.jpg";
import classic from "../../assets/img/classic.jpg";

import "./SelectTemplate.scss";

const SelectTemplate = ({ setSelectTemplate }) => {
  const resumeBase = useSelector((state) => state.resumeBase.resumeBase);
  const dispatch = useDispatch();

  return (
    <div className="SelectTemplate" onClick={() => setSelectTemplate(false)}>
      <div className="wrapper" onClick={(e) => e.stopPropagation()}>
        <label>
          <span className="text-sm">Базовый</span>
          <input
            type="radio"
            value="base"
            checked={resumeBase.template === "base" ? true : false}
            onChange={(e) =>
              dispatch(editItem({ item: "template", value: e.target.value }))
            }
          />
          <img src={base} alt="Базовый" />
        </label>

        <label>
          <span className="text-sm">Классический</span>
          <input
            type="radio"
            value="classic"
            checked={resumeBase.template === "classic" ? true : false}
            onChange={(e) =>
              dispatch(editItem({ item: "template", value: e.target.value }))
            }
          />
          <img src={classic} alt="Классический" />
        </label>
      </div>
    </div>
  );
};

export default SelectTemplate;
