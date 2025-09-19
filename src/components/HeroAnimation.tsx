import React from 'react';

const HeroAnimation: React.FC = () => {
  return (
    <div
      className="relative max-w-4xl mx-auto h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden"
      role="img"
      aria-label="Animated steel bars representing premium steel manufacturing"
    >
      {/* Background glow effect */}
      <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/30 rounded-full blur-3xl"></div>

      {/* Main animation container */}
      <div className="relative w-full h-full flex items-center justify-center will-change-transform">
        {/* Steel Bar 1 - Large vertical bar */}
        <div className="absolute animate-steel-float-1 will-change-transform" style={{ transform: 'translateZ(0)' }}>
          <div className="steel-bar-vertical w-6 h-32 md:w-8 md:h-40 lg:w-10 lg:h-48"></div>
        </div>

        {/* Steel Bar 2 - Medium horizontal bar */}
        <div className="absolute animate-steel-float-2 will-change-transform" style={{ transform: 'translateZ(0)' }}>
          <div className="steel-bar-horizontal w-24 h-4 md:w-32 md:h-6 lg:w-40 lg:h-8 transform rotate-45"></div>
        </div>

        {/* Steel Bar 3 - Small vertical bar */}
        <div className="absolute animate-steel-float-3 will-change-transform" style={{ transform: 'translateZ(0)' }}>
          <div className="steel-bar-vertical w-4 h-20 md:w-6 md:h-28 lg:w-8 lg:h-36 transform -rotate-12"></div>
        </div>

        {/* Steel Bar 4 - Horizontal bar */}
        <div className="absolute animate-steel-float-4 will-change-transform" style={{ transform: 'translateZ(0)' }}>
          <div className="steel-bar-horizontal w-20 h-5 md:w-28 md:h-7 lg:w-36 lg:h-9 transform rotate-[-15deg]"></div>
        </div>

        {/* Steel Bar 5 - Small angled bar */}
        <div className="absolute animate-steel-float-5 will-change-transform" style={{ transform: 'translateZ(0)' }}>
          <div className="steel-bar-horizontal w-16 h-3 md:w-20 md:h-4 lg:w-24 lg:h-5 transform rotate-75"></div>
        </div>

        {/* Steel Bar 6 - Medium vertical bar */}
        <div className="absolute animate-steel-float-6 will-change-transform" style={{ transform: 'translateZ(0)' }}>
          <div className="steel-bar-vertical w-5 h-28 md:w-7 md:h-36 lg:w-9 lg:h-44 transform rotate-6"></div>
        </div>

        {/* Central focal point - Brand logo area */}
        <div className="relative z-10 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center animate-pulse-slow will-change-transform">
          <div className="text-primary font-bold text-lg md:text-xl lg:text-2xl text-center pointer-events-none select-none">
            STEEL
            <br />
            <span className="text-sm md:text-base lg:text-lg opacity-90">EXCELLENCE</span>
          </div>
        </div>

        {/* Additional smaller elements for depth */}
        <div className="absolute animate-steel-sparkle-1 will-change-transform" style={{ transform: 'translateZ(0)' }}>
          <div className="w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-primary rounded-full opacity-60"></div>
        </div>
        <div className="absolute animate-steel-sparkle-2 will-change-transform" style={{ transform: 'translateZ(0)' }}>
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 lg:w-3 lg:h-3 bg-secondary rounded-full opacity-40"></div>
        </div>
        <div className="absolute animate-steel-sparkle-3 will-change-transform" style={{ transform: 'translateZ(0)' }}>
          <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 lg:w-4.5 lg:h-4.5 bg-primary rounded-full opacity-50"></div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg pointer-events-none"></div>

      {/* Reduce motion support */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .animate-steel-float-1,
          .animate-steel-float-2,
          .animate-steel-float-3,
          .animate-steel-float-4,
          .animate-steel-float-5,
          .animate-steel-float-6,
          .animate-steel-sparkle-1,
          .animate-steel-sparkle-2,
          .animate-steel-sparkle-3,
          .animate-pulse-slow {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroAnimation;