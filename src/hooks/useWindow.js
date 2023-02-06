import { useEffect, useState } from 'react';

export default function useWindow() {
  const [resize, setResize] = useState(window.innerWidth);
  useEffect(() => {
    const listener = () => {
      setResize(window.innerWidth);
    };

    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [resize]);
  return resize;
}
