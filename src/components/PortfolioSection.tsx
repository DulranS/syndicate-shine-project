import { useState } from "react";
import { ArrowUpRight, ExternalLink, Code, Zap, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const portfolioItems = [
  {
    id: 0,
    title: "Mails2Leads (Automation Tool - Private use)",
    link: "http://mails2leadsfvxx.vercel.app/",
    description: "Automated outbound lead generation tool that scrapes fresh Google Maps leads and sends cost-efficient, rate-limited cold emails using Gmail APIs.",
    image: "/mails2leads/mails2leads.png",
    tech: ["Google Maps API", "Gmail API", "Cron Jobs", "Node.js"],
    category: "automation",
    color: "#3B82F6",
    impact: "Fully Automated Weekly Lead Generation"
  },
  {
    id: 1,
    title: "CashFlow (Personal Finance Platform)",
    link: "https://cashflowvxx.vercel.app/",
    description: "Lightweight yet powerful financial tracking platform built to analyze real business performance, profitability over time, loan coverage, budgets, and recurring revenue.",
    image: "/cashflow/cashflow.png",
    tech: ["Next.js", "Firebase", "Chart.js", "Tailwind CSS"],
    category: "finance",
    color: "#10B981",
    impact: "Data-Driven Business Profitability Insights"
  },
  {
    id: 2,
    title: "OurSupply (Internal Supply Tracking System)",
    link: "https://oursupplyvxx.vercel.app/",
    description: "Internal supply-tracking system built to manage recurring orders, inventory levels, shipments, and cost synchronization with financial analysis tools.",
    image: "/oursupply/oursupply.png",
    tech: ["Next.js", "Supabase", "Supply Chain Management", "Business Process Automation"],
    category: "automation",
    color: "#059669",
    impact: "Streamlined Inventory & Cost Control"
  },
  {
    id: 3,
    title: "SpeedLabs",
    link: "https://speedlabs.vercel.app/",
    description: "High-performance tech platform with advanced optimization and user-centric design.",
    image: "https://res.cloudinary.com/dcbitedmr/image/upload/v1746343110/speedlabs_kbkcnu.jpg",
    tech: ["Next.js", "Firebase", "Tailwind", "Resend"],
    category: "web",
    color: "#3B82F6",
    impact: "500+ Active Users"
  },
  {
    id: 4,
    title: "SparkShift",
    link: "https://sparkshift-final.vercel.app/",
    description: "Professional SMMA platform with automated lead capture and seamless client onboarding.",
    image: "https://res.cloudinary.com/dcbitedmr/image/upload/v1746343106/spark_u8z8lp.jpg",
    tech: ["Next.js", "Firebase", "Tailwind", "Resend"],
    category: "web",
    color: "#8B5CF6",
    impact: "3x Lead Conversion"
  },
  {
    id: 5,
    title: "LankaMods",
    link: "https://lkmx.vercel.app/",
    description: "Premium automotive marketplace with real-time cart system and WhatsApp integration.",
    image: "https://res.cloudinary.com/dcbitedmr/image/upload/v1746343099/lankamod-hero_dyhfk4.png",
    tech: ["Next.js", "Firebase", "WhatsApp API", "Tailwind"],
    category: "ecommerce",
    color: "#F59E0B",
    impact: "Custom Parts Catalog"
  },
  {
    id: 6,
    title: "LankanArt",
    link: "https://lankaart.vercel.app",
    description: "Vibrant artist marketplace connecting Sri Lankan creators with buyers worldwide.",
    image: "https://res.cloudinary.com/dcbitedmr/image/upload/v1746343085/art_xf7zas.png",
    tech: ["Next.js", "Firebase", "Cloudinary", "WhatsApp API"],
    category: "marketplace",
    color: "#10B981",
    impact: "Local Artist Hub"
  },
  {
    id: 9,
    title: "KQM Estate",
    link: "https://www.kqmestate.com/",
    description: "Modern real estate platform with advanced property search and virtual tours.",
    image: "https://res.cloudinary.com/dcbitedmr/image/upload/v1746343093/kqm_wgu6kv.jpg",
    tech: ["Next.js", "Firebase", "Tailwind", "Resend"],
    category: "realestate",
    color: "#3B82F6",
    impact: "Property Showcase"
  },
  {
    id: 10,
    title: "Sisira Auto Parts (Demo website)",
    link: "https://sisiraautoparts.vercel.app",
    description: "Complete automotive e-commerce with inventory management and order tracking.",
    image: "https://res.cloudinary.com/dcbitedmr/image/upload/v1746343102/sisira_m09s2u.png",
    tech: ["Next.js", "Firebase", "Cloudinary", "Tailwind"],
    category: "ecommerce",
    color: "#8B5CF6",
    impact: "Parts Inventory"
  }
];


const categories = [
  { id: "all", label: "All Work", count: portfolioItems.length },
  { id: "web", label: "Web Apps", count: portfolioItems.filter(p => p.category === "web").length },
  { id: "ecommerce", label: "E-Commerce", count: portfolioItems.filter(p => p.category === "ecommerce").length },
  { id: "marketplace", label: "Marketplaces", count: portfolioItems.filter(p => p.category === "marketplace").length },
  { id: "b2b", label: "B2B Platforms", count: portfolioItems.filter(p => p.category === "b2b").length },
  { id: "realestate", label: "Real Estate", count: portfolioItems.filter(p => p.category === "realestate").length },
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredId, setHoveredId] = useState(null);

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section className="relative py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden" id="portfolio">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }}></div>
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/[0.06] rounded-full blur-[140px]"></div>
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-violet-500/[0.05] rounded-full blur-[140px]"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 max-w-[1400px]">
        {/* Header */}
        <div className="max-w-5xl mx-auto mb-20 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="flex items-center gap-2.5 px-4 py-2.5 bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-full">
              <Code className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-medium text-slate-300">Real Projects. Real Results.</span>
            </div>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            <span className="block text-white mb-2">Recent</span>
            <span className="block text-blue-400">Work</span>
          </h2>

          <p className="text-lg text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            Web platforms, e-commerce systems, marketplaces, and business tools we've built for agencies and direct clients. 
            <span className="text-white font-normal"> Live projects. Proven results.</span>
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-4xl mx-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group relative px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? "text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {activeCategory === category.id && (
                <div className="absolute inset-0 bg-blue-500 rounded-lg shadow-lg shadow-blue-500/20"></div>
              )}
              {activeCategory !== category.id && (
                <div className="absolute inset-0 bg-slate-800/40 backdrop-blur-sm border border-slate-700/40 rounded-lg group-hover:bg-slate-800/60 group-hover:border-slate-600/60 transition-all duration-300"></div>
              )}
              <span className="relative flex items-center gap-2">
                {category.label}
                <span className={`text-xs ${activeCategory === category.id ? "text-white/70" : "text-slate-500"}`}>
                  ({category.count})
                </span>
              </span>
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto mb-16">
          {filteredItems.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group block"
              style={{
                animation: `fadeInScale 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.08}s both`
              }}
            >
              <Card className="relative h-full border-0 bg-slate-800/40 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-500 overflow-hidden rounded-xl border border-slate-700/40 hover:border-slate-600/60">
                {/* Subtle top accent */}
                <div 
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ 
                    background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`
                  }}
                ></div>

                <CardContent className="p-0">
                  {/* Image Container */}
                  <div className="relative aspect-video overflow-hidden bg-slate-900/60">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                    
                    {/* Impact badge */}
                    <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-lg">
                      <span className="text-xs font-semibold text-white">{project.impact}</span>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-lg shadow-blue-500/20">
                        View Project
                        <ArrowUpRight className="h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Title */}
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <ExternalLink 
                        className="h-5 w-5 text-slate-500 group-hover:text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" 
                      />
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed mb-4 font-light">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-medium bg-slate-700/30 border border-slate-600/40 text-slate-400 rounded-md group-hover:bg-slate-700/50 group-hover:border-slate-600/60 group-hover:text-slate-300 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl"></div>
            
            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                Got a project in mind?
              </h3>
              <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto font-light">
                Let's build something together. Whether it's a complete platform or ongoing support—we deliver.
              </p>
              
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-10 py-5 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/20"
              >
                Start Your Project
                <ChevronRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.96) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default PortfolioSection;