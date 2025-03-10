import { useState, useEffect } from 'react';

import Banner from '../../assets/banner-1.jpg';
import Banner2 from '../../assets/banner-2.jpg';
import Banner3 from '../../assets/banner-3.jpg';

import '../../styles/layout/herobanner.scss';

export const HeroBanner = () => {
  const images = [Banner, Banner2, Banner3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero-banner" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
      <div className="hero-banner__overlay">
        <div className="hero-banner__content">
          <h1>
            Pensou em conforto, pensou em <span className="highlight">Eleconfort</span>
          </h1>
          <p>Eleconfort Elevadores</p>
        </div>
      </div>
    </section>
  );
};
