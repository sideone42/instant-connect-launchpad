
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, Transparent <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Choose the plan that's right for you. All plans include our core features.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Free Plan */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold mb-1">Free</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">For personal use</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">$0</span>
                    <span className="text-gray-500 dark:text-gray-400 ml-2">/ month</span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check size={20} className="text-green-500 mr-2 mt-0.5" />
                      <span>Up to 10 group chats</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="text-green-500 mr-2 mt-0.5" />
                      <span>1GB file storage</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="text-green-500 mr-2 mt-0.5" />
                      <span>Basic encryption</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="text-green-500 mr-2 mt-0.5" />
                      <span>30-day message history</span>
                    </li>
                  </ul>
                  <a href="/#beta-signup" className="btn-outline w-full text-center mt-6">Get Started</a>
                </div>
              </div>
              
              {/* Pro Plan */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border-2 border-brand-purple transform transition-all hover:scale-105">
                <div className="bg-brand-purple/10 p-2 text-center">
                  <span className="text-sm font-medium text-brand-purple">Most Popular</span>
                </div>
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold mb-1">Pro</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">For professionals</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">$9</span>
                    <span className="text-gray-500 dark:text-gray-400 ml-2">/ month</span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check size={20} className="text-green-500 mr-2 mt-0.5" />
                      <span>Unlimited group chats</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="text-green-500 mr-2 mt-0.5" />
                      <span>10GB file storage</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="text-green-500 mr-2 mt-0.5" />
                      <span>Advanced end-to-end encryption</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="text-green-500 mr-2 mt-0.5" />
                      <span>1-year message history</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="text-green-500 mr-2 mt-0.5" />
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="text-green-500 mr-2 mt-0.5" />
                      <span>Custom themes</span>
                    </li>
                  </ul>
                  <a href="/#beta-signup" className="btn-primary w-full text-center mt-6">Get Started</a>
                </div>
              </div>
              
              {/* Enterprise Plan */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold mb-1">Enterprise</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">For organizations</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">Custom</span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check size={20} className="text-green-500 mr-2 mt-0.5" />
                      <span>Everything in Pro</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="text-green-500 mr-2 mt-0.5" />
                      <span>Unlimited file storage</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="text-green-500 mr-2 mt-0.5" />
                      <span>Admin console & controls</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="text-green-500 mr-2 mt-0.5" />
                      <span>SAML SSO integration</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="text-green-500 mr-2 mt-0.5" />
                      <span>99.99% uptime SLA</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="text-green-500 mr-2 mt-0.5" />
                      <span>Dedicated support manager</span>
                    </li>
                  </ul>
                  <a href="/#contact" className="btn-outline w-full text-center mt-6">Contact Sales</a>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-lg mb-6">
                Not sure which plan is right for you? <a href="/#contact" className="text-brand-purple font-medium">Contact us</a> and we'll help you choose.
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg max-w-xl mx-auto">
                <h3 className="font-semibold text-lg mb-2">Currently in Beta</h3>
                <p>During our beta phase, all features are available for free to help us test and improve the platform.</p>
                <a href="/#beta-signup" className="btn-primary inline-block mt-4">Join the Beta</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Pricing;
