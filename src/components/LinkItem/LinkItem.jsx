import React from "react";
import { useDispatch } from "react-redux";
import { removeObjItem } from "../../store/resumeDataSlice";
import "./LinkItem.scss";
import { Button, Field } from "..";
import classNames from "classnames";
import { useSelector } from "react-redux";

const LinkItem = ({ id, linksCounter, setLinksCounter }) => {
  const collapsed = linksCounter.find((item) => item.id === id).collapsed;
  const link = useSelector((state) => state.resumeData.resumeData).links.find(
    (link) => link.id === id
  );
  const dispatch = useDispatch();

  return (
    <div className="LinkItem">
      <div className="header">
        <div className="title-wrapper">
          <div className={classNames("title", "text-lg", "medium-text")}>
            {link.label !== "" ? link.label : "Без названия"}
          </div>
          <div className={classNames("source", "text-sm")}>
            {link.source !== "" ? link.source : ""}
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
              dispatch(removeObjItem({ id: id, objArr: "links" }));
              setLinksCounter([
                ...linksCounter.filter((item) => item.id !== id),
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
              setLinksCounter(
                linksCounter.map((link) =>
                  link.id === id
                    ? { ...link, collapsed: !collapsed }
                    : { ...link, collapsed: true }
                )
              )
            }
          />
        </div>
      </div>
      <div className={classNames("fields", collapsed ? "fields-none" : "")}>
        <div className={classNames("row-15", "row-column-wrap")}>
          <Field
            label="Метка"
            placeholder="ВКонтакте"
            objArr="links"
            objItem="label"
            objId={id}
          />
          <Field
            label="Ссылка"
            placeholder="https://vk.com/xxxxxxx"
            objArr="links"
            objItem="source"
            objId={id}
          />
        </div>
      </div>
    </div>
  );
};

export default LinkItem;
