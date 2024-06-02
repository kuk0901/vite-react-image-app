import React, { useState } from "react";
import { ImageItem } from "./ImageBox";

// 개별 Image UI
const Image = (item: ImageItem) => {
  const [infoText, setInfoText] = useState<boolean>(false);

  const handleDetailInfo = () => {
    setInfoText(!infoText);
  };

  return (
    <div>
      <div
        className="w-[200px] h-[300px] rounded-sm border-solid border-2 border-gray-700 m-auto hover:border-yellow-50"
        onClick={handleDetailInfo}
      >
        <img
          className="w-full h-full m-auto p-[auto] block overflow-hidden"
          src={`http://localhost:4000/${item.imagePath}`}
          alt={item.imagePath}
        />
      </div>
      <div>
        {infoText ? (
          <div className="w-[200px] z-10 text-center text-lime-400 rounded-sm m-auto">
            {item.description}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Image;
