
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import Documentation from "./pages/Documentation";
import Roadmap from "./pages/Roadmap";
import Community from "./pages/Community";
import ServerStatus from "./pages/ServerStatus";
import Changelog from "./pages/Changelog";
import Compare from "./pages/Compare";
import Reach from "./pages/Reach";
import Downloads from "./pages/Downloads";
import Security from "./pages/Security";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import Integrations from "./pages/Integrations";
import WebApp from "./pages/WebApp";
import Feedback from "./pages/Feedback";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/community" element={<Community />} />
          <Route path="/server-status" element={<ServerStatus />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/reach" element={<Reach />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/security" element={<Security />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/features" element={<Features />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/webapp" element={<WebApp />} />
          <Route path="/feedback" element={<Feedback />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
