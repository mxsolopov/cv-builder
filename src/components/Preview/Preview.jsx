import React from "react";
import { useReactToPrint } from "react-to-print";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import "./Preview.scss";
import { Classic, Base, Button, Progress, SelectTemplate } from "../";
import calcProgress from "../../functions/calcProgress";

const Preview = ({
  scale,
  previewWidthRatio,
  previewHeightRatio,
  setMobilePreview,
  saveHandler,
}) => {
  const resumeData = useSelector((state) => state.resumeData.resumeData);
  const resumeBase = useSelector((state) => state.resumeBase.resumeBase);

  const [selectTemplate, setSelectTemplate] = React.useState(false);

  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1280px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1279px)" });

  const previewWidth = previewWidthRatio * scale;
  const previewHeight = previewHeightRatio * scale;
  const printWidth = 793.7;
  const printHeight = 1122.52;

  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="Preview">
      {selectTemplate && (
        <SelectTemplate setSelectTemplate={setSelectTemplate} />
      )}
      <div className="header">
        {isTabletOrMobile && (
          <Button
            type="secondary"
            size="large"
            icon="ph-arrow-left"
            textcontent={false}
            disabled={false}
            addClasses={["Button_onlyicon"]}
            handler={() => {
              setMobilePreview(false);
            }}
          />
        )}
        {isDesktopOrLaptop && (
          <Button
            type="secondary"
            size="large"
            icon={false}
            textcontent="Сохранить"
            disabled={false}
            addClasses={[]}
            handler={() => {
              saveHandler();
            }}
          />
        )}
        <div className="action-buttons">
          <Button
            type="secondary"
            size="large"
            icon={false}
            textcontent="Шаблоны"
            disabled={false}
            addClasses={[]}
            handler={() => {
              setSelectTemplate(true);
            }}
          />
          {isDesktopOrLaptop && (
            <Button
              type="primary"
              size="large"
              icon={false}
              textcontent="Скачать PDF"
              disabled={false}
              addClasses={[]}
              handler={handlePrint}
            />
          )}
        </div>
      </div>
      <div className="document-wrapper">
        <div
          className="document-box"
          style={{ width: previewWidth + "px", height: previewHeight + "px" }}
        >
          {resumeBase.template === "base" && <Base width={previewWidth} />}
          {resumeBase.template === "classic" && (
            <Classic width={previewWidth} />
          )}
        </div>
        {/* <div className="navigation">
          <Button
            type="text"
            size="normal"
            icon="ph-caret-left"
            textcontent={false}
            disabled={true}
            addClasses={["Button_onlyicon", "white-text", "navigation-button"]}
            handler={() => {}}
          />
          <span className={classNames("text-lg", "medium-text")}>1 / 1</span>
          <Button
            type="text"
            size="normal"
            icon="ph-caret-right"
            textcontent={false}
            disabled={true}
            addClasses={["Button_onlyicon", "white-text", "navigation-button"]}
            handler={() => {}}
          />
        </div> */}
      </div>
      <div style={{ display: "none" }} className="document-wrapper">
        <div
          ref={componentRef}
          style={{ width: printWidth + "px", height: printHeight + "px" }}
          className="document-box"
        >
          {resumeBase.template === "base" && <Base width={printWidth} />}
          {resumeBase.template === "classic" && <Classic width={printWidth} />}
        </div>
      </div>
      {isDesktopOrLaptop && (
        <Progress num={calcProgress(resumeData)} classname="desktop-progress" />
      )}
      {isTabletOrMobile && (
        <Button
          type="primary"
          size="large"
          icon={false}
          textcontent="Скачать PDF"
          disabled={false}
          addClasses={["mobile-save-btn"]}
          handler={handlePrint}
        />
      )}
    </div>
  );
};

export default Preview;
