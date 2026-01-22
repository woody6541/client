import React from "react";
import "../styles/loader.css";
import myLogo from "../assets/gteclogo2.png";

const Loader = () => {
  return (
    <div className="page-loader">
      <img src={myLogo} alt="Logo" className="loader-logo" />
    </div>
  );
};

export default Loader;
