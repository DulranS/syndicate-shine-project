import { useState, useMemo } from "react";
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
    id: 7,
    title: "Beyond Solutions",
    link: "https://beyondsolutions.lk/",
    description: "Elite strategic marketing and event management platform serving top-tier corporate clients including major banks and Fortune 500 companies across Sri Lanka.",
    image: "https://res.cloudinary.com/djtughtme/image/upload/v1768784361/490923676_122285575676139593_2088061797533241125_n_vvx0vl.jpg",
    tech: ["Next.js", "Tailwind", "WhatsApp API", "Marketing Automation"],
    category: "b2b",
    color: "#DC2626",
    impact: "300+ BTL Campaigns"
  },
  {
    id: 8,
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
    id: 9,
    title: "Sisira Auto Parts (No Backend)",
    link: "https://sisiraautoparts.vercel.app",
    description: "Complete automotive e-commerce with inventory management and order tracking.",
    image: "https://res.cloudinary.com/dcbitedmr/image/upload/v1746343102/sisira_m09s2u.png",
    tech: ["Next.js", "Firebase", "Cloudinary", "Tailwind"],
    category: "ecommerce",
    color: "#8B5CF6",
    impact: "Parts Inventory"
  }
];

// Seeded random shuffle based on first letter of user's name or any string
const seededShuffle = (array, seed) => {
  const arr = [...array];
  let currentIndex = arr.length;
  let randomIndex;

  // Convert seed to number
  let seedNum = 0;
  for (let i = 0; i < seed.length; i++) {
    seedNum += seed.charCodeAt(i);
  }

  // Simple seeded random function
  const random = () => {
    seedNum = (seedNum * 9301 + 49297) % 233280;
    return seedNum / 233280;
  };

  while (currentIndex !== 0) {
    randomIndex = Math.floor(random() * currentIndex);
    currentIndex--;
    [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
  }

  return arr;
};

const categories = [
  { id: "all", label: "All Work", count: portfolioItems.length },
  { id: "web", label: "Web Apps", count: portfolioItems.filter(p => p.category === "web").length },
  { id: "ecommerce", label: "E-Commerce", count: portfolioItems.filter(p => p.category === "ecommerce").length },
  { id: "marketplace", label: "Marketplaces", count: portfolioItems.filter(p => p.category === "marketplace").length },
  { id: "b2b", label: "B2B Platforms", count: portfolioItems.filter(p => p.category === "b2b").length },
  { id: "automation", label: "Automation", count: portfolioItems.filter(p => p.category === "automation").length },
  { id: "finance", label: "Finance", count: portfolioItems.filter(p => p.category === "finance").length },
  { id: "realestate", label: "Real Estate", count: portfolioItems.filter(p => p.category === "realestate").length },
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredId, setHoveredId] = useState(null);
  const [userSeed] = useState(() => {
    // Generate random seed on mount (could be based on user input, session, etc.)
    return Math.random().toString(36).substring(7);
  });

  // Shuffle portfolio items based on seed
  const shuffledItems = useMemo(() => {
    return seededShuffle(portfolioItems, userSeed);
  }, [userSeed]);

  const filteredItems = activeCategory === "all" 
    ? shuffledItems 
    : shuffledItems.filter(item => item.category === activeCategory);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" id="portfolio">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-400">Real Projects. Real Results.</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            Recent Work
          </h2>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Web platforms, e-commerce systems, marketplaces, and business tools we've built for agencies and direct clients. Live projects. Proven results.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group relative px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? "text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {activeCategory === category.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg" />
              )}
              {activeCategory !== category.id && (
                <div className="absolute inset-0 bg-slate-800/50 rounded-lg group-hover:bg-slate-800 transition-colors" />
              )}
              <span className="relative z-10">
                {category.label} ({category.count})
              </span>
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <Card className="relative h-full bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all duration-300 overflow-hidden">
                {/* Subtle top accent */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ background: project.color }}
                />

                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Impact badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-sm border border-slate-700">
                    <span className="text-xs font-semibold text-blue-400">{project.impact}</span>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                      <ExternalLink className="w-4 h-4 text-white" />
                      <span className="text-sm font-semibold text-white">View Project</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-6 space-y-4">
                  {/* Title */}
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0" />
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-400 line-clamp-3">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 rounded text-xs font-medium bg-slate-800/50 text-slate-300 border border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center space-y-6">
          <div className="inline-block">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              Got a project in mind?
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              Let's build something together. Whether it's a complete platform or ongoing support—we deliver.
            </p>
          </div>

          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:-translate-y-0.5">
            <span className="flex items-center gap-2">
              Start Your Project
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default PortfolioSection;