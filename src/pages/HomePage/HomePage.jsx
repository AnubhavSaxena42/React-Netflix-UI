import React from "react";
import Featured from "../../components/Featured/Featured";
import NavBar from "../../components/NavBar/NavBar";
import NetflixList from "../../components/NetflixList/NetflixList";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="home">
      <NavBar />
      <Featured />
      <NetflixList />
      <NetflixList />
      <NetflixList />
    </div>
  );
};

export default HomePage;
