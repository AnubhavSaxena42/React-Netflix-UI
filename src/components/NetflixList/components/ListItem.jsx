import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import "./ListItem.scss";

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div
      className="list-item"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://m.media-amazon.com/images/I/81TmH5v-g0L._RI_.jpg"
        alt="media-img"
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay loop />
          <div className="item-info">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="item-info-top">
              <span>1:14:03</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Aboard the spaceship Bebop, a bounty hunter and his group of
              skilled comrades embark on adventures across the Solar System to
              capture criminals.
            </div>
            <div className="genre">Anime</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
