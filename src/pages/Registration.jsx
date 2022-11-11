import React from "react";
import classNames from "classnames";
import { Button } from "../components";
import logo from "../assets/img/logo.svg";
import "./Registration.scss";
import { useNavigate } from "react-router-dom";
import axios from "../axios";
import { editItem } from "../store/loaderSlice";
import { useDispatch } from "react-redux";

const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = React.useState(false);
  const initForm = {
    email: "",
    password: "",
    rpassword: "",
  };
  const [form, setForm] = React.useState(initForm);
  const [error, setError] = React.useState("");

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const registerHandler = async () => {
    setLoading(true);
    try {
      dispatch(editItem({ item: "state", value: true }));
      setError("");
      await axios.post("/registration", { ...form });
      setLoading(false);
      alert("Регистрация прошла успешно");
      navigate("/login");
      dispatch(editItem({ item: "state", value: false }));
    } catch (error) {
      dispatch(editItem({ item: "state", value: false }));
      setLoading(false);
      setError(error.response.data.message);
    }
  };

  React.useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/dashboard");
    }
  });

  return (
    <div className="Registration">
      <div className="form-box">
        <div className="logo-wrapper">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="form-inner">
          <div>
            <label htmlFor="email" className={classNames("label", "text-lg")}>
              Email
            </label>
            <input
              className="text-md"
              type="email"
              name="email"
              id="email"
              placeholder="Введите email"
              onChange={changeHandler}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className={classNames("label", "text-lg")}
            >
              Пароль
            </label>
            <input
              className="text-md"
              type="password"
              name="password"
              id="password"
              placeholder="Введите пароль"
              onChange={changeHandler}
            />
          </div>
          <div>
            <label
              htmlFor="rpassword"
              className={classNames("label", "text-lg")}
            >
              Повторите пароль
            </label>
            <input
              className="text-md"
              type="password"
              name="rpassword"
              id="rpassword"
              placeholder="Введите пароль"
              onChange={changeHandler}
            />
          </div>
          <Button
            type="primary"
            size="large"
            icon={false}
            textcontent="Зарегистрироваться"
            disabled={loading}
            addClasses={["reg-btn"]}
            handler={registerHandler}
          />
          <Button
            type="secondary"
            size="large"
            icon={false}
            textcontent="Войти"
            disabled={false}
            addClasses={["reg-btn"]}
            handler={() => navigate("/login")}
          />
          <div
            className={classNames("text-sm", "text-error")}
            style={{ textAlign: "center" }}
          >
            {error}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
