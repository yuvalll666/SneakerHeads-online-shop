import React from "react";
import { Carousel } from "antd";

function ImageSlider({ images }) {
  return (
    <div>
      <Carousel autoplay>
        {images.map((image, index) => (
          <div key={index}>
            <img
              style={{ width: "100%", maxHeight: "150px" }}
              src={`http://165.227.128.247:3000/${image}`}
              alt="productImage"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageSlider;
