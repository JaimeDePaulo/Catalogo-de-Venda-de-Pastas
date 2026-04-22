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
    if (errorCount === 0) {
      setErrorCount(1);
      // If it failed, try the thumbnail endpoint as a last resort if it wasnt already
      if (src.includes('drive.google.com') && !src.includes('thumbnail')) {
        const idMatch = src.match(/id=([^&]+)/);
        if (idMatch) {
          setImgSrc(`https://drive.google.com/thumbnail?id=${idMatch[1]}&sz=w1000`);
          return;
        }
      }
    }
    
    if (errorCount < 2) {
      setErrorCount(2);
      // Fallback to a neutral textured background instead of tulips
      setImgSrc('https://www.transparenttextures.com/patterns/leather.png');
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
