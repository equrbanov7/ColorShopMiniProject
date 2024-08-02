import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

import "./index.scss";

const Header = () => {
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
                <Link>Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="HeaderAuth">
            <ul className="HeaderAuthAllLi">
              <li>
                <Link> {<SearchIcon />} </Link>
              </li>
              <li>
                <Link>
                  <PersonIcon />
                </Link>
              </li>

              <li>
                <Link>
                  <ShoppingCartIcon />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
