import Benefit from "./componenets/Benefit";
import Categories from "./componenets/Categories";
import DealOfTheWeek from "./componenets/DealOfTheWeek";
import LatestBlogs from "./componenets/LatestBlogs";
import NewArrival from "./componenets/NewArrival";
import Slider from "./componenets/Slider";
import SwiperCards from "./componenets/SliderCards";
import Subscribe from "./componenets/Subscribe";

const ClientHome = () => {
  return (
    <div className="ClientHome">
      <Slider />

      <Categories />

      <NewArrival />

      <DealOfTheWeek />

      <SwiperCards />

      <Benefit />

      <LatestBlogs />

      <Subscribe />
    </div>
  );
};

export default ClientHome;
