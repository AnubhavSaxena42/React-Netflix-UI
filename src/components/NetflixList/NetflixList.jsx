import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import React from "react";
import "./NetflixList.scss";

const NetflixList = () => {
  return (
    <div className="netflix-list">
      <span className="list-title">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined />
        <div className="container"></div>
        <ArrowForwardIosOutlined />
      </div>
    </div>
  );
};

export default NetflixList;
