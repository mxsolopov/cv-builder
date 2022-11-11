import React from "react";
import Select from "../UI/Select";
import { editItem } from "../../store/resumeDataSlice";
import { useDispatch, useSelector } from "react-redux";

import "./BirthDate.scss";
// import classNames from 'classnames'

const BirthDate = () => {
  const dispatch = useDispatch();
  const resumeData = useSelector((state) => state.resumeData.resumeData);

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

  const [date, setDate] = React.useState(
    resumeData.birth !== "" && resumeData.birth.length === 10
      ? {
          day: resumeData.birth.split("-")[0].replace(/0([1-9])/, "$1"),
          month: String(Number(resumeData.birth.split("-")[1]) - 1).replace(
            /0([1-9])/,
            "$1"
          ),
          year: resumeData.birth.split("-")[2],
        }
      : {
          day: undefined,
          month: undefined,
          year: undefined,
        }
  );

  const now = new Date();
  const range = (N, start) => Array.from({ length: N }, (v, k) => k + start);
  const years = range(83, now.getFullYear() - 100);
  const months = range(12, 0);
  const days = range(31, 1);
  const monthsLabels = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  const [daysData, setDaysData] = React.useState(
    generateSelectData(days, days)
  );

  // Обработка несуществующих дат
  React.useEffect(() => {
    const checkLeapYear = () => {
      if (
        (0 === +date.year % 4 && 0 !== +date.year % 100) ||
        0 === +date.year % 400
      ) {
        return 29;
      } else {
        return 28;
      }
    };

    const monthLengthsArr = [
      31,
      checkLeapYear(),
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31,
    ];

    const monthLength = monthLengthsArr[date.month];

    if (monthLength && monthLength !== daysData.length) {
      const updDays = range(monthLength, 1);
      setDaysData(generateSelectData(updDays, updDays));

      if (date.day > monthLength) {
        setDate({ ...date, day: updDays[updDays.length - 1] });
      }
    }

    const addZero = (num) => {
      if (num < 10) {
        return "0" + num;
      } else {
        return num;
      }
    };

    dispatch(
      editItem({
        item: "birth",
        value: `${date.day ? addZero(date.day) + "-" : ""}${
          date.month ? addZero(+date.month + 1) + "-" : ""
        }${date.year ? date.year : ""}`,
      })
    );
  }, [daysData, date, dispatch]);

  return (
    <div className="BirthDate">
      <div className="row-30">
        <Select
          label="Дата рождения"
          placeholder="День"
          values={daysData}
          value={date.day}
          handler={(e) => setDate({ ...date, day: e.target.value })}
        />
        <Select
          placeholder="Месяц"
          values={generateSelectData(months, monthsLabels)}
          value={date.month}
          handler={(e) => setDate({ ...date, month: e.target.value })}
        />
        <Select
          placeholder="Год"
          values={generateSelectData(years, years)}
          value={date.year}
          handler={(e) => setDate({ ...date, year: e.target.value })}
        />
      </div>
    </div>
  );
};

export default BirthDate;
