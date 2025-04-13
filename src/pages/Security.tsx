
import { Lock, Shield, Key, Fingerprint, Eye, Server, Network, UserCheck } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Security = () => {
  const securityFeatures = [
    {
      icon: <Lock className="text-primary" size={24} />,
      title: "End-to-End Encryption",
      description: "All messages are encrypted on your device and can only be decrypted by the intended recipients."
    },
    {
      icon: <Key className="text-primary" size={24} />,
      title: "Zero-Knowledge Architecture",
      description: "We never have access to your encryption keys or unencrypted messages."
    },
    {
      icon: <Fingerprint className="text-primary" size={24} />,
      title: "Multi-Factor Authentication",
      description: "Secure your account with biometrics, authentication apps, and security keys."
    },
    {
      icon: <Shield className="text-primary" size={24} />,
      title: "Network Isolation",
      description: "Each messaging network integration runs in an isolated environment for enhanced security."
    },
    {
      icon: <Eye className="text-primary" size={24} />,
      title: "Privacy Controls",
      description: "Granular privacy settings for each messaging network and contact."
    },
    {
      icon: <Server className="text-primary" size={24} />,
      title: "Self-Hosting Option",
      description: "Run InstantConnect on your own servers for complete data sovereignty."
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <section className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Security & Privacy
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Your messages, your data, your privacy - our top priority
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-gradient-to-br from-brand-purple/10 to-brand-blue/10 rounded-2xl p-8 border border-brand-purple/20 mb-16">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">Our Security Promise</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  At InstantConnect, we believe privacy is a fundamental right. While unifying multiple 
                  messaging networks, we maintain the highest security standards to protect your communications.
                </p>
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="text-green-500" size={20} />
                  <span className="font-medium">Independent security audits</span>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="text-green-500" size={20} />
                  <span className="font-medium">Open-source encryption protocols</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="text-green-500" size={20} />
                  <span className="font-medium">No access to your messages or data</span>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <div className="w-56 h-56 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-brand-blue rounded-full opacity-20 animate-pulse-soft"></div>
                  <div className="absolute inset-4 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                    <div className="relative">
                      <Shield size={64} className="text-primary" />
                      <Lock size={24} className="text-primary absolute bottom-0 right-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Key Security Features
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
              How We Secure Network Integrations
            </h2>
            
            <div className="relative overflow-hidden bg-gradient-to-br from-muted/50 to-background rounded-2xl p-8 border border-muted">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-bold mb-4">Secure Network Bridge</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    InstantConnect securely bridges to platforms like LinkedIn, Facebook, Instagram, and Twitch while 
                    maintaining end-to-end encryption wherever possible.
                  </p>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Network className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-medium">Secure API Integrations</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          We use official APIs and OAuth for secure access to your accounts
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Server className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-medium">Sandboxed Processing</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Each network runs in its own isolated environment
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <UserCheck className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-medium">Minimal Permission Scopes</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          We only request the minimum permissions needed for messaging
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="md:w-1/2">
                  <div className="bg-card rounded-xl p-6">
                    <h4 className="font-bold mb-4">Supported Networks Security</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-500">f</div>
                          <span>Facebook</span>
                        </span>
                        <div className="flex items-center gap-1">
                          <Shield size={16} className="text-green-500" />
                          <span className="text-sm">End-to-end encrypted</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-500">in</div>
                          <span>LinkedIn</span>
                        </span>
                        <div className="flex items-center gap-1">
                          <Shield size={16} className="text-amber-500" />
                          <span className="text-sm">Transport encryption</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white">
                            <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                              <rect x="2" y="2" width="20" height="20" rx="5" />
                              <circle cx="18" cy="6" r="1.5" fill="currentColor" />
                              <path d="M12 16C9.791 16 8 14.209 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.209 14.209 16 12 16Z" />
                            </svg>
                          </div>
                          <span>Instagram</span>
                        </span>
                        <div className="flex items-center gap-1">
                          <Shield size={16} className="text-amber-500" />
                          <span className="text-sm">Transport encryption</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-500">
                            <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                              <path d="M4 5V19H20V5H4Z" />
                              <path d="M10 9L15 12L10 15V9Z" fill="currentColor" />
                            </svg>
                          </div>
                          <span>Twitch</span>
                        </span>
                        <div className="flex items-center gap-1">
                          <Shield size={16} className="text-amber-500" />
                          <span className="text-sm">Transport encryption</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Privacy First, Always
            </h2>
            
            <div className="bg-card rounded-xl p-8 shadow-md mb-8">
              <h3 className="font-bold mb-4">Our Privacy Commitments:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-green-500">✓</div>
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>No message scanning</strong> - We never read, analyze, or scan your messages for advertising or data collection.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-green-500">✓</div>
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>Minimal data collection</strong> - We only collect what's necessary to provide the service.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-green-500">✓</div>
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>No third-party sharing</strong> - Your data is never sold or shared with third parties.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-green-500">✓</div>
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>Data deletion</strong> - Easy account deletion with complete data removal.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-green-500">✓</div>
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>Transparency</strong> - Regular transparency reports and clear terms of service.
                  </p>
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <a href="/privacy-policy" className="btn-outline">
                Read Our Privacy Policy
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Security;
