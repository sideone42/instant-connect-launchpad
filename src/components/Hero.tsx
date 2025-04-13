
import { ArrowRight, MessageSquare, Shield, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-background to-muted overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* Background Elements */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-purple opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-blue opacity-10 rounded-full blur-3xl"></div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8 max-w-lg">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-in">
              Currently in Beta
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
              Connect Instantly with <span className="gradient-text">Anyone, Anywhere</span>
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 animate-fade-in">
              A modern messaging platform built for speed, privacy, and seamless collaboration. 
              Join our growing community of beta testers today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <a href="#beta-signup" className="btn-primary flex items-center justify-center gap-2">
                Join Beta <ArrowRight size={18} />
              </a>
              <a href="#features" className="btn-outline flex items-center justify-center gap-2">
                Explore Features
              </a>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-4 animate-fade-in">
              <div className="text-center">
                <p className="text-2xl font-bold text-brand-purple">5,000+</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Beta Users</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-brand-purple">99.9%</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Uptime</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-brand-purple">3M+</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Messages</p>
              </div>
            </div>
          </div>
          
          {/* Hero Image/App Preview */}
          <div className="relative animate-fade-in">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/20 dark:border-white/10">
              <img 
                src="https://cdn.pixabay.com/photo/2018/11/29/21/19/social-media-3846597_1280.png" 
                alt="InstantConnect App Interface" 
                className="w-full h-auto" 
              />
            </div>
            
            {/* Floating Feature Cards */}
            <div className="absolute -left-10 top-20 p-4 glass-card shadow-lg animate-float flex items-center gap-3 z-20">
              <div className="bg-brand-purple/20 p-2 rounded-full">
                <Zap size={20} className="text-brand-purple" />
              </div>
              <span className="font-medium">Lightning Fast</span>
            </div>
            
            <div className="absolute right-10 bottom-10 p-4 glass-card shadow-lg animate-float animation-delay-200 flex items-center gap-3 z-20">
              <div className="bg-brand-blue/20 p-2 rounded-full">
                <Shield size={20} className="text-brand-blue" />
              </div>
              <span className="font-medium">End-to-End Encryption</span>
            </div>
            
            <div className="absolute -right-5 top-1/3 p-4 glass-card shadow-lg animate-float animation-delay-400 flex items-center gap-3 z-20">
              <div className="bg-green-500/20 p-2 rounded-full">
                <MessageSquare size={20} className="text-green-500" />
              </div>
              <span className="font-medium">Smart Replies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
