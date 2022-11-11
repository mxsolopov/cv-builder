import React from "react";
import { useSelector } from "react-redux";
import "./Base.scss";

const Base = ({ width }) => {
  const resumeData = useSelector((state) => state.resumeData.resumeData);

  const nameSize = 0.04 * width;
  const birthSize = 0.025 * width;
  const textSize = 0.018 * width;
  const singleSize = 0.02 * width;
  const sectionSize = 0.027 * width;

  const skillLabels = [
    "Начинающий",
    "Базовый",
    "Продвинутый",
    "Профессионал",
    "Эксперт",
  ];

  const addZero = (num) => {
    if (num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  };

  return (
    <div className="Base">
      {/* Левая сторона */}
      <div className="side">
        {/* Имя */}
        {resumeData.name !== "" && resumeData.surname !== "" ? (
          <div className="base-name" style={{ fontSize: nameSize + "px" }}>
            {resumeData.name}
            <br />
            {resumeData.surname}
          </div>
        ) : (
          <></>
        )}

        {/* Дата рождения */}
        {resumeData.birth !== "" ? (
          <div className="base-birth" style={{ fontSize: birthSize + "px" }}>
            {resumeData.birth}
          </div>
        ) : (
          <></>
        )}

        {/* Фотография */}
        {resumeData.avatar !== "" ? (
          <div
            className="base-avatar"
            style={{
              background:
                resumeData.avatar !== ""
                  ? `url(${resumeData.avatar}) 0% 0% / cover`
                  : "none",
              border: "none",
            }}
          ></div>
        ) : (
          <></>
        )}

        {/* Вакансия */}
        {resumeData.job !== "" ? (
          <>
            <div
              className="text"
              style={{ fontSize: textSize + "px", marginTop: "1em" }}
            >
              Вакансия
            </div>
            <div
              className="single-item"
              style={{ fontSize: singleSize + "px" }}
            >
              {resumeData.job}
            </div>
          </>
        ) : (
          <></>
        )}

        {/* Контакты */}
        {resumeData.email !== "" ||
        resumeData.phone !== "" ||
        (resumeData.country !== "" && resumeData.city !== "") ? (
          <>
            <div className="section" style={{ fontSize: sectionSize + "px" }}>
              Контакты
            </div>
          </>
        ) : (
          <></>
        )}

        {/* Email */}
        {resumeData.email !== "" ? (
          <>
            <div className="text" style={{ fontSize: textSize + "px" }}>
              Email
            </div>
            <div
              className="single-item"
              style={{ fontSize: singleSize + "px" }}
            >
              {resumeData.email}
            </div>
          </>
        ) : (
          <></>
        )}

        {/* Телефон */}
        {resumeData.phone !== "" ? (
          <>
            <div className="text" style={{ fontSize: textSize + "px" }}>
              Телефон
            </div>
            <div
              className="single-item"
              style={{ fontSize: singleSize + "px" }}
            >
              {resumeData.phone}
            </div>
          </>
        ) : (
          <></>
        )}

        {/* Место проживания */}
        {resumeData.country !== "" && resumeData.city ? (
          <>
            <div className="text" style={{ fontSize: textSize + "px" }}>
              Локация
            </div>
            <div
              className="single-item"
              style={{ fontSize: singleSize + "px" }}
            >
              {resumeData.country + ", " + resumeData.city}
            </div>
          </>
        ) : (
          <></>
        )}

        {/* Соцсети и сайты */}
        {resumeData.links.length > 0 ? (
          <>
            <div className="section" style={{ fontSize: sectionSize + "px" }}>
              Соцсети и сайты
            </div>
            {resumeData.links.map((link, index) => {
              return (
                <div key={index}>
                  <div className="text" style={{ fontSize: textSize + "px" }}>
                    {link.label}
                  </div>
                  <div
                    className="single-item"
                    style={{ fontSize: singleSize + "px" }}
                  >
                    {link.source}
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <></>
        )}

        {/* Навыки */}
        {resumeData.skills.length > 0 ? (
          <>
            <div className="section" style={{ fontSize: sectionSize + "px" }}>
              Навыки
            </div>
            <div className="skills">
              {resumeData.skills.map((skill, index) => {
                return (
                  <div
                    className="skill"
                    key={index}
                    style={{ paddingRight: textSize + "px" }}
                  >
                    <div
                      className="text"
                      style={{
                        fontSize: textSize + "px",
                        paddingBottom: "0.3em",
                      }}
                    >
                      {skill.name}
                    </div>
                    <div
                      className="skill-level-bg"
                      style={{
                        height: skill.name !== "" ? textSize + "px" : "0px",
                        marginBottom: textSize + "px",
                      }}
                    >
                      <div
                        className="skill-level"
                        style={{ width: +skill.level * 25 + "%" }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>

      {/* Правая сторона */}
      <div className="main">
        {/* Характеристика */}
        {resumeData.summary !== "" ? (
          <>
            <div
              className="section"
              style={{ fontSize: sectionSize + "px", marginTop: "0" }}
            >
              Характеристика
            </div>
            <div className="text" style={{ fontSize: textSize + "px" }}>
              {resumeData.summary}
            </div>
          </>
        ) : (
          <></>
        )}

        {/* Образование */}
        {resumeData.education.length > 0 ? (
          <>
            <div className="section" style={{ fontSize: sectionSize + "px" }}>
              Образование
            </div>
            {resumeData.education.map((educationItem, index) => {
              return (
                <div key={index}>
                  <div className="text" style={{ fontSize: textSize + "px" }}>
                    {educationItem.period.startMonth &&
                    educationItem.period.startYear &&
                    educationItem.period.endMonth &&
                    educationItem.period.endYear
                      ? educationItem.period.endMonth === "current" ||
                        educationItem.period.endYear === "current"
                        ? addZero(+educationItem.period.startMonth + 1) +
                          "/" +
                          educationItem.period.startYear +
                          " - н.в."
                        : addZero(+educationItem.period.startMonth + 1) +
                          "/" +
                          educationItem.period.startYear +
                          " - " +
                          addZero(+educationItem.period.endMonth + 1) +
                          "/" +
                          educationItem.period.endYear
                      : ""}
                    {educationItem.form !== ""
                      ? ", " + educationItem.form.toLowerCase()
                      : ""}
                  </div>
                  <div
                    className="single-item"
                    style={{ fontSize: singleSize + "px" }}
                  >
                    {educationItem.organisation + ", "}
                    <br />
                    {educationItem.grade.toLowerCase()}
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <></>
        )}

        {/* Опыт работы */}
        {resumeData.jobs.length > 0 ? (
          <>
            <div className="section" style={{ fontSize: sectionSize + "px" }}>
              Опыт работы
            </div>
            {resumeData.jobs.map((job, index) => {
              return (
                <div key={index}>
                  <div className="text" style={{ fontSize: textSize + "px" }}>
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
                    {job.city !== "" ? ", " + job.city : ""}
                    {job.site !== "" ? ", " + job.site : ""}
                  </div>
                  <div
                    className="single-item"
                    style={{
                      fontSize: singleSize + "px",
                      marginBottom: "0.25em",
                    }}
                  >
                    {job.organisation !== "" ? job.organisation : ""}
                    {job.post !== "" ? ", " + job.post.toLowerCase() : ""}
                  </div>
                  <div
                    className="text"
                    style={{ fontSize: textSize + "px", marginBottom: "1em" }}
                  >
                    {job.description !== "" ? job.description : ""}
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <></>
        )}

        {/* Обучающие курсы */}
        {resumeData.courses.length > 0 ? (
          <>
            <div className="section" style={{ fontSize: sectionSize + "px" }}>
              Обучающие курсы
            </div>
            {resumeData.courses.map((course, index) => {
              return (
                <div key={index}>
                  <div className="text" style={{ fontSize: textSize + "px" }}>
                    {course.period.startMonth &&
                    course.period.startYear &&
                    course.period.endMonth &&
                    course.period.endYear
                      ? course.period.endMonth === "current" ||
                        course.period.endYear === "current"
                        ? addZero(+course.period.startMonth + 1) +
                          "/" +
                          course.period.startYear +
                          " - н.в."
                        : addZero(+course.period.startMonth + 1) +
                          "/" +
                          course.period.startYear +
                          " - " +
                          addZero(+course.period.endMonth + 1) +
                          "/" +
                          course.period.endYear
                      : ""}
                    {course.organisation !== ""
                      ? ", " + course.organisation
                      : ""}
                  </div>
                  <div
                    className="single-item"
                    style={{ fontSize: singleSize + "px" }}
                  >
                    {course.name}
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <></>
        )}

        {/* Рекомендации */}
        {resumeData.recommendations.length > 0 ? (
          <>
            <div className="section" style={{ fontSize: sectionSize + "px" }}>
              Рекомендации
            </div>
            {resumeData.recommendations.map((recommendation, index) => {
              return (
                <div key={index}>
                  <div className="text" style={{ fontSize: textSize + "px" }}>
                    {recommendation.organisation !== ""
                      ? recommendation.organisation
                      : ""}
                  </div>
                  <div
                    className="single-item"
                    style={{
                      fontSize: singleSize + "px",
                      marginBottom: "0.25em",
                    }}
                  >
                    {recommendation.name !== "" ? recommendation.name : ""}
                  </div>
                  <div
                    className="text"
                    style={{ fontSize: textSize + "px", marginBottom: "1em" }}
                  >
                    {recommendation.phone !== ""
                      ? recommendation.phone + ", "
                      : ""}
                    {recommendation.email !== ""
                      ? recommendation.email + ", "
                      : ""}
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <></>
        )}

        {/* Иностранные языки */}
        {resumeData.languages.length > 0 ? (
          <>
            <div className="section" style={{ fontSize: sectionSize + "px" }}>
              Иностранные языки
            </div>
            {resumeData.languages.map((language, index) => {
              return (
                <div
                  key={index}
                  className="text"
                  style={{ fontSize: textSize + "px" }}
                >
                  <b>{language.name !== "" ? language.name : ""}</b>
                  {language.level !== ""
                    ? " (" +
                      skillLabels[language.level].toLocaleLowerCase() +
                      ")"
                    : ""}
                </div>
              );
            })}
          </>
        ) : (
          <></>
        )}

        {/* Хобби */}
        {resumeData.hobbies !== "" ? (
          <>
            <div className="section" style={{ fontSize: sectionSize + "px" }}>
              Хобби
            </div>
            <div className="text" style={{ fontSize: textSize + "px" }}>
              {resumeData.hobbies}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Base;
