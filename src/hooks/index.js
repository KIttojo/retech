import { useState, useEffect } from 'react';

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  let modalHeight = height;
  let modalWidth = width;

  if (width > 990) {
    modalHeight = 664;
    modalWidth = 896;
  } else if (width > 730) {
    modalHeight = 464;
    modalWidth = 596;
  } else {
    modalHeight = 364;
    modalWidth = width - 50;
  }

  return {
    modalWidth,
    modalHeight
  };
}

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}