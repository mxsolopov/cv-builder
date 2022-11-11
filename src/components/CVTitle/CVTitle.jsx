import React from "react";

import "./CVTitle.scss";
import { Button } from "../";
import classNames from "classnames";
import AutosizeInput from "react-18-input-autosize";
import { useSelector, useDispatch } from "react-redux";
import { editItem } from "../../store/resumeBaseSlice";
import { useNavigate } from "react-router-dom";

const CVTitle = () => {
  const navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  };

  const resumeBase = useSelector((state) => state.resumeBase.resumeBase);

  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = React.useState(false);

  return (
    <div className="CVTitle">
      <Button
        type="primary"
        size="normal"
        icon="ph-arrow-left"
        textcontent={false}
        disabled={false}
        addClasses={["Button_onlyicon"]}
        handler={() => {
          routeChange("/dashboard");
        }}
      />
      <div className="title-wrapper">
        {isEdit ? (
          <AutosizeInput
            className={classNames("h2")}
            name="form-field-name"
            value={resumeBase.title}
            onChange={(e) => {
              dispatch(editItem({ item: "title", value: e.target.value }));
            }}
          />
        ) : (
          <h2 className="h2">{resumeBase.title}</h2>
        )}
        <Button
          type="secondary"
          size="normal"
          icon={isEdit ? "ph-check" : "ph-pencil-simple"}
          textcontent={false}
          disabled={false}
          addClasses={["Button_onlyicon"]}
          handler={() => {
            setIsEdit(!isEdit);
          }}
        />
      </div>
    </div>
  );
};

export default CVTitle;
