import React, { useCallback, useEffect, useState } from "react";
import { ImageItem } from "./ImageBox";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

// import swiper style
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "./Image";

// 개별 Image UI를 모아주는 component
const Images = ({ name }: { name: string }) => {
  const [items, setItems] = useState<ImageItem[]>([]);

  const loadItems = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:4000/${name}`);
      setItems(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [name]);

  useEffect(() => {
    loadItems();
  }, [loadItems]);

  return (
    <div className="m-2 border border-solid border-slate-200 rounded-sm">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          1378: {
            slidesPerView: 5,
            slidesPerGroup: 5
          },
          998: {
            slidesPerView: 4,
            slidesPerGroup: 4
          },
          625: {
            slidesPerView: 3,
            slidesPerGroup: 3
          },
          0: {
            slidesPerView: 2,
            slidesPerGroup: 2
          }
        }}
      >
        {items &&
          items.map((item: ImageItem) => (
            <SwiperSlide key={item.imagePath}>
              <Image key={item.imagePath} {...item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Images;
