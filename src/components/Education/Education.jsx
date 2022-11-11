import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addObjItem } from "../../store/resumeDataSlice";
import { nanoid } from "nanoid";
import "./Education.scss";
import { BlockTitle, Button, EducationItem } from "..";

const Education = () => {
  const resumeData = useSelector((state) => state.resumeData.resumeData);
  const [educationCounter, setEducationCounter] = React.useState(
    resumeData.education.length > 0
      ? resumeData.education.map((item, i) => {
          return { id: item.id, collapsed: true };
        })
      : []
  );
  const dispatch = useDispatch();
  const id = nanoid();

  return (
    <div className="Education">
      <BlockTitle content="Образование" />
      <p className="text-md">
        Добавьте сведения об обучении в колледжах, техникумах, университетах
      </p>
      {educationCounter.map((_, i) => {
        return (
          <EducationItem
            key={i}
            id={educationCounter[i].id}
            educationCounter={educationCounter}
            setEducationCounter={setEducationCounter}
          />
        );
      })}
      <Button
        type="text"
        size="normal"
        icon="ph-caret-down"
        textcontent="Добавить образование"
        disabled={false}
        addClasses={[]}
        handler={() => {
          setEducationCounter([
            ...educationCounter.map((education) => {
              return { id: education.id, collapsed: true };
            }),
            { id: id, collapsed: false },
          ]);
          dispatch(
            addObjItem({
              item: "education",
              obj: {
                id: id,
                organisation: "",
                grade: "",
                form: "",
                period: {
                  current: false,
                  startMonth: "",
                  startYear: "",
                  endMonth: "",
                  endYear: "",
                },
              },
            })
          );
        }}
      />
    </div>
  );
};

export default Education;
