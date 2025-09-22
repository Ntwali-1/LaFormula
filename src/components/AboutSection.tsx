import { CheckCircle, Target, Users, Award } from 'lucide-react';

const highlights = [
  {
    icon: Target,
    title: 'Strategic Focus',
    description: 'Tailored B2B solutions that align with your business objectives'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Industry professionals with proven track records in corporate consulting'
  },
  {
    icon: Award,
    title: 'Quality Results',
    description: 'Consistently delivering exceptional outcomes for our clients'
  },
  {
    icon: CheckCircle,
    title: 'Proven Process',
    description: 'Systematic approach to optimization and growth implementation'
  }
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-primary/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-secondary/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                About <span className="gradient-text">La Formula Capital Group</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                We are a specialized consulting firm dedicated to enhancing business efficiency and competitiveness through innovative B2B solutions. Our comprehensive approach combines strategic planning, process optimization, and cutting-edge technology to deliver measurable results.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a focus on corporate structure development, global business centralization, and strategic partnerships, we empower organizations to achieve their full potential in today's competitive marketplace.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-xl glass-card hover-glow"
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      animation: 'scale-in 0.5s ease-out forwards'
                    }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="btn-hero">
              Get Started Today
            </button>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative z-10 glass-card p-8 rounded-3xl">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">15+</div>
                  <div className="text-muted-foreground">Years of Experience</div>
                </div>
                <div className="h-px bg-gradient-primary w-full" />
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">500+</div>
                  <div className="text-muted-foreground">Successful Projects</div>
                </div>
                <div className="h-px bg-gradient-primary w-full" />
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">98%</div>
                  <div className="text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full opacity-20 animate-pulse-glow" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-secondary to-accent rounded-full opacity-10 animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
};