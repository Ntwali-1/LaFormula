import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import logo from '@/assets/logo.png';

export const Footer = () => {
  return (
    <footer className="relative bg-background-light border-t border-border/20 py-16 px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-t from-secondary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="La Formula" className="h-12 w-12" />
              <span className="text-xl font-bold gradient-text">LA FORMULA</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Enhancing business efficiency and competitiveness with specialized B2B solutions. Your success is our formula.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center hover:shadow-glow transition-all duration-300">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center hover:shadow-glow transition-all duration-300">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center hover:shadow-glow transition-all duration-300">
                <Facebook className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold gradient-text">Services</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Process Optimization</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Corporate Solutions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Corporate Structure</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Portfolio Management</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Global Centralization</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Asset Banking</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold gradient-text">Company</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">News</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold gradient-text">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-card rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground">info@laformulacg.net</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-card rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-card rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Office</p>
                  <p className="text-foreground">Global Business Center</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/20 text-center">
          <p className="text-muted-foreground">
            © 2024 La Formula CG. All rights reserved. | 
            <a href="#" className="ml-1 hover:text-primary transition-colors">Privacy Policy</a> | 
            <a href="#" className="ml-1 hover:text-primary transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};