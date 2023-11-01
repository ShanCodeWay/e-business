import React, { useState, useEffect } from 'react';
import './ImageSlider.css';
import p1 from './src/p1.jpg';
import p2 from './src/p2.jpg';
import p3 from './src/p3.jpg';
import p4 from './src/p4.jpg';
import p5 from './src/p5.jpg';
import p6 from './src/p6.jpg';
import p7 from './src/p7.jpg';
import p8 from './src/p8.jpg';

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
            className="slider-image"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
