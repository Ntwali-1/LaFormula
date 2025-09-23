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
         {/* Phone Mockup Right */}
<div className="relative flex justify-center lg:justify-end perspective-[2000px]">
  <div className="relative">
    {/* Back Phone */}
    <div
      className="absolute top-10 left-10 w-72 h-[580px] bg-gradient-to-b from-gray-700 via-gray-800 to-black rounded-[3rem] p-3 shadow-xl border border-gray-600"
      style={{
        transform: 'rotateX(18deg) rotateY(15deg) rotateZ(-6deg) scale(0.9)',
        transformStyle: 'preserve-3d',
      }}
    >
      <div className="w-full h-full bg-background rounded-[2.5rem]" />
    </div>

    {/* Front Phone */}
    <div
      className="relative w-72 h-[580px] bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-[3rem] p-3 shadow-2xl border border-gray-700"
      style={{
        transform: 'rotateX(20deg) rotateY(-15deg) rotateZ(5deg) scale(0.95)',
        transformStyle: 'preserve-3d',
      }}
    >
      <div className="w-full h-full bg-background rounded-[2.5rem] flex flex-col items-center justify-center relative overflow-hidden">
        <img
          src='https://www.laformulacg.net/images/brand/Mobile%20Formula.svg'
          alt="La Formula Capital Group"
          className="w-32 h-auto relative z-10"
        />
        <div className="absolute inset-0 bg-gradient-primary opacity-10 animate-pulse-slow" />
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full" />
    </div>
  </div>
</div>



        </div>
      </div>
    </section>
  );
};