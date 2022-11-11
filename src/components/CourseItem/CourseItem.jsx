import React from "react";
import { useDispatch } from "react-redux";
import { removeObjItem } from "../../store/resumeDataSlice";
import "./CourseItem.scss";
import { Button, Field, DateRange } from "..";
import classNames from "classnames";
import { useSelector } from "react-redux";

const CourseItem = ({ id, coursesCounter, setCoursesCounter }) => {
  const collapsed = coursesCounter.find((item) => item.id === id).collapsed;
  const course = useSelector(
    (state) => state.resumeData.resumeData
  ).courses.find((course) => course.id === id);
  const dispatch = useDispatch();

  return (
    <div className="CourseItem">
      <div className="header">
        <div className="title-wrapper">
          <div className={classNames("title", "text-lg", "medium-text")}>
            {course.name !== "" ? course.name : "Без названия"}
          </div>
          <div className={classNames("label", "text-sm")}>
            {course.organisation !== "" ? course.organisation : ""}
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
              dispatch(removeObjItem({ id: id, objArr: "courses" }));
              setCoursesCounter([
                ...coursesCounter.filter((item) => item.id !== id),
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
              setCoursesCounter(
                coursesCounter.map((course) =>
                  course.id === id
                    ? { ...course, collapsed: !collapsed }
                    : { ...course, collapsed: true }
                )
              )
            }
          />
        </div>
      </div>
      <div className={classNames("fields", collapsed ? "fields-none" : "")}>
        <div className={classNames("row-15", "row-column-wrap")}>
          <Field
            label="Курс"
            placeholder="Название курса"
            objArr="courses"
            objItem="name"
            objId={id}
          />
          <Field
            label="Организация"
            placeholder="Организатор курса"
            objArr="courses"
            objItem="organisation"
            objId={id}
          />
        </div>
        <DateRange
          id={id}
          item="courses"
          label="Период прохождения"
          checkboxLabel="Обучаюсь по настоящее время"
        />
      </div>
    </div>
  );
};

export default CourseItem;
