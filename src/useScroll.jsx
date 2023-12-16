import { useState, useEffect } from 'react';

const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);

  useEffect(() => {
    // Function to update scroll position
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures that the effect runs only once during component mount

  return scrollPosition;
};

export default useScroll;
