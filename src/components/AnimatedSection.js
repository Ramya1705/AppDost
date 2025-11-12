// src/components/AnimatedSection.js
import React, { useEffect, useRef, forwardRef, useState } from 'react';

/**
 * AnimatedSection
 * - Forwarding ref so caller can attach to the DOM node.
 * - Uses IntersectionObserver to add/remove an 'in-view' class when visible.
 * - Copies ref.current into `node` inside the effect to avoid react-hooks/exhaustive-deps warning.
 */
export const AnimatedSection = forwardRef(function AnimatedSection(
  { children, className = '', threshold = 0.25, root = null, rootMargin = '0px', ...rest },
  forwardedRef
) {
  const internalRef = useRef(null);
  const ref = forwardedRef || internalRef;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add('in-view');
          } else {
            node.classList.remove('in-view');
          }
        });
      },
      { threshold, root, rootMargin }
    );

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threshold, root, rootMargin]);

  return (
    <section
      ref={ref}
      className={`animated-section ${className}`}
      {...rest}
    >
      {children}
    </section>
  );
});

/**
 * AnimatedCounter
 * - Props:
 *    end: number (target value)
 *    duration: number (ms) optional (default 1200)
 *    isVisible: boolean - starts animation when true
 *    format?: (n) => string  optional formatter
 *
 * - Simple requestAnimationFrame-based counter that is lightweight and accessible.
 */
export function AnimatedCounter({ end = 0, duration = 1200, isVisible = false, format }) {
  const [value, setValue] = useState(0);
  const startRef = useRef(null);
  const startTimeRef = useRef(null);
  const lastEndRef = useRef(end);

  useEffect(() => {
    // If end changed while not animating, update instantly (keeps behavior predictable)
    if (!isVisible) {
      setValue(0);
      startRef.current = null;
      startTimeRef.current = null;
      lastEndRef.current = end;
      return;
    }

    // if we're already at the target (e.g., when re-rendering), avoid re-animating
    if (lastEndRef.current === end && value === end) return;

    let rafId = null;
    const startValue = 0;
    const target = Number(end);
    const totalDuration = Math.max(50, duration); // minimum duration

    function step(timestamp) {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / totalDuration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(startValue + (target - startValue) * eased);
      setValue(current);
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        lastEndRef.current = target;
        startTimeRef.current = null;
      }
    }

    rafId = requestAnimationFrame(step);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      startTimeRef.current = null;
    };
    // Intentionally not depending on `value` to avoid restarting while animating
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [end, isVisible, duration]);

  const display = typeof format === 'function' ? format(value) : String(value);

  return <span aria-live="polite">{display}</span>;
}

export default AnimatedSection;
