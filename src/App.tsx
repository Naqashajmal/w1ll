/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence, useSpring, useMotionValue } from "motion/react";
import { ArrowUp, ArrowUpRight, Menu, X, Instagram, ArrowRight, Brain, Zap, Share2, Bot, Target, Timer, PhoneCall, BarChart3, ShieldCheck } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

const agencyData = {
  name: "W1LL.AI",
  fullName: "W1LL.AI Systems",
  founder: "Naqash Ajmal Malik",
  founderTitle: "Founder & CEO",
  instagramUrl: "https://www.instagram.com/w1ll.ai/",
  founderInstagramUrl: "https://www.instagram.com/naqashajmalmalik/",
  logoPath: "/logo.png",
  founderImagePath: "/founder.jpg",
};

const services = [
  { 
    title: "Revenue Engines", 
    desc: "We build automated marketing systems that turn prospects into high-paying clients on autopilot.",
    icon: <Target className="text-cyan-400" />
  },
  { 
    title: "Overhead Reduction", 
    desc: "Cut operational costs by 40% using lean automation workflows that replace manual data entry.",
    icon: <Timer className="text-purple-400" />
  },
  { 
    title: "Voice Sales Ops", 
    desc: "24/7 AI Voice agents that handle bookings, qualifying leads, and customer queries with human-like precision.",
    icon: <PhoneCall className="text-emerald-400" />
  },
  { 
    title: "Market Intelligence", 
    desc: "Transform your disorganized data into actionable dashboards that drive better ROI decisions.",
    icon: <BarChart3 className="text-rose-400" />
  },
];

const projects = [
  { 
    title: "Speed-to-Lead Automation", 
    category: "Marketing", 
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200",
    impact: "3X More Leads",
    client: "Elite Realty Group",
    desc: "Implemented instant lead response systems that connected sales calls within 45 seconds of form submission."
  },
  { 
    title: "Omni-Channel Voice Agent", 
    category: "Automation", 
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200",
    impact: "80% Time Saved",
    client: "Global SaaS Solutions",
    desc: "Custom AI voice systems handling 1000+ daily support and booking calls without a human team."
  },
  { 
    title: "Data-Driven Marketing Hub", 
    category: "Data Strategy", 
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    impact: "25k Saved Monthly",
    client: "Modern E-commerce",
    desc: "Unifying multi-platform marketing data into one system to pinpoint exactly where every ad dollar is earned."
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // Parallax Layers
  const heroOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);
  const videoScale = useTransform(smoothProgress, [0, 0.5], [1, 1.2]);
  const textY = useTransform(smoothProgress, [0, 0.3], [0, -100]);
  const floatY = useTransform(smoothProgress, [0, 1], [0, -300]);
  const floatYReverse = useTransform(smoothProgress, [0, 1], [0, 300]);

  // High-performance mouse values (stops full-app re-renders)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth - 0.5) * 20);
    mouseY.set((clientY / innerHeight - 0.5) * -20);
  };

  const [showScrollTop, setShowScrollTop] = useState(false);
  const [legalModal, setLegalModal] = useState<null | "privacy" | "terms">(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      className="relative w-full bg-[#000529] text-zinc-100 font-sans selection:bg-cyan-400 selection:text-black overflow-x-hidden scroll-smooth"
    >
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 z-[100] origin-left shadow-[0_0_10px_rgba(34,211,238,0.5)]"
        style={{ scaleX: smoothProgress }}
      />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full py-4 px-6 md:px-10 flex items-center z-[110] bg-gradient-to-b from-[#000529] via-[#000529]/40 to-transparent backdrop-blur-[2px]">
        <div className="flex-1">
          <motion.a 
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 group w-fit"
          >
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-display font-black tracking-tighter uppercase italic leading-none group-hover:text-cyan-400 transition-colors">
                W1LL<span className="text-cyan-400 not-italic">.</span>AI
              </span>
            </div>
            <motion.div 
              animate={{ opacity: [1, 0.3, 1], scale: [1, 1.2, 1] }} 
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_12px_rgba(34,211,238,0.8)]"
            />
          </motion.a>
        </div>
        
        <div className="hidden lg:flex gap-10 text-xs font-black uppercase tracking-[0.2em] text-cyan-400/60">
          {["Services", "Work", "Founder", "Contact"].map((item, i) => (
            <motion.a 
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="hover:text-cyan-400 transition-all duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-cyan-400 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
            </motion.a>
          ))}
        </div>

        <div className="flex-1 flex justify-end items-center gap-4">
          <motion.a 
            href={agencyData.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, color: "#22d3ee" }}
            className="hidden md:block text-zinc-400 transition-colors"
          >
            <Instagram size={20} />
          </motion.a>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-3 bg-cyan-400 text-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.3)] md:hidden"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </nav>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 bg-[#000529] z-[45] flex flex-col items-center justify-center p-10 overflow-hidden"
          >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(0,163,255,0.1)_0%,rgba(0,5,41,1)_100%)] opacity-50" />
            <div className="flex flex-col gap-4 text-center">
              {["Intelligence", "Services", "Work", "Founder", "Contact"].map((item) => (
                <motion.a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ x: 20, skewX: -5, color: "#22d3ee" }}
                  className="text-4xl md:text-7xl font-display font-black uppercase tracking-tighter leading-none transition-colors will-change-transform"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-10 bg-[#000529]/10 pointer-events-none" />
        
        {/* Digital Intelligence Aura */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          {/* Main Glow Core */}
          <motion.div 
            style={{ x: springX, y: springY }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] md:w-full h-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15)_0%,transparent_70%)] blur-[40px] opacity-60"
          />
          {/* Secondary Atmosphere */}
          <div className="absolute inset-0 bg-[#000529]" />
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#0ef_1px,transparent_1px),linear-gradient(to_bottom,#0ef_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(circle_at_center,black_40%,transparent_100%)]" />
          
          {/* Floating Data Nodes (Lightweight Particles) */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%",
                opacity: Math.random() * 0.5
              }}
              animate={{ 
                y: ["-5%", "5%"],
                opacity: [0.1, 0.4, 0.1]
              }}
              transition={{
                duration: 5 + Math.random() * 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full blur-[1px] z-0"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <motion.div 
          style={{ 
            opacity: heroOpacity, 
            y: textY,
            willChange: "transform, opacity"
          }}
          className="relative z-20 px-6 w-full max-w-5xl flex flex-col items-center -mt-10 md:-mt-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            style={{
              rotateY: springX,
              rotateX: springY
            }}
            transition={{ 
              opacity: { duration: 1 },
              scale: { duration: 1 }
            }}
            className="-mb-20 md:-mb-40 relative w-full flex justify-center perspective-[2000px] items-center min-h-[140px] md:min-h-[340px] will-change-transform pt-10"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-cyan-400/3 blur-[100px] rounded-full animate-pulse pointer-events-none" />
            
            {/* Main Hero Logo with Fallback */}
            <div className="relative w-[85%] max-w-[650px] flex justify-center items-center">
              <img 
                src={agencyData.logoPath} 
                alt="W1LL.AI Logo" 
                className="w-full h-auto object-contain brightness-110 drop-shadow-[0_0_50px_rgba(34,211,238,0.25)]"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = document.getElementById('hero-logo-fallback');
                  if (fallback) fallback.classList.remove('hidden');
                }}
              />
              
              {/* Fallback Typographic Logo (High-Impact Hero Version) */}
              <div 
                id="hero-logo-fallback" 
                className="hidden text-5xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter uppercase italic leading-none whitespace-nowrap"
              >
                <div className="relative group flex items-center gap-3 md:gap-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-400 to-zinc-600 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                    W1LL<span className="not-italic text-cyan-400">.</span>AI
                  </span>
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.7, 1],
                      boxShadow: [
                        "0 0 20px rgba(34,211,238,0.5)",
                        "0 0 40px rgba(34,211,238,0.8)",
                        "0 0 20px rgba(34,211,238,0.5)"
                      ]
                    }} 
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 md:w-5 md:h-5 bg-cyan-400 rounded-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center w-full -mt-2 md:-mt-6"
          >
            <p className="text-zinc-100 text-xl md:text-3xl font-light tracking-tight max-w-3xl mx-auto leading-tight mb-8 md:mb-10 drop-shadow-lg">
              Maximize Revenue & Efficiency<br className="hidden md:block" />
              <span className="text-cyan-400 font-medium">with custom business automation.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="#contact" 
                className="group relative px-12 py-5 bg-cyan-400 text-[#000529] font-black uppercase tracking-widest text-xs rounded-full transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(34,211,238,0.4)]"
              >
                <span className="relative z-10 flex items-center gap-3">Start Automating <ArrowRight size={18} /></span>
                <div className="absolute -inset-2 bg-cyan-400/30 opacity-0 group-hover:opacity-100 blur-2xl rounded-full transition-opacity duration-500 pointer-events-none" />
              </a>
              <a href="#work" className="group px-10 py-5 border border-zinc-700 backdrop-blur-xl text-zinc-100 font-bold uppercase tracking-widest text-xs rounded-full flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all duration-500 hover:scale-105">
                Our Projects <Zap size={18} className="text-cyan-400" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          style={{ y: floatY }}
          className="absolute top-[20%] right-[10%] w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] z-0"
        />
        <motion.div 
          style={{ y: floatYReverse }}
          className="absolute bottom-[20%] left-[5%] w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] z-0"
        />
      </section>

      {/* Business Acceleration */}
      <section id="services" className="relative py-40 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
             <span className="text-cyan-400 uppercase tracking-widest text-xs font-black mb-6 block">REVENUE ACCELERATION / 01</span>
             <h2 className="text-6xl md:text-8xl font-display font-black leading-none mb-10 translate-x-[-2px]">
               CUT COSTS.<br />GROW ROI.
             </h2>
             <p className="text-zinc-400 text-xl font-light max-w-md leading-relaxed">
               We replace inefficient manual labor with digital workers that never sleep and never miss a lead.
             </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-10 border border-white/5 bg-white/5 backdrop-blur-sm hover:border-cyan-400/30 transition-all duration-500 rounded-[2.5rem]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]" />
                <div className="relative flex items-center justify-between mb-8">
                  <div className="p-4 bg-[#001242] rounded-2xl group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{`Node ${i + 1}`}</span>
                </div>
                <h3 className="text-3xl font-display font-bold mb-4">{service.title}</h3>
                <p className="text-zinc-500 group-hover:text-zinc-300 transition-colors leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="founder" className="py-40 px-6 bg-zinc-50 text-[#000529] overflow-hidden relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#00a3ff_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 aspect-square rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl relative group bg-[#000529]"
          >
            <img 
              src={agencyData.founderImagePath} 
              alt={agencyData.founder}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                // Fallback to picsum if file missing
                e.currentTarget.src = "https://picsum.photos/seed/naqash/1000/1000";
              }}
            />
            <div className="absolute inset-0 border-[20px] border-white/10 pointer-events-none" />
          </motion.div>

          <div className="w-full md:w-1/2">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="px-4 py-1.5 bg-cyan-400/10 text-cyan-600 text-[10px] font-black uppercase tracking-[0.2em] mb-10 inline-block rounded-full"
            >
              The Founder
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-display font-black tracking-tighter leading-none mb-10 italic"
            >
              {agencyData.founder}
            </motion.h2>
            <p className="text-zinc-600 text-2xl font-light mb-12 italic leading-relaxed border-l-4 border-cyan-400 pl-8">
              "We are entering the era of the individual. Our goal is to empower creators and agencies with the same high-level intelligence used by giants."
            </p>
            <div className="flex gap-10">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-black tracking-widest text-[#000529]/40 mb-2">Authority</span>
                <span className="text-lg font-bold">{agencyData.founderTitle}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-black tracking-widest text-[#000529]/40 mb-2">Connect</span>
                <a 
                  href={agencyData.founderInstagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-bold flex items-center gap-2 hover:text-cyan-600 transition-colors"
                >
                  @naqashajmalmalik <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects & Expertise */}
      <section id="work" className="py-20 md:py-40 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 border-b border-zinc-100 pb-12">
            <div className="max-w-xl">
              <span className="text-cyan-500 uppercase font-black tracking-widest text-xs mb-4 block">Proven ROI</span>
              <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase leading-none italic">
                Projects &<br />Expertise.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group border border-zinc-100 rounded-3xl overflow-hidden bg-white shadow-xl shadow-black/5"
              >
                <div className="relative aspect-[4/3] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black text-white text-[10px] font-black uppercase rounded-full">
                    {project.impact}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-display font-black mb-4 uppercase italic leading-none">{project.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed italic">
                    {project.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <footer id="contact" className="relative pt-32 pb-12 px-8 bg-[#000529] text-white">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#0ef_1px,transparent_1px),linear-gradient(to_bottom,#0ef_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
            {/* Brand Column */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              <p className="text-zinc-400 text-lg font-light max-w-lg leading-relaxed">
                We build high-performance automation systems for growth-focused business owners who value <span className="text-cyan-400 font-medium whitespace-nowrap">ROI & time-freedom</span> over hype.
              </p>
              <div className="space-y-4">
                <span className="text-[10px] uppercase font-black tracking-widest text-cyan-400/60 block">Direct Line</span>
              <motion.a 
                href="mailto:naqashajmal81@gmail.com" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10, color: "#22d3ee" }}
                className="text-2xl md:text-3xl font-display font-black tracking-tighter transition-all block w-fit border-b-2 border-cyan-400/30"
              >
                naqashajmal81@gmail.com
              </motion.a>
              </div>
            </div>

            {/* Links Column */}
            <div className="lg:col-span-5 flex flex-col gap-10">
              <div className="grid grid-cols-2 gap-10">
                <div className="space-y-6">
                  <span className="text-[10px] uppercase font-black tracking-widest text-zinc-500">Navigation</span>
                  <nav className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest">
                    <a href="#services" className="text-zinc-400 hover:text-cyan-400 transition-colors">Solutions</a>
                    <a href="#work" className="text-zinc-400 hover:text-cyan-400 transition-colors">Expertise</a>
                    <a href="#founder" className="text-zinc-400 hover:text-cyan-400 transition-colors">The Founder</a>
                  </nav>
                </div>
                <div className="space-y-6">
                  <span className="text-[10px] uppercase font-black tracking-widest text-zinc-500">Legal</span>
                  <nav className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest">
                    <button onClick={() => setLegalModal("privacy")} className="text-zinc-400 hover:text-cyan-400 transition-colors text-left">Privacy Policy</button>
                    <button onClick={() => setLegalModal("terms")} className="text-zinc-400 hover:text-cyan-400 transition-colors text-left">Terms of Use</button>
                  </nav>
                </div>
              </div>
              <div className="flex gap-4 pt-6 border-t border-white/5">
                <motion.a 
                  href={agencyData.instagramUrl}
                  target="_blank"
                  whileHover={{ scale: 1.1, backgroundColor: "#fff", color: "#000529" }}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all"
                >
                  <Instagram size={18} />
                </motion.a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-white/5 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
            <p>© 2026 W1LL.AI • BUILT FOR PERFORMANCE.</p>
            <div className="flex gap-10">
              <span className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-cyan-400" />
                SECURE INFRASTRUCTURE
              </span>
              <span className="hidden md:block">ROI OPTIMIZED</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-10 right-10 z-[100] p-4 bg-cyan-400 text-[#000529] rounded-full shadow-[0_10px_30px_rgba(34,211,238,0.4)] flex items-center justify-center transition-all group"
          >
            <ArrowUp size={24} className="group-hover:animate-bounce" />
            <div className="absolute -inset-2 bg-cyan-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Legal Modal */}
      <AnimatePresence>
        {legalModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 md:p-12 bg-[#000529]/95 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl max-h-[80vh] bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.8)]"
            >
              <div className="flex justify-between items-center p-8 border-b border-white/5">
                <h2 className="text-2xl font-display font-black uppercase italic tracking-tighter text-cyan-400">
                  {legalModal === "privacy" ? "Privacy Policy" : "Terms Of Use"}
                </h2>
                <button 
                  onClick={() => setLegalModal(null)}
                  className="p-2 hover:bg-white/5 rounded-full transition-colors text-zinc-400 hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-8 md:p-12 overflow-y-auto max-h-[calc(80vh-100px)] custom-scrollbar">
                <div className="prose prose-invert prose-cyan max-w-none font-light text-zinc-400 leading-relaxed space-y-8">
                  {legalModal === "privacy" ? (
                    <div className="space-y-6">
                      <section>
                        <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-4">1. Data Collection</h3>
                        <p>At W1LL.AI, we only collect information that is essential for providing high-performance automation services. This includes your contact details and business infrastructure requirements provided during consultations.</p>
                      </section>
                      <section>
                        <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-4">2. Usage of Information</h3>
                        <p>Your data is used strictly for architecting custom AI systems and optimizing your ROI. We do not sell or share your business intelligence with third parties for marketing purposes.</p>
                      </section>
                      <section>
                        <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-4">3. Security Infrastructure</h3>
                        <p>We implement enterprise-grade encryption and secure data protocols (AES-256) for all internal systems to protect your competitive advantage.</p>
                      </section>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <section>
                        <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-4">1. Service Agreement</h3>
                        <p>W1LL.AI provides custom automation solutions. Our engagement begins upon mutual signature of a Statement of Work (SOW) which details specific ROI targets and technical deliverables.</p>
                      </section>
                      <section>
                        <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-4">2. Intellectual Property</h3>
                        <p>All custom workflows and AI logic built for your specific business become your property upon final payment, ensuring you own your operational advantage.</p>
                      </section>
                      <section>
                        <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-4">3. Responsibility</h3>
                        <p>While we architect highly efficient systems, users are responsible for the business decisions guided by AI intelligence and dashboards.</p>
                      </section>
                    </div>
                  )}
                  <div className="pt-10 border-t border-white/5 text-[10px] uppercase tracking-widest text-zinc-600">
                    Last Updated: April 2026 • Verified Secured By W1LL.AI Systems
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
