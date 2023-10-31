import React, { useState } from "react";

export const Collection = ({ name, cost, images }) => {
  const [lightboxVisible, setLightboxVisible] = useState(false);

  const openLightbox = () => {
    setLightboxVisible(true);
  };

  const closeLightbox = () => {
    setLightboxVisible(false);
  };

  return (
    <div className="collection">
      <img
        className="collection__big"
        src={images[0]}
        alt="Item"
        onClick={openLightbox}
      />
      {lightboxVisible && (
        <div className="lightbox">
          <div className="lightbox-content">
            <img src={images[0]} alt="Item" />
            <button onClick={closeLightbox}>Close</button>
          </div>
        </div>
      )}
      <h4>
        {name} &nbsp; &nbsp; &nbsp; &nbsp; {cost}/р за кг.
      </h4>
    </div>
  );
};
