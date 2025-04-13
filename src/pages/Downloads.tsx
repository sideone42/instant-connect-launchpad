
import { Apple, DownloadCloud, QrCode, Smartphone } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Downloads = () => {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <section className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Download InstantConnect
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Access all your messaging networks from any device
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Mobile Apps Download Card */}
            <div className="bg-gradient-to-br from-primary/10 to-brand-purple/10 rounded-2xl p-6 shadow-lg border border-primary/20">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone size={32} className="text-primary" />
                </div>
                <h2 className="text-xl font-bold">Mobile Apps</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                  Take InstantConnect with you everywhere
                </p>
              </div>

              <div className="space-y-4">
                <a 
                  href="#" 
                  className="flex items-center gap-3 bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <Apple size={24} />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center gap-3 bg-primary text-white p-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.5 20.5L12 3.5L20.5 20.5H3.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                    <path d="M12 17L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 13L15 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 9L13 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </a>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                  <p className="text-center text-sm mb-4">Scan to download</p>
                  <div className="bg-white p-2 rounded-lg w-32 h-32 mx-auto">
                    <QrCode size={112} className="text-gray-800" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Desktop Apps Download Card */}
            <div className="bg-gradient-to-br from-brand-blue/10 to-secondary/10 rounded-2xl p-6 shadow-lg border border-brand-blue/20">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-brand-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="6" width="18" height="12" rx="1" stroke="currentColor" strokeWidth="2"/>
                    <path d="M7 15H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 6V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 20V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M14 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M8 12H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h2 className="text-xl font-bold">Desktop Apps</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                  For Windows, macOS and Linux
                </p>
              </div>

              <div className="space-y-4">
                <a 
                  href="#" 
                  className="flex items-center gap-3 bg-gray-200 dark:bg-gray-700 p-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5.5L10.5 4.5V11.5H3V5.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                    <path d="M13.5 4L21 3V11H13.5V4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                    <path d="M13.5 13L21 13V21L13.5 20V13Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                    <path d="M3 13.5L10.5 13.5V19.5L3 18.5V13.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  </svg>
                  <div className="text-left">
                    <div className="font-semibold">Windows</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">64-bit installer (120MB)</div>
                  </div>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center gap-3 bg-gray-200 dark:bg-gray-700 p-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  <Apple size={24} />
                  <div className="text-left">
                    <div className="font-semibold">macOS</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">Universal (Intel/Apple Silicon) (98MB)</div>
                  </div>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center gap-3 bg-gray-200 dark:bg-gray-700 p-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M19 19L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M5 19L7 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M19 5L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M5 5L7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <div className="text-left">
                    <div className="font-semibold">Linux</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">AppImage, deb, rpm packages (95MB)</div>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Web App Card */}
            <div className="bg-gradient-to-br from-brand-blue/10 to-brand-light/10 rounded-2xl p-6 shadow-lg border border-brand-blue/20 md:col-span-2 lg:col-span-1">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-brand-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 3C16.9706 3 21 7.02944 21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M3 12C3 7.02944 7.02944 3 12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 21C7.02944 21 3 16.9706 3 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M21 12C21 16.9706 16.9706 21 12 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h2 className="text-xl font-bold">Web App</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                  Use InstantConnect in your browser
                </p>
              </div>

              <div className="space-y-4">
                <a 
                  href="#" 
                  className="flex items-center justify-center gap-3 bg-primary text-white p-4 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <DownloadCloud size={20} />
                  <span className="font-medium">Launch Web App</span>
                </a>
                
                <div className="text-center text-sm text-gray-600 dark:text-gray-300 mt-4">
                  <p>Works on all modern browsers</p>
                  <div className="flex justify-center gap-4 mt-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 12C4 7.58172 7.58172 4 12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M12 20C16.4183 20 20 16.4183 20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M12 20C7.58172 20 4 16.4183 4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M12 4C16.4183 4 20 7.58172 20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 3L21 20H3L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                    </svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="9" stroke="currentColor" strokeWidth="2"/>
                      <path d="M15 9C15 9 15 12 15 12C15 12 15 15 12 15C9 15 9 12 9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Download Section */}
          <div className="max-w-4xl mx-auto bg-muted/30 rounded-2xl p-8 border border-muted mb-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-2">Quick Download</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Scan this QR code to download InstantConnect on your current device
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl">
                <QrCode size={160} className="text-gray-800" />
              </div>
            </div>
          </div>

          {/* System Requirements */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">
              System Requirements
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="font-bold mb-3">Mobile</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="font-semibold min-w-[80px]">iOS:</span>
                    <span className="text-gray-600 dark:text-gray-300">iOS 14.0 or later</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold min-w-[80px]">Android:</span>
                    <span className="text-gray-600 dark:text-gray-300">Android 8.0 or later</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold min-w-[80px]">Storage:</span>
                    <span className="text-gray-600 dark:text-gray-300">150MB free space</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="font-bold mb-3">Desktop</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="font-semibold min-w-[80px]">Windows:</span>
                    <span className="text-gray-600 dark:text-gray-300">Windows 10/11</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold min-w-[80px]">macOS:</span>
                    <span className="text-gray-600 dark:text-gray-300">macOS 11.0 or later</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold min-w-[80px]">Linux:</span>
                    <span className="text-gray-600 dark:text-gray-300">Ubuntu 20.04 or equivalent</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="font-bold mb-3">Web App</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="font-semibold min-w-[80px]">Browsers:</span>
                    <span className="text-gray-600 dark:text-gray-300">Chrome, Firefox, Safari, Edge (latest versions)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold min-w-[80px]">Connection:</span>
                    <span className="text-gray-600 dark:text-gray-300">Stable internet connection</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Downloads;
