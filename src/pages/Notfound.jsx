import React from "react";
import "./Notfound.scss";
import { Button } from "../components";
import { useNavigate } from "react-router-dom";

const Notfound = () => {
  const navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  };

  return (
    <div>
      <p>Страница не найдена</p>
      <Button
        type="secondary"
        size="large"
        icon={false}
        textcontent="На главную"
        disabled={false}
        addClasses={["login-btn"]}
        handler={() => routeChange("/")}
      />
    </div>
  );
};

export default Notfound;
