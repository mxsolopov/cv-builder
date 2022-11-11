import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addObjItem } from "../../store/resumeDataSlice";
import { nanoid } from "nanoid";
import "./Languages.scss";
import { BlockTitle, Button, LanguageItem } from "..";

const Languages = () => {
  const resumeData = useSelector((state) => state.resumeData.resumeData);
  const [languagesCounter, setLanguagesCounter] = React.useState(
    resumeData.languages.length > 0
      ? resumeData.languages.map((item, i) => {
          return { id: item.id, collapsed: true };
        })
      : []
  );

  const dispatch = useDispatch();
  const id = nanoid();

  return (
    <div className="Languages">
      <BlockTitle content="Иностранные языки" />
      {languagesCounter.map((_, i) => {
        return (
          <LanguageItem
            key={i}
            id={languagesCounter[i].id}
            languagesCounter={languagesCounter}
            setLanguagesCounter={setLanguagesCounter}
          />
        );
      })}
      <Button
        type="text"
        size="normal"
        icon="ph-caret-down"
        textcontent="Добавить язык"
        disabled={false}
        addClasses={[]}
        handler={() => {
          setLanguagesCounter([
            ...languagesCounter.map((language) => {
              return { id: language.id, collapsed: true };
            }),
            { id: id, collapsed: false },
          ]);
          dispatch(
            addObjItem({
              item: "languages",
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

export default Languages;
