import { Button } from "@mui/material";
import "./index.scss";

const Slider = () => {
  return (
    <div className="Slider">
      <div className="SliderContainer">
        <div className="innerContainer">
          <div className="sectionIfo">
            <h6 className="DescriptionOfSection">  Spring / Summer Collection 2017</h6>
            <h1 className="TitleOfSection">Get up to 30% Off New Arrivals</h1>

            <Button variant="contained" className="ButtonShop">Shop Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
