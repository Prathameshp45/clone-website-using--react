import React, { useRef } from 'react';
import './ImageSlider.css'; 

const ImageSlider = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const images = [
    'https://assets.trendin.com/img/app/categorymedia/production/1/1534-132-13308.jpg',
    'https://pbs.twimg.com/media/E2c_g1QUcAQk1KR.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE8cHZby38YY9kit2iJbXs4elwCZY0epdVeQ&s',
    'https://content3.jdmagicbox.com/v2/comp/madurai/s6/0452px452.x452.170726195438.n7s6/catalogue/louis-philippe-kk-nagar-madurai-madurai-men-readymade-garment-retailers-r2y29b3gt5.jpg',
    'https://cdn4.singleinterface.com/files/enterprise/coverphoto/269515/Banner-3-24-05-23-04-38-44.jpg',
    'https://d12d6l12s3d372.cloudfront.net/image160_828x768_75deedd7f2.jpeg',
    'https://assets.ajio.com/medias/sys_master/root/20230207/NQFx/63e2932ef997dd708e4123da/-473Wx593H-469443351-blue-MODEL5.jpg'

  ];

  return (
    <div className="slider-container">
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

export default ImageSlider;
