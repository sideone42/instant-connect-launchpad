
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AppPreview = () => {
  const [activeTab, setActiveTab] = useState("messaging");
  
  const tabs = [
    {
      id: "messaging",
      title: "Messaging",
      description: "Seamless and encrypted messaging with smart replies.",
      image: "https://cdn.pixabay.com/photo/2017/01/02/13/13/chat-1946794_1280.jpg",
      features: ["Real-time typing indicators", "Read receipts", "Message editing", "Unlimited history"]
    },
    {
      id: "video",
      title: "Video Calls",
      description: "Crystal clear HD video with low latency.",
      image: "https://cdn.pixabay.com/photo/2020/10/11/19/51/online-5646509_1280.jpg",
      features: ["Up to 50 participants", "Screen sharing", "Background blur", "Recording options"]
    },
    {
      id: "groups",
      title: "Groups & Channels",
      description: "Organize conversations by topic with advanced permissions.",
      image: "https://cdn.pixabay.com/photo/2017/08/13/03/31/paper-2636254_1280.jpg",
      features: ["Public & private channels", "Threaded discussions", "Role-based permissions", "Announcements"]
    },
    {
      id: "files",
      title: "File Sharing",
      description: "Secure file transfers with integrated previews.",
      image: "https://cdn.pixabay.com/photo/2020/01/03/11/24/folder-4737484_1280.jpg",
      features: ["Up to 2GB per file", "Cloud storage integration", "Version history", "Rich previews"]
    }
  ];

  return (
    <section id="app-preview" className="py-24 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience the <span className="gradient-text">Future of Messaging</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            See how our features work together to create a seamless communication experience.
          </p>
        </div>

        <Tabs defaultValue="messaging" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {tabs.map((tab) => (
              <TabsTrigger 
                key={tab.id} 
                value={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="py-3"
              >
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {tabs.map((tab) => (
            <TabsContent 
              key={tab.id} 
              value={tab.id} 
              className="animate-fade-in-up"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-3">{tab.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {tab.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {tab.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-5 h-5 text-brand-purple mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8">
                    <a href="#beta-signup" className="btn-primary inline-flex">Try It Now</a>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/20 to-brand-blue/20 rounded-2xl transform rotate-1"></div>
                  <img 
                    src={tab.image} 
                    alt={tab.title} 
                    className="relative z-10 rounded-2xl shadow-xl w-full object-cover aspect-video"
                  />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default AppPreview;
