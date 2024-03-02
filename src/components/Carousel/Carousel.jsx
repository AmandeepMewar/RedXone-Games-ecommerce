import { useState, useEffect } from "react";
import { api } from "../../api/api";

import styles from "./Carousel.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Pagination, Navigation, Autoplay } from "swiper/modules";

const Carousel = props => {
  const [imageData, setImageData] = useState(null);

  const query = `/${props.id}/screenshots?`;
  const fetchData = async () => {
    const response = await api(query);
    console.log(response.results);
    setImageData(response.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={true}
        keyboard={{
          enabled: true,
        }}
        lazy={true}
        loop={true}
        modules={[Pagination, Navigation, Keyboard, Autoplay]}
        className={styles["swiper"]}
      >
        {imageData &&
          imageData.map(image => (
            <SwiperSlide key={image.id}>
              <img src={image.image} loading="lazy" />
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default Carousel;
