import React, { useState } from 'react';

interface ImgWithFallbackProps extends React.ComponentPropsWithoutRef<'img'> {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

export default function ImgWithFallback({ src, fallbackSrc, alt, ...props }: ImgWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [errorCount, setErrorCount] = useState(0);

  const handleError = () => {
    if (errorCount === 0 && src?.includes('lh3.googleusercontent.com')) {
      // Try fallback to standard UC format if LH3 fails
      const idMatch = src.match(/\/d\/([^=]+)/);
      if (idMatch && idMatch[1]) {
        setErrorCount(1);
        setImgSrc(`https://drive.google.com/uc?id=${idMatch[1]}&export=view`);
        return;
      }
    }
    
    if (errorCount < 2) {
      setErrorCount(2);
      setImgSrc(fallbackSrc || 'https://picsum.photos/seed/monadami/800/1000?grayscale');
    }
  };

  return (
    <img
      {...props}
      src={imgSrc}
      alt={alt}
      onError={handleError}
      referrerPolicy="no-referrer"
    />
  );
}
