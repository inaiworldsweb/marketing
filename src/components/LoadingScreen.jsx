import { useEffect, useRef } from 'react';

const LoadingScreen = () => {
  const loaderRef = useRef(null);

  useEffect(() => {
    // Preload critical assets
    const preloadImages = ['/logo.png'];
    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    // Cleanup animation
    return () => {
      if (loaderRef.current) {
        loaderRef.current.style.opacity = 0;
        setTimeout(() => {
          if (loaderRef.current) {
            loaderRef.current.style.display = 'none';
          }
        }, 300);
      }
    };
  }, []);

  return (
    <div 
      ref={loaderRef}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-300"
    >
      <div className="animate-pulse">
        <img 
          src="/logo.png" 
          alt="Loading..." 
          className="h-16 sm:h-20 w-auto"
          width="120"
          height="80"
          loading="eager"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
