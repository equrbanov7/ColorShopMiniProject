import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faSkype,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

import "./index.scss";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="CustomContainer">
        <div className="Links">
          <ul>
            <li>
              <Link>Blog</Link>
            </li>
            <li>
              <Link>FAQs</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="FooterSocialMediaIcons">
          <ul>
            <li>
              <Link to="https://www.facebook.com">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
            </li>
            <li>
              <Link to="https://www.twitter.com">
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
            </li>
            <li>
              <Link to="https://www.instagram.com">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </li>
            <li>
              <Link to="https://www.skype.com">
                <FontAwesomeIcon icon={faSkype} />
              </Link>
            </li>
            <li>
              <Link to="https://www.pinterest.com">
                <FontAwesomeIcon icon={faPinterest} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="CoderRight">
        <h4>©2024 All Rights Reserverd. Elvin Gurbanov </h4>
      </div>
    </footer>
  );
};

export default Footer;
