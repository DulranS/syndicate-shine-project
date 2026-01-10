import { Zap, Shield, Target, Rocket, ArrowRight, CheckCircle2, Code2, Sparkles } from 'lucide-react';
import React from 'react';

const AboutSection = () => {
  const principles = [
    {
      icon: <Zap className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Fast Execution",
      description: "We ship fast, iterate faster. No endless meetings or bureaucracy."
    },
    {
      icon: <Shield className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Reliable Delivery",
      description: "When we commit to a deadline, we hit it. Your timeline is sacred to us."
    },
    {
      icon: <Target className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Agency-First",
      description: "Built for agencies who need a partner that gets the stakes and pressure."
    },
    {
      icon: <Rocket className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Modern Stack",
      description: "We use the tools that scale. React, Node, Python, AI APIs - the real stuff."
    }
  ];

  const capabilities = [
    "Full-stack web development",
    "Custom software solutions",
    "AI workflow automation",
    "Ongoing digital operations",
    "White-label execution",
    "Technical consulting"
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Minimal background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-blue-500/[0.06] rounded-full filter blur-[140px]"></div>
        <div className="absolute bottom-1/4 right-0 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-violet-500/[0.05] rounded-full filter blur-[140px]"></div>
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
        backgroundSize: '64px 64px'
      }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 max-w-[1400px]">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-slate-800/60 border border-slate-700/50 mb-4 sm:mb-6">
            <Sparkles size={14} className="sm:w-4 sm:h-4 text-blue-400" />
            <span className="text-xs sm:text-sm text-slate-300 font-medium">Who we are</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight">
            We're not an agency.
            <span className="block mt-2 text-blue-400">
              We're your execution team.
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed font-light">
            Syndicate Solutions is a Colombo-based execution partner for agencies and businesses who need serious technical work done right. No fluff, no excuses—just reliable delivery on web dev, custom software, AI automation, and digital ops.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-14 lg:gap-16 items-start mb-16 sm:mb-20">
          {/* Left: Story & Values */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 tracking-tight">Built for speed and reliability</h3>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-slate-400 leading-relaxed font-light">
                <p>
                  Founded in 2024, we've worked with agencies and mid-sized businesses who needed one thing: a technical partner they could actually depend on.
                </p>
                <p>
                  We don't do sales pitches or endless discovery calls. You tell us what needs to be built, we scope it honestly, then we execute. Our team lives in modern stacks—React, Next.js, Python, AI APIs—and we ship production-ready code that scales.
                </p>
                <p>
                  Based in Sri Lanka with global clients, we operate in your timezone, speak your language (literally and technically), and treat your deadlines like our own.
                </p>
              </div>
            </div>

            {/* What we actually do */}
            <div className="bg-slate-800/40 border border-slate-700/40 rounded-xl p-6 sm:p-8">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Code2 size={18} className="sm:w-5 sm:h-5 text-blue-400" />
                What we actually do
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {capabilities.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 size={14} className="sm:w-4 sm:h-4 text-blue-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-blue-500/20 rounded-xl p-6 sm:p-8">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 tracking-tight">Need reliable execution?</h4>
              <p className="text-sm sm:text-base text-slate-400 mb-5 sm:mb-6 font-light">Let's talk about your next project. No sales calls, just straight talk about what's possible.</p>
              <a href="#contact" className="inline-flex items-center gap-2 bg-blue-500 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20 text-sm sm:text-base">
                <span>Start a conversation</span>
                <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
            </div>
          </div>

          {/* Right: Principles Grid */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 tracking-tight">How we work</h3>
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              {principles.map((principle, idx) => (
                <div key={idx} className="group relative">
                  <div className="relative bg-slate-800/40 border border-slate-700/40 hover:border-slate-600/60 hover:bg-slate-800/60 rounded-xl p-5 sm:p-6 transition-all duration-300">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                        <div className="text-blue-400">
                          {principle.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">{principle.title}</h4>
                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">{principle.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8">
              <div className="bg-slate-800/40 border border-slate-700/40 rounded-lg p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1 sm:mb-2">2024</div>
                <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider font-medium">Founded</div>
              </div>
              <div className="bg-slate-800/40 border border-slate-700/40 rounded-lg p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1 sm:mb-2">24/7</div>
                <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider font-medium">Support</div>
              </div>
              <div className="bg-slate-800/40 border border-slate-700/40 rounded-lg p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1 sm:mb-2">100%</div>
                <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider font-medium">Remote</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom banner */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-blue-500/10 rounded-xl sm:rounded-2xl blur-xl"></div>
          <div className="relative bg-slate-800/40 border border-slate-700/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="max-w-3xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
                Stop searching. Start building.
              </h3>
              <p className="text-base sm:text-lg text-slate-400 mb-5 sm:mb-6 font-light">
                If you're an agency or business tired of unreliable partners, overpromising freelancers, and missed deadlines—let's work together.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-blue-500 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20 text-sm sm:text-base">
                  <span>Get in touch</span>
                  <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
                </a>
                <a href="#services" className="inline-flex items-center justify-center gap-2 bg-slate-800/60 text-white border border-slate-700/50 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-slate-800/80 hover:border-slate-600/60 transition-all text-sm sm:text-base">
                  <span>View services</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;