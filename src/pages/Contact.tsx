
import { useState } from "react";
import { AtSign, MessageSquare, Phone, Globe, MapPin, Send } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    // Show success message (in a real app, you'd use a toast or other notification)
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <section className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Have questions about InstantConnect? We're here to help.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-8 mb-16">
            <div className="md:col-span-2 bg-gradient-to-br from-primary/10 to-brand-purple/10 rounded-2xl p-6 border border-primary/20">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <AtSign size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a href="mailto:hello@instantconnect.app" className="text-primary hover:underline">
                      hello@instantconnect.app
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <MessageSquare size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Live Chat</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Available Monday-Friday, 9am-5pm PST
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <a href="tel:+1-555-123-4567" className="text-primary hover:underline">
                      +1-555-123-4567
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Headquarters</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      123 Tech Lane<br />
                      San Francisco, CA 94107
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-medium mb-3">Connect With Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3 bg-card rounded-2xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-background"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-background"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-background"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary flex items-center gap-2">
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              <div className="bg-card rounded-xl overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">How quickly can I expect a response?</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We typically respond to all inquiries within 24 hours during business days. 
                    For urgent matters, please use the live chat feature for immediate assistance.
                  </p>
                </div>
              </div>
              
              <div className="bg-card rounded-xl overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">Do you offer technical support?</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Yes, our support team is available to help with any technical issues you might encounter. 
                    You can reach them via email, live chat, or by submitting a ticket through our help center.
                  </p>
                </div>
              </div>
              
              <div className="bg-card rounded-xl overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">Can I request a feature?</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Absolutely! We love hearing feedback from our users. You can submit feature requests 
                    through our contact form or community forums. We review all suggestions and prioritize 
                    based on user demand.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Integration Support Section */}
          <div className="max-w-4xl mx-auto bg-muted/30 rounded-2xl p-8 border border-muted">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">
                Network Integration Support
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Need help with a specific messaging network? Our specialized team can assist you.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card rounded-xl p-5 text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-3">
                  <Globe className="text-blue-500" size={24} />
                </div>
                <h3 className="font-medium mb-1">Social Networks</h3>
                <a href="mailto:social@instantconnect.app" className="text-primary text-sm hover:underline">
                  social@instantconnect.app
                </a>
              </div>
              
              <div className="bg-card rounded-xl p-5 text-center">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mx-auto mb-3">
                  <MessageSquare className="text-green-500" size={24} />
                </div>
                <h3 className="font-medium mb-1">Messaging Apps</h3>
                <a href="mailto:messaging@instantconnect.app" className="text-primary text-sm hover:underline">
                  messaging@instantconnect.app
                </a>
              </div>
              
              <div className="bg-card rounded-xl p-5 text-center">
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mx-auto mb-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" className="text-purple-500">
                    <path d="M13 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                    <path d="M21.71 8a9 9 0 0 0-8.46-6A9 9 0 0 0 5.29 8H1v8h4.29a9 9 0 0 0 8.4 6 9 9 0 0 0 8.4-6H23V8h-1.29z" />
                    <path d="M13 14a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" fill="currentColor" />
                  </svg>
                </div>
                <h3 className="font-medium mb-1">API & Enterprise</h3>
                <a href="mailto:enterprise@instantconnect.app" className="text-primary text-sm hover:underline">
                  enterprise@instantconnect.app
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
