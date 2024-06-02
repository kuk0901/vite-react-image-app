import React from "react";
import Images from "./Images";

export interface ImageItem {
  name: string;
  imagePath: string;
  description: string;
}
const ImageBox = () => {
  return (
    <div className="relative top-1">
      <Images name="saerom" />
      <Images name="hayoung" />
      <Images name="jiwon" />
      <Images name="jisun" />
      <Images name="seoyeon" />
      <Images name="chaeyoung" />
      <Images name="nagyung" />
      <Images name="jiheon" />
    </div>
  );
};

export default ImageBox;
