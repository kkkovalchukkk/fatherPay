import React, { useRef, useState } from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TransactionBarWidget from "../UI/TransactionBarWidget";

SwiperCore.use([Autoplay]);

const TransactionBar = () => {
  const template = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ];

  const [data, setData] = useState([]);
  return (
    <Swiper
      enabled={true}
      speed={6000}
      className="transaction-bar"
      direction={"horizontal"}
      allowTouchMove={false}
      spaceBetween={4}
      loop={true}
      slidesPerView={"auto"}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 0,
      }}
    >
      {template &&
        template.map(() => (
          <SwiperSlide>
            <TransactionBarWidget />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default TransactionBar;
