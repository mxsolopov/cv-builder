import React from "react";
import classNames from "classnames";
import { Button } from "../components";
import logo from "../assets/img/logo.svg";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import axios from "../axios";
import { editItem } from "../store/loaderSlice";
import { useDispatch } from "react-redux";
import setCookie from "../functions/setCookie";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initForm = { email: "", password: "" };
  const [form, setForm] = React.useState(initForm);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const loginHandler = async () => {
    setLoading(true);
    try {
      dispatch(editItem({ item: "state", value: true }));
      setError("");
      const user = await axios.post("/login", { ...form });
      localStorage.setItem("user", JSON.stringify(user.data));
      setCookie("userId", user.data.user._id);
      setLoading(false);
      navigate("/dashboard");
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
    <div className="Login">
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
          <Button
            type="primary"
            size="large"
            icon={false}
            textcontent="Войти"
            disabled={loading}
            addClasses={["login-btn"]}
            handler={loginHandler}
          />
          <Button
            type="secondary"
            size="large"
            icon={false}
            textcontent="Регистрация"
            disabled={false}
            addClasses={["login-btn"]}
            handler={() => navigate("/registration")}
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

export default Login;
