import logoPhone from '@/assets/logo-original.png';

export const ProcessOptimizationSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Left */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Optimizing{' '}
                <span className="gradient-text-glow block">Processes</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We achieve outstanding results by enhancing processes and efficiently managing costs.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Process Enhancement
                  </h3>
                  <p className="text-muted-foreground">
                    Streamline operations through systematic analysis and optimization
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Cost Management
                  </h3>
                  <p className="text-muted-foreground">
                    Efficient resource allocation and cost reduction strategies
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Outstanding Results
                  </h3>
                  <p className="text-muted-foreground">
                    Measurable improvements in efficiency and performance
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Mockup Right */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-72 h-[580px] bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-[3rem] p-3 shadow-2xl border border-gray-700 transform rotate-12 hover:rotate-6 transition-transform duration-700 animate-float-phone">
                {/* Screen */}
                <div className="w-full h-full bg-gradient-to-br from-background to-background-light rounded-[2.5rem] p-8 flex flex-col items-center justify-center border border-border/20 relative overflow-hidden">
                  {/* Screen Content */}
                  <div className="relative z-10 flex flex-col items-center justify-center">
                    <img src='https://www.laformulacg.net/images/brand/Mobile%20Formula.svg' alt="La Formula Capital Group" className="w-32 h-auto animate-pulse-glow" />
                  </div>
                  
                  {/* Screen Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-primary opacity-5 animate-pulse" />
                </div>
                
                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full" />
              </div>
              
              {/* Phone Shadow/Glow */}
              <div className="absolute inset-0 bg-gradient-primary rounded-[3rem] opacity-0 blur-2xl animate-pulse-glow" style={{ transform: 'rotate(150deg)' }} />
              
              {/* Floating Elements Around Phone */}
              <div className="absolute -top-8 -left-8 w-4 h-4 bg-gradient-primary rounded-full animate-float opacity-60" style={{ animationDelay: '10s' }} />
              <div className="absolute -bottom-12 -right-6 w-6 h-6 bg-gradient-to-r from-secondary to-accent rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }} />
              <div className="absolute top-1/3 -right-12 w-3 h-3 bg-accent rounded-full animate-float opacity-50" style={{ animationDelay: '10s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};