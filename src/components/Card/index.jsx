/* eslint-disable react/prop-types */
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./index.scss";

export const CustomCardTopSideInfo = ({
  text,
  className,
  showFavoriteRight = true,
  showFavoriteLeft = false,
}) => {
  return (
    <div
      className={`CustomCardLeftTopSideInfo ${className} ${
        showFavoriteRight && "CustomCardLeftTopSideInfoFavorite"
      } 
      
      ${showFavoriteLeft && "CustomCardLeftTopSideInfoFavoriteLeft"}
      `}
    >
      {showFavoriteLeft && (
        <FavoriteBorderIcon className="CustomCardTopSideInfoFavoriteBorderIcon" />
      )}

      {showFavoriteRight ? (
        <FavoriteBorderIcon className="CustomCardTopSideInfoFavoriteBorderIcon" />
      ) : (
        <span className="CustomCardLeftTopSideInfoText">{text}</span>
      )}
    </div>
  );
};

const CustomCard = ({
  hoverable,
  style,
  cover,
  title,
  price,
  showLeftTop = false,
  showRightTop = false,
  showFavorite = false,
}) => {
  return (
    <div
      className={`custom-card ${hoverable ? "hoverable" : ""}`}
      style={style}
    >
      {cover && <div className="custom-card-cover">{cover}</div>}
      <div className="custom-card-body">
        {title && (
          <h3 className="custom-card-title">
            {" "}
            {title?.length > 15 ? `${title.slice(0, 15)}...` : title}{" "}
          </h3>
        )}
        {price && (
          <p className="custom-card-price">
            {price?.length > 15 ? `${price.slice(0, 15)}...` : price}
            <span className="custom-card-price">{price}</span>
          </p>
        )}
        <button className="custom-card-button">Add Too Card </button>
      </div>

      <CustomCardTopSideInfo
        showFavoriteRight={false}
        showFavoriteLeft={true}
      />

      {/* <CustomCardTopSideInfo
        text={"Sale"}
        className={"CustomCardTopRightSideInfo"}
        showFavoriteRight={true}
      /> */}
      <CustomCardTopSideInfo
        text={"Sale"}
        className={"CustomCardTopRightSideInfo"}
        showFavoriteRight={false}
      />
    </div>
  );
};

export default CustomCard;
