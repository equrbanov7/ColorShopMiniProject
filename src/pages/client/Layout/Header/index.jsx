import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { getOneUserRedux } from "../../../../redux/actions/userActions";

import "./index.scss";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const loginedUserData = useSelector((state) => state.users);
  const basketItemsCount = loginedUserData?.user?.basket?.length || 0;


  useEffect(() => {
    dispatch(getOneUserRedux(1));
  }, [dispatch]);

  const handleBurgerMenuClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains("Overlay")) {
      handleCloseModal();
    }
  };

  return (
    <div className="Header">
      <div className="HeaderContainer">
        <div className="HeaderLogo">
          <h1 className="FirstLogoSide">
            <Link>COLOR</Link>
          </h1>
          <h1 className="SecondLogoSide">
            <Link>SHOP</Link>
          </h1>
        </div>
        <div className="HeaderNavbarAndAuth">
          <nav className="HeaderNavbar">
            <ul className="HeaderNavbarAllLi">
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Shop</Link>
              </li>
              <li>
                <Link>Promotion</Link>
              </li>
              <li>
                <Link>Pages</Link>
              </li>
              <li>
                <Link>Blog</Link>
              </li>
              <li>
                <Link to={"/add"}>Add Product</Link>
              </li>
            </ul>
          </nav>
          <div className="HeaderAuth">
            <ul className="HeaderAuthAllLi">
              <li>
                <Link>
                  <SearchIcon />
                </Link>
              </li>
              <li>
                <Link>
                  <PersonIcon />
                </Link>
              </li>
              <li>
                <Link className={basketItemsCount > 0 ? "basketLiCheckOut" : ""}>
                  <ShoppingCartIcon />
                </Link>
                {basketItemsCount > 0 && (
                  <span className="basketCount">{basketItemsCount}</span>
                )}
              </li>
              <li className="BurgerMenu" onClick={handleBurgerMenuClick}>
                <MenuIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="Overlay" onClick={handleOverlayClick}>
          <div className="ModalContent">
            <button className="CloseButton" onClick={handleCloseModal}>
              X
            </button>
            <nav className="ModalNavbar">
              <ul>
                <li>
                  <Link onClick={handleCloseModal}>Home</Link>
                </li>
                <li>
                  <Link onClick={handleCloseModal}>Shop</Link>
                </li>
                <li>
                  <Link onClick={handleCloseModal}>Promotion</Link>
                </li>
                <li>
                  <Link onClick={handleCloseModal}>Pages</Link>
                </li>
                <li>
                  <Link onClick={handleCloseModal}>Blog</Link>
                </li>
                <li>
                  <Link onClick={handleCloseModal}>Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
