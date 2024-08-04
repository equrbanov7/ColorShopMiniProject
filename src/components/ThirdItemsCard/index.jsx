/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.scss";

const ThirdItemsCard = ({ icon, title, description }) => {
  return (
    <div className="ThirdItemsCard">
      <div className="ThirdItemsCardInner">
        <div className="ThirdItemsCardIcon">
          <FontAwesomeIcon icon={icon} />
        </div>
        <div className="ThirdItemsCardContent">
          <h6>{title}</h6>
          <p>{description} </p>
        </div>
      </div>
    </div>
  );
};

export default ThirdItemsCard;
