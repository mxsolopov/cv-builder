import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addObjItem } from "../../store/resumeDataSlice";
import { nanoid } from "nanoid";
import "./Skills.scss";
import { BlockTitle, Button, SkillItem } from "..";

const Skills = () => {
  const resumeData = useSelector((state) => state.resumeData.resumeData);
  const [skillsCounter, setSkillsCounter] = React.useState(
    resumeData.skills.length > 0
      ? resumeData.skills.map((item, i) => {
          return { id: item.id, collapsed: true };
        })
      : []
  );

  const dispatch = useDispatch();
  const id = nanoid();

  return (
    <div className="Skills">
      <BlockTitle content="Навыки и умения" />
      <p className="text-md">
        Заполните, как минимум, 5 основных навыков, которыми вы владете.
        Убедитесь, что эти навыки соотвествуют требованиям к искомой вакансии.
      </p>
      {skillsCounter.map((_, i) => {
        return (
          <SkillItem
            key={i}
            id={skillsCounter[i].id}
            skillsCounter={skillsCounter}
            setSkillsCounter={setSkillsCounter}
          />
        );
      })}
      <Button
        type="text"
        size="normal"
        icon="ph-caret-down"
        textcontent="Добавить навык"
        disabled={false}
        addClasses={[]}
        handler={() => {
          setSkillsCounter([
            ...skillsCounter.map((skill) => {
              return { id: skill.id, collapsed: true };
            }),
            { id: id, collapsed: false },
          ]);
          dispatch(
            addObjItem({
              item: "skills",
              obj: {
                id: id,
                name: "",
                level: "1",
              },
            })
          );
        }}
      />
    </div>
  );
};

export default Skills;
