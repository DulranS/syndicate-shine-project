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
      icon: <Clock className="h-6 w-6" />,
      label: "Click here to book a 15-min consultation (free)",
      value: "Schedule a quick call",
      color: "#06B6D4",
      action: () => window.open("https://cal.com/syndicate-solutions/15min", "_blank"),
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      label: "Click here to contact us on WhatsApp",
      value: "Message us for quick replies",
      color: "#10B981",
      action: () => {
        const message = encodeURIComponent(
          "Hello! I'm interested in discussing a project with Syndicate Solutions."
        );
        window.open(`https://wa.me/94721516226?text=${message}`, "_blank");
      }
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Click here to call us directly",
      value: "+94 72 151 6226",
      color: "#A78BFA",
      action: "tel:+94721516226"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Click here to email us",
      value: "syndicatesoftwaresolutions@gmail.com",
      color: "#00D9FF",
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
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10"></div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
              <Zap className="h-4 w-4 text-yellow-400" />
              <span className="text-sm font-medium text-white/80">Let's Talk</span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10"></div>
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-6 text-center leading-none">
            <span className="block text-white mb-2">LET'S</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent">
              BUILD SOMETHING EXCEPTIONAL
            </span>
          </h2>

          <p className="text-xl text-white/60 text-center max-w-3xl mx-auto font-light leading-relaxed">
            Strategy, engineering, and reliable delivery — tailored to your business. Book a 15-minute consult for quick alignment, or send us the details below and we’ll respond within one business day.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8" id="contact">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                onClick={() => typeof info.action === 'function' ? info.action() : window.location.href = info.action}
                className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/[0.06] transition-all duration-500 cursor-pointer overflow-hidden"
                style={{
                  animation: `slideInLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s both`
                }}
              >
                {/* Colored accent */}
                <div 
                  className="absolute top-0 left-0 w-1 h-0 group-hover:h-full transition-all duration-500"
                  style={{ backgroundColor: info.color }}
                ></div>

                {/* Glow effect */}
                <div 
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500"
                  style={{ backgroundColor: info.color }}
                ></div>

                <div className="relative">
                  <div 
                    className="inline-flex w-14 h-14 rounded-xl items-center justify-center mb-4 transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500"
                    style={{ 
                      backgroundColor: `${info.color}15`,
                      border: `1px solid ${info.color}30`
                    }}
                  >
                    <div style={{ color: info.color }}>
                      {info.icon}
                    </div>
                  </div>

                  <h3 
                    className="text-sm font-bold mb-1 uppercase tracking-wide"
                    style={{ color: info.color }}
                  >
                    {info.label}
                  </h3>
                  <p className="text-white/80 font-medium text-sm break-words">
                    {info.value}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <span style={{ color: info.color }}>CONTACT</span>
                    <ArrowUpRight className="h-3 w-3" style={{ color: info.color }} />
                  </div>
                </div>
              </div>
            ))}

            {/* Response Time Badge */}
            <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Fast Response</h4>
                  <p className="text-white/50 text-xs">Usually within 24 hours</p>
                </div>
              </div>
              <div className="h-px w-full bg-white/10 my-3"></div>
              <p className="text-white/60 text-xs leading-relaxed">
                Based in Colombo (GMT+5:30). Typically respond within 24 hours — or secure an immediate slot via the 15-minute booking link.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div 
              className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 lg:p-10"
              style={{
                animation: `slideInRight 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both`
              }}
            >
              <div className="mb-8 flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-3xl font-black text-white mb-2">Send us a message</h3>
                  <p className="text-white/60">Prefer a quick chat? Book a 15-minute call or tell us about your project below.</p>
                </div>
                <a
                  href="https://cal.com/syndicate-solutions/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-black rounded-lg font-semibold shadow hover:opacity-95"
                >
                  <Clock className="h-4 w-4" />
                  Quick book 15-min meeting
                </a>
              </div>

              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-bold text-white/80 mb-2 uppercase tracking-wide">
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-cyan-400 focus:ring-cyan-400/20 h-12"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-white/80 mb-2 uppercase tracking-wide">
                      Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-purple-400 focus:ring-purple-400/20 h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-white/80 mb-2 uppercase tracking-wide">
                      Phone
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+94 XX XXX XXXX"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-purple-400 focus:ring-purple-400/20 h-12"
                    />
                  </div>
                </div>

                {/* Info note */}
                <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4">
                  <p className="text-cyan-400 text-sm font-medium">
                    💡 Please provide either email or phone so we can reach you — or book a 15‑minute consult for faster alignment.
                  </p>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-bold text-white/80 mb-2 uppercase tracking-wide">
                    Service Category <span className="text-cyan-400">*</span>
                  </label>
                  <Select
                    value={formData.category}
                    onValueChange={handleCategoryChange}
                    required
                  >
                    <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-yellow-400 focus:ring-yellow-400/20 h-12">
                      <SelectValue placeholder="Select what you need help with" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-900 border-white/10">
                      {categories.map((category) => (
                        <SelectItem 
                          key={category} 
                          value={category}
                          className="text-white hover:bg-white/10 focus:bg-white/10"
                        >
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-bold text-white/80 mb-2 uppercase tracking-wide">
                    Subject <span className="text-cyan-400">*</span>
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's your project about?"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-yellow-400 focus:ring-yellow-400/20 h-12"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-bold text-white/80 mb-2 uppercase tracking-wide">
                    Project Details <span className="text-cyan-400">*</span>
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-yellow-400 focus:ring-yellow-400/20 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full h-14 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold text-lg rounded-xl shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending your message...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  )}
                </Button>

                <p className="text-center text-white/40 text-xs">
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
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
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