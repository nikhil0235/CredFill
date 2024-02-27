import React, { useState } from 'react';
import './Home.scss';

const Home = () => {
  const Images = [
    {
      url: require('../img/hero-slide-1.jpg'),
      content: 'Slider 1',
    },
    {
      url: require('../img/hero-slide-2.jpg'),
      content: 'Slider 2',
    },
    {
      url: require('../img/hero-slide-3.jpg'),
      content: 'Slider 3',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Images.length) % Images.length);
  };

  return (
    <div className='home'>
      <div className='info_area'>
        <div class="hero-content">
          <h1 class="h1 hero-title">One Stop Solution for all kind of Business Documentation and Financial Needs.</h1>
          <p class="hero-text">
            We are a one-stop solution where all the Business Compliance and Financial needs of an individual or SMEs get fulfilled. We help you manage Everything about finance on a single platform.
          </p>
          <div class="btn-wrapper">
            <a href="#" className="btn btn-primary m-4 w-10 h-4">Business Documents</a>
            <a href="#" className="btn btn-white m-4">Credit</a>
          </div>
        </div>
      </div>
      <div className='img_area'>
        <div className='Img_cont'>
          <img className='Img' src={Images[currentIndex].url} alt={`Slider ${currentIndex + 1}`} />
          <button onClick={prevSlide} className="btn btn-white m-4">Previous</button>
          <button onClick={nextSlide} className="btn btn-white m-4">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
