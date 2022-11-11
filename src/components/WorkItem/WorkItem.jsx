import React from "react";
import { useDispatch } from "react-redux";
import { removeObjItem } from "../../store/resumeDataSlice";
import "./WorkItem.scss";
import { Button, Field, DateRange, TextAreaField } from "..";
import classNames from "classnames";
import { useSelector } from "react-redux";

const WorkItem = ({ id, worksCounter, setWorksCounter }) => {
  const collapsed = worksCounter.find((item) => item.id === id).collapsed;
  const job = useSelector((state) => state.resumeData.resumeData).jobs.find(
    (job) => job.id === id
  );
  const dispatch = useDispatch();

  const addZero = (num) => {
    if (num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  };

  return (
    <div className="WorkItem">
      <div className="header">
        <div className="title-wrapper">
          <div className={classNames("title", "text-lg", "medium-text")}>
            {job.organisation !== "" ? job.organisation : "Без названия"}
          </div>
          <div className={classNames("range-label", "text-sm")}>
            {job.period.startMonth &&
            job.period.startYear &&
            job.period.endMonth &&
            job.period.endYear
              ? job.period.endMonth === "current" ||
                job.period.endYear === "current"
                ? addZero(+job.period.startMonth + 1) +
                  "/" +
                  job.period.startYear +
                  " - н.в."
                : addZero(+job.period.startMonth + 1) +
                  "/" +
                  job.period.startYear +
                  " - " +
                  addZero(+job.period.endMonth + 1) +
                  "/" +
                  job.period.endYear
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
              dispatch(removeObjItem({ id: id, objArr: "jobs" }));
              setWorksCounter([
                ...worksCounter.filter((item) => item.id !== id),
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
              setWorksCounter(
                worksCounter.map((work) =>
                  work.id === id
                    ? { ...work, collapsed: !collapsed }
                    : { ...work, collapsed: true }
                )
              )
            }
          />
        </div>
      </div>
      <div className={classNames("fields", collapsed ? "fields-none" : "")}>
        <div className="row-15">
          <Field
            label="Организация"
            placeholder="Название компании"
            objArr="jobs"
            objItem="organisation"
            objId={id}
          />
          <Field
            label="Должность"
            placeholder="Менеджер"
            objArr="jobs"
            objItem="post"
            objId={id}
          />
        </div>
        <div className="row-15">
          <Field
            label="Сайт организации"
            placeholder="sitename.com"
            objArr="jobs"
            objItem="site"
            objId={id}
          />
          <Field
            label="Город"
            placeholder="Москва"
            objArr="jobs"
            objItem="city"
            objId={id}
          />
        </div>
        <DateRange
          id={id}
          item="jobs"
          label="Период работы"
          checkboxLabel="Работаю по настоящее время"
        />
        <TextAreaField
          label="Обязанности и достижения"
          placeholder="Начните печатать"
          rows="5"
          objArr="jobs"
          objItem="description"
          objId={id}
        />
      </div>
    </div>
  );
};

export default WorkItem;
