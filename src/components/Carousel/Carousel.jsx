import { useState, useEffect } from "react";

import { api } from "../../api/api";
import styles from "./Carousel.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Pagination, Navigation, Autoplay } from "swiper/modules";

const Carousel = props => {
  const [imageData, setImageData] = useState(null);

  const query = `/${props.id}/screenshots?`;
  const fetchData = async () => {
    const response = await api(query);
    setImageData(response.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Swiper
        grabCursor={true}
        style={{
          "--swiper-navigation-color": "#808080",
          "--swiper-pagination-color": "#808080",
        }}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        keyboard={{
          enabled: true,
        }}
        lazy="true"
        modules={[Pagination, Navigation, Keyboard, Autoplay]}
        className={styles["swiper"]}
      >
        {imageData &&
          imageData.map(image => (
            <SwiperSlide key={image.id}>
              <img
                src={image.image}
                loading="lazy"
                className={styles["swiper__img"]}
                alt={image.name}
              />
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default Carousel;
