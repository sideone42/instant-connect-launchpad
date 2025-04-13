
import { Share, Users, BookUser, Smartphone, Globe, Zap } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Reach = () => {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <section className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              InstantConnect Reach
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Your universal contact profile across all messaging platforms
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="#features" className="btn-primary">
                <Share size={20} />
                Create Your Profile
              </a>
              <a href="#learn-more" className="btn-outline">
                Learn More
              </a>
            </div>
          </div>

          <div className="max-w-6xl mx-auto bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 rounded-2xl p-8 mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  One Profile, All Your Connections
                </h2>
                <p className="text-lg mb-6">
                  Reach allows you to create a single shareable profile that connects all your messaging networks. 
                  Share your Reach link and let others connect with you on their preferred platform.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-4 p-2 bg-primary/10 rounded-full">
                      <Users className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Unified Contact Management</h3>
                      <p className="text-gray-600 dark:text-gray-300">Manage all your contacts across platforms in one place</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 p-2 bg-primary/10 rounded-full">
                      <BookUser className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">AI-Enhanced Contact Book</h3>
                      <p className="text-gray-600 dark:text-gray-300">Smart suggestions and contact enrichment</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 p-2 bg-primary/10 rounded-full">
                      <Smartphone className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Local Sharing</h3>
                      <p className="text-gray-600 dark:text-gray-300">Share your profile via NFC, QR code, or nearby devices</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 max-w-md mx-auto">
                  <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-brand-purple to-brand-blue aspect-[9/16] mb-6">
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                      <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                        <span className="text-3xl font-bold">JD</span>
                      </div>
                      <h3 className="text-xl font-bold">Jane Doe</h3>
                      <p className="opacity-80">Product Designer</p>
                      <div className="mt-4 flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm"></div>
                        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm"></div>
                        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm"></div>
                        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm"></div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-center flex flex-col items-center">
                      <Smartphone size={20} className="mb-1" />
                      <span className="text-sm">Message</span>
                    </button>
                    <button className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-center flex flex-col items-center">
                      <Share size={20} className="mb-1" />
                      <span className="text-sm">Share</span>
                    </button>
                    <button className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-center flex flex-col items-center">
                      <Globe size={20} className="mb-1" />
                      <span className="text-sm">Website</span>
                    </button>
                    <button className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-center flex flex-col items-center">
                      <Users size={20} className="mb-1" />
                      <span className="text-sm">Connect</span>
                    </button>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-brand-purple/30 backdrop-blur-sm z-[-1]"></div>
                <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-brand-blue/20 backdrop-blur-sm z-[-1]"></div>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mb-16" id="features">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              How Reach Works
            </h2>
            
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users size={36} className="text-primary" />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-xl font-bold mb-2">Create Your Unified Profile</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Connect all your messaging accounts to your Reach profile. Add your photo, 
                    bio, and customize which platforms are visible to different audiences.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3 flex justify-center md:order-2">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                    <Share size={36} className="text-primary" />
                  </div>
                </div>
                <div className="w-full md:w-2/3 md:order-1">
                  <h3 className="text-xl font-bold mb-2">Share Your Reach Link</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Get a personalized link (reach.instantconnect.app/yourname) to share online. 
                    Or use local sharing options like QR code, NFC tap, or nearby device discovery.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                    <Zap size={36} className="text-primary" />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-xl font-bold mb-2">Connect Instantly</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    When someone visits your Reach profile, they can choose their preferred messaging 
                    platform to connect with you. One tap and you're connected - no searching required.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto bg-gradient-to-br from-muted/50 to-background rounded-2xl p-8 border border-muted" id="learn-more">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              AI-Integrated Contact Experience
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="font-bold mb-3">Smart Contact Suggestions</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  AI analyzes your communication patterns and suggests who you might want to 
                  connect with based on context, frequency, and relevance.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="font-bold mb-3">Contact Enrichment</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Automatically fills in missing details from public profiles and 
                  keeps contact information updated across platforms.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="font-bold mb-3">Relationship Insights</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  See conversation history, shared interests, and reminders for 
                  maintaining important connections.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="font-bold mb-3">Group Suggestions</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  AI helps organize your contacts into meaningful groups based on 
                  interactions and relationships.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="font-bold mb-3">Network Analytics</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Understand your communication patterns and optimize your messaging 
                  across different platforms.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="font-bold mb-3">Smart Availability</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  AI manages your online status intelligently across platforms based on 
                  your preferences and schedule.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <a href="#" className="btn-primary">
                Create Your Reach Profile
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Reach;
