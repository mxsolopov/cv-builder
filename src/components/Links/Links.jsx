import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addObjItem } from "../../store/resumeDataSlice";
import { nanoid } from "nanoid";
import "./Links.scss";
import { BlockTitle, Button, LinkItem } from "..";

const Links = () => {
  const resumeData = useSelector((state) => state.resumeData.resumeData);
  const [linksCounter, setLinksCounter] = React.useState(
    resumeData.links.length > 0
      ? resumeData.links.map((item, i) => {
          return { id: item.id, collapsed: true };
        })
      : []
  );

  const dispatch = useDispatch();
  const id = nanoid();

  return (
    <div className="Links">
      <BlockTitle content="Соцсети и сайты" />
      <p className="text-md">
        Укажите ссылки на соцсети, через которые с вами можно связаться. Если у
        вас есть персональный сайт, также можете указать ссылку на него
      </p>
      {linksCounter.map((_, i) => {
        return (
          <LinkItem
            key={i}
            id={linksCounter[i].id}
            linksCounter={linksCounter}
            setLinksCounter={setLinksCounter}
          />
        );
      })}
      <Button
        type="text"
        size="normal"
        icon="ph-caret-down"
        textcontent="Добавить ссылку"
        disabled={false}
        addClasses={[]}
        handler={() => {
          setLinksCounter([
            ...linksCounter.map((link) => {
              return { id: link.id, collapsed: true };
            }),
            { id: id, collapsed: false },
          ]);
          dispatch(
            addObjItem({
              item: "links",
              obj: {
                id: id,
                label: "",
                source: "",
              },
            })
          );
        }}
      />
    </div>
  );
};

export default Links;
