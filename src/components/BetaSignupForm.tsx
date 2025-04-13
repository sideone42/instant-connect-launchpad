
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { ArrowRight, CheckCircle } from "lucide-react";

const BetaSignupForm = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(2);
      toast({
        title: "Success!",
        description: "You've been added to our beta waiting list.",
        duration: 5000,
      });
    }, 1500);
  };
  
  return (
    <section id="beta-signup" className="py-24 bg-gradient-to-r from-brand-purple/10 to-brand-blue/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {step === 1 ? (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Join the <span className="gradient-text">Beta Program</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Be among the first to experience InstantConnect. Sign up for exclusive early access.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-brand-purple focus:border-brand-purple bg-white dark:bg-gray-700"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        required
                        className="h-4 w-4 rounded border-gray-300 text-brand-purple focus:ring-brand-purple mt-1"
                      />
                      <label htmlFor="terms" className="ml-2 block text-sm text-gray-600 dark:text-gray-300">
                        I agree to the <a href="#" className="text-brand-purple hover:underline">Terms of Service</a> and <a href="#" className="text-brand-purple hover:underline">Privacy Policy</a>
                      </label>
                    </div>
                    
                    <div className="flex items-start">
                      <input
                        id="newsletter"
                        name="newsletter"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-brand-purple focus:ring-brand-purple mt-1"
                      />
                      <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-600 dark:text-gray-300">
                        Send me occasional product updates and announcements (optional)
                      </label>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Join Beta Program <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </form>
                
                <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
                  <p>Currently accepting new beta testers. Limited spots available.</p>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="flex justify-center mb-6">
                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full text-green-500">
                  <CheckCircle size={48} />
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4">Thank You for Signing Up!</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We've received your beta signup request for <strong>{email}</strong>.<br />
                We're currently reviewing applications and will send you an invitation code shortly.
              </p>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-6">
                <h3 className="font-medium mb-2">What happens next?</h3>
                <ol className="text-left text-sm text-gray-600 dark:text-gray-300 space-y-2">
                  <li className="flex items-start">
                    <span className="text-brand-purple mr-2">1.</span>
                    <span>You'll receive a confirmation email shortly.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-purple mr-2">2.</span>
                    <span>Within 1-3 days, we'll send your personal invitation code.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-purple mr-2">3.</span>
                    <span>Download the app, enter your code, and start using InstantConnect!</span>
                  </li>
                </ol>
              </div>
              <button 
                onClick={() => setStep(1)} 
                className="text-brand-purple hover:underline font-medium"
              >
                Sign up another email
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BetaSignupForm;
