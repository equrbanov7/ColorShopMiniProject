import { useEffect, useState } from "react";
import BannerImage from "../../../../../assets/images/deal_ofthe_week.png";
import "./index.scss";
const DealOfTheWeek = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-08-10") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });
  return (
    <div className="DealOfTheWeek">
      <div className="CustomContainer">
        <div className="DealOfTheWeekInnerContent">
          <div className="DealOfTheWeekImage">
            <div className="imgContainer">
              <img src={BannerImage} alt="" />
            </div>
          </div>
          <div className="DealOfTheWeekExpireDate">
            <div className="DealOfTheWeekExpireDateContainer">
              <div className="DealOfTheWeekExpireDateTitle">
                <h2>Deal Of The Week</h2>
              </div>
              <ul className="DealOfTheWeekExpireDateTimer">
                <li>
                  <div className="timerNumb">{timeLeft.days || "0"}</div>
                  <div className="timerDesc">
                    Day{timeLeft.days !== 1 ? "s" : ""}
                  </div>
                </li>
                <li>
                  <div className="timerNumb">{timeLeft.hours || "0"}</div>
                  <div className="timerDesc">
                    Hour{timeLeft.hours !== 1 ? "s" : ""}
                  </div>
                </li>
                <li>
                  <div className="timerNumb">{timeLeft.minutes || "0"}</div>
                  <div className="timerDesc">
                    Min{timeLeft.minutes !== 1 ? "s" : ""}
                  </div>
                </li>
                <li>
                  <div className="timerNumb">{timeLeft.seconds || "0"}</div>
                  <div className="timerDesc">
                    Sec{timeLeft.seconds !== 1 ? "s" : ""}
                  </div>
                </li>
              </ul>
              <div className="DealOfTheWeekExpireDateBtn">
                <button>Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealOfTheWeek;
