import { useState } from "react";
import { ChevronDown, Shield, Zap, Users, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

const faqs = [
  {
    category: "Getting Started",
    icon: Sparkles,
    questions: [
      {
        q: "What exactly is white-label development, and how does it benefit my business?",
        a: "White-label development means we build high-quality software and digital solutions that you can rebrand and present as your own. This allows you to expand your service offerings instantly without hiring developers, investing in infrastructure, or dealing with technical complexities. You focus on client relationships and growth—we handle all the technical heavy lifting behind the scenes. It's like having an entire development team ready to execute, but without the overhead costs or management burden.",
        defaultOpen: true
      },
      {
        q: "How quickly can you start working on my project?",
        a: "We're built for speed. Most projects kick off within 48-72 hours of initial consultation. Unlike traditional agencies that juggle hundreds of clients, we maintain a selective client roster to ensure dedicated attention. Our streamlined onboarding process means you'll have a dedicated project manager assigned, requirements documented, and development roadmap ready faster than you'd believe possible. We understand that in business, timing is everything—your opportunities won't wait, and neither should your technology partner.",
        defaultOpen: true
      },
      {
        q: "Do you only work with agencies, or can individual businesses partner with you?",
        a: "We work with both! While we specialize in white-label partnerships with marketing agencies, development shops, and consultancies, we also directly serve ambitious businesses that need reliable tech execution. Whether you're an agency scaling your offerings or a business that needs backend support without the complexity of managing developers, we're your partner. Our model adapts to your needs—complete invisibility for agency partners, or direct collaboration for businesses seeking technical expertise.",
        defaultOpen: false
      }
    ]
  },
  {
    category: "Quality & Expertise",
    icon: Shield,
    questions: [
      {
        q: "What makes your development quality different from offshore or freelance alternatives?",
        a: "Quality isn't negotiable for us—it's our foundation. Every line of code goes through rigorous review, we follow industry-leading best practices, and we build for scalability from day one. Unlike offshore teams with communication barriers or freelancers who disappear mid-project, you get a dedicated, accountable team that treats your success as our own. We use modern tech stacks (Next.js, React, Node.js, Firebase, AWS), implement proper security protocols, and deliver production-ready code—not prototypes that break under real-world use. Our portfolio speaks for itself: live, profitable platforms serving real users.",
        defaultOpen: true
      },
      {
        q: "How do you ensure my clients never know you're involved?",
        a: "Complete invisibility is our specialty. We operate in absolute stealth mode for white-label partners. All communication goes through you, deliverables are under your branding, and we sign strict NDAs ensuring confidentiality. Your clients will never receive emails, calls, or any indication we exist. We've perfected the art of being your 'silent technical team'—powerful, reliable, but completely invisible. Think of us as the backend infrastructure you always wished you had, but without any of the management complexity.",
        defaultOpen: false
      },
      {
        q: "What technologies do you specialize in?",
        a: "We specialize in modern, battle-tested tech stacks that deliver speed, scalability, and reliability. Our core expertise includes Next.js, React, Node.js, TypeScript, Tailwind CSS, Firebase, Supabase, PostgreSQL, MongoDB, and AWS infrastructure. We're not technology purists—we choose the right tools for each project's specific needs. Whether you need a lightning-fast marketing site, complex SaaS platform, e-commerce system, or custom automation tool, we've built it before and know the pitfalls to avoid. We stay current with emerging tech while avoiding bleeding-edge experiments that could jeopardize your projects.",
        defaultOpen: false
      }
    ]
  },
  {
    category: "Pricing & Process",
    icon: Zap,
    questions: [
      {
        q: "How does pricing work? Do you charge per project or offer retainer models?",
        a: "We offer flexible pricing because different partnerships need different structures. For one-off projects, we provide transparent fixed-price quotes based on scope—no hidden fees or surprise charges. For ongoing partnerships, our retainer model gives you dedicated development capacity at predictable monthly costs, perfect for agencies with consistent client flow. We also offer revenue-share arrangements for the right strategic partnerships. During our consultation, we'll recommend the model that maximizes value for your specific situation. What matters most: you'll always know exactly what you're paying and what you're getting.",
        defaultOpen: true
      },
      {
        q: "What if I need revisions or changes mid-project?",
        a: "Flexibility is built into our process. Minor refinements and adjustments are included—we understand that projects evolve as they develop. For significant scope changes, we'll provide transparent pricing for the additions and adjust timelines accordingly. Our goal is delivering exactly what you need, not rigidly sticking to an outdated plan. We use agile methodology with regular check-ins, so you can course-correct early rather than discovering issues at the end. Most importantly, we communicate proactively—if something's not working, we tell you immediately with solutions, not excuses.",
        defaultOpen: false
      },
      {
        q: "Do you provide ongoing maintenance and support after project completion?",
        a: "Absolutely. We don't just build and disappear—we're in this for the long haul. Every project includes a warranty period for bug fixes and technical issues. Beyond that, we offer comprehensive maintenance packages covering security updates, performance optimization, feature additions, and 24/7 emergency support. Many of our partners keep us on retainer specifically for ongoing support because they know we understand their systems inside-out. Think of us as your extended technical team—available whenever you need us, whether that's weekly updates or emergency Sunday fixes.",
        defaultOpen: false
      }
    ]
  },
  {
    category: "Security & Reliability",
    icon: Shield,
    questions: [
      {
        q: "How do you handle data security and client confidentiality?",
        a: "Security and confidentiality are non-negotiable. Every partner and client relationship starts with comprehensive NDAs. We implement enterprise-grade security practices: encrypted data transmission, secure authentication, regular security audits, and GDPR-compliant data handling. Your code is stored in private repositories with strict access controls. We never reuse client code or share proprietary information—your intellectual property stays yours, completely. For sensitive projects, we can work under additional security protocols or compliance requirements. Your trust is our most valuable asset; we protect it accordingly.",
        defaultOpen: false
      },
      {
        q: "What happens if something breaks or there's a critical issue?",
        a: "We provide rapid-response support because we know downtime costs you money and reputation. Critical issues get immediate attention—we're talking minutes, not days. Every project includes detailed documentation and monitoring so we can diagnose and resolve issues fast. We also implement proactive measures: automated testing, staging environments, and careful deployment processes to prevent issues before they reach production. And here's what matters most: we take full ownership when problems occur. No finger-pointing, no excuses—just solutions and transparent communication until everything's resolved.",
        defaultOpen: false
      }
    ]
  },
  {
    category: "Partnership & Growth",
    icon: Users,
    questions: [
      {
        q: "Can you scale with us as our business grows?",
        a: "Scaling together is exactly what we're built for. We've grown with partners from their first client project to managing dozens of simultaneous builds. Our team structure allows us to scale resources up or down based on your needs—no long hiring processes or layoff complications. As your volume increases, we can establish dedicated team members for your account, implement streamlined processes specific to your workflow, and even integrate directly with your project management systems. Your growth is our success metric; we're invested in making sure technology never becomes your bottleneck.",
        defaultOpen: false
      },
      {
        q: "What kind of communication and project visibility should I expect?",
        a: "Radical transparency and proactive communication define our partnerships. You'll have a dedicated point of contact who knows your business and responds rapidly. We provide regular progress updates through your preferred channels (Slack, email, project management tools), detailed documentation, and staging environments where you can review work in progress. No developer black boxes or waiting weeks for updates. You'll always know exactly where projects stand, what's coming next, and if there are any blockers. We communicate like we're part of your internal team—because effectively, we are.",
        defaultOpen: false
      },
      {
        q: "How do you handle situations where my client has specific technical requests or requirements?",
        a: "We adapt to whatever your clients need. If they have specific tech stack requirements, we work within those constraints. If they need detailed technical documentation, security audits, or compliance certifications, we provide them. For direct client communication scenarios (while maintaining your brand), we can join calls as your 'technical team' and represent your company professionally. We've handled everything from Fortune 500 compliance requirements to startup MVP speed demands. The key is this: your success with your clients is our priority. We'll do whatever it takes to make you look exceptional.",
        defaultOpen: false
      }
    ]
  },
  {
    category: "Results & Track Record",
    icon: CheckCircle2,
    questions: [
      {
        q: "Can you share examples of successful projects you've delivered?",
        a: "Our portfolio showcases live, revenue-generating platforms across e-commerce, SaaS, marketplaces, automation tools, and corporate solutions. We've built systems processing thousands of transactions, platforms serving Fortune 500 clients, and automation tools saving businesses 20+ hours weekly. While we can't reveal all our white-label work (confidentiality is sacred), we can share relevant case studies during consultation that demonstrate our capabilities in your specific domain. What matters most: every project we show you is live, functional, and delivering real business value—not theoretical concepts or abandoned prototypes.",
        defaultOpen: false
      },
      {
        q: "What if we're not satisfied with the initial work?",
        a: "Your satisfaction is the only metric that matters. If initial deliverables don't meet expectations, we revise until they do—no questions asked, no extra charges for reasonable revisions within scope. We'd rather invest extra time getting it right than deliver mediocre work. This isn't just good business practice; it's how we maintain our reputation and build long-term partnerships. We've worked with enough clients to know that if you're not thrilled with our work, we haven't finished our job. Most importantly, we communicate early and often to prevent surprises—we want to discover and fix issues during development, not after delivery.",
        defaultOpen: false
      },
      {
        q: "Why should we choose Syndicate Solutions over larger development agencies or platforms?",
        a: "Larger agencies charge premium prices for junior developers, have slow bureaucratic processes, and treat you like account number #347. Freelance platforms are gambling with unpredictable quality, communication barriers, and zero accountability. We're the sweet spot: enterprise-level quality and reliability without the overhead bloat, combined with the agility and dedication of a boutique partner. You get senior-level developers, direct communication with decision-makers, and a team that actually cares about your success because we've built our entire business on long-term partnerships, not transactional projects. We're small enough to care, skilled enough to deliver, and proven enough to trust with your most important projects.",
        defaultOpen: true
      }
    ]
  }
];

const FAQSection = () => {
  // Initialize with default open states
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
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" id="faqs">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
      <div className="absolute top-1/3 -right-32 sm:-right-48 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 sm:-left-48 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-3 sm:mb-4">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
            <span className="text-xs sm:text-sm font-semibold text-blue-400">Everything You Need to Know</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent px-4">
            Frequently Asked Questions
          </h2>
          
          <p className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto px-4">
            Real answers to the questions that matter. No corporate speak, no fluff—just honest, transparent insights into how we work and why partnering with us is the smartest move you'll make.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={`group relative px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 ${
              activeCategory === "all" ? "text-white" : "text-slate-400 hover:text-white"
            }`}
          >
            {activeCategory === "all" && (
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg" />
            )}
            {activeCategory !== "all" && (
              <div className="absolute inset-0 bg-slate-800/50 rounded-lg group-hover:bg-slate-800 transition-colors" />
            )}
            <span className="relative z-10">All Questions</span>
          </button>
          
          {faqs.map((category) => (
            <button
              key={category.category}
              onClick={() => setActiveCategory(category.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-'))}
              className={`group relative px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 ${
                activeCategory === category.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')
                  ? "text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {activeCategory === category.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-') && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg" />
              )}
              {activeCategory !== category.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-') && (
                <div className="absolute inset-0 bg-slate-800/50 rounded-lg group-hover:bg-slate-800 transition-colors" />
              )}
              <span className="relative z-10 whitespace-nowrap">{category.category}</span>
            </button>
          ))}
        </div>

        {/* FAQ Categories */}
        <div className="space-y-6 sm:space-y-8">
          {filteredFaqs.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={categoryIndex} 
                className="space-y-3 sm:space-y-4"
                style={{
                  animation: `fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${categoryIndex * 0.1}s both`
                }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 px-2">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{category.category}</h3>
                </div>

                {/* Questions */}
                <div className="space-y-2 sm:space-y-3">
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
                          className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left transition-all duration-300"
                        >
                          <span className="text-base sm:text-lg font-semibold text-white pr-4 sm:pr-8 group-hover:text-blue-400 transition-colors leading-snug">
                            {faq.q}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 sm:w-6 sm:h-6 text-slate-400 flex-shrink-0 transition-all duration-300 group-hover:text-blue-400 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        
                        <div
                          className={`transition-all duration-300 ease-in-out overflow-hidden ${
                            isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-0">
                            <div className="border-t border-slate-800 pt-3 sm:pt-4">
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
        <div className="mt-12 sm:mt-16 md:mt-20 p-6 sm:p-8 md:p-12 rounded-2xl bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-blue-600/10 border border-blue-500/20 backdrop-blur-sm">
          <div className="text-center space-y-4 sm:space-y-6">
            <div className="inline-block">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 px-4">
                Still Have Questions?
              </h3>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto px-4">
                We're here to help. Schedule a no-pressure consultation where we'll discuss your specific needs, answer all your questions, and show you exactly how we can accelerate your business.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <button className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:-translate-y-0.5">
                <span className="flex items-center justify-center gap-2 text-sm sm:text-base">
                  Schedule Free Consultation
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 bg-slate-800/50 border border-slate-700 rounded-lg font-semibold text-white transition-all duration-300 hover:bg-slate-800 hover:border-slate-600">
                <span className="flex items-center justify-center gap-2 text-sm sm:text-base">
                  View Our Portfolio
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 px-4">
              No sales pressure. No obligations. Just honest conversation about how we can help you succeed.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
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
    </div>
  );
};

export default FAQSection;