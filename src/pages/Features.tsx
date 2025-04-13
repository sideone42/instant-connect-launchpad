
import { MessageSquare, Bell, Zap, Lock, Globe, Smartphone, Repeat, Users } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Features = () => {
  const coreFeatures = [
    {
      icon: <Globe className="text-primary" size={24} />,
      title: "Unified Messaging",
      description: "Connect all your messaging networks into one seamless experience. Never switch between apps again."
    },
    {
      icon: <Bell className="text-primary" size={24} />,
      title: "Smart Notifications",
      description: "Prioritized, intelligent notifications from all your networks in one place."
    },
    {
      icon: <Zap className="text-primary" size={24} />,
      title: "AI Assistant",
      description: "Smart AI that helps compose messages, summarize conversations, and manage your communications."
    },
    {
      icon: <Lock className="text-primary" size={24} />,
      title: "Enhanced Privacy",
      description: "End-to-end encryption and advanced privacy controls across all your messaging platforms."
    }
  ];

  const networkFeatures = [
    "LinkedIn", "Facebook", "Instagram", "WhatsApp", "Discord", 
    "Slack", "Twitter", "Telegram", "Signal", "Twitch", 
    "Reddit", "Microsoft Teams", "Gmail", "Apple Messages", "Skype",
    "Line", "WeChat", "Viber", "Zoom Chat", "Google Chat"
  ];

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <section className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Features
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Discover how InstantConnect transforms your messaging experience
            </p>
          </div>

          {/* Core Features Section */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                One App, All Your Messages
              </h2>
              <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
                InstantConnect brings together all your messaging networks into a single, 
                beautifully designed interface. Say goodbye to app-switching and hello to 
                seamless communication.
              </p>
              
              <ul className="space-y-4">
                {coreFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 rounded-2xl p-6 h-full">
                <div className="relative h-full bg-card rounded-xl overflow-hidden border border-muted shadow-lg">
                  <div className="absolute inset-0 flex flex-col">
                    <div className="bg-muted/50 p-4 flex items-center space-x-4 border-b border-border">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-sm font-medium">InstantConnect</div>
                    </div>
                    
                    <div className="flex flex-1 overflow-hidden">
                      <div className="w-1/3 border-r border-border p-2 space-y-2 bg-muted/30">
                        <div className="p-2 rounded bg-primary/10 text-primary text-sm">All Messages</div>
                        <div className="p-2 text-sm hover:bg-muted/50 rounded cursor-pointer">Facebook</div>
                        <div className="p-2 text-sm hover:bg-muted/50 rounded cursor-pointer">WhatsApp</div>
                        <div className="p-2 text-sm hover:bg-muted/50 rounded cursor-pointer">LinkedIn</div>
                        <div className="p-2 text-sm hover:bg-muted/50 rounded cursor-pointer">Instagram</div>
                        <div className="p-2 text-sm hover:bg-muted/50 rounded cursor-pointer">Discord</div>
                      </div>
                      
                      <div className="flex-1 flex flex-col">
                        <div className="border-b border-border p-3">
                          <div className="font-medium">Recent Conversations</div>
                        </div>
                        
                        <div className="flex-1 p-2 space-y-2 overflow-y-auto">
                          <div className="p-2 rounded hover:bg-muted/30 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-500">f</div>
                            <div>
                              <div className="font-medium text-sm">John Doe (FB)</div>
                              <div className="text-xs text-gray-500">Hey, how's it going?</div>
                            </div>
                          </div>
                          
                          <div className="p-2 rounded hover:bg-muted/30 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-500">W</div>
                            <div>
                              <div className="font-medium text-sm">Team Chat (WhatsApp)</div>
                              <div className="text-xs text-gray-500">Meeting at 2pm tomorrow</div>
                            </div>
                          </div>
                          
                          <div className="p-2 rounded hover:bg-muted/30 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-500">in</div>
                            <div>
                              <div className="font-medium text-sm">Sarah Miller (LinkedIn)</div>
                              <div className="text-xs text-gray-500">Thanks for connecting!</div>
                            </div>
                          </div>

                          <div className="p-2 rounded bg-muted/50 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-500">D</div>
                            <div>
                              <div className="font-medium text-sm">Gaming Group (Discord)</div>
                              <div className="text-xs text-gray-500">Are we playing tonight?</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-brand-purple/20 backdrop-blur-sm z-[-1]"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-brand-blue/10 backdrop-blur-sm z-[-1]"></div>
            </div>
          </div>

          {/* Networks Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Connect All Your Networks
            </h2>
            
            <div className="bg-gradient-to-br from-muted/50 to-background rounded-2xl p-8 border border-muted">
              <p className="text-center mb-8 text-gray-600 dark:text-gray-300">
                InstantConnect supports 25+ messaging networks and counting, with new integrations added regularly.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {networkFeatures.map((network, index) => (
                  <div key={index} className="bg-card rounded-lg p-3 text-center shadow-sm">
                    <span>{network}</span>
                  </div>
                ))}
                <div className="bg-primary/10 rounded-lg p-3 text-center">
                  <span className="text-primary">+ More coming</span>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Powerful Features for Modern Messaging
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MessageSquare className="text-primary" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Universal Chat</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Seamlessly switch between networks in the same conversation. Reply to WhatsApp 
                  messages from your LinkedIn chat window without missing a beat.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Smartphone className="text-primary" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Multi-Device Sync</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Start a conversation on your phone and continue seamlessly on your desktop. 
                  All your messages stay in perfect sync across all your devices.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Lock className="text-primary" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Enhanced Privacy</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Take control of your privacy with advanced settings, encryption options, 
                  and granular permissions for each messaging network you connect.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="text-primary" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">AI-Powered Tools</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Let AI help you draft messages, translate conversations in real-time, and suggest 
                  smart replies based on your communication style.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Repeat className="text-primary" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Custom Workflows</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Create automated workflows that route messages, send scheduled updates, 
                  or trigger actions based on specific events across your networks.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="text-primary" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Unified Contacts</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  See all your contacts from every network in one unified address book, 
                  with smart detection to merge duplicate entries.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Simplify Your Messaging?
            </h2>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
              Join our beta program today and be among the first to experience the future of unified messaging.
            </p>
            <a href="/#beta-signup" className="btn-primary">
              Join Our Beta Program
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Features;
