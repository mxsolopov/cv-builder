import React from "react";
import { Select } from "..";
import { editObjItem } from "../../store/resumeDataSlice";
import { useDispatch, useSelector } from "react-redux";

import "./DateRange.scss";
import classNames from "classnames";

const DateRange = ({ id, item, label, checkboxLabel }) => {
  const dispatch = useDispatch();
  const resumeDataItem = useSelector((state) => state.resumeData.resumeData)[
    item
  ].find((item) => item.id === id);

  const generateSelectData = (values, labels) => {
    const arr = [];
    if (values.length === labels.length) {
      for (let i = 0; i < values.length; i++) {
        const obj = { value: values[i], label: labels[i] };
        arr.push(obj);
      }
    }
    return arr;
  };

  const now = new Date();
  const range = (N, start) => Array.from({ length: N }, (v, k) => k + start);
  const years = range(84, now.getFullYear() - 83);
  const months = range(12, 0);
  const monthsLabels = [
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь",
  ];

  return (
    <div className="DateRange">
      <div
        className={classNames("row-15", "row-column-wrap", "date-range-inner")}
      >
        <div className={classNames("row-15", "start-time-wrap")}>
          <Select
            label={label}
            placeholder="Месяц"
            values={generateSelectData(months, monthsLabels)}
            value={resumeDataItem.period.startMonth}
            handler={(e) => {
              dispatch(
                editObjItem({
                  objArr: item,
                  id: id,
                  item: "period",
                  value: {
                    ...resumeDataItem.period,
                    startMonth: e.target.value,
                  },
                })
              );
            }}
          />
          <Select
            placeholder="Год"
            values={generateSelectData(years, years)}
            value={resumeDataItem.period.startYear}
            handler={(e) => {
              dispatch(
                editObjItem({
                  objArr: item,
                  id: id,
                  item: "period",
                  value: {
                    ...resumeDataItem.period,
                    startYear: e.target.value,
                  },
                })
              );
            }}
          />
        </div>
        <div className="end-time-wrap">
          <div className={classNames("Checkbox", "current-item")}>
            <label className={classNames("text-md", "label")}>
              <input
                type="checkbox"
                onChange={() => {
                  if (!resumeDataItem.period.current) {
                    dispatch(
                      editObjItem({
                        objArr: item,
                        id: id,
                        item: "period",
                        value: {
                          ...resumeDataItem.period,
                          current: true,
						  endMonth: "current",
						  endYear: "current" 
                        },
                      })
                    );
                  } else {
					dispatch(
						editObjItem({
						  objArr: item,
						  id: id,
						  item: "period",
						  value: {
							...resumeDataItem.period,
							current: false,
						  },
						})
					  );
                  }
                }}
              />
              <span
                className={`checkbox ${
                  resumeDataItem.period.current ? "checkbox-active" : ""
                }`}
                aria-hidden="true"
              />
              {checkboxLabel}
            </label>
          </div>
          <div className="row-15">
            <Select
              placeholder="Месяц"
              values={generateSelectData(months, monthsLabels)}
              value={resumeDataItem.period.endMonth}
              handler={(e) => {
                dispatch(
                  editObjItem({
                    objArr: item,
                    id: id,
                    item: "period",
                    value: {
                      ...resumeDataItem.period,
                      endMonth: e.target.value,
                    },
                  })
                );
              }}
              disabled={resumeDataItem.period.current ? true : false}
            />
            <Select
              placeholder="Год"
              values={generateSelectData(years, years)}
              value={resumeDataItem.period.endYear}
              handler={(e) => {
                dispatch(
                  editObjItem({
                    objArr: item,
                    id: id,
                    item: "period",
                    value: {
                      ...resumeDataItem.period,
                      endYear: e.target.value,
                    },
                  })
                );
              }}
              disabled={resumeDataItem.period.current ? true : false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateRange;
