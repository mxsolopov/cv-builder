import React from "react";
import { useDispatch } from "react-redux";
import { removeObjItem } from "../../store/resumeDataSlice";
import "./RecommendationItem.scss";
import { Button, Field } from "..";
import classNames from "classnames";
import { useSelector } from "react-redux";

const RecommendationItem = ({
  id,
  recommendationsCounter,
  setRecommendationsCounter,
}) => {
  const collapsed = recommendationsCounter.find(
    (item) => item.id === id
  ).collapsed;
  const recommendation = useSelector(
    (state) => state.resumeData.resumeData
  ).recommendations.find((recommendation) => recommendation.id === id);

  const dispatch = useDispatch();

  return (
    <div className="RecommendationItem">
      <div className="header">
        <div className="title-wrapper">
          <div className={classNames("title", "text-lg", "medium-text")}>
            {recommendation.name !== "" ? recommendation.name : "Без названия"}
          </div>
          <div className={classNames("organisation", "text-sm")}>
            {recommendation.organisation !== ""
              ? recommendation.organisation
              : ""}
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
              dispatch(removeObjItem({ id: id, objArr: "recommendations" }));
              setRecommendationsCounter([
                ...recommendationsCounter.filter((item) => item.id !== id),
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
              setRecommendationsCounter(
                recommendationsCounter.map((recommendation) =>
                  recommendation.id === id
                    ? { ...recommendation, collapsed: !collapsed }
                    : { ...recommendation, collapsed: true }
                )
              )
            }
          />
        </div>
      </div>
      <div className={classNames("fields", collapsed ? "fields-none" : "")}>
        <div className={classNames("row-15", "row-column-wrap")}>
          <Field
            label="ФИО рекоменданта"
            placeholder="Иванов Иван Иванович"
            objArr="recommendations"
            objItem="name"
            objId={id}
          />
          <Field
            label="Организация"
            placeholder="Название организации"
            objArr="recommendations"
            objItem="organisation"
            objId={id}
          />
        </div>
        <div className={classNames("row-15", "row-column-wrap")}>
          <Field
            label="Телефон"
            placeholder="+7(XXX)XXX-XX-XX"
            objArr="recommendations"
            objItem="phone"
            objId={id}
          />
          <Field
            label="E-mail"
            placeholder="login@example.com"
            objArr="recommendations"
            objItem="email"
            objId={id}
          />
        </div>
      </div>
    </div>
  );
};

export default RecommendationItem;
