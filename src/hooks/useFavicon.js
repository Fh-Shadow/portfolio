import { useEffect } from 'react';

const useFavicon = (faviconUrl) => {
  useEffect(() => {
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/svg+xml';
    link.rel = 'icon';
    link.href = faviconUrl;
    document.head.appendChild(link);
  }, [faviconUrl]);
};

export default useFavicon;
