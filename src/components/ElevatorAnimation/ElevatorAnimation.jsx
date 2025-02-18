import { useSpring, animated } from '@react-spring/web';
import { useState, useEffect } from 'react';
import ElevatorIcon from '../../assets/elevator-icon.jpg';
import '../../styles/layout/ElevatorAnimation.scss';

const ElevatorAnimation = () => {
  const [animationFinished, setAnimationFinished] = useState(false);

  const props = useSpring({
    from: { transform: 'translateY(100vh)', opacity: 0 },
    to: { transform: 'translateY(-100vh)', opacity: 1 },
    config: { duration: 4000 }, // Tempo de animação ajustado para 3 segundos
    onRest: () => setAnimationFinished(true),
  });

  useEffect(() => {
    document.body.classList.add('dark-background');
    return () => document.body.classList.remove('dark-background');
  }, []);

  return (
    <>
      <animated.div className="elevator" style={props}>
        <img src={ElevatorIcon} alt="Elevador" className="elevator-img" />
      </animated.div>
      {!animationFinished && <div className="overlay"></div>}
    </>
  );
};

export default ElevatorAnimation;