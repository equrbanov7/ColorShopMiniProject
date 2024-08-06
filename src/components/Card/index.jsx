/* eslint-disable react/prop-types */
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getOneUserRedux,
  patchUserRedux,
} from "../../redux/actions/userActions";

import "./index.scss";

export const CustomCardTopSideInfo = ({
  text,
  className,
  showFavoriteRight = true,
  showFavoriteLeft = false,
  productId,
  user,
  setUser,
}) => {
  const dispatch = useDispatch();
  const { user: fetchedUser } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getOneUserRedux(1));
  }, [dispatch]);

  useEffect(() => {
    if (fetchedUser) {
      setUser(fetchedUser);
    }
  }, [fetchedUser, setUser]);

  const handleAddToFavorites = async (e) => {
    e.stopPropagation();
    if (user) {
      const updatedFavorites = user.favorites.includes(productId)
        ? user.favorites.filter((fav) => fav !== productId)
        : [...user.favorites, productId];

      const updatedUser = { favorites: updatedFavorites };
      dispatch(patchUserRedux({ userId: user.id, data: updatedUser }));

      dispatch(getOneUserRedux(user.id));
    } else {
      alert("User not found");
    }
  };

  const isFavorite = user?.favorites.includes(productId);

  return (
    <div
      className={`CustomCardLeftTopSideInfo ${className} ${
        showFavoriteRight && "CustomCardLeftTopSideInfoFavorite"
      } 
      ${showFavoriteLeft && "CustomCardLeftTopSideInfoFavoriteLeft"}`}
    >
      {showFavoriteLeft && (
        <div onClick={handleAddToFavorites}>
          {isFavorite ? (
            <FavoriteIcon className="GeneralFavoriteIcon CustomCardTopSideInfoFavoriteBorderIcon" />
          ) : (
            <FavoriteBorderIcon className="GeneralFavoriteBorderIcon CustomCardTopSideInfoFavoriteBorderIcon" />
          )}
        </div>
      )}

      {showFavoriteRight ? (
        <div onClick={handleAddToFavorites}>
          {isFavorite ? (
            <FavoriteIcon className="GeneralFavoriteIcon CustomCardTopSideInfoFavoriteBorderIcon" />
          ) : (
            <FavoriteBorderIcon className="GeneralFavoriteBorderIcon CustomCardTopSideInfoFavoriteBorderIcon" />
          )}
        </div>
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
  discount = 0,
  showLeftTop = false,
  showRightTop = true,
  showFavorite = true,
  productId,
  user,
  setUser,
  showBasket = true,
  basket,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToBasket = async (e) => {
    e.stopPropagation();

    if (user) {
      const updatedBasket = basket.map((item) =>
        item.productId === productId ? { ...item, count: item.count + 1 } : item
      );

      if (!updatedBasket.some((item) => item.productId === productId)) {
        updatedBasket.push({
          productId: productId,
          count: 1,
        });
      }

      const updatedUser = { ...user, basket: updatedBasket };

      dispatch(patchUserRedux({ userId: user.id, data: updatedUser }));
      dispatch(getOneUserRedux(user.id));
    } else {
      alert("User not found");
    }
  };

  const handleNavigateProductInfo = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div
      className={`custom-card ${hoverable ? "hoverable" : ""}`}
      style={style}
      onClick={() => handleNavigateProductInfo(productId)}
    >
      {cover && <div className="custom-card-cover">{cover}</div>}
      <div className="custom-card-body">
        {title && (
          <h3 className="custom-card-title">
            {title?.length > 15 ? `${title.slice(0, 15)}...` : title}
          </h3>
        )}
        {price && (
          <p className="custom-card-price">
            ${price?.length > 15 ? `${price.slice(0, 15)}...` : price}
            {discount > 0 && (
              <span className="custom-card-price">${price - discount}</span>
            )}
          </p>
        )}
        {showBasket && (
          <button className="custom-card-button" onClick={handleAddToBasket}>
            Add To Cart
          </button>
        )}
      </div>

      {showLeftTop && (
        <CustomCardTopSideInfo
          text={"New"}
          showFavoriteRight={!showLeftTop}
          showFavoriteLeft={!showLeftTop}
          className={`${
            !showLeftTop &&
            showRightTop &&
            "CustomCardLeftTopSideInfoFavoriteLeft"
          }`}
          productId={productId}
          user={user}
          setUser={setUser}
        />
      )}

      {showRightTop && (
        <CustomCardTopSideInfo
          text={"Sale"}
          className={"CustomCardTopRightSideInfo"}
          showFavoriteRight={showFavorite}
          productId={productId}
          user={user}
          setUser={setUser}
        />
      )}
    </div>
  );
};

export default CustomCard;
