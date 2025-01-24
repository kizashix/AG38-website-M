import React, { useEffect, useRef } from 'react';

const DigitalRain = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*';
    const container = containerRef.current;
    const width = window.innerWidth;
    const columns = Math.floor(width / 20);

    const createRainDrop = () => {
      const span = document.createElement('span');
      span.textContent = characters[Math.floor(Math.random() * characters.length)];
      span.style.left = `${Math.floor(Math.random() * columns) * 20}px`;
      span.style.animationDuration = `${Math.random() * 2 + 1}s`;
      container.appendChild(span);

      setTimeout(() => {
        container.removeChild(span);
      }, 3000);
    };

    const interval = setInterval(createRainDrop, 50);

    return () => {
      clearInterval(interval);
      container.innerHTML = '';
    };
  }, []);

  return <div ref={containerRef} className="digital-rain" />;
};

export default DigitalRain;