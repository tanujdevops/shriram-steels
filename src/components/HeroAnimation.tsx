import React from 'react';

const HeroAnimation: React.FC = () => {
  return (
    <div
      className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden"
      role="img"
      aria-label="Shriram Steels manufacturing process - from raw steel to premium products"
    >
      {/* Industrial forge atmosphere */}
      <div className="absolute inset-0 bg-gradient-radial from-orange-500/5 via-primary/5 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/3 to-transparent animate-pulse-slow"></div>

      {/* Main manufacturing story */}
      <div className="relative w-full h-full">

        {/* Stage 1: Raw Steel Ingot Entry */}
        <div className="absolute animate-raw-ingot-entry will-change-transform" style={{ transform: 'translateZ(0)' }}>
          <div className="raw-steel-ingot w-8 h-20 md:w-12 md:h-28 lg:w-16 lg:h-36"></div>
        </div>

        {/* Stage 2: Heating Process - Forge Fire */}
        <div className="absolute animate-forge-heating will-change-transform">
          <div className="forge-fire w-16 h-8 md:w-24 md:h-12 lg:w-32 lg:h-16"></div>
        </div>

        {/* Stage 3: Manufacturing Sparks - Quality Forging */}
        <div className="absolute animate-forging-spark-1 will-change-transform">
          <div className="forging-spark w-1 h-1 md:w-2 md:h-2 lg:w-3 lg:h-3"></div>
        </div>
        <div className="absolute animate-forging-spark-2 will-change-transform">
          <div className="forging-spark w-0.5 h-0.5 md:w-1 md:h-1 lg:w-2 lg:h-2"></div>
        </div>
        <div className="absolute animate-forging-spark-3 will-change-transform">
          <div className="forging-spark w-1.5 h-1.5 md:w-2.5 md:h-2.5 lg:w-3.5 lg:h-3.5"></div>
        </div>

        {/* Stage 4: Product Formation - The 6 Premium Products */}

        {/* Black Bars */}
        <div className="absolute animate-product-black-bar will-change-transform" style={{ transform: 'translateZ(0)' }}>
          <div className="product-black-bar w-3 h-16 md:w-4 md:h-24 lg:w-5 lg:h-32"></div>
        </div>

        {/* Bright Round Bars */}
        <div className="absolute animate-product-round-bar will-change-transform" style={{ transform: 'translateZ(0)' }}>
          <div className="product-round-bar w-3 h-16 md:w-4 md:h-24 lg:w-5 lg:h-32"></div>
        </div>

        {/* Bright Flat Bars */}
        <div className="absolute animate-product-flat-bar will-change-transform" style={{ transform: 'translateZ(0)' }}>
          <div className="product-flat-bar w-8 h-2 md:w-12 md:h-3 lg:w-16 lg:h-4"></div>
        </div>

        {/* Bright Hex Bars */}
        <div className="absolute animate-product-hex-bar will-change-transform" style={{ transform: 'translateZ(0)' }}>
          <div className="product-hex-bar w-4 h-16 md:w-6 md:h-24 lg:w-8 lg:h-32"></div>
        </div>

        {/* Bright Square Bars */}
        <div className="absolute animate-product-square-bar will-change-transform" style={{ transform: 'translateZ(0)' }}>
          <div className="product-square-bar w-4 h-16 md:w-6 md:h-24 lg:w-8 lg:h-32"></div>
        </div>

        {/* Alloy Steel */}
        <div className="absolute animate-product-alloy-steel will-change-transform" style={{ transform: 'translateZ(0)' }}>
          <div className="product-alloy-steel w-3 h-18 md:w-4 md:h-26 lg:w-5 lg:h-34"></div>
        </div>

        {/* Stage 5: Quality Control - Precision Inspection */}
        <div className="absolute animate-quality-scanner will-change-transform">
          <div className="quality-scanner w-1 h-full"></div>
        </div>

        {/* Stage 6: Premium Finish - Polishing Effect */}
        <div className="absolute animate-polish-shine-1 will-change-transform">
          <div className="polish-shine w-2 h-20 md:w-3 md:h-30 lg:w-4 lg:h-40"></div>
        </div>
        <div className="absolute animate-polish-shine-2 will-change-transform">
          <div className="polish-shine w-2 h-20 md:w-3 md:h-30 lg:w-4 lg:h-40"></div>
        </div>

        {/* Stage 7: Final Product Assembly - Showcase Formation */}
        <div className="absolute animate-final-assembly will-change-transform">
          <div className="assembly-glow w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64"></div>
        </div>

        {/* Continuous Production Cycle Indicator */}
        <div className="absolute animate-production-cycle will-change-transform">
          <div className="cycle-indicator w-full h-0.5 md:h-1 lg:h-1.5"></div>
        </div>
      </div>

      {/* Seamless integration with background */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background/10 via-transparent to-background/30"></div>

      {/* Accessibility */}
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