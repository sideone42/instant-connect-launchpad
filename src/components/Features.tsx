
import { 
  Zap, Shield, Smartphone, Globe, Users, Clock,
  MessageSquare, Video, FileText, Lock, Share, Bell
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Zap size={24} className="text-amber-500" />,
      title: "Lightning Fast",
      description: "Experience real-time messaging with sub-100ms delivery times across the globe."
    },
    {
      icon: <Shield size={24} className="text-brand-purple" />,
      title: "End-to-End Encryption",
      description: "Your conversations are secured with state-of-the-art encryption technology."
    },
    {
      icon: <Smartphone size={24} className="text-blue-500" />,
      title: "Cross-Platform",
      description: "Seamlessly switch between devices without missing a message."
    },
    {
      icon: <Globe size={24} className="text-green-500" />,
      title: "Global Reach",
      description: "Connect with users worldwide with automatic translation in 50+ languages."
    },
    {
      icon: <Users size={24} className="text-indigo-500" />,
      title: "Group Collaboration",
      description: "Create topic-based channels with advanced permission controls."
    },
    {
      icon: <Clock size={24} className="text-pink-500" />,
      title: "Message History",
      description: "Never lose important information with unlimited searchable history."
    },
    {
      icon: <MessageSquare size={24} className="text-teal-500" />,
      title: "Smart Replies",
      description: "AI-powered response suggestions to help you communicate efficiently."
    },
    {
      icon: <Video size={24} className="text-red-500" />,
      title: "HD Video Calls",
      description: "Crystal clear video conferencing with up to 50 participants."
    },
    {
      icon: <FileText size={24} className="text-orange-500" />,
      title: "File Sharing",
      description: "Share files up to 2GB with integrated preview for common formats."
    },
    {
      icon: <Lock size={24} className="text-gray-500" />,
      title: "Privacy Controls",
      description: "Granular privacy settings giving you complete control over your data."
    },
    {
      icon: <Share size={24} className="text-blue-400" />,
      title: "Seamless Integration",
      description: "Connect with your favorite tools through our extensive API."
    },
    {
      icon: <Bell size={24} className="text-yellow-500" />,
      title: "Smart Notifications",
      description: "AI-prioritized notifications so you never miss important messages."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Designed for <span className="gradient-text">Modern Communication</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our platform combines speed, security, and smart features to revolutionize how you connect with others.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 inline-block mb-4 w-fit">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
