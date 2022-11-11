import React from "react";
import "./Loader.scss";
import Lottie from "lottie-react";
import loader from "../../assets/json/loader.json";

const Loader = () => {
  document.body.style.overflow = "hidden";

  return (
    <div className="Loader">
      <Lottie animationData={loader} loop={true} />
    </div>
  );
};

export default Loader;
