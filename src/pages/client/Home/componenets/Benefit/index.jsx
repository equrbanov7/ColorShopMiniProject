import ThirdItemsCard from "../../../../../components/ThirdItemsCard";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faUndo, faClock } from "@fortawesome/free-solid-svg-icons";

import "./index.scss";
const Benefit = () => {
  return (
    <div className="Benefit">
      <div className="CustomContainer">
        <ThirdItemsCard
          title={"free shipping"}
          description={"Suffered Alteration in Some Form"}
          icon={faTruck}
        />
        <ThirdItemsCard
          title={"cach on delivery"}
          description={"The Internet Tend To Repeat"}
          icon={faMoneyBill}
        />
        <ThirdItemsCard
          title={"45 days return"}
          description={"Making it Look Like Readable"}
          icon={faUndo}
        />
        <ThirdItemsCard
          title={"opening all week"}
          description={"8AM - 09PM"}
          icon={faClock}
        />
      </div>
    </div>
  );
};

export default Benefit;
