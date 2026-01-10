import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, Send, MessageSquare, ArrowUpRight, Clock, Zap } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    "Web Development",
    "Custom Software",
    "AI Automation",
    "Data & Analytics",
    "Digital Operations",
    "Agency Partnership",
    "E-commerce Platform",
    "Business Consultation",
    "Other Services",
  ];

  const contactInfo = [
    {
      icon: <Clock className="h-5 w-5 sm:h-6 sm:w-6" />,
      label: "Click here to book a 15-min consultation (free)",
      value: "Schedule a quick call",
      color: "#3B82F6",
      action: () => window.open("https://cal.com/syndicate-solutions/15min", "_blank"),
    },
    {
      icon: <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6" />,
      label: "Click here to contact us on WhatsApp",
      value: "Message us for quick replies",
      color: "#10B981",
      action: () => {
        const message = encodeURIComponent(
          "Hello! I'm interested in discussing a project with Syndicate Solutions."
        );
        window.open(`https://wa.me/94741143323?text=${message}`, "_blank");
      }
    },
    {
      icon: <Phone className="h-5 w-5 sm:h-6 sm:w-6" />,
      label: "Click here to call us directly",
      value: "+94741143323",
      color: "#8B5CF6",
      action: "tel:+94741143323"
    },
    {
      icon: <Mail className="h-5 w-5 sm:h-6 sm:w-6" />,
      label: "Click here to email us",
      value: "syndicatesoftwaresolutions@gmail.com",
      color: "#3B82F6",
      action: "mailto:syndicatesoftwaresolutions@gmail.com"
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (value) => {
    setFormData((prev) => ({ ...prev, category: value }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      if (
        !formData.name ||
        !formData.subject ||
        !formData.message ||
        !formData.category ||
        (!formData.email && !formData.phone)
      ) {
        throw new Error(
          "Please provide your name, subject, category, message, and either email or phone number"
        );
      }

      await addDoc(collection(db, "contacts"), {
        ...formData,
        timestamp: serverTimestamp(),
      });

      await addDoc(collection(db, "admin-notifications"), {
        subject: `New Contact: ${formData.subject}`,
        clientName: formData.name,
        clientEmail: formData.email,
        clientPhone: formData.phone,
        category: formData.category,
        message: formData.message,
        timestamp: serverTimestamp(),
        read: false,
      });

      toast({
        title: "Message Sent!",
        description: "Thanks — we received your message and will reply within 24 hours. If you'd like faster alignment, book a 15‑minute call.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        category: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Something went wrong",
        description:
          error.message || "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }}></div>
        <div className="absolute top-1/4 left-0 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-blue-500/[0.06] rounded-full blur-[140px]"></div>
        <div className="absolute bottom-1/4 right-0 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-violet-500/[0.05] rounded-full blur-[140px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 max-w-[1400px]">
        {/* Header */}
        <div className="max-w-5xl mx-auto mb-16 sm:mb-20 text-center">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <div className="flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-2 sm:py-2.5 bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-full">
              <Zap className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-400" />
              <span className="text-xs sm:text-sm font-medium text-slate-300">Let's Talk</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight tracking-tight px-4">
            <span className="block text-white mb-2">Let's</span>
            <span className="block text-blue-400">Build Something Exceptional</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto font-light leading-relaxed px-4">
            Strategy, engineering, and reliable delivery — tailored to your business. Book a 15-minute consult for quick alignment, or send us the details below and we'll respond within one business day.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8" id="contact">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-4 sm:space-y-6 order-2 lg:order-1">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                onClick={() => typeof info.action === 'function' ? info.action() : window.location.href = info.action}
                className="group relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/40 rounded-xl p-5 sm:p-6 hover:bg-slate-800/60 hover:border-slate-600/60 transition-all duration-300 cursor-pointer overflow-hidden"
                style={{
                  animation: `slideInLeft 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.08}s both`
                }}
              >
                {/* Subtle accent on hover */}
                <div 
                  className="absolute top-0 left-0 w-1 h-0 group-hover:h-full transition-all duration-300"
                  style={{ backgroundColor: info.color }}
                ></div>

                <div className="relative">
                  <div 
                    className="inline-flex w-10 h-10 sm:w-12 sm:h-12 rounded-lg items-center justify-center mb-3 sm:mb-4 transform group-hover:scale-105 transition-all duration-300 border"
                    style={{ 
                      backgroundColor: `${info.color}10`,
                      borderColor: `${info.color}20`
                    }}
                  >
                    <div style={{ color: info.color }}>
                      {info.icon}
                    </div>
                  </div>

                  <h3 
                    className="text-[10px] sm:text-xs font-semibold mb-1 sm:mb-1.5 uppercase tracking-wide"
                    style={{ color: info.color }}
                  >
                    {info.label}
                  </h3>
                  <p className="text-white font-medium text-xs sm:text-sm break-words">
                    {info.value}
                  </p>

                  <div className="mt-3 sm:mt-4 flex items-center gap-2 text-[10px] sm:text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span style={{ color: info.color }}>Contact</span>
                    <ArrowUpRight className="h-3 w-3" style={{ color: info.color }} />
                  </div>
                </div>
              </div>
            ))}

            {/* Response Time Badge */}
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/40 rounded-xl p-5 sm:p-6">
              <div className="flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-xs sm:text-sm">Fast Response</h4>
                  <p className="text-slate-500 text-[10px] sm:text-xs">Usually within 24 hours</p>
                </div>
              </div>
              <div className="h-px w-full bg-slate-700/40 my-2.5 sm:my-3"></div>
              <p className="text-slate-400 text-[10px] sm:text-xs leading-relaxed font-light">
                Based in Colombo (GMT+5:30). Typically respond within 24 hours — or secure an immediate slot via the 15-minute booking link.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div 
              className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/40 rounded-xl p-6 sm:p-8 lg:p-10"
              style={{
                animation: `slideInRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both`
              }}
            >
              <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row items-start justify-between gap-4">
                <div className="w-full sm:w-auto">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">Send us a message</h3>
                  <p className="text-sm sm:text-base text-slate-400 font-light">Prefer a quick chat? Book a 15-minute call or tell us about your project below.</p>
                </div>
                <a
                  href="https://cal.com/syndicate-solutions/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20 text-xs sm:text-sm whitespace-nowrap"
                >
                  <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  Book 15-min call
                </a>
              </div>

              <div className="space-y-5 sm:space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-white mb-2">
                    Your Name <span className="text-blue-400">*</span>
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="bg-slate-900/60 border-slate-700/50 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20 h-10 sm:h-12 text-sm sm:text-base"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-white mb-2">
                      Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="bg-slate-900/60 border-slate-700/50 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20 h-10 sm:h-12 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-white mb-2">
                      Phone
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+94 XX XXX XXXX"
                      className="bg-slate-900/60 border-slate-700/50 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20 h-10 sm:h-12 text-sm sm:text-base"
                    />
                  </div>
                </div>

                {/* Info note */}
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 sm:p-4">
                  <p className="text-blue-400 text-xs sm:text-sm font-medium">
                    💡 Please provide either email or phone so we can reach you — or book a 15‑minute consult for faster alignment.
                  </p>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-white mb-2">
                    Service Category <span className="text-blue-400">*</span>
                  </label>
                  <Select
                    value={formData.category}
                    onValueChange={handleCategoryChange}
                    required
                  >
                    <SelectTrigger className="bg-slate-900/60 border-slate-700/50 text-white focus:border-blue-500 focus:ring-blue-500/20 h-10 sm:h-12 text-sm sm:text-base">
                      <SelectValue placeholder="Select what you need help with" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-900 border-slate-700/50">
                      {categories.map((category) => (
                        <SelectItem 
                          key={category} 
                          value={category}
                          className="text-white hover:bg-slate-800 focus:bg-slate-800 text-sm sm:text-base"
                        >
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-white mb-2">
                    Subject <span className="text-blue-400">*</span>
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's your project about?"
                    className="bg-slate-900/60 border-slate-700/50 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20 h-10 sm:h-12 text-sm sm:text-base"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-white mb-2">
                    Project Details <span className="text-blue-400">*</span>
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                    className="bg-slate-900/60 border-slate-700/50 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20 resize-none text-sm sm:text-base"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full h-12 sm:h-14 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm sm:text-base rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transform hover:scale-[1.01] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending your message...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span>Send Message</span>
                      <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                  )}
                </Button>

                <p className="text-center text-slate-500 text-[10px] sm:text-xs font-light">
                  By submitting this form, you agree to our terms of service and privacy policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;