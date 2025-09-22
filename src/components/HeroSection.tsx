import { NetworkBackground } from './NetworkBackground';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <NetworkBackground />
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background-light" style={{ zIndex: 2 }} />
      
      {/* Floating elements */}
      <div className="absolute inset-0" style={{ zIndex: 2 }}>
        <div className="floating-element" style={{ top: '20%', left: '10%', animationDelay: '0s' }} />
        <div className="floating-element" style={{ top: '60%', left: '85%', animationDelay: '2s' }} />
        <div className="floating-element" style={{ top: '30%', left: '70%', animationDelay: '4s' }} />
        <div className="floating-element" style={{ top: '70%', left: '20%', animationDelay: '1s' }} />
        <div className="floating-element" style={{ top: '15%', left: '60%', animationDelay: '3s' }} />
        <div className="floating-element" style={{ top: '80%', left: '50%', animationDelay: '5s' }} />
      </div>

      {/* Content */}
      <div className="relative text-center px-4 max-w-5xl mx-auto" style={{ zIndex: 10 }}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 animate-fade-in-up">
          We enhance your efficiency and competitiveness with specialized{' '}
          <span className="gradient-text-glow">B2B solutions.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Optimizing processes and efficiently managing costs to achieve outstanding results for your organization.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
          <button className="btn-hero">
            Discover Our Services
          </button>
          <button className="px-8 py-4 font-semibold text-foreground border border-border/40 rounded-xl hover:bg-card/20 transition-all duration-300 hover:border-primary/50">
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" style={{ zIndex: 10 }}>
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-primary rounded-full mt-2 animate-pulse-glow" />
        </div>
      </div>
    </section>
  );
};