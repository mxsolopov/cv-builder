import React from "react";
import "./Edit.scss";
import { useMediaQuery } from "react-responsive";
import { Form, Preview, Button, Progress } from "../components";
import calcProgress from "../functions/calcProgress";
import { useSelector } from "react-redux";
import axios from "../axios";
import { editItem } from "../store/loaderSlice";
import { useDispatch } from "react-redux";
import getCookie from "../functions/getCookie";

const Edit = () => {
  const dispatch = useDispatch();
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1280px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1279px)" });
  const [mobilePreview, setMobilePreview] = React.useState(false);
  const resumeData = useSelector((state) => state.resumeData.resumeData);
  const resumeBase = useSelector((state) => state.resumeBase.resumeBase);

  const saveHandler = async () => {
    try {
      dispatch(editItem({ item: "state", value: true }));
      await axios.post("/save", {
        params: {
          resumeBase,
          resumeData,
          userId: getCookie("userId"),
          resumeId: getCookie("resumeId")
        },
      });
      dispatch(editItem({ item: "state", value: false }));
    } catch (error) {
      dispatch(editItem({ item: "state", value: false }));
      console.log(error);
    }
  };

  return (
    <div className="wrapper">
      <Form />
      {isDesktopOrLaptop && (
        <Preview
          scale={window.innerHeight}
          previewWidthRatio={0.4949}
          previewHeightRatio={0.7}
          saveHandler={saveHandler}
        />
      )}
      {isTabletOrMobile && (
        <div className="bottom-panel">
          <Button
            type="secondary"
            size="large"
            icon="ph-floppy-disk"
            textcontent={false}
            disabled={false}
            addClasses={["Button_onlyicon", "mobile-preview-button"]}
            handler={() => {
              saveHandler();
            }}
          />
          <Progress
            num={calcProgress(resumeData)}
            classname="mobile-progress"
          />
          <Button
            type="primary"
            size="large"
            icon="ph-file-pdf"
            textcontent={false}
            disabled={false}
            addClasses={["Button_onlyicon", "mobile-preview-button"]}
            handler={() => {
              setMobilePreview(!mobilePreview);
            }}
          />
        </div>
      )}
      {isTabletOrMobile && mobilePreview ? (
        <Preview
          scale={window.innerWidth}
          previewWidthRatio={0.89082}
          previewHeightRatio={1.26}
          setMobilePreview={setMobilePreview}
          saveHandler={saveHandler}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
export default Edit;
