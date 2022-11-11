import React from "react";

import "./AdditionalSections.scss";
import {
  Button,
  BlockTitle,
  Courses,
  Recommendations,
  Languages,
  Hobbies,
} from "..";
import { useDispatch, useSelector } from "react-redux";
import { clearArrItem, clearItem } from "../../store/resumeDataSlice";
import { editItem } from "../../store/resumeBaseSlice";

const AdditionalSections = () => {
  const dispatch = useDispatch();
  const additionalSections = useSelector(
    (state) => state.resumeBase.resumeBase
  ).additionalSections;

  return (
    <>
      <>
        {additionalSections.courses ? <Courses /> : <></>}
        {additionalSections.recommendations ? <Recommendations /> : <></>}
        {additionalSections.languages ? <Languages /> : <></>}
        {additionalSections.hobbies ? <Hobbies /> : <></>}
      </>
      <div className="AdditionalSections">
        <BlockTitle content="Дополнительные секции" />
        <div className="buttons-wrap">
          <Button
            type={additionalSections.courses ? "primary" : "secondary"}
            size="normal"
            icon={!additionalSections.courses ? "ph-plus" : "ph-minus"}
            textcontent="Обучающие курсы"
            disabled={false}
            addClasses={[]}
            handler={() => {
              dispatch(
                editItem({
                  item: "additionalSections",
                  value: {
                    ...additionalSections,
                    courses: !additionalSections.courses,
                  },
                })
              );
              if (additionalSections.courses) {
                dispatch(clearArrItem({ item: "courses" }));
              }
            }}
          />
          <Button
            type={additionalSections.recommendations ? "primary" : "secondary"}
            size="normal"
            icon={!additionalSections.recommendations ? "ph-plus" : "ph-minus"}
            textcontent="Рекомендации"
            disabled={false}
            addClasses={[]}
            handler={() => {
              dispatch(
                editItem({
                  item: "additionalSections",
                  value: {
                    ...additionalSections,
                    recommendations: !additionalSections.recommendations,
                  },
                })
              );
              if (additionalSections.recommendations) {
                dispatch(clearArrItem({ item: "recommendations" }));
              }
            }}
          />
          <Button
            type={additionalSections.languages ? "primary" : "secondary"}
            size="normal"
            icon={!additionalSections.languages ? "ph-plus" : "ph-minus"}
            textcontent="Иностранные языки"
            disabled={false}
            addClasses={[]}
            handler={() => {
              dispatch(
                editItem({
                  item: "additionalSections",
                  value: {
                    ...additionalSections,
                    languages: !additionalSections.languages,
                  },
                })
              );
              if (additionalSections.languages) {
                dispatch(clearArrItem({ item: "languages" }));
              }
            }}
          />
          <Button
            type={additionalSections.hobbies ? "primary" : "secondary"}
            size="normal"
            icon={!additionalSections.hobbies ? "ph-plus" : "ph-minus"}
            textcontent="Хобби"
            disabled={false}
            addClasses={[]}
            handler={() => {
              dispatch(
                editItem({
                  item: "additionalSections",
                  value: {
                    ...additionalSections,
                    hobbies: !additionalSections.hobbies,
                  },
                })
              );
              if (additionalSections.hobbies) {
                dispatch(clearItem({ item: "hobbies" }));
              }
            }}
          />
        </div>
      </div>
    </>
  );
};

export default AdditionalSections;
