import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addObjItem } from "../../store/resumeDataSlice";
import { nanoid } from "nanoid";
import "./Recommendations.scss";
import { BlockTitle, Button, RecommendationItem } from "..";

const Recommendations = () => {
  const resumeData = useSelector((state) => state.resumeData.resumeData);
  const [recommendationsCounter, setRecommendationsCounter] = React.useState(
    resumeData.recommendations.length > 0
      ? resumeData.recommendations.map((item, i) => {
          return { id: item.id, collapsed: true };
        })
      : []
  );

  const dispatch = useDispatch();
  const id = nanoid();

  return (
    <div className="Recommendations">
      <BlockTitle content="Рекомендации" />
      {recommendationsCounter.map((_, i) => {
        return (
          <RecommendationItem
            key={i}
            id={recommendationsCounter[i].id}
            recommendationsCounter={recommendationsCounter}
            setRecommendationsCounter={setRecommendationsCounter}
          />
        );
      })}
      <Button
        type="text"
        size="normal"
        icon="ph-caret-down"
        textcontent="Добавить рекомендацию"
        disabled={false}
        addClasses={[]}
        handler={() => {
          setRecommendationsCounter([
            ...recommendationsCounter.map((recommendation) => {
              return { id: recommendation.id, collapsed: true };
            }),
            { id: id, collapsed: false },
          ]);
          dispatch(
            addObjItem({
              item: "recommendations",
              obj: {
                id: id,
                name: "",
                organisation: "",
                phone: "",
                email: "",
              },
            })
          );
        }}
      />
    </div>
  );
};

export default Recommendations;
