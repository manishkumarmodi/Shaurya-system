import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, Shield, Lock, User } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import TricolorCursor from "@/components/TricolorCursor";
// import LoginSection from "@/components/LoginSection";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const products = [
    {
      title: "Tactical Drone",
      description: "Advanced surveillance and reconnaissance drone with cutting-edge AI capabilities for modern defense operations.",
      image: "https://plus.unsplash.com/premium_photo-1714618849685-89cad85746b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJvbmV8ZW58MHx8MHx8fDA%3D"
    },
    {
      title: "Advanced Helmet",
      description: "Next-generation tactical helmet with integrated HUD, night vision, and real-time communication systems.",
      image: "https://images.unsplash.com/photo-1650627807081-aaedee179703?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWR2YW5jZWQlMjBtaWxpdGFyeSUyMGhlbG1ldHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "Night Vision Optics",
      description: "Military-grade night vision equipment with thermal imaging and long-range target acquisition capabilities.",
      image: "https://images.unsplash.com/photo-1602667341932-6e6404cd20ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fG5pZ2h0JTIwdmlzaW9uJTIwb3B0aWNzJTIwdXNlZCUyMGJ5JTIwYXJteXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "Combat Vest",
      description: "Lightweight ballistic protection vest with integrated communication systems and modular attachments.",
      image: "https://images.unsplash.com/photo-1703763731188-071576176011?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tYmF0JTIwdmVzdHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "Tactical Radio",
      description: "Secure military communication device with encrypted channels and long-range capability.",
      image: "https://images.unsplash.com/photo-1717749789408-f6f73c9e6aac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGFjdGljYWwlMjByYWRpb3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "Defense Radar",
      description: "High-precision radar system for air defense and surveillance with advanced threat detection.",
      image: "https://images.unsplash.com/photo-1742608383899-9b5f2658616c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRlZmVuY2UlMjByYWRhcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "Armored Vehicle",
      description: "Multi-purpose armored vehicle with enhanced protection and all-terrain mobility.",
      image: "https://images.unsplash.com/photo-1630719003242-cc15a7244d16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXJtb3JlZCUyMHZlaGljbGV8ZW58MHx8MHx8fDA%3D"
    },
    {
      title: "Missile System",
      description: "Precision-guided missile system with advanced targeting and navigation capabilities.",
      image: "https://images.unsplash.com/photo-1710750266544-d5b41e6847aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWlzc2lsZSUyMHN5c3RlbXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "Cyber Defense",
      description: "Advanced cybersecurity solutions for military networks and critical infrastructure protection.",
      image: "https://images.unsplash.com/photo-1606549000874-1ddeec0ae234?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3liZXIlMjBkZWZlbmNlJTIwcmFkYXJ8ZW58MHx8MHx8fDA%3D"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TricolorCursor />
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border/50' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Shaurya Systems
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors duration-200">Home</button>
                <Link to="/products" className="text-foreground hover:text-primary transition-colors duration-200">Products</Link>
                <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors duration-200">About</button>
                <button onClick={() => scrollToSection('login')} className="text-foreground hover:text-primary transition-colors duration-200">Login</button>
                <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors duration-200">Contact</button>
              </div>
            </div>

            {/* Tagline */}
            <div className="hidden lg:block">
              <span className="text-sm text-muted-foreground font-medium">
                Proudly Made in India 🇮🇳
              </span>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground hover:text-primary"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-foreground hover:text-primary">Home</button>
              <Link to="/products" className="block px-3 py-2 text-foreground hover:text-primary">Products</Link>
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-foreground hover:text-primary">About</button>
              <button onClick={() => scrollToSection('login')} className="block px-3 py-2 text-foreground hover:text-primary">Login</button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-foreground hover:text-primary">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-background/60" />
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 animate-fade-in-up">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-foreground">Empowering Indian</span>
            <span className="block bg-gradient-primary bg-clip-text text-transparent">Defense Innovation</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Made in Bharat, Made for the World
          </p>
          
        </div>

      </section>


      {/* Features/Highlights Section */}
      <section id="features" className="py-20 bg-background/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-foreground">Why Choose Shaurya Systems?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white/10 rounded-xl shadow-lg border border-white/20">
              <ChevronDown className="h-10 w-10 text-saffron mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Indigenous Technology</h3>
              <p className="text-muted-foreground text-sm">Designed and developed in India, supporting Aatmanirbhar Bharat.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white/10 rounded-xl shadow-lg border border-white/20">
              <Shield className="h-10 w-10 text-indianGreen mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Global Standards</h3>
              <p className="text-muted-foreground text-sm">Products meet rigorous international defense and quality standards.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white/10 rounded-xl shadow-lg border border-white/20">
              <Lock className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Secure Solutions</h3>
              <p className="text-muted-foreground text-sm">Advanced security features to protect sensitive data and operations.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white/10 rounded-xl shadow-lg border border-white/20">
              <User className="h-10 w-10 text-white mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Innovation Driven</h3>
              <p className="text-muted-foreground text-sm">Constantly evolving with the latest technology and research.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white/10 rounded-xl shadow-lg border border-white/20">
              <Menu className="h-10 w-10 text-orange-500 mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Trusted by Defense Forces</h3>
              <p className="text-muted-foreground text-sm">Proven track record with Indian and global defense organizations.</p>
            </div>
          </div>
        </div>
      </section>


      {/* About Section - Expanded with Real Defense Information, Images, and News */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                India's Defense Innovation & Achievements
              </h2>
              <ul className="list-disc pl-6 text-lg text-muted-foreground mb-6 leading-relaxed space-y-4">
                <li><b>DRDO</b> (Defence Research and Development Organisation) has developed advanced missile systems like <b>BrahMos</b>, <b>Agni</b>, and <b>Akash</b>, strengthening India's strategic capabilities.</li>
                <li><b>Tejas</b> Light Combat Aircraft, designed and manufactured in India, is now a backbone of the Indian Air Force.</li>
                <li><b>Arjun MBT</b> (Main Battle Tank) and <b>Pinaka</b> multi-barrel rocket launcher are examples of indigenous armored and artillery systems.</li>
                <li><b>Defence exports</b> from India have reached a record high, with equipment supplied to over 85 countries in 2024.</li>
                <li><b>Startups</b> and private companies are innovating in cyber defense, drones, and AI-powered surveillance.</li>
                <li><b>Recent News:</b> <br />
                  <ul className="list-disc pl-6 text-base mt-2">
                    <li>India successfully tested the <b>Agni-V</b> missile with MIRV technology (July 2024).</li>
                    <li>Indian Navy commissioned the indigenous aircraft carrier <b>INS Vikrant</b> (2023).</li>
                    <li>DRDO unveiled the <b>Ghatak</b> stealth UCAV prototype (2024).</li>
                  </ul>
                </li>
              </ul>
              <div className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Shaurya Systems, we are inspired by these achievements and strive to deliver world-class defense solutions, supporting India's vision for self-reliance and global leadership.
              </div>
            </div>
            <div className="animate-fade-in-up flex flex-col gap-8" style={{ animationDelay: '0.3s' }}>
              <div className="relative w-full h-96 rounded-lg overflow-hidden border border-border/50 shadow-lg">
                <img src="https://images.unsplash.com/photo-1661113248101-f2881bea4abb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMGFybXl8ZW58MHx8MHx8fDA%3D" alt="Indian Army" className="object-cover w-full h-full" />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white text-lg font-semibold">Indian Army in Action</div>
              </div>
              <div className="relative w-full h-96 rounded-lg overflow-hidden border border-border/50 shadow-lg">
                <img src="https://images.unsplash.com/photo-1701436762250-d9ac5c2e6e4a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVqYXMlMjBmaWdodGVyJTIwamV0fGVufDB8fDB8fHww" alt="Tejas Fighter Jet" className="object-cover w-full h-full" />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white text-lg font-semibold">Tejas Fighter Jet</div>
              </div>
              <div className="relative w-full h-96 rounded-lg overflow-hidden border border-border/50 shadow-lg">
                <img src="https://images.unsplash.com/photo-1726450663094-b90adfeea0f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGlucyUyMHZpa3JhbnQlMjBuYXZ5JTIwYXJteXxlbnwwfHwwfHx8MA%3D%3D" alt="INS Vikrant" className="object-cover w-full h-full" />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white text-lg font-semibold">INS Vikrant - Indigenous Aircraft Carrier</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Indian Army Achievements Section */}
      <section id="army-achievements" className="py-20 bg-background/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-foreground">Indian Army: Real Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            {/* Army Achievements */}
            <div className="flex flex-col items-center bg-white/10 rounded-xl shadow-lg border border-white/20 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1730904631875-10bee14067eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2lhY2hlbiUyMEdsYWNpZXIlMjBPcGVyYXRpb25zJTIwaW5kaWFuJTIwZmxhZ3xlbnwwfHwwfHx8MA%3D%3D" alt="Siachen" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Siachen Glacier Operations</h3>
                <p className="text-muted-foreground text-sm">The Indian Army maintains the highest battlefield in the world at Siachen Glacier, showcasing unmatched endurance and bravery in extreme conditions.</p>
              </div>
            </div>
            <div className="flex flex-col items-center bg-white/10 rounded-xl shadow-lg border border-white/20 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1579438856893-73c65ab9436f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VU4lMjBwZWVjZWtlZXBpbmclMjBtaXNzaW9uJTIwaW5kaWFuJTIwYXJteXxlbnwwfHwwfHx8MA%3D%3D" alt="UN Peacekeeping" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">UN Peacekeeping Missions</h3>
                <p className="text-muted-foreground text-sm">India is one of the largest contributors to UN peacekeeping forces, with the Army serving in conflict zones worldwide to restore peace and stability.</p>
              </div>
            </div>
            <div className="flex flex-col items-center bg-white/10 rounded-xl shadow-lg border border-white/20 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1615482319206-d2545553676e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN1cmdpY2FsJTIwc3RyaWtlcyUyMGluZGlhbiUyMGFybXl8ZW58MHx8MHx8fDA%3D" alt="Surgical Strikes" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Surgical Strikes (2016)</h3>
                <p className="text-muted-foreground text-sm">The Indian Army conducted successful surgical strikes across the border in 2016, demonstrating precision, planning, and operational excellence.</p>
              </div>
            </div>
            {/* Navy Achievement */}
            <div className="flex flex-col items-center bg-white/10 rounded-xl shadow-lg border border-white/20 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1726450663094-b90adfeea0f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGlucyUyMHZpa3JhbnQlMjBuYXZ5JTIwYXJteXxlbnwwfHwwfHx8MA%3D%3D" alt="INS Vikrant" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">INS Vikrant Commissioning</h3>
                <p className="text-muted-foreground text-sm">The Indian Navy commissioned INS Vikrant, India's first indigenous aircraft carrier, marking a major milestone in naval self-reliance and power projection (2023).</p>
              </div>
            </div>
            {/* Air Force Achievement */}
            <div className="flex flex-col items-center bg-white/10 rounded-xl shadow-lg border border-white/20 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1701436762250-d9ac5c2e6e4a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVqYXMlMjBmaWdodGVyJTIwamV0fGVufDB8fDB8fHww" alt="Tejas Fighter Jet" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Tejas Fighter Jet Induction</h3>
                <p className="text-muted-foreground text-sm">The Indian Air Force inducted the indigenous Tejas fighter jet, enhancing air combat capabilities and technological self-reliance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="login" className="py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Login to Shaurya Systems</h2>
        <p className="text-gray-300 mb-8 text-center max-w-xl">Access secure features and manage your defense innovations by logging in to your account.</p>
        <Link to="/login">
          <button className="bg-gradient-to-r from-saffron to-orange-600 hover:from-saffron/90 hover:to-orange-600/90 text-white py-3 px-8 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
            Go to Login
          </button>
        </Link>
      </section>

      {/* Contact/Quick Inquiry Section */}
      <section id="quick-inquiry" className="py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center bg-background/90">
        <h2 className="text-3xl font-bold mb-6 text-center text-foreground">Quick Inquiry</h2>
        <p className="text-muted-foreground mb-8 text-center max-w-xl">Have a question or want to connect with us? Fill out the form below and our team will get back to you soon.</p>
        <form className="w-full max-w-lg bg-white/10 rounded-xl shadow-lg border border-white/20 p-8 flex flex-col gap-6">
          <input type="text" name="name" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-background/80 text-foreground border border-border/30 focus:outline-none focus:ring-2 focus:ring-saffron" required />
          <input type="email" name="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg bg-background/80 text-foreground border border-border/30 focus:outline-none focus:ring-2 focus:ring-saffron" required />
          <textarea name="message" rows={4} placeholder="Your Message" className="w-full px-4 py-3 rounded-lg bg-background/80 text-foreground border border-border/30 focus:outline-none focus:ring-2 focus:ring-saffron" required />
          <button type="submit" className="bg-gradient-to-r from-saffron to-orange-600 hover:from-saffron/90 hover:to-orange-600/90 text-white py-3 px-8 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">Send Inquiry</button>
        </form>
      </section>
      <footer id="contact" className="bg-background border-t border-border/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                Shaurya Systems
              </h3>
              <p className="text-muted-foreground">
                Empowering Indian Defense Innovation
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('home')} className="block text-muted-foreground hover:text-primary transition-colors">Home</button>
                <button onClick={() => scrollToSection('products')} className="block text-muted-foreground hover:text-primary transition-colors">Products</button>
                <button onClick={() => scrollToSection('about')} className="block text-muted-foreground hover:text-primary transition-colors">About</button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Legal</h4>
              <div className="space-y-2">
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Terms of Use</a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Contact</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/50 mt-8 pt-8 text-center">
            <p className="text-muted-foreground mb-2">
              © 2025 Shaurya Systems. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              In support of Aatmanirbhar Bharat 🇮🇳
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
