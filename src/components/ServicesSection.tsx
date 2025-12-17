import { useState } from "react";
import { Code, Database, Zap, Sparkles, Laptop, Users, ArrowUpRight, Waves, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "15‑min Strategy Call",
    tagline: "Fast alignment",
    description: "Book a focused 15‑minute session to validate fit, clarify outcomes, and agree next steps — no salesy calls, just clear direction.",
    icon: <Clock className="h-8 w-8" />,
    color: "#06B6D4",
    action: "https://cal.com/syndicate-solutions/15min",
    features: ["Quick alignment", "Scope & next steps", "Budget guidance", "No obligation"]
  },
  {
    title: "Web Development",
    tagline: "Fast sites that convert.",
    description: "High-performance web experiences focused on speed and conversion — landing pages that sell, apps that scale, and clean code that stays fast.",
    icon: <Code className="h-8 w-8" />,
    color: "#00D9FF",
    features: ["High-converting landing pages", "React & Next.js", "Performance & SEO", "Server & API integration"]
  },
  {
    title: "Custom Software",
    tagline: "Built to fit your workflow.",
    description: "Custom tools that remove friction and unlock value — CRMs, dashboards, booking systems, and internal apps designed around how your team works.",
    icon: <Laptop className="h-8 w-8" />,
    color: "#A78BFA",
    features: ["Bespoke CRMs & dashboards", "Business process automation", "SaaS & multi-platform apps", "Integrations & APIs"]
  },
  {
    title: "AI Automation",
    tagline: "Automate the repetitive.",
    description: "AI that handles repetitive tasks and surfaces insights — document processing, lead scoring, smart assistants, and intelligent workflows.",
    icon: <Sparkles className="h-8 w-8" />,
    color: "#FFB800",
    features: ["AI-driven workflows", "Conversational interfaces", "Document & data extraction", "Automated lead qualification"]
  },
  {
    title: "Data & Analytics",
    tagline: "Insights that guide growth.",
    description: "Actionable dashboards and reporting that tell you what to double down on — clear metrics, fast answers, and predictive signals.",
    icon: <Database className="h-8 w-8" />,
    color: "#10B981",
    features: ["Real-time dashboards", "Custom KPIs & reporting", "Data pipelines & ETL", "Predictive analytics"]
  },
  {
    title: "Digital Operations",
    tagline: "Keep your stack healthy.",
    description: "We run the day-to-day so you don’t have to — monitoring, incident response, performance tuning and security with SLAs you can trust.",
    icon: <Zap className="h-8 w-8" />,
    color: "#FF3B6D",
    features: ["24/7 monitoring & alerts", "Performance tuning", "Security & patching", "SLA-backed support"]
  },
  {
    title: "Agency Partnership",
    tagline: "Your technical co-pilot.",
    description: "White-label engineering and flexible capacity to scale delivery without hiring — reliable, consistent execution that keeps your clients happy.",
    icon: <Users className="h-8 w-8" />,
    color: "#6366F1",
    features: ["White-label delivery", "Scalable engineering teams", "Fast turnaround", "Quality-first process"]
  }
];

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative py-32 bg-black overflow-hidden" id="services">
      {/* Syndicate brand elements */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px]"></div>
        
        {/* Diagonal accent lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
          <div className="absolute top-40 right-0 w-1/2 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
          <div className="absolute bottom-40 left-0 w-2/3 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
        </div>

        {/* Ambient glows */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with brand identity */}
        <div className="max-w-5xl mx-auto mb-24">
          {/* Location badge */}
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10"></div>
            <div className="flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
              <Waves className="h-4 w-4 text-cyan-400" />
              <span className="text-sm font-medium text-white/80">Colombo, Sri Lanka</span>
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10"></div>
          </div>
          
          {/* Main headline */}
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black mb-8 leading-tight md:leading-none text-center">
            <span className="block text-white mb-2 text-sm sm:text-base md:text-lg">ACCELERATE</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent animate-gradient text-2xl sm:text-4xl md:text-6xl">
              GROWTH WITH TECH THAT DELIVERS
            </span>
          </h2>

          {/* Brand tagline */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-cyan-400"></div>
            <p className="text-xl md:text-2xl text-white/60 font-light tracking-wide uppercase">
              Reliable tech. Measurable outcomes.
            </p>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-purple-400"></div>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed text-center max-w-4xl mx-auto font-light">
            We design, build, and operate software that drives revenue and reduces risk. From conversion-first sites to AI workflows — deploy faster, iterate smarter, and scale with confidence.
          </p>
        </div>

        {/* Services Grid with brand styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
              style={{
                animation: `slideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s both`
              }}
            >
              {/* Card with custom styling */}
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
                className={`relative h-full border-0 bg-white/[0.03] backdrop-blur-xl hover:bg-white/[0.06] transition-all duration-700 overflow-hidden rounded-2xl ${service.action ? 'cursor-pointer' : ''}`}
              >
                {/* Colored top border */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1 opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: service.color }}
                ></div>

                {/* Side accent */}
                <div 
                  className="absolute top-0 left-0 w-1 h-0 group-hover:h-full transition-all duration-700 delay-100"
                  style={{ backgroundColor: service.color }}
                ></div>
                
                {/* Corner glow */}
                <div 
                  className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700"
                  style={{ backgroundColor: service.color }}
                ></div>
                
                <CardContent className="relative p-8">
                  {/* Icon with brand color */}
                  <div className="mb-6">
                    <div 
                      className="inline-flex w-20 h-20 rounded-2xl items-center justify-center transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-700"
                      style={{ 
                        backgroundColor: `${service.color}15`,
                        border: `1px solid ${service.color}30`
                      }}
                    >
                      <div style={{ color: service.color }}>
                        {service.icon}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                    {service.title}
                  </h3>

                  {/* Tagline */}
                  <p 
                    className="text-sm font-semibold mb-4 tracking-wide uppercase"
                    style={{ color: service.color }}
                  >
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-white/60 leading-relaxed mb-6 text-sm">
                    {service.description}
                  </p>

                  {/* Divider */}
                  <div 
                    className="h-px w-16 mb-6 opacity-30 group-hover:w-full group-hover:opacity-60 transition-all duration-700"
                    style={{ backgroundColor: service.color }}
                  ></div>

                  {/* Features */}
                  <div className="space-y-2.5">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 text-sm text-white/40 group-hover:text-white/70 transition-colors duration-500"
                        style={{ transitionDelay: `${idx * 50}ms` }}
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
                  <div className="mt-8 flex items-center gap-2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <span style={{ color: service.color }}>EXPLORE</span>
                    <ArrowUpRight className="h-4 w-4" style={{ color: service.color }} />
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Branded CTA */}
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-12 md:p-16 overflow-hidden">
            {/* Accent corner */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-6 justify-center">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400"></div>
                <span className="text-sm font-bold text-cyan-400 tracking-widest uppercase">Let's Build</span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400"></div>
              </div>

              <h3 className="text-4xl md:text-5xl font-black text-white mb-6 text-center leading-tight">
                Ready to get started?
              </h3>
              
              <p className="text-xl text-white/60 mb-10 text-center max-w-2xl mx-auto">
                No sales pitch. No BS. Just a real conversation about your project and how we can deliver results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://cal.com/syndicate-solutions/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 text-black font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <Clock className="h-5 w-5" />
                  Book 15‑min Call
                </a>

                <a href="#case-studies" className="px-10 py-5 bg-white/5 backdrop-blur-sm border-2 border-white/20 text-white font-bold rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300">
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
            transform: translateY(40px) translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0) translateX(0);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;