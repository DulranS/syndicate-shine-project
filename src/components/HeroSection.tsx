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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
              <Sparkles size={16} className="text-blue-400" />
              <span className="text-sm text-blue-300 font-medium">Colombo, Sri Lanka → Global delivery</span>
            </div>

            {/* Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.05]">
                Serious work.
                <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Zero excuses.
                </span>
              </h1>
              
              <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
                We're a mini agency delivering reliable execution for agencies and businesses. Web development, custom software, AI automation, and digital operations—without the drama.
              </p>
            </div>

            {/* Services chips */}
            <div className="flex flex-wrap gap-3">
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 hover:bg-white/10 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium text-gray-300">{service.label}</span>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all group"
              >
                <span>Start a project</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="#services"
                className="inline-flex items-center gap-2 bg-white/5 text-white border border-white/10 px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all"
              >
                View services
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-6">
              {stats.map((stat, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <div className="w-px h-12 bg-white/10" />}
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Right: Visual mockup */}
          <div className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
              
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="text-xs text-gray-500 font-mono">project-dashboard</div>
                  <div className="w-12"></div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Hero banner */}
                  <div className="relative h-40 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                    <div className="relative h-full flex flex-col items-center justify-center">
                      <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                        <Code2 className="w-8 h-8 text-white" />
                      </div>
                      <div className="h-2 w-24 bg-white/30 rounded"></div>
                    </div>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: '12', label: 'Active', color: 'from-blue-500 to-blue-600' },
                      { value: '28', label: 'Done', color: 'from-purple-500 to-purple-600' },
                      { value: '94%', label: 'Speed', color: 'from-green-500 to-green-600' }
                    ].map((item, i) => (
                      <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10">
                        <div className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-1`}>
                          {item.value}
                        </div>
                        <div className="text-xs text-gray-500">{item.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Task items */}
                  <div className="space-y-3">
                    {[
                      { task: 'API Integration', progress: 85, status: 'deploying' },
                      { task: 'UI Components', progress: 60, status: 'in progress' },
                      { task: 'Testing', progress: 100, status: 'complete' }
                    ].map((item, i) => (
                      <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-300">{item.task}</span>
                          <span className="text-xs text-gray-500">{item.status}</span>
                        </div>
                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000"
                            style={{ width: `${item.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom action */}
                  <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">Ready to deploy</div>
                        <div className="text-xs text-gray-500">All checks passed</div>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-500" />
                  </div>
                </div>
              </div>

              {/* Floating accent cards */}
              <div 
                className="absolute -top-6 -right-6 w-28 h-28 rounded-2xl bg-blue-500/20 backdrop-blur-sm border border-blue-500/20"
                style={{ animation: 'float 6s ease-in-out infinite' }}
              ></div>
              <div 
                className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-purple-500/20 backdrop-blur-sm border border-purple-500/20"
                style={{ animation: 'float 7s ease-in-out infinite', animationDelay: '1s' }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;