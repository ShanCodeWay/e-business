import React, { useState, useEffect } from 'react';
import './ImageSlider.css';
import p1 from '../../images/01.jpg';
import p2 from '../../images/02.jpg';
import p3 from '../../images/03.jpg';
import p4 from '../../images/08.jpg';
import p5 from '../../images/05.jpg';
import p6 from '../../images/06.jpg';
import p7 from '../../images/07.jpg';
import p8 from '../../images/08.jpg';

const images = [p1, p2, p3, p4, p5, p6, p7, p8];

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 2500); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="image-slider">
      <div className="slider-container">
        <div className="image-container">
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            className="slider-image-cart"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
