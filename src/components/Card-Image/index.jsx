/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./index.scss";

const CardImage = ({ title, imgSrc }) => {
  return (
    <div className="CardImage">
      <div
        className="CardImageInner"
        style={{ backgroundImage: `url(${imgSrc})` }}
      >
        <div className="TextContent">
          <h3>
            <Link to="/"> {title} </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CardImage;
