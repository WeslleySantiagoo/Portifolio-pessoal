'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface FloatingItemProps {
    path: string
    className: string
    alt: string
    link: string
}

const getRandom = (min: number, max: number) => Math.random() * (max - min) + min;

export default function FloatingItem({ path, className, alt, link }: FloatingItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);

  const HandleClick = () => {
        window.open(link, "_blank");
    }

  useEffect(() => {
    const el = itemRef.current;
    if (!el) return;

    const float = () => {
      const x = getRandom(-10, 10); // posição horizontal aleatória
      const y = getRandom(-10, 10); // posição vertical aleatória
      const rotation = getRandom(-2, 2); // rotação leve
      el.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
    };

    float(); // iniciar com uma posição

    const interval = setInterval(float, getRandom(3000,5000));

    return () => clearInterval(interval);
  }, []);

  return (
      <div
        ref={itemRef}
        onClick={HandleClick}
        className={`hover:transition hover:duration-300 hove:ease-in-out hover:scale-110 cursor-pointer transition-transform duration-[3000ms] ease-in-out inline-block ${className}`}
      >
        <Image src={path} alt={alt} width={50} height={50}/>
      </div>
  );
}
