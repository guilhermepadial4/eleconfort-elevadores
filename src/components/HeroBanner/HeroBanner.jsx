import { useState, useEffect } from 'react';

import Buttons from '../../assets/butons.png';
import Build from '../../assets/build-01.png';
import Build2 from '../../assets/build-02.png';
import Build3 from '../../assets/build-03.png';

import '../../styles/layout/herobanner.scss';

export const HeroBanner = () => {
  const images = [Buttons, Build, Build2, Build3];
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
