/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  MessageCircle, 
  ChevronRight, 
  HardHat, 
  Paintbrush, 
  Home, 
  Users, 
  Building2, 
  Hammer, 
  LayoutDashboard,
  Menu,
  X,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Compass,
  Sun,
  Moon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const COLORS = {
  bg: '#F9F7F2', // Warm off-white
  ink: '#1A1A1A', // Deep charcoal
  accent: '#C5A059', // Sophisticated Gold/Brass
  muted: '#8E8E8E',
};

const SERVICES = [
  {
    title: "Construction & Civil Work",
    description: "Complete civil construction solutions from foundation to finishing with expert engineering.",
    icon: <Building2 className="w-8 h-8" />,
    category: "Execution"
  },
  {
    title: "Labour Contractor Services",
    description: "Providing skilled and unskilled manpower for all types of industrial and construction projects.",
    icon: <Users className="w-8 h-8" />,
    category: "Management"
  },
  {
    title: "Interior Work",
    description: "Modern interior design and execution for residential and commercial spaces.",
    icon: <LayoutDashboard className="w-8 h-8" />,
    category: "Design"
  },
  {
    title: "Exterior Work",
    description: "Durable and aesthetic exterior solutions including structural glazing and cladding.",
    icon: <Home className="w-8 h-8" />,
    category: "Exterior"
  },
  {
    title: "Paint & Polish Contracting",
    description: "High-quality painting and wood polishing services for a premium finish.",
    icon: <Paintbrush className="w-8 h-8" />,
    category: "Finishing"
  },
  {
    title: "General Order Supplier",
    description: "Reliable supply of construction materials and general equipment as per requirements.",
    icon: <Hammer className="w-8 h-8" />,
    category: "Supply"
  },
  {
    title: "Painting Labour Contractor",
    description: "Specialized team of professional painters for large scale projects.",
    icon: <HardHat className="w-8 h-8" />,
    category: "Labour"
  },
  {
    title: "All Types of Painting Works",
    description: "From decorative wall painting to industrial coatings, we cover it all.",
    icon: <Paintbrush className="w-8 h-8" />,
    category: "Painting"
  },
];

const GALLERY = [
  { url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=1000&fit=crop', title: 'Modern Living Room', category: 'Residential' },
  { url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=1000&fit=crop', title: 'Minimalist Kitchen', category: 'Modular' },
  { url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=1000&fit=crop', title: 'Executive Suite', category: 'Commercial' },
  { url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=1000&fit=crop', title: 'Luxury Bedroom', category: 'Residential' },
  { url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=1000&fit=crop', title: 'Artistic Wall Finish', category: 'Painting' },
  { url: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=1000&fit=crop', title: 'Boutique Office', category: 'Commercial' },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // Show loading screen for 3.5 seconds on initial load
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Load dark mode preference from localStorage
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    // Save dark mode preference to localStorage
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F9F7F2] dark:bg-[#0F0F0F] font-sans text-[#1A1A1A] dark:text-[#E8E8E8] transition-colors duration-500">
      {/* Netflix-style Loading Screen */}
      <AnimatePresence>
        {showLoading && (
          <motion.div 
            className="fixed inset-0 z-[9999] bg-[#0F0F0F] flex items-center justify-center overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Background gradient effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#0F0F0F] to-[#000000]"></div>
            
            {/* Animated logo container */}
            <motion.div 
              className="relative z-10 flex flex-col items-center justify-center gap-8"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Logo with decorative shaped frame */}
              <motion.div
                className="relative w-56 h-56"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 2, 0] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 0.5 }}
              >
                {/* Outer decorative frame with gradient */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#C5A059] via-[#E8D4A2] to-[#C5A059] shadow-2xl flex items-center justify-center" 
                     style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}>
                  {/* Inner white container */}
                  <div className="w-[calc(100%-8px)] h-[calc(100%-8px)] bg-white rounded-3xl flex items-center justify-center"
                       style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}>
                    <img 
                      src="/logo.png" 
                      alt="A.M. Enterprise" 
                      className="w-44 h-44 object-contain drop-shadow-lg"
                    />
                  </div>
                </div>

                {/* Animated corner accents */}
                <motion.div
                  className="absolute top-0 right-0 w-6 h-6 border-t-3 border-r-3 border-[#C5A059] rounded-tr-lg"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ transform: 'translate(-8px, -8px)' }}
                ></motion.div>
                <motion.div
                  className="absolute bottom-0 left-0 w-6 h-6 border-b-3 border-l-3 border-[#C5A059] rounded-bl-lg"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                  style={{ transform: 'translate(8px, 8px)' }}
                ></motion.div>

                {/* Glow effect behind frame */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#C5A059]/30 via-[#C5A059]/10 to-[#C5A059]/30 rounded-3xl blur-2xl -z-10"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 0.5 }}
                  style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
                ></motion.div>
              </motion.div>

              {/* Company name with typing effect */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-tight mb-2">
                  A.M. ENTERPRISE PVT LTD
                </h1>
                <p className="text-[#C5A059] text-lg font-bold uppercase tracking-[0.3em]">
                  Interior & Execution
                </p>
              </motion.div>

              {/* Loading bar Netflix style */}
              <motion.div 
                className="w-48 h-1 bg-white/10 rounded-full overflow-hidden mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-[#C5A059] via-[#E8D4A2] to-[#C5A059]"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 2.3, ease: "easeInOut" }}
                ></motion.div>
              </motion.div>

              {/* Loading text */}
              <motion.p 
                className="text-white/60 text-sm uppercase tracking-widest mt-4"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Loading...
              </motion.p>
            </motion.div>

            {/* Animated accent lines */}
            <motion.div
              className="absolute top-1/4 left-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl -z-0"
              animate={{ 
                x: [0, 30, 0],
                y: [0, -30, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            ></motion.div>
            <motion.div
              className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl -z-0"
              animate={{ 
                x: [0, -30, 0],
                y: [0, 30, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            ></motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? isDarkMode ? 'bg-[#1A1A1A]/80 backdrop-blur-md py-4 shadow-lg' : 'bg-white/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollToSection('home')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.img 
              src="/logo.png"
              alt="A.M. Enterprise Logo"
              className="w-10 h-10 object-contain"
              whileHover={{ rotate: 45, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="flex flex-col">
              <span className={`font-serif text-xl font-bold tracking-tighter leading-none ${isScrolled ? isDarkMode ? 'text-[#E8E8E8]' : 'text-[#1A1A1A]' : 'text-white'}`}>
                A.M. ENTERPRISE PVT LTD
              </span>
              <span className={`text-[10px] uppercase tracking-[0.3em] font-medium ${isScrolled ? isDarkMode ? 'text-[#C5A059]' : 'text-[#C5A059]' : 'text-white/70'}`}>
                Interior & Execution
              </span>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-12">
            {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((item, index) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-[11px] font-bold uppercase tracking-[0.2em] hover:text-[#C5A059] transition-colors relative group ${isScrolled ? isDarkMode ? 'text-[#E8E8E8]' : 'text-[#1A1A1A]' : 'text-white'}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C5A059] transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            ))}
            <motion.a 
              href="tel:7001741628" 
              className={`px-8 py-3 text-[11px] font-bold uppercase tracking-[0.2em] border transition-all duration-500 ${isScrolled ? isDarkMode ? 'border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-[#0F0F0F]' : 'border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white' : 'border-white text-white hover:bg-white hover:text-[#1A1A1A]'}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Inquire Now
            </motion.a>
          </nav>

          {/* Dark Mode Toggle */}
          <motion.button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`w-12 h-6 rounded-full transition-all duration-300 flex items-center ${isDarkMode ? 'bg-[#C5A059]' : 'bg-white/20'}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 ${isDarkMode ? 'bg-[#0F0F0F]' : 'bg-white'}`}
              layout
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              style={{ marginLeft: isDarkMode ? '6px' : '2px' }}
            >
              {isDarkMode ? (
                <Moon size={14} className="text-[#C5A059]" />
              ) : (
                <Sun size={14} className="text-yellow-400" />
              )}
            </motion.div>
          </motion.button>

          {/* Mobile Menu Toggle */}
          <motion.button 
            className={`${isScrolled ? isDarkMode ? 'text-[#E8E8E8]' : 'text-[#1A1A1A]' : 'text-white'} lg:hidden ml-4`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#1A1A1A] flex flex-col items-center justify-center gap-10 text-white"
          >
            {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-3xl font-serif italic tracking-tight"
              >
                {item}
              </button>
            ))}
            <a 
              href="tel:7001741628" 
              className="mt-4 border border-white/30 px-12 py-4 text-sm uppercase tracking-widest"
            >
              Call Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D" 
            alt="Luxury Interior" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="inline-block text-[12px] uppercase tracking-[0.5em] font-medium mb-8 opacity-80">
              Est. 2016 • West Bengal
            </span>
            <h1 className="text-6xl md:text-9xl font-serif italic leading-[0.9] mb-12 tracking-tighter">
              Building Trust with <br />
              <span className="not-italic font-bold text-[#C5A059]">Quality</span> Construction
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <p className="text-white/70 text-sm uppercase tracking-[0.3em] max-w-md mb-8 md:mb-0">
                Professional Construction & Labour Contractor Services in West Bengal
              </p>
              <button 
                onClick={() => scrollToSection('services')}
                className="group flex items-center gap-4 text-[12px] uppercase tracking-[0.3em] font-bold"
              >
                Explore Services 
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-[#C5A059] group-hover:border-[#C5A059] transition-all duration-500">
                  <ArrowRight size={16} />
                </div>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Vertical Rail Text */}
        <div className="absolute left-8 bottom-24 hidden lg:block">
          <span className="writing-mode-vertical rotate-180 text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">
            Interior Design • Civil Execution • Labour Contracting
          </span>
        </div>
      </section>

      {/* About Section - Split Layout */}
      <section id="about" className="py-32 bg-white dark:bg-[#1A1A1A] transition-colors duration-500">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-sm">
                <img 
                  src="https://picsum.photos/seed/designer/800/1200" 
                  alt="Maksudur Rahaman Mistry" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-[#F9F7F2] dark:bg-[#252525] p-8 flex flex-col justify-center border border-[#C5A059]/20 hidden md:flex">
                <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold mb-4">The Visionary</span>
                <h4 className="font-serif text-2xl italic mb-2 dark:text-[#E8E8E8]">Maksudur Rahaman Mistry</h4>
                <p className="text-[11px] text-[#8E8E8E] dark:text-[#B8B8B8] leading-relaxed">Proprietor & Lead Strategist at A.M. Enterprise Pvt Ltd.</p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[11px] uppercase tracking-[0.4em] text-[#C5A059] font-bold mb-8 block">The Philosophy</span>
              <h2 className="text-5xl md:text-6xl font-serif italic mb-12 leading-tight dark:text-[#E8E8E8]">
                Where Design Meets <br />
                <span className="not-italic font-bold">Precision.</span>
              </h2>
              <p className="text-lg text-[#1A1A1A]/70 dark:text-[#E8E8E8]/70 leading-relaxed mb-10 font-light">
                A.M. Enterprise Pvt Ltd is a trusted construction and labour contractor company led by Proprietor Maksidur Rahaman Mistry. We specialize in civil construction, interior and exterior works, painting, polish contracts, and general supply services.
              </p>
              <p className="text-lg text-[#1A1A1A]/70 dark:text-[#E8E8E8]/70 leading-relaxed mb-12 font-light">
                Our mission is to deliver quality workmanship with reliability and professionalism. We take pride in our ability to manage complex projects while maintaining the highest standards of safety and efficiency.
              </p>
              
              <div className="grid grid-cols-2 gap-y-8 gap-x-12 border-t border-[#1A1A1A]/10 dark:border-[#E8E8E8]/10 pt-12">
                {[
                  { label: "Experienced Team", desc: "Expertise in every layer" },
                  { label: "Quality Workmanship", desc: "Precision in execution" },
                  { label: "On-Time Delivery", desc: "Respecting your timeline" },
                  { label: "Affordable Pricing", desc: "Value without compromise" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <span className="text-[10px] uppercase tracking-widest font-bold text-[#C5A059] block mb-2">{item.label}</span>
                    <span className="text-sm font-serif italic dark:text-[#E8E8E8]">{item.desc}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services - Grid with Numbers */}
      <section id="services" className="py-32 bg-[#F9F7F2] dark:bg-[#0F0F0F] transition-colors duration-500">
        <div className="container mx-auto px-6">
          <motion.div 
            className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-2xl">
              <motion.span 
                className="text-[11px] uppercase tracking-[0.4em] text-[#C5A059] font-bold mb-6 block"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                Our Expertise
              </motion.span>
              <motion.h2 
                className="text-5xl md:text-7xl font-serif italic leading-none dark:text-[#E8E8E8]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Curated <span className="not-italic font-bold">Services.</span>
              </motion.h2>
            </div>
            <motion.p 
              className="max-w-xs text-[12px] text-[#8E8E8E] dark:text-[#B8B8B8] leading-relaxed uppercase tracking-widest"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A comprehensive suite of design and execution capabilities for the discerning client.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-[#1A1A1A]/10 dark:border-[#E8E8E8]/10">
            {SERVICES.map((service, index) => (
              <motion.div 
                key={index} 
                className="p-12 border-b border-r border-[#1A1A1A]/10 dark:border-[#E8E8E8]/10 hover:bg-white dark:hover:bg-[#252525] transition-all duration-500 group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ translateY: -5 }}
              >
                <span className="text-[40px] font-serif italic text-[#1A1A1A]/5 dark:text-[#E8E8E8]/5 absolute top-8 right-8 group-hover:text-[#C5A059]/20 transition-colors">
                  0{index + 1}
                </span>
                <motion.div 
                  className="text-[#C5A059] mb-12 group-hover:scale-110 transition-transform duration-500"
                  whileHover={{ rotate: 10 }}
                >
                  {service.icon}
                </motion.div>
                <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold mb-4 block">{service.category}</span>
                <h4 className="text-xl font-bold mb-6 tracking-tight dark:text-[#E8E8E8]">{service.title}</h4>
                <p className="text-sm text-[#8E8E8E] dark:text-[#B8B8B8] leading-relaxed mb-8 font-light">
                  {service.description}
                </p>
                <motion.button 
                  onClick={() => scrollToSection('contact')}
                  className="text-[10px] uppercase tracking-[0.2em] font-bold flex items-center gap-2 group-hover:text-[#C5A059] transition-colors"
                  whileHover={{ x: 4 }}
                >
                  Inquire <ArrowRight size={12} />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio - Editorial Gallery */}
      <section id="gallery" className="py-32 bg-white dark:bg-[#1A1A1A] transition-colors duration-500">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-serif italic mb-8 dark:text-[#E8E8E8]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              The <span className="not-italic font-bold">Portfolio.</span>
            </motion.h2>
            <motion.div 
              className="w-24 h-[1px] bg-[#C5A059] mx-auto"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ originX: 0.5 }}
            ></motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {GALLERY.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden mb-8 relative">
                  <img 
                    src={item.url} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#1A1A1A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold mb-2 block">{item.category}</span>
                    <h4 className="text-2xl font-serif italic tracking-tight dark:text-[#E8E8E8]">{item.title}</h4>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-[#1A1A1A]/10 dark:border-[#E8E8E8]/10 flex items-center justify-center group-hover:bg-[#1A1A1A] dark:group-hover:bg-[#E8E8E8] group-hover:text-white dark:group-hover:text-[#0F0F0F] transition-all duration-500">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Minimalist */}
      <section id="contact" className="py-32 bg-[#1A1A1A] dark:bg-[#0F0F0F] text-white transition-colors duration-500">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-32">
            <div>
              <motion.span 
                className="text-[11px] uppercase tracking-[0.5em] text-[#C5A059] font-bold mb-12 block"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                Contact Us
              </motion.span>
              <motion.h2 
                className="text-6xl md:text-8xl font-serif italic mb-16 leading-none"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Let's Build <br />
                <span className="not-italic font-bold">Something.</span>
              </motion.h2>
              
              <div className="space-y-12">
                <motion.div 
                  className="flex items-start gap-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-[#C5A059]">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-2 block">Voice</span>
                    <p className="text-xl font-medium">7001741628</p>
                    <p className="text-xl font-medium text-white/60">9062905241</p>
                    <p className="text-xl font-medium text-white/40">9830684542</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-[#C5A059] flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-4 block">Studio</span>
                    <p className="text-sm font-medium leading-relaxed mb-6">
                      VILL.- BYASPUR<br />
                      P.O.- MAHESHPUR<br />
                      P.S.- MAGRAHAT<br />
                      DIST.- SOUTH 24 PGS<br />
                      PIN.- 743355<br />
                      West Bengal, India
                    </p>
                    <div className="w-full h-64 rounded-lg overflow-hidden border border-white/10">
                      <iframe 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.5206840197286!2d88.16!3d21.968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbb40f95555555%3A0x0!2smagrahat%20south%2024%20parganas!5e0!3m2!1sen!2sin!4v1234567890" 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg"
                      ></iframe>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/WhatsApp_Logo_green.svg/1280px-WhatsApp_Logo_green.svg.png" alt="WhatsApp" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-2 block">WhatsApp</span>
                    <p className="text-xl font-medium">Connect Instantly</p>
                    <a href="https://wa.me/917001741628" className="text-[#25D366] text-sm font-bold uppercase tracking-widest mt-2 block hover:underline inline-flex items-center gap-2">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/WhatsApp_Logo_green.svg/1280px-WhatsApp_Logo_green.svg.png" alt="WhatsApp" className="w-4 h-4" />
                      Start Chat
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="bg-white/5 dark:bg-[#1A1A1A]/50 p-12 md:p-20 border border-white/10 dark:border-[#E8E8E8]/10">
              {formStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center"
                >
                  <Sparkles className="text-[#C5A059] w-16 h-16 mb-8" />
                  <h4 className="text-3xl font-serif italic mb-4">Inquiry Received</h4>
                  <p className="text-white/60 font-light">We will reach out to you within 24 hours to discuss your vision.</p>
                  <button onClick={() => setFormStatus('idle')} className="mt-12 text-[10px] uppercase tracking-widest font-bold text-[#C5A059]">Send Another</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="space-y-8">
                    <motion.div 
                      className="relative group"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                    >
                      <input type="text" required className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-[#C5A059] transition-colors peer" placeholder=" " />
                      <label className="absolute left-0 top-4 text-[11px] uppercase tracking-widest text-white/40 transition-all peer-focus:-top-4 peer-focus:text-[#C5A059] peer-[:not(:placeholder-shown)]:-top-4">Full Name</label>
                    </motion.div>
                    <motion.div 
                      className="relative group"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      <input type="tel" required className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-[#C5A059] transition-colors peer" placeholder=" " />
                      <label className="absolute left-0 top-4 text-[11px] uppercase tracking-widest text-white/40 transition-all peer-focus:-top-4 peer-focus:text-[#C5A059] peer-[:not(:placeholder-shown)]:-top-4">Phone Number</label>
                    </motion.div>
                    <motion.div 
                      className="relative group"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      <select className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-[#C5A059] transition-colors appearance-none text-white/60">
                        <option className="bg-[#1A1A1A]">Construction & Civil Work</option>
                        <option className="bg-[#1A1A1A]">Labour Contractor Services</option>
                        <option className="bg-[#1A1A1A]">Interior Work</option>
                        <option className="bg-[#1A1A1A]">Exterior Work</option>
                        <option className="bg-[#1A1A1A]">Paint & Polish Contracting</option>
                        <option className="bg-[#1A1A1A]">General Order Supplier</option>
                      </select>
                      <label className="absolute left-0 -top-4 text-[11px] uppercase tracking-widest text-[#C5A059]">Service Interest</label>
                    </motion.div>
                    <motion.div 
                      className="relative group"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
                      <textarea rows={3} className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-[#C5A059] transition-colors peer" placeholder=" "></textarea>
                      <label className="absolute left-0 top-4 text-[11px] uppercase tracking-widest text-white/40 transition-all peer-focus:-top-4 peer-focus:text-[#C5A059] peer-[:not(:placeholder-shown)]:-top-4">Project Brief</label>
                    </motion.div>
                  </div>
                  <motion.button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-[#C5A059] text-white py-6 text-[12px] uppercase tracking-[0.4em] font-bold hover:bg-white hover:text-[#1A1A1A] transition-all duration-500"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {formStatus === 'submitting' ? 'Processing...' : 'Submit Inquiry'}
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Minimalist */}
      <motion.footer 
        className="bg-[#F9F7F2] dark:bg-[#1A1A1A] py-20 border-t border-[#1A1A1A]/5 dark:border-[#E8E8E8]/5 transition-colors duration-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div 
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="/logo.png"
                alt="A.M. Enterprise Logo"
                className="w-8 h-8 object-contain"
              />
              <span className="font-serif text-lg font-bold tracking-tighter">A.M. ENTERPRISE PVT LTD</span>
            </motion.div>
            
            <div className="flex gap-12">
              {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((item, index) => (
                <motion.button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-[10px] uppercase tracking-widest font-bold text-[#8E8E8E] hover:text-[#C5A059] transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ color: '#C5A059' }}
                >
                  {item}
                </motion.button>
              ))}
            </div>

            <motion.p 
              className="text-[10px] uppercase tracking-widest text-[#8E8E8E] font-medium"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              © 2026 A.M. Enterprise Pvt Ltd.
            </motion.p>
          </div>
        </div>
      </motion.footer>

      {/* Floating WhatsApp */}
      <motion.a 
        href="https://wa.me/917001741628" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-12 right-12 z-50 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-xl transition-all duration-500 group p-2"
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/WhatsApp_Logo_green.svg/1280px-WhatsApp_Logo_green.svg.png" alt="WhatsApp" className="w-full h-full object-contain group-hover:scale-110 transition-transform" />
      </motion.a>
    </div>
  );
}
