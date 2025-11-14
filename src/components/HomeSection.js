import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";

/**
 * Small local replacement for AnimatedSection
 * (keeps original API: id, className, children)
 */
export const AnimatedSection = ({ id, className = "", children }) => {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
};

/**
 * AnimatedCounter
 * - props:
 *    end: number to count to
 *    duration: milliseconds (optional)
 *    isVisible: boolean (start animation when true)
 */
export const AnimatedCounter = ({ end = 0, duration = 1200, isVisible = false }) => {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!isVisible) return () => {};

    const start = performance.now();
    const startVal = 0;
    const diff = end - startVal;

    const step = (now) => {
      const elapsed = Math.min(now - start, duration);
      const progress = elapsed / duration;
      const current = Math.floor(startVal + diff * easeOutCubic(progress));
      setValue(current);
      if (elapsed < duration) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setValue(end); // ensure final value
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [end, duration, isVisible]);

  // gentle easing
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  return <span>{value}</span>;
};

/**
 * HomeSection component (final)
 */
const defaultHeroContent = {
  tagline: "Design • Build • Ship",
  subtext:
    "I build efficient and beautiful web apps — combining modern UI with solid engineering to ship fast and scale well.",
};

export const HomeSection = ({ heroContent = defaultHeroContent }) => {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const node = statsRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          // once visible, we can unobserve the node for performance
          if (node) observer.unobserve(node);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(node);

    return () => {
      // use the copied `node` variable here (safe even if ref changed)
      if (node && observer) {
        try {
          observer.unobserve(node);
        } catch (err) {
          // ignore if already unobserved or not supported
        }
      }
    };
  }, []); // run once on mount

  // Use a direct Unsplash URL (works in <img src="">)
  const mainImage =
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
  const fallbackImage =
    "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";

  const stats = [
    { number: 50, label: "Projects", suffix: "+" },
    { number: 30, label: "Clients", suffix: "+" },
    { number: 15, label: "Team", suffix: "+" },
    { number: 98, label: "Success", suffix: "%" },
  ];

  return (
    <AnimatedSection id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-16 px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-blue-950/30 dark:to-purple-950/30" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text Content */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center space-x-3 bg-blue-100 dark:bg-blue-500/10 border-2 border-purple-500/30 rounded-full px-6 py-3 mb-10">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="font-bold text-sm bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {heroContent.tagline}
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
              Build The Next <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Big Thing
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-14 max-w-3xl font-medium">
              {heroContent.subtext}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
              <Link
                to="/contact"
                className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 transition-all"
              >
                <span className="flex items-center space-x-3">
                  <span>Start Your Project</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
              </Link>

              <Link
                to="/about"
                className="px-10 py-5 bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 rounded-2xl hover:scale-105 transition-all font-bold text-lg"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="hidden md:flex items-center justify-center">
            <img
              src={mainImage}
              alt="Person working on a laptop"
              className="w-full max-w-md h-96 object-cover rounded-3xl shadow-2xl"
              onError={(e) => {
                // fallback to a second unsplash image if first fails
                e.target.onerror = null;
                e.target.src = fallbackImage;
              }}
            />
          </div>
        </div>

        {/* Stats Section (Full Width Below) */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-2xl bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 hover:scale-105 transition-transform shadow-lg"
            >
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-3">
                <AnimatedCounter end={stat.number} isVisible={statsVisible} />
                {stat.suffix}
              </div>
              <div className="text-slate-600 dark:text-slate-400 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default HomeSection;
