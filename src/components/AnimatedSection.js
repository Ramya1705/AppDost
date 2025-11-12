import React, { useState, useEffect, useRef } from 'react';

export const AnimatedSection = ({ children, className, id }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); }
        }, { threshold: 0.1 });
        if (ref.current) observer.observe(ref.current);
        return () => { if (ref.current) observer.unobserve(ref.current); };
    }, []);
    return <section id={id} ref={ref} className={`${className} transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>{children}</section>;
};

export const AnimatedCounter = ({ end, isVisible }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    let startTime;
    const animate = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / 2000, 1);
      setCount(Math.floor(end * progress));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, isVisible]);
  return <span>{count}</span>;
};