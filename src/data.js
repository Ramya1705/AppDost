import React from 'react';
import {
  Code, Smartphone, Globe, Sparkles, Shield, BookOpen,
  Cloud, Megaphone, Target, Eye, CheckCircle, Clock,
  DollarSign, Zap, Coffee, Package, AppWindow, Waypoints,
  Database, Server, Component, GitMerge, Terminal, Bot, Wind
} from 'lucide-react';

// Navigation links from PDF [cite: 42]
export const navLinks = ['Home', 'About', 'Services', 'Portfolio', 'Careers', 'Contact'];

// Hero content from PDF [cite: 46, 47]
export const heroContent = {
  tagline: "Your Complete IT & Digital Solutions Partner",
  subtext: "We build websites, apps, and digital platforms that grow your business."
};

// Services from PDF [cite: 16, 17, 18, 19, 20, 21]
export const services = [
  { 
    icon: <Globe className="w-10 h-10" />, 
    title: "Website Design & Development", 
    description: "SEO-optimized, responsive, and conversion-focused websites.",
    features: ["Responsive Design", "SEO Optimized", "E-commerce", "CMS"],
    gradient: "from-blue-500 to-cyan-500" 
  },
  { 
    icon: <Smartphone className="w-10 h-10" />, 
    title: "Mobile App Development", 
    description: "Android, iOS & cross-platform apps using React Native & Flutter.",
    features: ["iOS (Native)", "Android (Native)", "React Native", "Flutter"],
    gradient: "from-purple-500 to-pink-500" 
  },
  { 
    icon: <Code className="w-10 h-10" />, 
    title: "Software Development", 
    description: "Enterprise-level applications with Java, Spring Boot, and secure REST APIs.",
    features: ["Java & Spring Boot", "Secure REST APIs", "Microservices", "Enterprise Apps"],
    gradient: "from-emerald-500 to-green-500" 
  },
  { 
    icon: <Cloud className="w-10 h-10" />, 
    title: "Cloud & DevOps", 
    description: "AWS-based infrastructure, CI/CD pipelines, Dockerization, and monitoring.",
    features: ["AWS Infrastructure", "CI/CD Pipelines", "Docker", "Monitoring"],
    gradient: "from-amber-500 to-orange-500" 
  },
  { 
    icon: <Megaphone className="w-10 h-10" />, 
    title: "Digital Marketing", 
    description: "SEO, SMM, and brand visibility enhancement.",
    features: ["SEO", "Social Media (SMM)", "Brand Strategy", "Content Marketing"],
    gradient: "from-red-500 to-rose-500" 
  },
  { 
    icon: <BookOpen className="w-10 h-10" />, 
    title: "Internship & Training", 
    description: "Industrial training in Java, Web, and Cloud technologies.",
    features: ["Java Full Stack", "Web Development", "Cloud Technologies", "Live Projects"],
    gradient: "from-cyan-500 to-blue-500" 
  }
];

// --- UPDATED TECHNOLOGIES WITH ICONS --- [cite: 23]
export const technologies = [
  { name: "Java", icon: <Coffee className="w-10 h-10 text-red-500" /> },
  { name: "Spring Boot", icon: <Package className="w-10 h-10 text-green-500" /> },
  { name: "React Native", icon: <Smartphone className="w-10 h-10 text-blue-500" /> },
  { name: "Angular", icon: <AppWindow className="w-10 h-10 text-red-600" /> },
  { name: "React.js", icon: <Component className="w-10 h-10 text-cyan-400" /> },
  { name: "Node.js", icon: <Waypoints className="w-10 h-10 text-green-600" /> },
  { name: "Python", icon: <Bot className="w-10 h-10 text-yellow-500" /> },
  { name: "AWS", icon: <Cloud className="w-10 h-10 text-orange-500" /> },
  { name: "PostgreSQL", icon: <Database className="w-10 h-10 text-indigo-500" /> },
  { name: "MongoDB", icon: <Server className="w-10 h-10 text-green-700" /> },
  { name: "Docker", icon: <Wind className="w-10 h-10 text-blue-600" /> },
  { name: "Git", icon: <GitMerge className="w-10 h-10 text-red-700" /> }
];
// --- END UPDATE ---

// Portfolio Projects from PDF [cite: 25, 26, 28, 29]
export const portfolio = [
  { title: "ApkeDoctorG", category: "Healthcare", image: "bg-gradient-to-br from-blue-600 to-purple-700", stats: "Healthcare Booking", description: "Appointment booking app for doctors and patients.", fullDescription: "Platform connecting patients with doctors. Online booking, prescriptions, video calls, health records.", tech: ["Spring Boot", "React Native", "PostgreSQL", "AWS"], duration: "8 months" },
  { title: "BEU Mate App", category: "Education", image: "bg-gradient-to-br from-emerald-600 to-cyan-700", stats: "Community Platform", description: "Community app for BEU students and alumni.", fullDescription: "Platform for Bihar Engineering University. Events, news, alumni directory, jobs.", tech: ["React Native", "Spring Boot", "MySQL"], duration: "6 months" },
  { title: "TheWeddingsChapter", category: "E-Commerce", image: "bg-gradient-to-br from-orange-600 to-rose-700", stats: "Wedding Platform", description: "Wedding management connecting vendors and customers.", fullDescription: "Wedding planning. Vendor discovery, comparison, booking, budget tracking.", tech: ["Angular", "Spring Boot", "AWS"], duration: "10 months" },
  { title: "DevSkillQuest", category: "EdTech", image: "bg-gradient-to-br from-pink-600 to-purple-700", stats: "Learning Platform", description: "EdTech for learning and assessments.", fullDescription: "Online learning with courses, coding, internships, assessments.", tech: ["React.js", "Spring Boot", "PostgreSQL"], duration: "7 months" }
];

// Why Choose Us data from PDF [cite: 31, 32, 33, 34, 35, 36]
export const whyChooseUs = [
  { icon: <Zap className="w-8 h-8 text-blue-400" />, title: "End-to-End Solutions", description: "One roof for all IT & Digital needs." },
  { icon: <Sparkles className="w-8 h-8 text-purple-400" />, title: "Experienced Developers", description: "Skilled designers & developers." },
  { icon: <Shield className="w-8 h-8 text-green-400" />, title: "Scalable & Secure", description: "Cloud-ready and secure architecture." },
  { icon: <Clock className="w-8 h-8 text-orange-400" />, title: "On-time Delivery", description: "Transparent communication." },
  { icon: <DollarSign className="w-8 h-8 text-emerald-400" />, title: "Affordable Pricing", description: "Cost-effective for startups." },
  { icon: <CheckCircle className="w-8 h-8 text-cyan-400" />, title: "Long-Term Support", description: "Support and maintenance." }
];

// (Your original Job and Testimonial data is great, so we keep it)
export const jobs = [
  { title: "Full Stack Developer", type: "Full-Time", location: "Remote / Banka", experience: "2+ years", description: "Build scalable web apps.", requirements: ["React & Node.js", "Spring Boot & Java", "PostgreSQL/MySQL", "AWS"], responsibilities: ["Develop apps", "Clean code", "Collaborate", "Code reviews"], skills: ["React", "Node.js", "Spring Boot", "AWS"] },
  { title: "React Native Developer", type: "Full-Time", location: "Remote / Patna", experience: "1+ years", description: "Cross-platform mobile apps.", requirements: ["React Native", "Deployment", "Native modules", "Mobile UI/UX"], responsibilities: ["Build apps", "Optimize", "APIs", "Features"], skills: ["React Native", "JavaScript", "Mobile UI"] },
  { title: "UI/UX Designer", type: "Full-Time / Internship", location: "Remote", experience: "0-2 years", description: "Create beautiful interfaces.", requirements: ["Figma/Adobe XD", "Portfolio", "Design principles", "HTML/CSS"], responsibilities: ["Design UI/UX", "Wireframes", "Collaborate", "Research"], skills: ["Figma", "Adobe XD", "UI Design"] },
  { title: "Java Backend (Internship)", type: "Internship", location: "Motihari / Remote", experience: "Freshers", description: "6-month Spring Boot internship.", requirements: ["Basic Java", "OOP", "Eager to learn", "Problem-solving"], responsibilities: ["Spring Boot", "REST APIs", "Database", "Docs"], skills: ["Java", "Spring Boot", "SQL", "Git"] }
];

export const testimonials = [  
  { name: "Dr. Amit Kumar", role: "ApkeDoctorG", content: "AppDost transformed our vision. The app improved patient engagement significantly.", rating: 5, image: "bg-gradient-to-br from-blue-500 to-cyan-600" },  
  { name: "Priya Sharma", role: "BEU Mate", content: "Connected our alumni network. User-friendly with needed features.", rating: 5, image: "bg-gradient-to-br from-emerald-500 to-teal-600" },  
  { name: "Rahul Singh", role: "DevSkillQuest", content: "Comprehensive training. Got my first job within 2 months!", rating: 5, image: "bg-gradient-to-br from-purple-500 to-pink-600" }
];

// PDF Mission/Vision [cite: 13, 14]
export const missionVision = {
  mission: {
    icon: <Target className="w-16 h-16 text-blue-400 mb-6" />,
    title: "Our Mission",
    text: "To simplify technology and deliver powerful, user-focused digital experiences for every business."
  },
  vision: {
    icon: <Eye className="w-16 h-16 text-purple-400 mb-6" />,
    title: "Our Vision",
    text: "To be a globally trusted technology partner known for innovation, transparency, and quality."
  }
};