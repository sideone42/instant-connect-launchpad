
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import BetaSignupForm from "../components/BetaSignupForm";
import FAQ from "../components/FAQ";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

// SEO JSON-LD structured data for messaging app
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "InstantConnect",
  "applicationCategory": "CommunicationApplication",
  "operatingSystem": "Android, iOS, Windows, macOS, Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "A modern messaging platform built for speed, privacy, and seamless collaboration.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "1250"
  }
};

const Index = () => {
  // Add structured data to the page head
  useEffect(() => {
    // Set page title and meta tags for SEO
    document.title = "InstantConnect | Modern Messaging Platform";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "A modern messaging platform built for speed, privacy, and seamless collaboration. Join our growing community of beta testers today.");
    }
    
    // Add JSON-LD structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    
    return () => {
      if (script.parentNode) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <Features />
        <BetaSignupForm />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default Index;
