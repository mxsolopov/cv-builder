import classNames from "classnames";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { editItem, editObjItem } from "../../../store/resumeDataSlice";

import "./Field.scss";

const Field = ({ label, placeholder, singleItem, objArr, objItem, objId }) => {
  const dispatch = useDispatch();
  let value;
  const resumeData = useSelector((state) => state.resumeData.resumeData);
  if (singleItem) {
    if (resumeData[singleItem] !== "") {
      value = resumeData[singleItem];
    } else {
      value = "";
    }
  }
  if (objArr) {
    const savedItem = resumeData[objArr].find((obj) => obj.id === objId)[
      objItem
    ];
    if (savedItem !== "") {
      value = savedItem;
    } else {
      value = "";
    }
  }

  return (
    <div className="Field">
      <div className={classNames("label", "text-lg")}>{label}</div>
      <input
        className="text-md"
        placeholder={placeholder}
        onChange={(e) => {
          singleItem
            ? dispatch(editItem({ item: singleItem, value: e.target.value }))
            : dispatch(
                editObjItem({
                  objArr: objArr,
                  id: objId,
                  item: objItem,
                  value: e.target.value,
                })
              );
        }}
        value={value}
      />
    </div>
  );
};

export default Field;
