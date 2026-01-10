import { ArrowRight, Code2, Cpu, Zap, Layers, CheckCircle2, Sparkles } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    { icon: Code2, label: 'Web Dev' },
    { icon: Layers, label: 'Software' },
    { icon: Cpu, label: 'AI Automation' },
    { icon: Zap, label: 'Digital Ops' }
  ];

  const stats = [
    { value: '< 48h', label: 'Response time' },
    { value: '100%', label: 'On-time delivery' },
    { value: 'Global', label: 'Client base' }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
        backgroundSize: '64px 64px'
      }}></div>

      {/* Minimal glow accents */}
      <div className="absolute top-0 left-1/4 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-blue-500/[0.08] rounded-full filter blur-[140px]"></div>
      <div className="absolute bottom-0 right-1/3 w-[250px] sm:w-[350px] lg:w-[400px] h-[250px] sm:h-[350px] lg:h-[400px] bg-violet-500/[0.06] rounded-full filter blur-[120px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 max-w-[1400px]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div className={`space-y-6 sm:space-y-8 lg:space-y-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-slate-800/60 border border-slate-700/50 backdrop-blur-sm">
              <Sparkles size={14} className="sm:w-4 sm:h-4 text-blue-400" />
              <span className="text-xs sm:text-sm text-slate-300 font-medium">Colombo, Sri Lanka → Global delivery</span>
            </div>

            {/* Headline */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-7">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                Your deadlines met.
                <span className="block mt-2 sm:mt-3 text-blue-400">
                  Your clients happy.
                </span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed max-w-xl font-light">
                Stop explaining delays to your clients. We're the technical team agencies hire when they need work done right, on time, every time. Web apps, AI automation, custom software—delivered in weeks, not months.
              </p>
            </div>

            {/* Services chips */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2 sm:gap-2.5 px-3 sm:px-5 py-2 sm:py-3 rounded-lg bg-slate-800/40 border border-slate-700/40 hover:border-slate-600/60 hover:bg-slate-800/60 transition-all duration-300"
                  >
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
                    <span className="text-xs sm:text-sm font-medium text-slate-300">{service.label}</span>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2">
              <a 
                href="https://cal.com/syndicate-solutions/15min"
                className="inline-flex items-center justify-center gap-2 sm:gap-2.5 bg-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20 text-sm sm:text-base"
              >
                <span>Book a free call</span>
                <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              
              <a 
                href="#services"
                className="inline-flex items-center justify-center gap-2 sm:gap-2.5 bg-slate-800/60 text-white border border-slate-700/50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-slate-800/80 hover:border-slate-600/60 transition-all text-sm sm:text-base"
              >
                View services
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 lg:gap-10 pt-6 sm:pt-8 border-t border-slate-800/60">
              {stats.map((stat, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <div className="hidden sm:block w-px h-12 sm:h-14 bg-slate-800/60" />}
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-1.5">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-slate-500 font-medium">{stat.label}</div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Right: Visual mockup */}
          <div className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} mt-8 lg:mt-0`}>
            <div className="relative">
              {/* Subtle glow */}
              <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-br from-blue-500/10 via-transparent to-violet-500/10 rounded-3xl blur-2xl"></div>
              
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-slate-700/50 overflow-hidden shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-700/50 bg-slate-800/40">
                  <div className="flex gap-1.5 sm:gap-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-slate-600"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-slate-600"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-slate-600"></div>
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-500 font-mono">project-dashboard</div>
                  <div className="w-8 sm:w-12"></div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-5">
                  {/* Hero banner */}
                  <div className="relative h-32 sm:h-40 lg:h-44 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 overflow-hidden">
                    <div className="relative h-full flex flex-col items-center justify-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-3 sm:mb-4 border border-white/10">
                        <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <div className="h-2 sm:h-2.5 w-20 sm:w-28 bg-white/25 rounded-full"></div>
                    </div>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {[
                      { value: '12', label: 'Active', color: 'text-blue-400' },
                      { value: '28', label: 'Done', color: 'text-violet-400' },
                      { value: '94%', label: 'Speed', color: 'text-emerald-400' }
                    ].map((item, i) => (
                      <div key={i} className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-slate-800/40 border border-slate-700/40">
                        <div className={`text-xl sm:text-2xl font-bold ${item.color} mb-0.5 sm:mb-1`}>
                          {item.value}
                        </div>
                        <div className="text-[10px] sm:text-xs text-slate-500 font-medium">{item.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Task items */}
                  <div className="space-y-2 sm:space-y-3">
                    {[
                      { task: 'API Integration', progress: 85, status: 'deploying' },
                      { task: 'UI Components', progress: 60, status: 'in progress' },
                      { task: 'Testing', progress: 100, status: 'complete' }
                    ].map((item, i) => (
                      <div key={i} className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-slate-800/40 border border-slate-700/40">
                        <div className="flex items-center justify-between mb-2 sm:mb-3">
                          <span className="text-xs sm:text-sm font-medium text-slate-200">{item.task}</span>
                          <span className="text-[10px] sm:text-xs text-slate-500 font-medium">{item.status}</span>
                        </div>
                        <div className="h-1.5 sm:h-2 bg-slate-700/40 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-500 to-violet-500 rounded-full transition-all duration-1000"
                            style={{ width: `${item.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom action */}
                  <div className="flex items-center justify-between p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-500/10 to-violet-500/10 border border-blue-500/20">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-blue-500/15 flex items-center justify-center border border-blue-500/20">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-white">Ready to deploy</div>
                        <div className="text-[10px] sm:text-xs text-slate-500 font-medium">All checks passed</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500" />
                  </div>
                </div>
              </div>

              {/* Subtle floating accents */}
              <div 
                className="hidden lg:block absolute -top-8 -right-8 w-28 h-28 xl:w-32 xl:h-32 rounded-2xl bg-blue-500/5 backdrop-blur-sm border border-blue-500/10"
                style={{ animation: 'float 8s ease-in-out infinite' }}
              ></div>
              <div 
                className="hidden lg:block absolute -bottom-8 -left-8 w-32 h-32 xl:w-36 xl:h-36 rounded-2xl bg-violet-500/5 backdrop-blur-sm border border-violet-500/10"
                style={{ animation: 'float 9s ease-in-out infinite', animationDelay: '1s' }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;