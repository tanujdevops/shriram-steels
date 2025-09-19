import React from 'react';

const HeroAnimation: React.FC = () => {
  return (
    <div
      className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden"
      role="img"
      aria-label="Dynamic steel manufacturing animation"
    >
      {/* Ambient glow layers - no containers, pure atmosphere */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-conic from-primary/5 via-transparent to-secondary/5 animate-spin-slow"></div>

      {/* Main steel manufacturing scene */}
      <div className="relative w-full h-full">

        {/* Large Steel Beam - Flying diagonally across screen */}
        <div className="absolute animate-steel-beam-fly will-change-transform" style={{ transform: 'translateZ(0)' }}>
          <div className="steel-beam-large w-2 h-64 md:w-3 md:h-80 lg:w-4 lg:h-96"></div>
        </div>

        {/* Rotating Steel Ring - Central focal element */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-steel-ring-rotate will-change-transform">
          <div className="steel-ring w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64"></div>
        </div>

        {/* Multiple steel rods forming geometric patterns */}
        <div className="absolute animate-steel-formation-1 will-change-transform" style={{ transform: 'translateZ(0)' }}>
          <div className="steel-rod-thin w-1 h-24 md:w-1.5 md:h-32 lg:w-2 lg:h-40"></div>
        </div>

        <div className="absolute animate-steel-formation-2 will-change-transform" style={{ transform: 'translateZ(0)' }}>
          <div className="steel-rod-thin w-1 h-24 md:w-1.5 md:h-32 lg:w-2 lg:h-40"></div>
        </div>

        <div className="absolute animate-steel-formation-3 will-change-transform" style={{ transform: 'translateZ(0)' }}>
          <div className="steel-rod-thin w-1 h-24 md:w-1.5 md:h-32 lg:w-2 lg:h-40"></div>
        </div>

        {/* Steel particles - welding sparks effect */}
        <div className="absolute animate-steel-spark-1 will-change-transform">
          <div className="steel-spark w-1 h-1 md:w-1.5 md:h-1.5 lg:w-2 lg:h-2"></div>
        </div>
        <div className="absolute animate-steel-spark-2 will-change-transform">
          <div className="steel-spark w-0.5 h-0.5 md:w-1 md:h-1 lg:w-1.5 lg:h-1.5"></div>
        </div>
        <div className="absolute animate-steel-spark-3 will-change-transform">
          <div className="steel-spark w-1.5 h-1.5 md:w-2 md:h-2 lg:w-2.5 lg:h-2.5"></div>
        </div>
        <div className="absolute animate-steel-spark-4 will-change-transform">
          <div className="steel-spark w-0.5 h-0.5 md:w-0.5 md:h-0.5 lg:w-1 lg:h-1"></div>
        </div>
        <div className="absolute animate-steel-spark-5 will-change-transform">
          <div className="steel-spark w-1 h-1 md:w-1.5 md:h-1.5 lg:w-2 lg:h-2"></div>
        </div>

        {/* Hexagonal steel structure - building/assembling effect */}
        <div className="absolute animate-steel-hex-build will-change-transform" style={{ transform: 'translateZ(0)' }}>
          <div className="steel-hex-structure w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16"></div>
        </div>

        {/* Steel plates - sliding and stacking */}
        <div className="absolute animate-steel-plate-slide-1 will-change-transform">
          <div className="steel-plate w-16 h-3 md:w-24 md:h-4 lg:w-32 lg:h-5"></div>
        </div>
        <div className="absolute animate-steel-plate-slide-2 will-change-transform">
          <div className="steel-plate w-20 h-3 md:w-28 md:h-4 lg:w-36 lg:h-5"></div>
        </div>

        {/* Orbital steel elements - creating dynamic movement */}
        <div className="absolute animate-steel-orbit-1 will-change-transform" style={{ transform: 'translateZ(0)' }}>
          <div className="steel-rod-medium w-1.5 h-12 md:w-2 md:h-16 lg:w-2.5 lg:h-20"></div>
        </div>
        <div className="absolute animate-steel-orbit-2 will-change-transform" style={{ transform: 'translateZ(0)' }}>
          <div className="steel-rod-medium w-1.5 h-12 md:w-2 md:h-16 lg:w-2.5 lg:h-20"></div>
        </div>

        {/* Heat/energy waves - representing steel forging */}
        <div className="absolute animate-heat-wave-1 will-change-transform">
          <div className="heat-wave w-full h-1 md:h-1.5 lg:h-2"></div>
        </div>
        <div className="absolute animate-heat-wave-2 will-change-transform">
          <div className="heat-wave w-full h-1 md:h-1.5 lg:h-2"></div>
        </div>
      </div>

      {/* Seamless edge blending - no visible containers */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/30 via-transparent to-transparent"></div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background/20 via-transparent to-background/40"></div>

      {/* Reduce motion support */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          [class*="animate-"] {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroAnimation;