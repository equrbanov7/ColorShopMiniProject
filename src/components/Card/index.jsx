/* eslint-disable react/prop-types */
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { getUser, patchUser } from "../../api/users";
import { useEffect } from "react";

import "./index.scss";
import { useNavigate } from "react-router-dom";

export const CustomCardTopSideInfo = ({
  text,
  className,
  showFavoriteRight = true,
  showFavoriteLeft = false,
  productId,
  user,
  setUser,
}) => {
  const fetchUser = async () => {
    const userData = await getUser(1);
    setUser(userData);
  };
  useEffect(() => {
    fetchUser();
  }, []);

  const handleAddToFavorites = async (e) => {
    e.stopPropagation();
    if (user) {
      const updatedFavorites = user.favorites.includes(productId)
        ? user.favorites.filter((fav) => fav !== productId)
        : [...user.favorites, productId];

      const updatedUser = { favorites: updatedFavorites };
      await patchUser(user.id, updatedUser);

      await fetchUser();
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
}) => {
  const navigate = useNavigate();

  const fetchUser = async () => {
    const userData = await getUser(1);
    setUser(userData);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleAddToBasket = async (e) => {
    e.stopPropagation();

    if (user) {
      const productInBasket = user.basket.find(
        (item) => item.productId === productId
      );

      if (productInBasket) {
        productInBasket.count += 1;
      } else {
        user.basket.push({
          productId: productId,
          count: 1,
        });
      }

      setUser({ ...user });

      await patchUser(user.id, user);
      await fetchUser();
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
