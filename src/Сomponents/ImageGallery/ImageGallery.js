import React from "react";
import ImageGalleryItem from "../imageGalleryItem/imageGalleryItem";

const ImageGallery = ({ items, onOpen }) => (
  <ul className="ImageGallery">
    {items.length > 0 &&
      items.map((item) => (
        <ImageGalleryItem
          key={item.id}
          src={item.webformatURL}
          data={item.largeImageURL}
          onOpen={onOpen}
        />
      ))}
  </ul>
);

export default ImageGallery;
