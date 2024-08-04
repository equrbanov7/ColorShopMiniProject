// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./index.scss";

import {
  FreeMode,
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProductsRedux } from "../../../../../redux/actions/productAction";
import CustomCard from "../../../../../components/Card";
const SwiperCards = () => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  const allProducts = useSelector((state) => state.products?.products);
  useEffect(() => {
    dispatch(getProductsRedux());
  }, [dispatch]);

  return (
    <div className="SwiperCards">
      <div className="CustomContainer">
        <div className="SwiperCardssectionHeader">
          <h2>Best Seller </h2>
          <div className="line"></div>
        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          mousewheel={true}
          freeMode={true}
          cssMode={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          keyboard={true}
          modules={[Navigation, Pagination, FreeMode, Mousewheel, Keyboard]}
          className="mySwiper"
          breakpoints={{
            1140:{
              slidesPerView: 3,
            },
            995: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
        >
          {allProducts?.map((product, index) => {
            let showLeftTop = product.status === "New";
            showLeftTop = Boolean(product.discount > 0);
            return (
              <SwiperSlide key={index}>
                <CustomCard
                  key={product.id + 2}
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt={product.title} src={product.image} />}
                  title={product.title}
                  price={product.price}
                  discount={product.discount}
                  showLeftTop={showLeftTop}
                  productId={product.id}
                  user={user}
                  setUser={setUser}
                  showBasket={false}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperCards;
