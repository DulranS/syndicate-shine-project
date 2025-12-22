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
    color: "#3BB4FF",
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
    color: "#22C55E",
    impact: "Data-Driven Business Profitability Insights"
  },
  {
    id: 2,
    title: "OurSupply (Internal Supply Tracking System)",
    link: "https://oursupply-test.vercel.app/",
    description: "Internal supply-tracking system built to manage recurring orders, inventory levels, shipments, and cost synchronization with financial analysis tools.",
    image: "/oursupply/oursupply.png",
    tech: ["Next.js", "Supabase", "Supply Chain Management", "Business Process Automation"],
    category: "automation",
    color: "#16A34A",
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
    color: "#00D9FF",
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
    color: "#A78BFA",
    impact: "3x Lead Conversion"
  },
  {
    id: 5,
    title: "LankaMods",
    link: "https://lankamodslk.vercel.app/",
    description: "Premium automotive marketplace with real-time cart system and WhatsApp integration.",
    image: "https://res.cloudinary.com/dcbitedmr/image/upload/v1746343099/lankamod-hero_dyhfk4.png",
    tech: ["Next.js", "Firebase", "WhatsApp API", "Tailwind"],
    category: "ecommerce",
    color: "#FFB800",
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
    id: 7,
    title: "LankaSupply",
    link: "https://lankasupply.vercel.app",
    description: "B2B supplier platform helping startups find manufacturers and scale production.",
    image: "https://res.cloudinary.com/dcbitedmr/image/upload/v1746343113/supply_lpnabd.jpg",
    tech: ["Next.js", "Firebase", "Cloudinary", "WhatsApp API"],
    category: "b2b",
    color: "#FF3B6D",
    impact: "Startup Supply Chain"
  },
  {
    id: 8,
    title: "Syndicate Solutions",
    link: "https://syndicatesolutions.vercel.app/",
    description: "Our own flagship site—custom software, AI automation, and digital services.",
    image: "https://res.cloudinary.com/dcbitedmr/image/upload/v1746343124/synd_x7ssr5.jpg",
    tech: ["Next.js", "Firebase", "WhatsApp API", "Tailwind"],
    category: "web",
    color: "#6366F1",
    impact: "Agency Platform"
  },
  {
    id: 9,
    title: "KQM Estate",
    link: "https://www.kqmestate.com/",
    description: "Modern real estate platform with advanced property search and virtual tours.",
    image: "https://res.cloudinary.com/dcbitedmr/image/upload/v1746343093/kqm_wgu6kv.jpg",
    tech: ["Next.js", "Firebase", "Tailwind", "Resend"],
    category: "realestate",
    color: "#00D9FF",
    impact: "Property Showcase"
  },
  {
    id: 10,
    title: "Sisira Auto Parts",
    link: "https://sisiraautoparts.vercel.app",
    description: "Complete automotive e-commerce with inventory management and order tracking.",
    image: "https://res.cloudinary.com/dcbitedmr/image/upload/v1746343102/sisira_m09s2u.png",
    tech: ["Next.js", "Firebase", "Cloudinary", "Tailwind"],
    category: "ecommerce",
    color: "#A78BFA",
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
    <section className="relative py-32 bg-black overflow-hidden" id="portfolio">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10"></div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
              <Code className="h-4 w-4 text-cyan-400" />
              <span className="text-sm font-medium text-white/80">Real Projects. Real Results.</span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10"></div>
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-6 text-center leading-none">
            <span className="block text-white mb-2">RECENT</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent">
              WORK
            </span>
          </h2>

          <p className="text-xl text-white/60 text-center max-w-3xl mx-auto font-light leading-relaxed">
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
              className={`group relative px-6 py-3 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 ${
                activeCategory === category.id
                  ? "text-black"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {activeCategory === category.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl"></div>
              )}
              {activeCategory !== category.id && (
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300"></div>
              )}
              <span className="relative flex items-center gap-2">
                {category.label}
                <span className={`text-xs ${activeCategory === category.id ? "text-black/70" : "text-white/40"}`}>
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
                animation: `fadeInScale 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s both`
              }}
            >
              <Card className="relative h-full border-0 bg-white/[0.03] backdrop-blur-xl hover:bg-white/[0.06] transition-all duration-700 overflow-hidden rounded-2xl">
                {/* Colored top accent */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1 opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: project.color }}
                ></div>

                <CardContent className="p-0">
                  {/* Image Container */}
                  <div className="relative aspect-video overflow-hidden bg-white/5">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                    
                    {/* Impact badge */}
                    <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-black/50 backdrop-blur-md border border-white/10 rounded-lg">
                      <span className="text-xs font-bold text-white">{project.impact}</span>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        View Project
                        <ArrowUpRight className="h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Title */}
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 group-hover:bg-clip-text transition-all duration-300">
                        {project.title}
                      </h3>
                      <ExternalLink 
                        className="h-5 w-5 text-white/40 group-hover:text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" 
                      />
                    </div>

                    {/* Description */}
                    <p className="text-white/60 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 text-white/70 rounded-lg group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300"
                          style={{ transitionDelay: `${idx * 30}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>

                {/* Bottom accent line */}
                <div 
                  className="h-px w-0 group-hover:w-full transition-all duration-700 delay-100"
                  style={{ backgroundColor: project.color }}
                ></div>
              </Card>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                Got a project in mind?
              </h3>
              <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
                Let's build something together. Whether it's a complete platform or ongoing support—we deliver.
              </p>
              
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300"
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
            transform: scale(0.95) translateY(20px);
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