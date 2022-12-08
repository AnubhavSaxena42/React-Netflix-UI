import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import { useRef } from "react";
import ListItem from "./components/ListItem";
import "./NetflixList.scss";

const NetflixList = () => {
  const listRef = useRef();
  const [slideNumber, setSlideNumber] = useState(0);

  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    switch (direction) {
      case "left":
        if (slideNumber > 0) {
          setSlideNumber(slideNumber - 1);
          listRef.current.style.transform = `translateX(${distance + 230}px)`;
        }
        return;
      case "right":
        if (slideNumber < 5) {
          setSlideNumber(slideNumber + 1);
          listRef.current.style.transform = `translateX(${distance - 230}px)`;
        }
        return;
      default:
        return;
    }
  };

  return (
    <div className="netflix-list">
      <span className="list-title">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          onClick={() => handleClick("left")}
          className="sliderArrow left"
          style={{
            display: slideNumber === 0 && "none",
          }}
        />

        <div className="container" ref={listRef}>
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />
        </div>
        <ArrowForwardIosOutlined
          onClick={() => handleClick("right")}
          className="sliderArrow right"
        />
      </div>
    </div>
  );
};

export default NetflixList;
