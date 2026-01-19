import { useState } from "react";
import { ChevronDown, Shield, Zap, Users, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

const faqs = [
  {
    category: "Getting Started",
    icon: Sparkles,
    questions: [
      {
        q: "What is white-label development?",
        a: "We build software and digital solutions that you rebrand as your own. You get to expand your offerings instantly—without hiring developers or managing technical complexities. We handle everything behind the scenes while you focus on clients and growth.",
        defaultOpen: true
      },
      {
        q: "How fast can you start?",
        a: "48-72 hours. We maintain a selective client roster for dedicated attention. You'll have a project manager, documented requirements, and a clear roadmap ready before you know it.",
        defaultOpen: true
      },
      {
        q: "Do you work with agencies only?",
        a: "No! We partner with marketing agencies, dev shops, consultancies, and direct businesses. Complete invisibility for agencies, or hands-on collaboration for businesses—your choice.",
        defaultOpen: false
      }
    ]
  },
  {
    category: "Quality & Trust",
    icon: Shield,
    questions: [
      {
        q: "Why choose you over offshore teams or freelancers?",
        a: "We deliver production-ready code, not prototypes. Modern tech stacks (Next.js, React, Firebase, AWS), rigorous reviews, and scalable architecture from day one. No communication barriers, no disappearing acts—just reliable execution.",
        defaultOpen: true
      },
      {
        q: "How do you stay invisible for white-label work?",
        a: "Total stealth mode. All communication through you, deliverables under your brand, strict NDAs. Your clients will never know we exist. We're your silent technical team.",
        defaultOpen: false
      },
      {
        q: "What tech do you use?",
        a: "Next.js, React, Node.js, TypeScript, Tailwind, Firebase, Supabase, PostgreSQL, MongoDB, AWS. We choose the right tools for your project—not what's trendy, but what works.",
        defaultOpen: false
      }
    ]
  },
  {
    category: "Pricing & Process",
    icon: Zap,
    questions: [
      {
        q: "How does pricing work?",
        a: "Fixed-price quotes for one-off projects. Monthly retainers for ongoing work. Revenue-share for strategic partnerships. We'll recommend what fits your situation best. No hidden fees, ever.",
        defaultOpen: true
      },
      {
        q: "What if I need changes mid-project?",
        a: "Minor adjustments are included. Major scope changes get transparent pricing and timeline updates. We use agile methodology with regular check-ins so you can course-correct early.",
        defaultOpen: false
      },
      {
        q: "Do you offer ongoing support?",
        a: "Absolutely. Every project includes a warranty period. Then we offer maintenance packages: security updates, performance optimization, features, 24/7 emergency support. We stick around.",
        defaultOpen: false
      }
    ]
  },
  {
    category: "Partnership",
    icon: Users,
    questions: [
      {
        q: "Can you scale with us?",
        a: "That's our specialty. We've grown with partners from one project to dozens of simultaneous builds. Dedicated team members, custom workflows, direct integrations—your growth is our success.",
        defaultOpen: false
      },
      {
        q: "How's your communication?",
        a: "Radical transparency. Dedicated point of contact, regular updates via Slack/email/PM tools, staging environments to review work. You'll always know where things stand.",
        defaultOpen: false
      },
      {
        q: "What if my client has specific requirements?",
        a: "We adapt. Specific tech stacks, documentation, security audits, compliance—whatever they need. We can even join calls as your 'technical team' while maintaining your brand.",
        defaultOpen: false
      }
    ]
  },
  {
    category: "Results",
    icon: CheckCircle2,
    questions: [
      {
        q: "Can I see your work?",
        a: "Our portfolio has live platforms across e-commerce, SaaS, marketplaces, and automation. Systems processing thousands of transactions, serving Fortune 500 clients, saving 20+ hours weekly. Real projects delivering real value.",
        defaultOpen: false
      },
      {
        q: "What if I'm not satisfied?",
        a: "We revise until you are. No extra charges for reasonable revisions. We communicate early to prevent surprises and fix issues during development, not after.",
        defaultOpen: false
      },
      {
        q: "Why you over big agencies or platforms?",
        a: "Big agencies = premium prices for junior devs and slow processes. Platforms = quality gamble with zero accountability. We're the sweet spot: enterprise-level quality, boutique-level care. Senior developers, direct communication, long-term partnership focus.",
        defaultOpen: true
      }
    ]
  }
];

const FAQSection = () => {
  const getInitialOpenState = () => {
    const initialState = {};
    faqs.forEach((category, categoryIndex) => {
      category.questions.forEach((question, questionIndex) => {
        if (question.defaultOpen) {
          initialState[`${categoryIndex}-${questionIndex}`] = true;
        }
      });
    });
    return initialState;
  };

  const [openIndexes, setOpenIndexes] = useState(getInitialOpenState());
  const [activeCategory, setActiveCategory] = useState("all");

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenIndexes(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const filteredFaqs = activeCategory === "all" 
    ? faqs 
    : faqs.filter(category => category.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-') === activeCategory);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-12 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" id="faqs">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-400">Quick Answers</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            FAQ
          </h2>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Straight answers. No fluff. Everything you need to know.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          <button
            onClick={() => setActiveCategory("all")}
            className={`group relative px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 ${
              activeCategory === "all" ? "text-white" : "text-slate-400 hover:text-white"
            }`}
          >
            {activeCategory === "all" && <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg" />}
            {activeCategory !== "all" && <div className="absolute inset-0 bg-slate-800/50 rounded-lg group-hover:bg-slate-800 transition-colors" />}
            <span className="relative z-10">All</span>
          </button>
          
          {faqs.map((category) => (
            <button
              key={category.category}
              onClick={() => setActiveCategory(category.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-'))}
              className={`group relative px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 ${
                activeCategory === category.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')
                  ? "text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {activeCategory === category.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-') && <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg" />}
              {activeCategory !== category.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-') && <div className="absolute inset-0 bg-slate-800/50 rounded-lg group-hover:bg-slate-800 transition-colors" />}
              <span className="relative z-10">{category.category}</span>
            </button>
          ))}
        </div>

        {/* FAQ Categories */}
        <div className="space-y-6">
          {filteredFaqs.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={categoryIndex} 
                className="space-y-3"
                style={{
                  animation: `fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${categoryIndex * 0.08}s both`
                }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                    <IconComponent className="w-4 h-4 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                </div>

                {/* Questions */}
                <div className="space-y-2">
                  {category.questions.map((faq, questionIndex) => {
                    const key = `${categoryIndex}-${questionIndex}`;
                    const isOpen = openIndexes[key];
                    
                    return (
                      <div
                        key={questionIndex}
                        className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition-all duration-300"
                      >
                        <button
                          onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                          className="w-full px-5 py-4 flex items-center justify-between text-left transition-all duration-300"
                        >
                          <span className="text-base sm:text-lg font-semibold text-white pr-6 group-hover:text-blue-400 transition-colors">
                            {faq.q}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-all duration-300 group-hover:text-blue-400 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        
                        <div
                          className={`transition-all duration-300 ease-in-out overflow-hidden ${
                            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="px-5 pb-4 pt-0">
                            <div className="border-t border-slate-800 pt-3">
                              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                                {faq.a}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-blue-600/10 border border-blue-500/20 backdrop-blur-sm">
          <div className="text-center space-y-5">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Still Have Questions?
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto">
              Let's talk. No pressure, no obligations—just honest conversation about how we can help.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
              <button className="w-full sm:w-auto group relative px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:-translate-y-0.5">
                <span className="flex items-center justify-center gap-2">
                  Get in Touch
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="w-full sm:w-auto group relative px-8 py-3 bg-slate-800/50 border border-slate-700 rounded-lg font-semibold text-white transition-all duration-300 hover:bg-slate-800 hover:border-slate-600">
                <span className="flex items-center justify-center gap-2">
                  View Portfolio
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
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

export default FAQSection;