import React from "react";
import "./Dashboard.scss";
import logo from "../assets/img/logo.svg";
import icon from "../assets/img/cv-icon.svg";
import { Button, Loader } from "../components";
import { useNavigate } from "react-router-dom";
import axios from "../axios";
import classNames from "classnames";
import setCookie from "../functions/setCookie";
import { updateDataStore } from "../store/resumeDataSlice";
import { updateBaseStore } from "../store/resumeBaseSlice";
import { useDispatch } from "react-redux";
import { editItem } from "../store/loaderSlice";
import cvimg from "../assets/img/cvimg.svg";

const Dashboard = () => {
  document.body.style.overflow = "visible";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const createResumeHandler = async () => {
    try {
      dispatch(editItem({ item: "state", value: true }));
      setCookie("userId", JSON.parse(localStorage.getItem("user")).user._id);
      dispatch(
        updateBaseStore({
          newItem: {
            title: "Название резюме",
            template: "base",
            date: "",
            additionalSections: {
              courses: false,
              recommendations: false,
              languages: false,
              hobbies: false,
            },
          },
        })
      );
      dispatch(
        updateDataStore({
          newItem: {
            avatar: "",
            job: "",
            name: "",
            surname: "",
            birth: "",
            email: "",
            phone: "",
            country: "",
            city: "",
            summary: "",
            jobs: [],
            education: [],
            links: [],
            skills: [],
            courses: [],
            recommendations: [],
            languages: [],
            hobbies: "",
          },
        })
      );
      await axios.post("/editor");
      dispatch(editItem({ item: "state", value: false }));
    } catch (error) {
      dispatch(editItem({ item: "state", value: false }));
      console.log(error);
    }
  };

  const deleteResumeHandler = async (userId, resumeId) => {
    try {
      await axios.post("/delete", {
        params: {
          userId,
          resumeId,
        },
      });
      getResumes();
    } catch (error) {
      console.log(error);
    }
  };

  const [resumes, setResumes] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const getResumes = async () => {
    try {
      setLoading(true);
      const result = await axios.post("/dashboard");
      setResumes(result.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  React.useEffect(() => {
    getResumes();
  }, []);

  return (
    <div className="Dashboard">
      {loading ? <Loader /> : <></>}
      <header className="header">
        <div className="logo-wrapper">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="buttons">
          <Button
            type="primary"
            size="large"
            icon={false}
            textcontent="Создать"
            disabled={false}
            addClasses={[]}
            handler={() => {
              navigate("/editor");
              createResumeHandler();
            }}
          />
          <Button
            type="secondary"
            size="large"
            icon={false}
            textcontent="Выйти"
            disabled={false}
            addClasses={[]}
            handler={() => {
              localStorage.removeItem("user");
              setCookie("userId", "", {
                'max-age': -1
              });
              setCookie("resumeId", "", {
                'max-age': -1
              });
              navigate("/login");
            }}
          />
        </div>
      </header>
      <div className="content">
        {resumes.length > 0 ? (
          resumes.map((resume, i) => {
            return (
              <div key={i} className="card">
                <div className="card-body">
                  <img src={icon} className="card-img" alt="icon" />
                  <h5 className={classNames("card-title", "h3", "medium-text")}>
                    {resume.resumeBase.title}
                  </h5>
                  <div className="card-subtitle">{resume.resumeBase.date}</div>
                  <div className="card-buttons">
                    <Button
                      type="primary"
                      size="large"
                      icon={false}
                      textcontent="Править"
                      disabled={false}
                      addClasses={[]}
                      handler={() => {
                        setCookie("resumeId", resume._id);
                        dispatch(
                          updateBaseStore({ newItem: resume.resumeBase })
                        );
                        dispatch(
                          updateDataStore({ newItem: resume.resumeData })
                        );
                        navigate("/editor");
                      }}
                    />
                    <Button
                      type="secondary"
                      size="large"
                      icon={false}
                      textcontent="Удалить"
                      disabled={false}
                      addClasses={[]}
                      handler={() => {
                        deleteResumeHandler(resume.owner, resume._id);
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="dashboard-empty">
            <div className="dashboard-img-wrapper">
              <img src={cvimg} alt="cvimg" className="dashboard-img" />
            </div>
            <p className="text-lg">
              У вас пока нет созданных резюме. Не ждите, создайте сейчас!
            </p>
            <Button
              type="primary"
              size="large"
              icon={false}
              textcontent="Создать сейчас"
              disabled={false}
              addClasses={[]}
              handler={() => {
                navigate("/editor");
                createResumeHandler();
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
