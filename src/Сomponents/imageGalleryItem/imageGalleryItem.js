import React from "react";

const ImageGalleryItem = ({ src, data, onOpen }) => (
  <li className="ImageGalleryItem" onClick={onOpen}>
    <img src={src} alt="" data-src={data} className="ImageGalleryItem-image" />
  </li>
);

export default ImageGalleryItem;
