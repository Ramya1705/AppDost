import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Code, Smartphone, Globe, Zap, Users, Award, ArrowRight, Check, Star, MessageSquare, ChevronRight, Sparkles, Rocket, Shield, TrendingUp, Sun, Moon, Mail, Phone, MapPin, Send, ChevronDown, Calendar, Clock, DollarSign, Briefcase, Target, Heart, Coffee, Linkedin, Twitter, Instagram, BookOpen, BrainCircuit, PenTool, Info, ExternalLink, Github, Play } from 'lucide-react';

const useOnScreen = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return [ref, isVisible];
};

const AnimatedSection = ({ children, className, id }) => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section
            id={id}
            ref={ref}
            className={`${className} transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
        >
            {children}
        </section>
    );
};

const AnimatedCounter = ({ end, duration = 2000, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime;
    const startCount = 0;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const currentCount = Math.floor(startCount + (end - startCount) * percentage);
      setCount(currentCount);
      
      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, isVisible]);

  return <span>{count}</span>;
};

export default function AppDost() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [activeTechFilter, setActiveTechFilter] = useState('All');
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [notification, setNotification] = useState({ show: false, message: '' });
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);
  
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: ''
  });
  const [formStatus, setFormStatus] = useState('idle');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          if (statsRef.current) {
            observer.unobserve(statsRef.current);
          }
        }
      },
      { threshold: 0.5 }
    );
    
    const currentRef = statsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (notification.show) {
      const timer = setTimeout(() => {
        setNotification({ show: false, message: '' });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if(targetElement){
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };
  
  const handleApplyClick = (programTitle) => {
    setSelectedProgram(null);
    setFormData(prev => ({ ...prev, message: `I'm interested in the "${programTitle}" program.` }));
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleCaseStudyClick = () => {
    setSelectedProject(null);
    setNotification({ show: true, message: 'Case study coming soon!' });
  };

  const bgColor = isDarkMode ? 'bg-slate-950' : 'bg-slate-50';
  const textColor = isDarkMode ? 'text-white' : 'text-slate-900';
  const cardBg = isDarkMode ? 'bg-slate-900/50' : 'bg-white';
  const borderColor = isDarkMode ? 'border-slate-800' : 'border-slate-200';

  const services = [
    { icon: <Smartphone className="w-10 h-10" />, title: "Mobile App Development", description: "Native iOS and Android apps built with cutting-edge technology.", features: ["iOS Development", "Android Development", "React Native", "Flutter"], gradient: "from-blue-500 via-cyan-500 to-teal-500" },
    { icon: <Globe className="w-10 h-10" />, title: "Web Development", description: "Responsive, fast, and scalable web applications that drive business growth.", features: ["Custom Web Apps", "E-commerce", "API Integration", "CMS Solutions"], gradient: "from-purple-500 via-pink-500 to-rose-500" },
    { icon: <Code className="w-10 h-10" />, title: "UI/UX Design", description: "Beautiful, intuitive interfaces that users love and remember.", features: ["User Research", "Wireframing", "Prototyping", "Visual Design"], gradient: "from-amber-500 via-orange-500 to-red-500" },
    { icon: <Zap className="w-10 h-10" />, title: "Digital Strategy", description: "Data-driven strategies to accelerate your digital transformation.", features: ["Product Strategy", "Market Analysis", "Growth Planning", "MVP Development"], gradient: "from-emerald-500 via-green-500 to-lime-500" }
  ];

  const trainingPrograms = [
    {
      title: "Full-Stack Web Development", icon: <Code className="w-10 h-10 text-blue-400" />, duration: "24 Weeks", format: "Part-Time", description: "Master the MERN stack and build complete, production-ready web applications from scratch.", skills: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS", "Next.js"], projects: ["E-commerce Platform", "Social Media Dashboard", "Real-time Chat App"],
      curriculum: [ { week: "1-4", topic: "Frontend Foundations (HTML, CSS, JavaScript)" }, { week: "5-10", topic: "Advanced React & State Management" }, { week: "11-16", topic: "Backend Development with Node.js & Express" }, { week: "17-20", topic: "Database Design with MongoDB" }, { week: "21-24", topic: "Final Project & Deployment" } ]
    },
    {
      title: "AI & Machine Learning", icon: <BrainCircuit className="w-10 h-10 text-purple-400" />, duration: "32 Weeks", format: "Part-Time", description: "Dive into the world of artificial intelligence. Learn to build and deploy machine learning models.", skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas"], projects: ["Image Recognition Model", "Sentiment Analysis Tool", "Stock Price Predictor"],
      curriculum: [ { week: "1-6", topic: "Python for Data Science" }, { week: "7-14", topic: "Core Machine Learning Algorithms" }, { week: "15-22", topic: "Deep Learning & Neural Networks" }, { week: "23-28", topic: "Model Deployment & MLOps" }, { week: "29-32", topic: "Capstone AI Project" } ]
    },
    {
      title: "UI/UX Design Bootcamp", icon: <PenTool className="w-10 h-10 text-pink-400" />, duration: "16 Weeks", format: "Full-Time", description: "From user research to high-fidelity prototypes, learn the complete design thinking process.", skills: ["Figma", "Adobe XD", "User Research", "Wireframing", "Prototyping"], projects: ["Mobile Banking App Redesign", "SaaS Product Dashboard", "Wellness App Concept"],
      curriculum: [ { week: "1-4", topic: "Design Fundamentals & User Research" }, { week: "5-8", topic: "Wireframing & Prototyping in Figma" }, { week: "9-12", topic: "Visual Design & UI Principles" }, { week: "13-16", topic: "Portfolio Building & Career Prep" } ]
    }
  ];

  const portfolio = [
    { title: "FinTech App", category: "Financial Services", image: "bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700", stats: "500K+ Downloads", description: "A comprehensive financial management app with real-time analytics and secure transactions.", tech: ["React Native", "Node.js", "MongoDB"], duration: "6 months" },
    { title: "Healthcare Platform", category: "Health & Wellness", image: "bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700", stats: "50K+ Active Users", description: "Telemedicine platform connecting patients with healthcare professionals seamlessly.", tech: ["Flutter", "Firebase", "WebRTC"], duration: "8 months" },
    { title: "E-Commerce Solution", category: "Retail", image: "bg-gradient-to-br from-orange-600 via-red-600 to-rose-700", stats: "$2M+ Revenue", description: "Full-featured e-commerce platform with AI-powered recommendations.", tech: ["Next.js", "PostgreSQL", "Stripe"], duration: "5 months" },
    { title: "Social Network", category: "Social Media", image: "bg-gradient-to-br from-pink-600 via-fuchsia-600 to-purple-700", stats: "100K+ Connections", description: "Community-driven social platform with real-time messaging and content sharing.", tech: ["React", "GraphQL", "AWS"], duration: "10 months" }
  ];

  const techStack = [ 
    { name: "React", category: "Frontend" }, 
    { name: "Next.js", category: "Frontend" }, 
    { name: "React Native", category: "Mobile" }, 
    { name: "Flutter", category: "Mobile" }, 
    { name: "Node.js", category: "Backend" }, 
    { name: "Python", category: "Backend" }, 
    { name: "Firebase", category: "Backend" }, 
    { name: "PostgreSQL", category: "Database" }, 
    { name: "MongoDB", category: "Database" }, 
    { name: "AWS", category: "Cloud" }, 
    { name: "Docker", category: "DevOps" }, 
    { name: "Kubernetes", category: "DevOps" } 
  ];
  
  const filteredTechStack = techStack.filter(tech => activeTechFilter === 'All' || tech.category === activeTechFilter);
  const techCategories = ['All', ...new Set(techStack.map(tech => tech.category))];

  const testimonials = [ 
    { name: "Sarah Johnson", role: "CEO, TechStart", content: "They transformed our idea into a stunning app that exceeded all expectations. The team's expertise and dedication are unmatched.", rating: 5, image: "bg-gradient-to-br from-pink-500 to-rose-600" }, 
    { name: "Michael Chen", role: "Founder, GrowthLab", content: "Outstanding work! They delivered our project on time and within budget. The quality of code and design is exceptional.", rating: 5, image: "bg-gradient-to-br from-blue-500 to-cyan-600" }, 
    { name: "Emily Rodriguez", role: "CTO, DataFlow", content: "Professional, responsive, and incredibly talented. They brought our vision to life with precision and creativity.", rating: 5, image: "bg-gradient-to-br from-emerald-500 to-teal-600" } 
  ];

  const faqs = [
    { question: "How long does a typical project take?", answer: "Project timelines vary based on complexity. Small projects can take 2-4 weeks, medium projects around 1-3 months, and large-scale projects can take 3-6+ months." },
    { question: "What are your payment terms?", answer: "We typically work with a 30-40-30 payment structure: a 30% upfront deposit to start, a 40% milestone payment, and the final 30% upon project delivery." },
    { question: "Do you provide post-launch support?", answer: "Yes! We offer comprehensive maintenance and support packages for all our projects. This includes bug fixes, updates, and ensuring your application runs smoothly." },
    { question: "Do you work with international clients?", answer: "Absolutely! We serve clients globally and are highly experienced in remote collaboration across different time zones to ensure seamless communication and project management." },
    { question: "What technologies do you use?", answer: "We use a modern tech stack tailored to project needs, including React, Node.js, Python, Kotlin, and cloud services like AWS, to build scalable and robust applications." },
    { question: "Can I visit your office?", answer: "Yes! We welcome office visits. Please schedule an appointment in advance to ensure our team is available to meet with you." }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
        setFormStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
    }, 2000);
  };
  
  const navLinks = ['Services', 'Training', 'Portfolio', 'Testimonials', 'FAQ', 'Contact'];

  const RenderThemeIcon = ({ withText = false }) => {
    if (isDarkMode) {
      return withText ? <><Sun className="w-5 h-5" /><span>Light Mode</span></> : <Sun className="w-5 h-5" />;
    }
    return withText ? <><Moon className="w-5 h-5" /><span>Dark Mode</span></> : <Moon className="w-5 h-5" />;
  };

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} transition-colors duration-500 overflow-x-hidden relative`}>
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s'}} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{animationDuration: '8s'}} />
      </div>

      {notification.show && (
        <div className={`fixed top-6 right-6 z-[150] flex items-center gap-3 px-6 py-4 rounded-2xl border-2 ${borderColor} ${cardBg} backdrop-blur-2xl shadow-2xl transition-all duration-500 animate-in slide-in-from-top`}>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          <Info className="w-5 h-5 text-blue-400"/>
          <span className="text-sm font-semibold">{notification.message}</span>
        </div>
      )}

      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? `${isDarkMode ? 'bg-slate-950/90' : 'bg-white/90'} backdrop-blur-2xl border-b-2 ${borderColor} shadow-2xl` : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center space-x-3 group">
              <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-purple-500/50">
                <Sparkles className="w-7 h-7 text-white animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity" />
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">AppDost</span>
            </a>
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={(e) => handleNavClick(e, `#${item.toLowerCase()}`)} className="relative group font-semibold">
                  <span className="relative z-10">{item}</span>
                  <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full group-hover:w-full transition-all duration-300"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 rounded-lg transition-all duration-300 -z-10"></span>
                </a>
              ))}
              <button onClick={() => setIsDarkMode(!isDarkMode)} className={`p-3 rounded-xl ${cardBg} border-2 ${borderColor} hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-lg`}>
                <RenderThemeIcon />
              </button>
              <button onClick={(e) => handleNavClick(e, '#contact')} className="relative px-8 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-bold overflow-hidden group shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-xl hover:bg-white/10 transition-colors">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className={`md:hidden ${isDarkMode ? 'bg-slate-950/95' : 'bg-white/95'} backdrop-blur-2xl border-t-2 ${borderColor} shadow-xl`}>
            <div className="px-6 py-6 space-y-4">
              {navLinks.map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={(e) => handleNavClick(e, `#${item.toLowerCase()}`)} className="block py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 transition-all font-semibold">
                  {item}
                </a>
              ))}
              <button onClick={() => setIsDarkMode(!isDarkMode)} className={`w-full px-6 py-3 ${cardBg} border-2 ${borderColor} rounded-xl font-semibold flex items-center justify-center space-x-2 hover:scale-105 transition-transform`}>
                <RenderThemeIcon withText />
              </button>
              <button onClick={(e) => handleNavClick(e, '#contact')} className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold shadow-lg">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      <AnimatedSection id="home" className="relative min-h-screen flex items-center justify-center pt-24 px-6 overflow-hidden">
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-br from-slate-950 via-blue-950/30 to-purple-950/30' : 'bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50'}`}>
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, ${isDarkMode ? 'rgba(139,92,246,0.15)' : 'rgba(139,92,246,0.08)'} 1px, transparent 0)`, backgroundSize: '48px 48px' }} />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
            <div className={`inline-flex items-center space-x-3 ${isDarkMode ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10' : 'bg-gradient-to-r from-blue-100 to-purple-100'} backdrop-blur-sm border-2 ${isDarkMode ? 'border-purple-500/30' : 'border-purple-300'} rounded-full px-6 py-3 mb-10 shadow-xl`}>
              <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
              <span className="font-bold text-sm bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Transforming Ideas Into Digital Reality</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-tight tracking-tight">
              Build The Next <br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">Big Thing</span>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl -z-10 animate-pulse" />
              </span>
            </h1>
            <p className={`text-xl md:text-2xl ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} mb-14 max-w-3xl mx-auto font-medium leading-relaxed`}>
              We craft exceptional mobile apps, web platforms, and digital experiences that users love and businesses need.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button onClick={(e) => handleNavClick(e, '#contact')} className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-purple-500/50 overflow-hidden hover:scale-105 transition-all duration-300">
                <span className="relative z-10 flex items-center space-x-3">
                  <span>Start Your Project</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
              <button onClick={(e) => handleNavClick(e, '#portfolio')} className={`px-10 py-5 ${cardBg} border-2 ${borderColor} backdrop-blur-sm rounded-2xl hover:scale-105 hover:border-purple-500/50 transition-all duration-300 font-bold text-lg shadow-xl`}>
                View Our Work
              </button>
            </div>
            <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
              {[{ number: 200, label: "Projects Delivered", suffix: "+" }, { number: 50, label: "Happy Clients", suffix: "+" }, { number: 15, label: "Team Members", suffix: "+" }, { number: 98, label: "Success Rate", suffix: "%" }].map((stat, i) => (
                <div key={i} className={`text-center p-6 rounded-2xl ${cardBg} border-2 ${borderColor} backdrop-blur-sm hover:scale-105 transition-transform duration-300 shadow-lg`}>
                  <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-3">
                    <AnimatedCounter end={stat.number} isVisible={statsVisible} />{stat.suffix}
                  </div>
                  <div className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'} font-semibold`}>{stat.label}</div>
                </div>
              ))}
            </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="services" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border-2 border-blue-500/30 rounded-full px-5 py-2 mb-8 backdrop-blur-sm shadow-lg">
              <Rocket className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-bold text-blue-400">What We Offer</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Our Services</h2>
            <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} max-w-2xl mx-auto font-medium`}>End-to-end solutions for your digital transformation journey</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div key={i} onMouseEnter={() => setActiveService(i)} className={`group relative p-6 rounded-3xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 overflow-hidden ${ activeService === i ? `bg-gradient-to-br ${service.gradient} shadow-2xl` : `${isDarkMode ? 'bg-slate-900/40 backdrop-blur-xl' : 'bg-white/40 backdrop-blur-xl'} border border-white/10 shadow-xl hover:shadow-2xl`}`}>
                <div className={`absolute inset-0 bg-gradient-to-br from-white/5 via-white/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className={`absolute inset-0 backdrop-blur-xl rounded-3xl ${activeService === i ? 'bg-black/20' : 'bg-transparent'} transition-all duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${ activeService === i ? 'bg-white/20 backdrop-blur-sm scale-110' : `${isDarkMode ? 'bg-slate-800/50' : 'bg-white/50'} backdrop-blur-sm`}`}>
                    <div className={activeService === i ? 'text-white' : ''}>
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className={`text-xl font-black mb-3 ${activeService === i ? 'text-white' : ''}`}>{service.title}</h3>
                  <p className={`${activeService === i ? 'text-white/80' : isDarkMode ? 'text-slate-400' : 'text-slate-600'} mb-5 font-medium text-sm leading-relaxed`}>{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className={`flex items-center space-x-2 text-xs ${activeService === i ? 'text-white/90' : isDarkMode ? 'text-slate-400' : 'text-slate-600'} font-medium`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${activeService === i ? 'bg-white/80' : 'bg-gradient-to-br from-blue-400 to-purple-500'}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="training" className={`py-32 px-6 ${isDarkMode ? 'bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950' : 'bg-gradient-to-b from-slate-50 via-purple-50 to-slate-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 border-2 border-purple-500/30 rounded-full px-5 py-2 mb-8 backdrop-blur-sm shadow-lg">
              <BookOpen className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-bold text-purple-400">AppDost Academy</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Launch Your Tech Career</h2>
            <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} max-w-3xl mx-auto font-medium`}>Intensive, project-based bootcamps designed to get you job-ready. Learn the most in-demand skills from industry experts.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {trainingPrograms.map((program, i) => (
              <div key={i} onClick={() => setSelectedProgram(program)} className={`group p-6 rounded-3xl transition-all duration-500 hover:scale-105 cursor-pointer flex flex-col transform hover:-translate-y-2 ${isDarkMode ? 'bg-slate-900/40 backdrop-blur-xl border border-white/10' : 'bg-white/40 backdrop-blur-xl border border-white/20'} shadow-xl hover:shadow-2xl overflow-hidden relative`}>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${isDarkMode ? 'bg-slate-800/50' : 'bg-white/50'} backdrop-blur-sm`}>
                      {program.icon}
                    </div>
                    <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${isDarkMode ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-600'} backdrop-blur-sm`}>{program.format}</span>
                  </div>
                  
                  <h3 className="text-xl font-black mb-3 flex-grow">{program.title}</h3>
                  <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'} mb-5 text-sm font-medium leading-relaxed`}>{program.description}</p>
                  
                  <div className="flex items-center justify-between text-sm pt-4 border-t border-white/10">
                    <span className="font-bold text-base">{program.duration}</span>
                    <span className="flex items-center space-x-2 text-purple-400 group-hover:translate-x-1 transition-transform font-bold">
                      <span className="text-xs">Learn More</span>
                      <ArrowRight className="w-4 h-4"/>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-black mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Our Proven Process</h3>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></div>
            <div className="grid md:grid-cols-4 gap-12 relative">
              {[
                {step: "01", title: "Apply Online", desc: "Submit your application and tell us about your goals."},
                {step: "02", title: "Skill Challenge", desc: "Complete a short assessment to gauge your current knowledge."},
                {step: "03", title: "Join Cohort", desc: "Enroll and start your intensive, hands-on learning journey."},
                {step: "04", title: "Launch Career", desc: "Graduate with a strong portfolio and get career support."}
              ].map(item => (
                <div key={item.step} className={`p-8 rounded-3xl ${cardBg} border-2 ${borderColor} text-center hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl hover:border-purple-500/50`}>
                  <div className="mb-4 text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">{item.step}</div>
                  <h4 className="font-black text-xl mb-3">{item.title}</h4>
                  <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} font-medium`}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      <AnimatedSection id="techstack" className={`py-32 px-6 ${isDarkMode ? 'bg-gradient-to-b from-slate-950 via-blue-950/10 to-slate-950' : 'bg-gradient-to-b from-slate-50 via-blue-50 to-slate-50'}`}>
          <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <div className="inline-flex items-center space-x-2 bg-green-500/10 border-2 border-green-500/30 rounded-full px-5 py-2 mb-8 backdrop-blur-sm shadow-lg">
                  <Code className="w-5 h-5 text-green-400" />
                  <span className="text-sm font-bold text-green-400">Technologies</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Tech Stack</h2>
                <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} max-w-2xl mx-auto font-medium`}>We use cutting-edge technologies to build robust solutions</p>
              </div>
              <div className="flex justify-center flex-wrap gap-4 mb-16">
                {techCategories.map(category => (
                  <button key={category} onClick={() => setActiveTechFilter(category)} className={`px-6 py-3 text-base rounded-2xl font-bold transition-all duration-300 shadow-lg ${activeTechFilter === category ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white scale-110 shadow-purple-500/50' : `${cardBg} border-2 ${borderColor} hover:scale-105 hover:border-purple-500/50`}`}>
                    {category}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {filteredTechStack.map((tech, i) => (
                  <div key={i} className={`p-8 rounded-3xl ${cardBg} border-2 ${borderColor} hover:border-blue-500/50 transition-all duration-300 text-center group hover:scale-110 cursor-pointer shadow-xl hover:shadow-2xl`}>
                    <div className="font-black text-lg mb-2">{tech.name}</div>
                    <div className={`text-xs font-bold ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{tech.category}</div>
                  </div>
                ))}
              </div>
          </div>
      </AnimatedSection>

      <AnimatedSection id="portfolio" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 border-2 border-purple-500/30 rounded-full px-5 py-2 mb-8 backdrop-blur-sm shadow-lg">
              <Award className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-bold text-purple-400">Our Work</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Featured Projects</h2>
            <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} max-w-2xl mx-auto font-medium`}>Explore some of our most successful digital products</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {portfolio.map((project, i) => (
              <div key={i} onClick={() => setSelectedProject(project)} className={`group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer hover:scale-105 transform hover:-translate-y-2 ${isDarkMode ? 'bg-slate-900/40 backdrop-blur-xl border border-white/10' : 'bg-white/40 backdrop-blur-xl border border-white/20'} shadow-xl hover:shadow-2xl`}>
                <div className={`aspect-video ${project.image} relative`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <div className="text-xs font-bold text-blue-300 mb-2 tracking-wider uppercase backdrop-blur-sm bg-blue-500/20 px-3 py-1 rounded-full inline-block self-start">{project.category}</div>
                    <h3 className="text-3xl font-black mb-2 text-white">{project.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white/90 text-sm">{project.stats}</span>
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-all group-hover:scale-110">
                        <ArrowRight className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="testimonials" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="inline-flex items-center space-x-2 bg-yellow-500/10 border-2 border-yellow-500/30 rounded-full px-5 py-2 mb-8 backdrop-blur-sm shadow-lg">
              <MessageSquare className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-bold text-yellow-400">Client Love</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">What Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <div key={i} className={`p-8 rounded-3xl transition-all duration-500 hover:scale-105 transform hover:-translate-y-2 ${isDarkMode ? 'bg-slate-900/40 backdrop-blur-xl border border-white/10' : 'bg-white/40 backdrop-blur-xl border border-white/20'} shadow-xl hover:shadow-2xl relative overflow-hidden group`}>
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-1 mb-5">
                    {[...Array(testimonial.rating)].map((_, idx) => (
                      <Star key={idx} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-700'} mb-6 leading-relaxed text-base font-medium`}>{testimonial.content}</p>
                  <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
                    <div className={`w-12 h-12 ${testimonial.image} rounded-2xl flex items-center justify-center text-white font-black text-base shadow-lg`}>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-black text-base">{testimonial.name}</div>
                      <div className={`text-xs font-semibold ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="faq" className={`py-32 px-6 ${isDarkMode ? 'bg-gradient-to-b from-slate-950 via-indigo-950/10 to-slate-950' : 'bg-gradient-to-b from-slate-50 via-indigo-50 to-slate-50'}`}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border-2 border-indigo-500/30 rounded-full px-5 py-2 mb-8 backdrop-blur-sm shadow-lg">
              <MessageSquare className="w-5 h-5 text-indigo-400" />
              <span className="text-sm font-bold text-indigo-400">Got Questions?</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Frequently Asked Questions</h2>
            <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} font-medium`}>Quick answers to common questions about our services</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className={`${cardBg} border-2 ${borderColor} rounded-3xl overflow-hidden transition-all duration-300 hover:border-indigo-500/50 shadow-xl hover:shadow-2xl`}>
                <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full p-8 text-left flex items-center justify-between group">
                  <span className="font-black text-lg pr-8">{faq.question}</span>
                  <div className={`w-10 h-10 rounded-full ${activeFaq === i ? 'bg-gradient-to-br from-indigo-500 to-purple-600' : `${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`} flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110`}>
                    <ChevronDown className={`w-5 h-5 ${isDarkMode || activeFaq === i ? 'text-white' : 'text-slate-800'} transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${activeFaq === i ? 'max-h-64' : 'max-h-0'}`}>
                  <div className={`p-8 pt-0 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} font-medium leading-relaxed`}>{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
      
      <AnimatedSection id="contact" className={`py-32 px-6 ${isDarkMode ? 'bg-gradient-to-b from-slate-950 via-blue-950/10 to-slate-950' : 'bg-gradient-to-b from-slate-50 via-blue-50 to-slate-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border-2 border-blue-500/30 rounded-full px-5 py-2 mb-8 backdrop-blur-sm shadow-lg">
              <Mail className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-bold text-blue-400">Get In Touch</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">Let's Talk</h2>
            <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} max-w-2xl mx-auto font-medium`}>Have a project in mind? We'd love to hear from you</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className={`block text-sm font-bold mb-3 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>Name *</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className={`w-full px-6 py-4 rounded-2xl ${cardBg} border-2 ${borderColor} focus:border-blue-500 focus:outline-none transition-all font-medium shadow-lg`} placeholder="Your name"/>
                </div>
                <div>
                  <label className={`block text-sm font-bold mb-3 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>Email *</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className={`w-full px-6 py-4 rounded-2xl ${cardBg} border-2 ${borderColor} focus:border-blue-500 focus:outline-none transition-all font-medium shadow-lg`} placeholder="your@email.com"/>
                </div>
                <div>
                  <label className={`block text-sm font-bold mb-3 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>Phone</label>
                  <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className={`w-full px-6 py-4 rounded-2xl ${cardBg} border-2 ${borderColor} focus:border-blue-500 focus:outline-none transition-all font-medium shadow-lg`} placeholder="+91 76350 75422"/>
                </div>
                <div>
                  <label className={`block text-sm font-bold mb-3 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>Service *</label>
                  <select required value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})} className={`w-full px-6 py-4 rounded-2xl ${cardBg} border-2 ${borderColor} focus:border-blue-500 focus:outline-none transition-all font-medium shadow-lg`}>
                    <option value="">Select a service</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="web">Web Development</option>
                    <option value="design">UI/UX Design</option>
                    <option value="strategy">Digital Strategy</option>
                    <option value="training">Training Programs</option>
                  </select>
                </div>
                <div>
                  <label className={`block text-sm font-bold mb-3 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>Message *</label>
                  <textarea required rows="4" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className={`w-full px-6 py-4 rounded-2xl ${cardBg} border-2 ${borderColor} focus:border-blue-500 focus:outline-none transition-all resize-none font-medium shadow-lg`} placeholder="Tell us about your project..."/>
                </div>
                <button type="submit" disabled={formStatus === 'submitting'} className="w-full px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 font-black text-lg flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105">
                  <span>{formStatus === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                  <Send className="w-6 h-6" />
                </button>
                {formStatus === 'success' && <p className="text-center text-green-400 font-bold text-lg animate-in fade-in">✓ Thank you! Your message has been sent.</p>}
              </form>
            </div>
            <div className="space-y-6">
              <div className={`p-8 rounded-2xl border ${isDarkMode ? 'border-purple-600/50 bg-gradient-to-br from-[#1A1B27] to-[#211E39] shadow-[0_0_20px_rgba(139,92,246,0.3)]' : 'border-slate-300 bg-white shadow-lg'} transition-all duration-300 cursor-pointer`}>
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email Us</h3>
                    <a href="mailto:contact@appdost.in" className={`block text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-600'} hover:text-blue-400 transition-colors`}>contact@appdost.in</a>
                    <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} font-medium mt-1`}>We'll respond within 24 hours</p>
                  </div>
                </div>
              </div>
              <div className={`p-8 rounded-2xl border ${isDarkMode ? 'border-purple-600/50 bg-gradient-to-br from-[#1A1B27] to-[#211E39] shadow-[0_0_20px_rgba(139,92,246,0.3)]' : 'border-slate-300 bg-white shadow-lg'} transition-all duration-300 cursor-pointer`}>
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Call Us</h3>
                    <a href="tel:+917635075422" className={`block text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-600'} hover:text-blue-400 transition-colors`}>+91 76350 75422</a>
                    <a href="tel:+911169290750" className={`block text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-600'} hover:text-blue-400 transition-colors`}>+91 11 6929 0750</a>
                    <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} font-medium mt-1`}>Mon - Sat: 9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>
              </div>
              <div className={`p-8 rounded-2xl border ${isDarkMode ? 'border-purple-600/50 bg-gradient-to-br from-[#1A1B27] to-[#211E39] shadow-[0_0_20px_rgba(139,92,246,0.3)]' : 'border-slate-300 bg-white shadow-lg'} transition-all duration-300 cursor-pointer`}>
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-red-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Our Offices</h3>
                    <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}><b>HQ:</b> Haveli Lakarikola, Banka, Bihar 813102</p>
                    <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} font-medium`}>Branches: Motihari & Patna</p>
                  </div>
                </div>
              </div>
              <a href="#" target="_blank" rel="noopener noreferrer" className={`p-8 rounded-2xl border ${isDarkMode ? 'border-purple-600/50 bg-gradient-to-br from-[#1A1B27] to-[#211E39] shadow-[0_0_20px_rgba(139,92,246,0.3)]' : 'border-slate-300 bg-white shadow-lg'} transition-all duration-300 cursor-pointer block`}>
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MessageSquare className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Join our Channel</h3>
                    <span className={`block text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-600'} hover:text-green-400 transition-colors`}>Join on WhatsApp</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <footer className={`border-t-2 ${borderColor} py-16 px-6`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <span className="text-2xl font-black">AppDost</span>
              </div>
              <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'} text-sm mb-6 font-medium`}>Transforming ideas into digital reality.</p>
              <div className="flex space-x-4">
                <a href="#" aria-label="LinkedIn" className={`w-12 h-12 ${cardBg} border-2 ${borderColor} rounded-2xl flex items-center justify-center hover:border-blue-500/50 transition-all hover:scale-110 shadow-lg`}>
                  <Linkedin className="w-5 h-5"/>
                </a>
                <a href="#" aria-label="Twitter" className={`w-12 h-12 ${cardBg} border-2 ${borderColor} rounded-2xl flex items-center justify-center hover:border-blue-500/50 transition-all hover:scale-110 shadow-lg`}>
                  <Twitter className="w-5 h-5"/>
                </a>
                <a href="#" aria-label="Instagram" className={`w-12 h-12 ${cardBg} border-2 ${borderColor} rounded-2xl flex items-center justify-center hover:border-blue-500/50 transition-all hover:scale-110 shadow-lg`}>
                  <Instagram className="w-5 h-5"/>
                </a>
              </div>
            </div>
             <div>
                <h4 className="font-black mb-6 text-lg">Services</h4>
                <ul className={`space-y-3 text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} font-medium`}>
                    <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-blue-400 transition-colors">Mobile Development</a></li>
                    <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-blue-400 transition-colors">Web Development</a></li>
                    <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-blue-400 transition-colors">UI/UX Design</a></li>
                    <li><a href="#training" onClick={(e) => handleNavClick(e, '#training')} className="hover:text-blue-400 transition-colors">Training Programs</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-black mb-6 text-lg">Company</h4>
                <ul className={`space-y-3 text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} font-medium`}>
                    <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-blue-400 transition-colors">About Us</a></li>
                    <li><a href="#portfolio" onClick={(e) => handleNavClick(e, '#portfolio')} className="hover:text-blue-400 transition-colors">Portfolio</a></li>
                    <li><a href="#faq" onClick={(e) => handleNavClick(e, '#faq')} className="hover:text-blue-400 transition-colors">FAQ</a></li>
                    <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-blue-400 transition-colors">Contact</a></li>
                </ul>
            </div>
            <div>
              <h4 className="font-black mb-6 text-lg">Newsletter</h4>
              <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} mb-4 font-medium`}>Subscribe for the latest updates.</p>
              <div className="flex">
                <input type="email" placeholder="Your email" className={`flex-1 px-4 py-2 rounded-l-2xl ${cardBg} border-2 ${borderColor} focus:border-blue-500 focus:outline-none text-sm font-medium`} />
                <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-r-2xl hover:shadow-lg transition-all hover:scale-105" aria-label="Subscribe to newsletter">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          <div className={`border-t-2 ${borderColor} pt-8 flex flex-col md:flex-row items-center justify-between text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} font-medium`}>
            <p>© 2025 AppDost. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
      
      {showCookieBanner && (
        <div className={`fixed bottom-0 left-0 right-0 z-50 p-6 ${isDarkMode ? 'bg-slate-900/95' : 'bg-white/95'} backdrop-blur-2xl border-t-2 ${borderColor} flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl`}>
          <p className="text-sm text-center sm:text-left font-medium">We use cookies to enhance your browsing experience. By clicking "Accept", you consent to our use of cookies.</p>
          <div className="flex items-center gap-4 flex-shrink-0">
            <button onClick={() => setShowCookieBanner(false)} className="text-sm hover:text-blue-400 transition-colors font-semibold">Decline</button>
            <button onClick={() => setShowCookieBanner(false)} className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl text-sm hover:scale-105 transition-transform font-bold shadow-lg">Accept</button>
          </div>
        </div>
      )}
      
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in" onClick={() => setSelectedProject(null)}>
          <div className={`${cardBg} rounded-3xl p-6 sm:p-10 max-w-2xl w-full border-2 ${borderColor} animate-in zoom-in shadow-2xl`} onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl sm:text-4xl font-black">{selectedProject.title}</h3>
              <button onClick={() => setSelectedProject(null)} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className={`${selectedProject.image} h-48 sm:h-64 rounded-2xl mb-8 shadow-xl`} />
            <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-700'} mb-6 text-lg font-medium leading-relaxed`}>{selectedProject.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div>
                <div className={`text-sm font-bold ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} mb-2`}>Technologies</div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, i) => (
                    <span key={i} className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-bold border border-blue-500/30">{t}</span>
                  ))}
                </div>
              </div>
              <div>
                <div className={`text-sm font-bold ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} mb-2`}>Duration</div>
                <div className="font-black text-lg">{selectedProject.duration}</div>
              </div>
            </div>
            <button onClick={handleCaseStudyClick} className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-black text-lg shadow-lg">View Case Study</button>
          </div>
        </div>
      )}
      
      {selectedProgram && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in" onClick={() => setSelectedProgram(null)}>
          <div className={`${bgColor} rounded-3xl p-6 sm:p-10 max-w-3xl w-full border-2 ${borderColor} max-h-[90vh] overflow-y-auto animate-in zoom-in shadow-2xl`} onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-3xl sm:text-4xl font-black mb-2">{selectedProgram.title}</h3>
                <p className="text-purple-400 font-bold text-lg">{selectedProgram.duration} - {selectedProgram.format}</p>
              </div>
              <button onClick={() => setSelectedProgram(null)} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h4 className="font-black text-2xl mb-6">Curriculum</h4>
                <ul className="space-y-4">
                  {selectedProgram.curriculum.map((item, i) => (
                    <li key={i} className={`p-4 rounded-2xl ${cardBg} border-2 ${borderColor} text-sm hover:scale-105 transition-transform shadow-lg`}>
                      <span className="font-black text-purple-400 mr-2 text-base">Weeks {item.week}:</span>
                      <span className="font-medium">{item.topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-black text-2xl mb-6">Key Skills You'll Master</h4>
                <div className="flex flex-wrap gap-3 mb-8">
                  {selectedProgram.skills.map((skill, i) => (
                    <span key={i} className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-bold border border-blue-500/30">{skill}</span>
                  ))}
                </div>
                <h4 className="font-black text-2xl mb-6">Projects You'll Build</h4>
                <ul className="space-y-3">
                  {selectedProgram.projects.map((proj, i) => (
                    <li key={i} className={`flex items-start space-x-3 text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-700'} font-medium`}>
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                      <span>{proj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <button onClick={() => handleApplyClick(selectedProgram.title)} className="w-full mt-10 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl hover:shadow-2xl transition-all duration-300 font-black text-lg hover:scale-105 shadow-lg">Apply to this Program</button>
          </div>
        </div>
      )}

      {isScrolled && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-2xl hover:shadow-purple-500/50 hover:scale-110 transition-all duration-300 flex items-center justify-center z-40" aria-label="Scroll to top">
          <ChevronRight className="w-6 h-6 -rotate-90" />
        </button>
      )}
    </div>
  );
}