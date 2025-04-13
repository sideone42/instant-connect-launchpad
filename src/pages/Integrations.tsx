
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Twitch, 
  Youtube, 
  Slack, 
  Discord, 
  Github, 
  MessageSquareMore, 
  Mail, 
  Calendar, 
  SquareUser, 
  Phone, 
  MessageCircle, 
  MessagesSquare, 
  Newspaper, 
  Heart, 
  Share2
} from "lucide-react";

interface IntegrationItemProps {
  name: string;
  icon: React.ReactNode;
  description: string;
  color?: string;
}

const IntegrationItem = ({ name, icon, description, color = "text-blue-500" }: IntegrationItemProps) => (
  <div className="flex items-center space-x-4 p-4 rounded-lg border border-border hover:bg-accent/5 transition-colors">
    <div className={`p-3 rounded-full ${color} bg-gray-100 dark:bg-gray-800`}>
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-medium">{name}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  </div>
);

const IntegrationSection = ({ title, description, items }: { 
  title: string; 
  description: string;
  items: IntegrationItemProps[];
}) => (
  <section className="py-12">
    <h2 className="text-2xl font-bold mb-2">{title}</h2>
    <p className="text-muted-foreground mb-8">{description}</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, index) => (
        <IntegrationItem key={index} {...item} />
      ))}
    </div>
  </section>
);

const Integrations = () => {
  const currentIntegrations = [
    {
      name: "Facebook",
      icon: <Facebook />,
      description: "Connect and share with friends and family",
      color: "text-blue-600",
    },
    {
      name: "Instagram",
      icon: <Instagram />,
      description: "Share photos and videos with your network",
      color: "text-pink-500",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin />,
      description: "Professional networking and career development",
      color: "text-blue-700",
    },
    {
      name: "Twitter",
      icon: <Twitter />,
      description: "What's happening in the world right now",
      color: "text-blue-400",
    },
    {
      name: "Discord",
      icon: <Discord />,
      description: "Talk, chat, hang out, and stay close with friends",
      color: "text-indigo-500",
    },
    {
      name: "Slack",
      icon: <Slack />,
      description: "Where work happens and teams collaborate",
      color: "text-emerald-500",
    },
    {
      name: "Email",
      icon: <Mail />,
      description: "Connect all your email accounts in one place",
      color: "text-gray-500",
    },
  ];

  const inDevelopmentIntegrations = [
    {
      name: "YouTube",
      icon: <Youtube />,
      description: "Video sharing and content creation platform",
      color: "text-red-600",
    },
    {
      name: "Twitch",
      icon: <Twitch />,
      description: "Live streaming for gamers and creators",
      color: "text-purple-600",
    },
    {
      name: "GitHub",
      icon: <Github />,
      description: "Development platform for open source and business",
      color: "text-slate-700",
    },
    {
      name: "WhatsApp",
      icon: <MessageSquareMore />,
      description: "Simple, secure, reliable messaging",
      color: "text-green-500",
    },
    {
      name: "Calendar",
      icon: <Calendar />,
      description: "Schedule and manage your appointments",
      color: "text-blue-500",
    },
    {
      name: "Contacts",
      icon: <SquareUser />,
      description: "Centralize and organize all your contacts",
      color: "text-amber-500",
    },
  ];

  const comingSoonIntegrations = [
    {
      name: "Telegram",
      icon: <MessageCircle />,
      description: "Cloud-based mobile and desktop messaging app",
      color: "text-sky-500",
    },
    {
      name: "Signal",
      icon: <MessagesSquare />,
      description: "Privacy-focused encrypted messaging service",
      color: "text-blue-600",
    },
    {
      name: "Reddit",
      icon: <Newspaper />,
      description: "Network of communities based on interests",
      color: "text-orange-500",
    },
    {
      name: "TikTok",
      icon: <Share2 />,
      description: "Short-form, video-sharing app for entertainment",
      color: "text-black dark:text-white",
    },
    {
      name: "Pinterest",
      icon: <Heart />,
      description: "Visual discovery engine for finding ideas",
      color: "text-red-500",
    },
    {
      name: "Snapchat",
      icon: <MessageCircle />,
      description: "Image and video sharing multimedia app",
      color: "text-yellow-400",
    },
    {
      name: "Phone",
      icon: <Phone />,
      description: "Make and receive calls through our platform",
      color: "text-green-600",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Integrations</h1>
          <p className="text-xl text-muted-foreground">
            Connect all your favorite platforms and services to InstantConnect for a truly unified messaging experience.
          </p>
        </div>

        <Separator className="my-8" />
        
        <IntegrationSection 
          title="Current Integrations" 
          description="These platforms are already available and fully supported in InstantConnect."
          items={currentIntegrations}
        />
        
        <Separator className="my-8" />
        
        <IntegrationSection 
          title="In Development" 
          description="These integrations are currently being developed and will be available soon."
          items={inDevelopmentIntegrations}
        />
        
        <Separator className="my-8" />
        
        <IntegrationSection 
          title="Coming Soon" 
          description="These platforms are on our roadmap and scheduled for future development."
          items={comingSoonIntegrations}
        />

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Don't see your favorite platform?</h2>
          <p className="text-muted-foreground mb-8">
            We're constantly adding new integrations. Let us know what you'd like to see next!
          </p>
          <a href="#beta-signup" className="btn-primary">Request Integration</a>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Integrations;
