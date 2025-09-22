import { BarChart3, Building2, Cog, Briefcase, Globe, DollarSign } from 'lucide-react';

const services = [
  {
    icon: Cog,
    title: 'Optimizing',
    subtitle: 'Processes',
    description: 'We achieve outstanding results by enhancing processes and efficiently managing costs.',
    gradient: 'from-primary to-secondary'
  },
  {
    icon: Building2,
    title: 'Corporate',
    subtitle: 'Solutions',
    description: 'Our corporate solutions possess the necessary potential to propel your organization forward.',
    gradient: 'from-secondary to-accent'
  },
  {
    icon: BarChart3,
    title: 'Corporate',
    subtitle: 'Structure',
    description: 'We develop the corporate and financial structure of your business, optimizing your resources to the highest level.',
    gradient: 'from-accent to-primary'
  },
  {
    icon: Briefcase,
    title: 'Top-level',
    subtitle: 'Portfolio',
    description: 'We have a portfolio of first-class clients and suppliers, facilitating business relationships.',
    gradient: 'from-primary to-accent'
  },
  {
    icon: Globe,
    title: 'Global Business',
    subtitle: 'Centralization',
    description: 'Global-level business structures, centralized for easy and remote management.',
    gradient: 'from-secondary to-primary'
  },
  {
    icon: DollarSign,
    title: 'Assets',
    subtitle: 'Banking',
    description: 'Strategic banking agreements for enhanced asset management.',
    gradient: 'from-accent to-secondary'
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Professional Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive B2B solutions designed to enhance your business efficiency and drive sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="service-card group"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fade-in-up 0.6s ease-out forwards'
                }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:animate-pulse-glow transition-all duration-500`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {service.title}
                  </h3>
                  <h4 className="text-xl font-semibold gradient-text">
                    {service.subtitle}
                  </h4>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};