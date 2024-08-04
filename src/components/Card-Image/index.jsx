/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./index.scss";

const CardImage = ({ title, imgSrc, animationHover = false }) => {
  return (
    <div className="CardImage">
      <div
        className="CardImageInner"
        style={{ backgroundImage: `url(${imgSrc})` }}
      >
        {animationHover ? (
          <div className="animationHoverCard">
            <h4 className="animationHoverCardTitle">
              Here are the trends I see coming this fall
            </h4>
            <span className="animationHoverCardDescription">
              by admin | dec 01, 2017
            </span>
            <Link to={"#"} className="animationHoverCardLink">
              Read More
            </Link>
          </div>
        ) : (
          <div className="TextContent">
            <h3>
              <Link to="/"> {title} </Link>
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardImage;
