import { useState } from "react";
import { Check, Zap, Rocket, Crown, ArrowRight, Sparkles, TrendingUp, Shield, Shield } from "lucide-react";

const pricingPlans = [
  {
    name: "Launch",
    icon: Zap,
    price: "$2,500",
    period: "one-time",
    description: "Perfect for startups and MVPs",
    color: "from-blue-500 to-cyan-500",
    popular: false,
    features: [
      "Professional landing page or MVP",
      "Mobile-responsive design",
      "Modern tech stack (Next.js/React)",
      "Basic SEO optimization",
      "30 days post-launch support",
      "Source code ownership",
      "3 rounds of revisions",
      "2-3 week delivery"
    ],
    ideal: "New businesses, product launches, portfolio sites"
  },
  {
    name: "Scale",
    icon: Rocket,
    price: "$7,500",
    period: "one-time",
    description: "For established businesses ready to grow",
    color: "from-purple-500 to-pink-500",
    popular: true,
    features: [
      "Full web application or platform",
      "Custom features & integrations",
      "Database & backend setup",
      "Admin dashboard included",
      "90 days priority support",
      "Performance optimization",
      "Security best practices",
      "Unlimited revisions during dev",
      "4-6 week delivery"
    ],
    ideal: "E-commerce, SaaS platforms, marketplaces, business tools"
  },
  {
    name: "Enterprise",
    icon: Crown,
    price: "$15,000+",
    period: "one-time",
    description: "Complex systems built for scale",
    color: "from-orange-500 to-red-500",
    popular: false,
    features: [
      "Multi-platform ecosystem",
      "Advanced automation & AI",
      "Third-party integrations (CRM, payment, etc.)",
      "Scalable cloud infrastructure",
      "6 months dedicated support",
      "Custom API development",
      "Compliance & security audits",
      "Dedicated project manager",
      "8-12 week delivery"
    ],
    ideal: "Large-scale platforms, enterprise solutions, complex automations"
  }
];

const retainerPlans = [
  {
    name: "Growth Partner",
    price: "$3,500",
    period: "per month",
    description: "Ongoing development & support",
    color: "from-emerald-500 to-teal-500",
    hours: "~40 hours/month",
    features: [
      "Dedicated development time",
      "Feature additions & updates",
      "Bug fixes & maintenance",
      "Performance monitoring",
      "Monthly strategy calls",
      "Priority support (24-48hr)",
      "Roll-over unused hours",
      "Cancel anytime (30 days notice)"
    ],
    ideal: "Active platforms needing regular updates"
  },
  {
    name: "Full Stack Team",
    price: "$6,500",
    period: "per month",
    description: "Your extended technical team",
    color: "from-violet-500 to-purple-500",
    hours: "~80 hours/month",
    features: [
      "Full-time development capacity",
      "Multiple simultaneous projects",
      "DevOps & infrastructure",
      "Weekly sprint planning",
      "Bi-weekly demos",
      "Same-day emergency support",
      "Dedicated Slack channel",
      "Team scaling available"
    ],
    ideal: "Agencies, growing SaaS, continuous development needs"
  }
];

const PricingSection = () => {
  const [billingType, setBillingType] = useState("project");

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-12 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" id="pricing">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -left-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
            <TrendingUp className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-semibold text-purple-400">Transparent Pricing</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-purple-100 to-blue-200 bg-clip-text text-transparent">
            Invest in Quality
          </h2>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Premium development at fair prices. We're not the cheapest—we're the best value. Quality work, reliable delivery, transparent pricing.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-1 p-1 rounded-lg bg-slate-800/50 border border-slate-700">
            <button
              onClick={() => setBillingType("project")}
              className={`px-6 py-2 rounded-md font-semibold text-sm transition-all duration-300 ${
                billingType === "project"
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Project-Based
            </button>
            <button
              onClick={() => setBillingType("retainer")}
              className={`px-6 py-2 rounded-md font-semibold text-sm transition-all duration-300 ${
                billingType === "retainer"
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Monthly Retainer
            </button>
          </div>
        </div>

        {/* Project-Based Pricing */}
        {billingType === "project" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pricingPlans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <div
                  key={index}
                  className={`relative group ${
                    plan.popular ? "md:-mt-4 md:mb-4" : ""
                  }`}
                  style={{
                    animation: `fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s both`
                  }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                      <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold shadow-lg">
                        <Sparkles className="w-3 h-3" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className={`relative h-full bg-slate-900/50 backdrop-blur-sm border ${
                    plan.popular ? "border-purple-500/50" : "border-slate-800"
                  } rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 p-6 sm:p-8`}>
                    {/* Gradient top bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${plan.color}`} />

                    {/* Icon */}
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${plan.color} bg-opacity-10 mb-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    {/* Plan name */}
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-slate-400 text-sm mb-6">{plan.description}</p>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                        <span className="text-slate-500">/ {plan.period}</span>
                      </div>
                    </div>

                    {/* Ideal for */}
                    <div className="mb-6 p-3 rounded-lg bg-slate-800/50 border border-slate-700">
                      <p className="text-xs text-slate-400 mb-1">Ideal for:</p>
                      <p className="text-sm text-slate-300">{plan.ideal}</p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <button className={`w-full group/btn relative px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
                        : "bg-slate-800 border border-slate-700 text-white hover:bg-slate-700"
                    }`}>
                      <span className="flex items-center justify-center gap-2">
                        Get Started
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Retainer Pricing */}
        {billingType === "retainer" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {retainerPlans.map((plan, index) => (
              <div
                key={index}
                className="relative group"
                style={{
                  animation: `fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s both`
                }}
              >
                <div className="relative h-full bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 p-6 sm:p-8">
                  {/* Gradient top bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${plan.color}`} />

                  {/* Plan name */}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-slate-400 text-sm mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-slate-500">/ {plan.period}</span>
                    </div>
                    <p className="text-sm text-slate-500">{plan.hours}</p>
                  </div>

                  {/* Ideal for */}
                  <div className="mb-6 p-3 rounded-lg bg-slate-800/50 border border-slate-700">
                    <p className="text-xs text-slate-400 mb-1">Ideal for:</p>
                    <p className="text-sm text-slate-300">{plan.ideal}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a href="https://cal.com/syndicate-solutions/15min" target="_blank" rel="noopener noreferrer" className="w-full group/btn relative px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 block text-center">
                    <span className="flex items-center justify-center gap-2">
                      Book a Call
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Guarantee Section */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-purple-600/10 via-blue-600/10 to-purple-600/10 border border-purple-500/20 backdrop-blur-sm">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-2">
              <Shield className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-semibold text-purple-400">Our Guarantee</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Why We're Worth It
            </h3>
            
            <p className="text-slate-300 leading-relaxed">
              We're not the cheapest option—and that's intentional. Every project gets senior-level developers, rigorous quality control, and transparent communication. We deliver production-ready code that scales, not quick hacks that break. You're investing in reliability, expertise, and long-term success. That's why our clients stick with us.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-lg bg-slate-800/30 border border-slate-700">
                <div className="text-2xl font-bold text-white mb-1">100%</div>
                <div className="text-sm text-slate-400">Code Ownership</div>
              </div>
              <div className="p-4 rounded-lg bg-slate-800/30 border border-slate-700">
                <div className="text-2xl font-bold text-white mb-1">On-Time</div>
                <div className="text-sm text-slate-400">Delivery Guaranteed</div>
              </div>
              <div className="p-4 rounded-lg bg-slate-800/30 border border-slate-700">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-sm text-slate-400">Support Available</div>
              </div>
            </div>

            <p className="text-sm text-slate-500 pt-4">
              Not sure which package fits? Schedule a free consultation and we'll recommend the best path forward.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default PricingSection;