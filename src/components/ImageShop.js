import React, { useRef } from 'react';
import './ImageShop.css'; 

const ImageShop = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const images = [
    'https://s7ap1.scene7.com/is/image/adityabirlafashion/LP_gamescape_blog_App--420x315',
    'https://imagescdn.louisphilippe.com/img/app/product/3/39684053-13943573.jpg?auto=format&w=390',
    'https://imagescdn.louisphilippe.com/img/app/product/3/39683822-13936521.jpg?auto=format&w=390',
    'https://imagescdn.louisphilippe.com/img/app/product/3/39691079-14125317.jpg?auto=format&w=390',
    'https://imagescdn.louisphilippe.com/img/app/product/9/922530-11599756.jpg?auto=format&w=390',
    'https://s7ap1.scene7.com/is/image/adityabirlafashion/LP_D_Vid_thumb_17_luxurywedding',
    'https://s7ap1.scene7.com/is/image/adityabirlafashion/LP-D-Prd-C-CasualShirt',

  ];

  return (
    <div className="slider-container">
        <h1 className='shopnm'>Shop The Look</h1>
      <button onClick={scrollLeft} className="scroll-button left">◀</button>
      <div className="image-slider" ref={sliderRef}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Image ${index}`} className="image-slide" />
        ))}
      </div>
      <button onClick={scrollRight} className="scroll-button right">▶</button>
    </div>
  );
};

export default ImageShop;
