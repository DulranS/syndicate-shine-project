import { Linkedin, Twitter, Github, Mail, MapPin, ArrowUpRight, Sparkles, Code, Brain, Zap, Layers } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const services = [
    { icon: Code, label: 'Web Development', desc: 'Responsive & scalable' },
    { icon: Layers, label: 'Custom Software', desc: 'Tailored solutions' },
    { icon: Brain, label: 'AI Automation', desc: 'Intelligent workflows' },
    { icon: Zap, label: 'Digital Ops', desc: 'Ongoing execution' }
  ];
  
  return (
    <footer className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/[0.06] rounded-full filter blur-[140px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-500/[0.05] rounded-full filter blur-[140px]"></div>
      </div>
      
      {/* Minimal grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
        backgroundSize: '64px 64px'
      }}></div>
      
      <div className="relative container mx-auto px-6 sm:px-8 lg:px-12 max-w-[1400px]">
        {/* Premium top section with brand statement */}
        <div className="border-b border-slate-800/60 py-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-slate-800/60 border border-slate-700/50 mb-6">
              <Sparkles size={16} className="text-blue-400" />
              <span className="text-sm text-slate-300 font-medium">Trusted by agencies worldwide</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
              Your execution partner for
              <span className="block mt-2 text-blue-400">
                serious digital work.
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed font-light">
              Syndicate Solutions delivers reliable web development, custom software, AI automation, and ongoing digital operations. Based in Colombo, trusted globally.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-16 border-b border-slate-800/60">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-8">What we deliver</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="group relative">
                  <div className="relative p-6 rounded-xl bg-slate-800/40 border border-slate-700/40 hover:border-slate-600/60 hover:bg-slate-800/60 transition-all duration-300 cursor-pointer">
                    <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                      <Icon size={24} className="text-blue-400" />
                    </div>
                    <h4 className="text-lg font-semibold mb-1 text-white">{service.label}</h4>
                    <p className="text-sm text-slate-500 font-light">{service.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Main Footer Grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">
                Syndicate<span className="text-blue-400">Solutions</span>
              </h3>
              <p className="text-slate-500 text-sm font-medium">Execution without excuses</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <a href="mailto:syndicatesoftwaresolutions@gmail.com" className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-lg bg-slate-800/60 group-hover:bg-blue-500/10 border border-slate-700/40 group-hover:border-blue-500/20 flex items-center justify-center transition-all">
                  <Mail size={18} className="group-hover:text-blue-400 transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-slate-600 uppercase tracking-wider font-medium">Email</p>
                  <p className="text-sm font-medium">syndicatesoftwaresolutions@gmail.com</p>
                </div>
              </a>
              
              <div className="flex items-center gap-3 text-slate-400">
                <div className="w-10 h-10 rounded-lg bg-slate-800/60 border border-slate-700/40 flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-600 uppercase tracking-wider font-medium">Location</p>
                  <p className="text-sm font-medium">Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <a href="#" className="w-11 h-11 rounded-lg bg-slate-800/60 border border-slate-700/40 hover:bg-slate-800/80 hover:border-slate-600/60 flex items-center justify-center transition-all group">
                <Linkedin size={18} className="group-hover:text-blue-400 transition-colors" />
              </a>
              <a href="#" className="w-11 h-11 rounded-lg bg-slate-800/60 border border-slate-700/40 hover:bg-slate-800/80 hover:border-slate-600/60 flex items-center justify-center transition-all group">
                <Twitter size={18} className="group-hover:text-blue-400 transition-colors" />
              </a>
              <a href="#" className="w-11 h-11 rounded-lg bg-slate-800/60 border border-slate-700/40 hover:bg-slate-800/80 hover:border-slate-600/60 flex items-center justify-center transition-all group">
                <Github size={18} className="group-hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>
          
          {/* Navigation Columns */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-6">Company</h4>
            <ul className="space-y-3">
              {['About', 'Work', 'Process', 'Careers'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-2 group">
                    <span>{item}</span>
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-6">Resources</h4>
            <ul className="space-y-3">
              {['Blog', 'Case Studies', 'Tech Stack', 'Contact'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-2 group">
                    <span>{item}</span>
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* CTA Card */}
          <div className="lg:col-span-4">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/10 to-violet-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-blue-500/10 to-violet-500/10 rounded-xl p-8 border border-blue-500/20">
                <h4 className="text-xl font-bold mb-2 tracking-tight">Ready to execute?</h4>
                <p className="text-slate-400 text-sm mb-6 font-light">Let's build something that works.</p>
                <a href="#contact" className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20">
                  <span>Book a free call</span>
                  <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-slate-800/60 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-sm font-light">
              © {currentYear} Syndicate Solutions. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a href="#privacy" className="text-sm text-slate-600 hover:text-white transition-colors">Privacy</a>
              <a href="#terms" className="text-sm text-slate-600 hover:text-white transition-colors">Terms</a>
              <a href="#cookies" className="text-sm text-slate-600 hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;