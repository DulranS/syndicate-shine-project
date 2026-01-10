import { useState } from "react";
import { Code, Database, Zap, Sparkles, Laptop, Users, ArrowUpRight, Waves, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "15‑min Strategy Call",
    tagline: "Fast alignment",
    description: "Book a focused 15‑minute session to validate fit, clarify outcomes, and agree next steps — no salesy calls, just clear direction.",
    icon: <Clock className="h-6 w-6 sm:h-8 sm:w-8" />,
    color: "#3B82F6",
    action: "https://cal.com/syndicate-solutions/15min",
    features: ["Quick alignment", "Scope & next steps", "Budget guidance", "No obligation"]
  },
  {
    title: "Agency Partnership",
    tagline: "Your technical co-pilot.",
    description: "White-label engineering and flexible capacity to scale delivery without hiring — reliable, consistent execution that keeps your clients happy.",
    icon: <Users className="h-6 w-6 sm:h-8 sm:w-8" />,
    color: "#6366F1",
    features: ["White-label delivery", "Scalable engineering teams", "Fast turnaround", "Quality-first process"]
  },
  {
    title: "Web Development",
    tagline: "Fast sites that convert.",
    description: "High-performance web experiences focused on speed and conversion — landing pages that sell, apps that scale, and clean code that stays fast.",
    icon: <Code className="h-6 w-6 sm:h-8 sm:w-8" />,
    color: "#3B82F6",
    features: ["High-converting landing pages", "React & Next.js", "Performance & SEO", "Server & API integration"]
  },
  {
    title: "Custom Software",
    tagline: "Built to fit your workflow.",
    description: "Custom tools that remove friction and unlock value — CRMs, dashboards, booking systems, and internal apps designed around how your team works.",
    icon: <Laptop className="h-6 w-6 sm:h-8 sm:w-8" />,
    color: "#8B5CF6",
    features: ["Bespoke CRMs & dashboards", "Business process automation", "SaaS & multi-platform apps", "Integrations & APIs"]
  },
  {
    title: "AI Automation",
    tagline: "Automate the repetitive.",
    description: "AI that handles repetitive tasks and surfaces insights — document processing, lead scoring, smart assistants, and intelligent workflows.",
    icon: <Sparkles className="h-6 w-6 sm:h-8 sm:w-8" />,
    color: "#F59E0B",
    features: ["AI-driven workflows", "Conversational interfaces", "Document & data extraction", "Automated lead qualification"]
  },
  {
    title: "Data & Analytics",
    tagline: "Insights that guide growth.",
    description: "Actionable dashboards and reporting that tell you what to double down on — clear metrics, fast answers, and predictive signals.",
    icon: <Database className="h-6 w-6 sm:h-8 sm:w-8" />,
    color: "#10B981",
    features: ["Real-time dashboards", "Custom KPIs & reporting", "Data pipelines & ETL", "Predictive analytics"]
  },
];

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden" id="services">
      {/* Minimal background elements */}
      <div className="absolute inset-0">
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }}></div>

        {/* Subtle ambient glows */}
        <div className="absolute top-0 right-1/4 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-blue-500/[0.06] rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 left-1/4 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-violet-500/[0.05] rounded-full blur-[140px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 max-w-[1400px]">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16 sm:mb-20 text-center">
          {/* Location badge */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <div className="flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-2 sm:py-2.5 bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-full">
              <Waves className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-400" />
              <span className="text-xs sm:text-sm font-medium text-slate-300">Colombo, Sri Lanka</span>
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          {/* Main headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-white tracking-tight px-4">
            Accelerate growth with tech that delivers
          </h2>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-slate-400 font-medium mb-6 sm:mb-8 px-4">
            Reliable tech. Measurable outcomes.
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto font-light px-4">
            We design, build, and operate software that drives revenue and reduces risk. From conversion-first sites to AI workflows — deploy faster, iterate smarter, and scale with confidence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 max-w-7xl mx-auto mb-16 sm:mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
              style={{
                animation: `slideIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.08}s both`
              }}
            >
              <Card
                onClick={() => {
                  if (service.action) {
                    window.open(service.action, "_blank");
                  }
                }}
                onKeyDown={(e) => {
                  if (service.action && (e.key === "Enter" || e.key === " ")) {
                    window.open(service.action, "_blank");
                  }
                }}
                role={service.action ? "button" : undefined}
                tabIndex={service.action ? 0 : undefined}
                className={`relative h-full border-0 bg-slate-800/40 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-500 overflow-hidden rounded-xl border border-slate-700/40 hover:border-slate-600/60 ${service.action ? 'cursor-pointer' : ''}`}
              >
                {/* Subtle top accent */}
                <div 
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ 
                    background: `linear-gradient(90deg, transparent, ${service.color}, transparent)`
                  }}
                ></div>
                
                {/* Corner glow on hover */}
                <div 
                  className="absolute -top-24 -right-24 w-48 h-48 rounded-full opacity-0 group-hover:opacity-[0.08] blur-3xl transition-all duration-700"
                  style={{ backgroundColor: service.color }}
                ></div>
                
                <CardContent className="relative p-5 sm:p-6 lg:p-8">
                  {/* Icon */}
                  <div className="mb-4 sm:mb-6">
                    <div 
                      className="inline-flex w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl items-center justify-center transform group-hover:scale-105 transition-all duration-500 border"
                      style={{ 
                        backgroundColor: `${service.color}10`,
                        borderColor: `${service.color}20`
                      }}
                    >
                      <div style={{ color: service.color }}>
                        {service.icon}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight">
                    {service.title}
                  </h3>

                  {/* Tagline */}
                  <p 
                    className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4"
                    style={{ color: service.color }}
                  >
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-slate-400 leading-relaxed mb-4 sm:mb-6 text-sm font-light">
                    {service.description}
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-slate-700/40 mb-4 sm:mb-6"></div>

                  {/* Features */}
                  <div className="space-y-2 sm:space-y-2.5">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm text-slate-500 group-hover:text-slate-400 transition-colors duration-500"
                      >
                        <div 
                          className="w-1 h-1 rounded-full flex-shrink-0"
                          style={{ backgroundColor: service.color }}
                        ></div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover CTA */}
                  {service.action && (
                    <div className="mt-6 sm:mt-8 flex items-center gap-2 text-xs sm:text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <span style={{ color: service.color }}>Learn more</span>
                      <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" style={{ color: service.color }} />
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl sm:rounded-2xl p-8 sm:p-10 lg:p-16 overflow-hidden">
            {/* Subtle corner accent */}
            <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
            
            <div className="relative text-center">
              <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 sm:mb-6">
                <span className="text-xs sm:text-sm font-semibold text-blue-400">Let's Build</span>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight px-4">
                Ready to get started?
              </h3>
              
              <p className="text-base sm:text-lg text-slate-400 mb-8 sm:mb-10 max-w-2xl mx-auto font-light px-4">
                No sales pitch. No BS. Just a real conversation about your project and how we can deliver results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href="https://cal.com/syndicate-solutions/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 sm:gap-2.5 px-6 sm:px-8 py-3 sm:py-4 bg-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-all duration-300 text-sm sm:text-base"
                >
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
                  Book 15‑min Call
                </a>

                <a 
                  href="#case-studies" 
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-slate-800/60 border border-slate-700/50 text-white font-semibold rounded-lg hover:bg-slate-800/80 hover:border-slate-600/60 transition-all duration-300 text-sm sm:text-base"
                >
                  See Case Studies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;