import React from "react";
import classNames from "classnames";
import thumbnail from "../../../assets/img/user-thumbnail.png";
import { useDispatch, useSelector } from "react-redux";
import { editItem } from "../../../store/resumeDataSlice";

import { InfoIcon, Button } from "../../";

import "./AvatarUpload.scss";

const AvatarUpload = () => {
  const dispatch = useDispatch();
  const resumeData = useSelector((state) => state.resumeData.resumeData);

  return (
    <div className="AvatarUpload">
      <label
        htmlFor="avatar-input"
        className="preview"
        style={{
          background: `url(${
            resumeData.avatar !== "" ? resumeData.avatar : thumbnail
          }) 0% 0% / cover`,
          border: "none",
        }}
      ></label>
      <label
        htmlFor="avatar-input"
        className={classNames("upload-button", "text-md")}
      >
        {resumeData.avatar === "" ? "Загрузить фото" : "Заменить фото"}
      </label>
      {resumeData.avatar !== "" ? (
        <Button
          type="primary"
          size="normal"
          icon={"ph-trash-simple"}
          textcontent={false}
          disabled={false}
          addClasses={["Button_onlyicon", "delete-button"]}
          handler={() => {
            dispatch(
              editItem({
                item: "avatar",
                value: "",
              })
            );
          }}
        />
      ) : (
        <></>
      )}
      <input
        type="file"
        id="avatar-input"
        onChange={(e) => {
          let file = e.target.files[0];
          let reader = new FileReader();
          reader.onloadend = function () {
            dispatch(
              editItem({
                item: "avatar",
                value: reader.result
              })
            );
          };
          reader.readAsDataURL(file);
        }}
      />
      {resumeData.avatar === "" ? (
        <InfoIcon text="Загрузите фото в соотношении 1:1, размер стороны 300px"  />
      ) : (
        <></>
      )}
    </div>
  );
};

export default AvatarUpload;
