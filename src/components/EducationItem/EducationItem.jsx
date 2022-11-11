import React from "react";
import { useDispatch } from "react-redux";
import { removeObjItem } from "../../store/resumeDataSlice";
import "./EducationItem.scss";
import { Button, Field, DateRange } from "..";
import classNames from "classnames";
import { useSelector } from "react-redux";

const EducationItem = ({ id, educationCounter, setEducationCounter }) => {
  const collapsed = educationCounter.find((item) => item.id === id).collapsed;
  const education = useSelector(
    (state) => state.resumeData.resumeData
  ).education.find((education) => education.id === id);
  const dispatch = useDispatch();

  const addZero = (num) => {
    if (num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  };

  return (
    <div className="EducationItem">
      <div className="header">
        <div className="title-wrapper">
          <div className={classNames("title", "text-lg", "medium-text")}>
            {education.organisation !== ""
              ? education.organisation
              : "Без названия"}
          </div>
          <div className={classNames("range-label", "text-sm")}>
            {education.period.startMonth &&
            education.period.startYear &&
            education.period.endMonth &&
            education.period.endYear
              ? education.period.endMonth === "current" ||
                education.period.endYear === "current"
                ? addZero(+education.period.startMonth + 1) +
                  "/" +
                  education.period.startYear +
                  " - н.в."
                : addZero(+education.period.startMonth + 1) +
                  "/" +
                  education.period.startYear +
                  " - " +
                  addZero(+education.period.endMonth + 1) +
                  "/" +
                  education.period.endYear
              : ""}
          </div>
        </div>
        <div className="action-buttons">
          <Button
            type="secondary"
            size="normal"
            icon="ph-trash-simple"
            textcontent={false}
            disabled={false}
            addClasses={["Button_onlyicon", "remove-btn"]}
            handler={() => {
              dispatch(removeObjItem({ id: id, objArr: "education" }));
              setEducationCounter([
                ...educationCounter.filter((item) => item.id !== id),
              ]);
            }}
          />
          <Button
            type="secondary"
            size="normal"
            icon={collapsed ? "ph-caret-up" : "ph-caret-down"}
            textcontent={false}
            disabled={false}
            addClasses={["Button_onlyicon"]}
            handler={() =>
              setEducationCounter(
                educationCounter.map((education) =>
                  education.id === id
                    ? { ...education, collapsed: !collapsed }
                    : { ...education, collapsed: true }
                )
              )
            }
          />
        </div>
      </div>
      <div className={classNames("fields", collapsed ? "fields-none" : "")}>
        <div className="organisation">
          <Field
            label="Организация"
            placeholder="Московский государственный университет"
            objArr="education"
            objItem="organisation"
            objId={id}
          />
        </div>
        <div className="row-15">
          <Field
            label="Форма обучения"
            placeholder="Очное"
            objArr="education"
            objItem="form"
            objId={id}
          />
          <Field
            label="Степень"
            placeholder="Бакалавр"
            objArr="education"
            objItem="grade"
            objId={id}
          />
        </div>
        <DateRange
          id={id}
          item="education"
          label="Период обучения"
          checkboxLabel="Обучаюсь по настоящее время"
        />
      </div>
    </div>
  );
};

export default EducationItem;
