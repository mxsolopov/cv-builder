import React from "react";
import { useDispatch } from "react-redux";
import { removeObjItem } from "../../store/resumeDataSlice";
import "./SkillItem.scss";
import { Button, Field, Slider } from "..";
import classNames from "classnames";
import { useSelector } from "react-redux";

const SkillItem = ({ id, skillsCounter, setSkillsCounter }) => {
  const collapsed = skillsCounter.find((item) => item.id === id).collapsed;
  const skill = useSelector((state) => state.resumeData.resumeData).skills.find(
    (skill) => skill.id === id
  );
  const dispatch = useDispatch();
  const skillLabels = [
    "Начинающий",
    "Базовый",
    "Продвинутый",
    "Профессионал",
    "Эксперт",
  ];

  return (
    <div className="SkillItem">
      <div className="header">
        <div className="title-wrapper">
          <div className={classNames("title", "text-lg", "medium-text")}>
            {skill.name !== "" ? skill.name : "Без названия"}
          </div>
          <div className={classNames("source", "text-sm")}>
            {skill.level !== "" ? skillLabels[skill.level] : ""}
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
              dispatch(removeObjItem({ id: id, objArr: "skills" }));
              setSkillsCounter([
                ...skillsCounter.filter((item) => item.id !== id),
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
              setSkillsCounter(
                skillsCounter.map((skill) =>
                  skill.id === id
                    ? { ...skill, collapsed: !collapsed }
                    : { ...skill, collapsed: true }
                )
              )
            }
          />
        </div>
      </div>
      <div className={classNames("fields", collapsed ? "fields-none" : "")}>
        <div className={classNames("row-15", "row-column-wrap")}>
          <Field
            label="Навык"
            placeholder="Название навыка"
            objArr="skills"
            objItem="name"
            objId={id}
          />
          <Slider objArr="skills" objItem="level" objId={id} />
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
