import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addObjItem } from "../../store/resumeDataSlice";
import { nanoid } from "nanoid";
import "./Works.scss";
import { BlockTitle, Button, WorkItem } from "..";
// import classNames from 'classnames'

const Works = () => {
  const resumeData = useSelector((state) => state.resumeData.resumeData);
  const [worksCounter, setWorksCounter] = React.useState(
    resumeData.jobs.length > 0
      ? resumeData.jobs.map((item, i) => {
          return { id: item.id, collapsed: true };
        })
      : []
  );
  const dispatch = useDispatch();
  const id = nanoid();

  return (
    <div className="Works">
      <BlockTitle content="Опыт работы" />
      <p className="text-md">
        Расскажите об опыте работы в последние 10 лет. В описании работ
        используйте только самые важные сведения, конкретные факты и достижения
      </p>
      {worksCounter.map((_, i) => {
        return (
          <WorkItem
            key={i}
            id={worksCounter[i].id}
            worksCounter={worksCounter}
            setWorksCounter={setWorksCounter}
          />
        );
      })}
      <Button
        type="text"
        size="normal"
        icon="ph-caret-down"
        textcontent="Добавить работу"
        disabled={false}
        addClasses={[]}
        handler={() => {
          setWorksCounter([
            ...worksCounter.map((work) => {
              return { id: work.id, collapsed: true };
            }),
            { id: id, collapsed: false },
          ]);
          dispatch(
            addObjItem({
              item: "jobs",
              obj: {
                id: id,
                organisation: "",
                site: "",
                post: "",
                city: "",
                period: "",
                description: "",
              },
            })
          );
        }}
      />
    </div>
  );
};

export default Works;
