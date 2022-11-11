import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addObjItem } from "../../store/resumeDataSlice";
import { nanoid } from "nanoid";
import "./Courses.scss";
import { BlockTitle, Button, CourseItem } from "..";
// import classNames from 'classnames'

const Courses = () => {
  const resumeData = useSelector((state) => state.resumeData.resumeData);
  const [coursesCounter, setCoursesCounter] = React.useState(
    resumeData.courses.length > 0
      ? resumeData.courses.map((item, i) => {
          return { id: item.id, collapsed: true };
        })
      : []
  );

  const dispatch = useDispatch();
  const id = nanoid();

  return (
    <div className="Courses">
      <BlockTitle content="Обучающие курсы" />
      {coursesCounter.map((_, i) => {
        return (
          <CourseItem
            key={i}
            id={coursesCounter[i].id}
            coursesCounter={coursesCounter}
            setCoursesCounter={setCoursesCounter}
          />
        );
      })}
      <Button
        type="text"
        size="normal"
        icon="ph-caret-down"
        textcontent="Добавить курс"
        disabled={false}
        addClasses={[]}
        handler={() => {
          setCoursesCounter([
            ...coursesCounter.map((сourse) => {
              return { id: сourse.id, collapsed: true };
            }),
            { id: id, collapsed: false },
          ]);
          dispatch(
            addObjItem({
              item: "courses",
              obj: {
                id: id,
                name: "",
                organisation: "",
                period: "",
              },
            })
          );
        }}
      />
    </div>
  );
};

export default Courses;
