
import { Check, X } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Compare = () => {
  const platforms = [
    {
      name: "InstantConnect",
      description: "All your messaging networks in one unified experience",
      price: "Free during beta, then $5.99/mo",
      features: {
        integratedNetworks: "25+ networks",
        encryption: true,
        aiAssistant: true,
        multiDevice: true,
        selfHosted: true,
        openSource: true,
        fileSharing: true,
        customThemes: true
      },
      strengths: [
        "Highest number of supported networks",
        "Community-driven development",
        "Superior message synchronization",
        "Affordable pricing",
        "Advanced AI integration"
      ],
      weaknesses: [
        "Newer platform, still in beta",
        "Growing community"
      ],
      highlight: true
    },
    {
      name: "Beeper.com",
      description: "Universal chat app for 15 chat networks",
      price: "$10/mo",
      features: {
        integratedNetworks: "15 networks",
        encryption: true,
        aiAssistant: false,
        multiDevice: true,
        selfHosted: false,
        openSource: false,
        fileSharing: true,
        customThemes: false
      },
      strengths: [
        "Established user base",
        "Good network reliability",
        "iMessage integration"
      ],
      weaknesses: [
        "Higher price point",
        "Limited AI features",
        "Fewer supported networks",
        "No self-hosting option"
      ],
      highlight: false
    },
    {
      name: "Tanka.ai",
      description: "AI-powered messaging platform",
      price: "$8.99/mo",
      features: {
        integratedNetworks: "8 networks",
        encryption: true,
        aiAssistant: true,
        multiDevice: true,
        selfHosted: false,
        openSource: false,
        fileSharing: true,
        customThemes: false
      },
      strengths: [
        "Strong AI capabilities",
        "Clean interface",
        "Good for business users"
      ],
      weaknesses: [
        "Limited number of networks",
        "Less customization",
        "More expensive than alternatives",
        "No self-hosting option"
      ],
      highlight: false
    },
    {
      name: "NapoleonCat",
      description: "Social media management and analytics",
      price: "From $21/mo",
      features: {
        integratedNetworks: "7 networks",
        encryption: false,
        aiAssistant: false,
        multiDevice: true,
        selfHosted: false,
        openSource: false,
        fileSharing: true,
        customThemes: false
      },
      strengths: [
        "Strong analytics tools",
        "Team collaboration features",
        "Social media focused"
      ],
      weaknesses: [
        "Expensive for personal use",
        "Limited messaging networks",
        "Business-oriented, less personal",
        "No encryption for all messages"
      ],
      highlight: false
    },
    {
      name: "Matrix",
      description: "Open network for secure, decentralized communication",
      price: "Free (self-hosted)",
      features: {
        integratedNetworks: "Varies by client",
        encryption: true,
        aiAssistant: false,
        multiDevice: true,
        selfHosted: true,
        openSource: true,
        fileSharing: true,
        customThemes: true
      },
      strengths: [
        "Fully decentralized",
        "Strong privacy focus",
        "Open-source ecosystem",
        "Free to use"
      ],
      weaknesses: [
        "Technical setup required",
        "Less user-friendly",
        "Fragmented ecosystem",
        "Limited mainstream network bridges"
      ],
      highlight: false
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <section className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Platform Comparison
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              See how InstantConnect stacks up against other messaging unification platforms
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left border-b dark:border-gray-700">
                  <th className="py-4 px-6 font-semibold text-lg min-w-[200px]">Platform</th>
                  {platforms.map((platform) => (
                    <th 
                      key={platform.name} 
                      className={`py-4 px-6 font-semibold text-lg min-w-[220px] ${
                        platform.highlight ? "bg-primary/10 dark:bg-primary/20" : ""
                      }`}
                    >
                      {platform.name}
                      {platform.highlight && (
                        <span className="ml-2 inline-block px-2 py-1 text-xs font-medium rounded-full bg-primary text-white">
                          Best Choice
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-gray-700">
                  <td className="py-4 px-6 font-medium">Description</td>
                  {platforms.map((platform) => (
                    <td 
                      key={`${platform.name}-desc`} 
                      className={`py-4 px-6 ${
                        platform.highlight ? "bg-primary/10 dark:bg-primary/20" : ""
                      }`}
                    >
                      {platform.description}
                    </td>
                  ))}
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <td className="py-4 px-6 font-medium">Pricing</td>
                  {platforms.map((platform) => (
                    <td 
                      key={`${platform.name}-price`} 
                      className={`py-4 px-6 ${
                        platform.highlight ? "bg-primary/10 dark:bg-primary/20" : ""
                      }`}
                    >
                      {platform.price}
                    </td>
                  ))}
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <td className="py-4 px-6 font-medium">Supported Networks</td>
                  {platforms.map((platform) => (
                    <td 
                      key={`${platform.name}-networks`} 
                      className={`py-4 px-6 ${
                        platform.highlight ? "bg-primary/10 dark:bg-primary/20" : ""
                      }`}
                    >
                      {platform.features.integratedNetworks}
                    </td>
                  ))}
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <td className="py-4 px-6 font-medium">End-to-End Encryption</td>
                  {platforms.map((platform) => (
                    <td 
                      key={`${platform.name}-encryption`} 
                      className={`py-4 px-6 ${
                        platform.highlight ? "bg-primary/10 dark:bg-primary/20" : ""
                      }`}
                    >
                      {platform.features.encryption ? 
                        <Check className="text-green-500" /> : 
                        <X className="text-red-500" />
                      }
                    </td>
                  ))}
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <td className="py-4 px-6 font-medium">AI Assistant</td>
                  {platforms.map((platform) => (
                    <td 
                      key={`${platform.name}-ai`} 
                      className={`py-4 px-6 ${
                        platform.highlight ? "bg-primary/10 dark:bg-primary/20" : ""
                      }`}
                    >
                      {platform.features.aiAssistant ? 
                        <Check className="text-green-500" /> : 
                        <X className="text-red-500" />
                      }
                    </td>
                  ))}
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <td className="py-4 px-6 font-medium">Self-Hosted Option</td>
                  {platforms.map((platform) => (
                    <td 
                      key={`${platform.name}-selfhosted`} 
                      className={`py-4 px-6 ${
                        platform.highlight ? "bg-primary/10 dark:bg-primary/20" : ""
                      }`}
                    >
                      {platform.features.selfHosted ? 
                        <Check className="text-green-500" /> : 
                        <X className="text-red-500" />
                      }
                    </td>
                  ))}
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <td className="py-4 px-6 font-medium">Open Source</td>
                  {platforms.map((platform) => (
                    <td 
                      key={`${platform.name}-opensource`} 
                      className={`py-4 px-6 ${
                        platform.highlight ? "bg-primary/10 dark:bg-primary/20" : ""
                      }`}
                    >
                      {platform.features.openSource ? 
                        <Check className="text-green-500" /> : 
                        <X className="text-red-500" />
                      }
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {platforms.map((platform) => (
              <Card 
                key={`${platform.name}-card`}
                className={platform.highlight ? "border-primary" : ""}
              >
                <CardHeader>
                  <CardTitle className={platform.highlight ? "text-primary" : ""}>
                    {platform.name}
                    {platform.highlight && (
                      <span className="ml-2 inline-block px-2 py-1 text-xs font-medium rounded-full bg-primary text-white">
                        Best Choice
                      </span>
                    )}
                  </CardTitle>
                  <CardDescription>{platform.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2">Strengths</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {platform.strengths.map((strength, idx) => (
                        <li key={`${platform.name}-strength-${idx}`} className="text-sm text-gray-600 dark:text-gray-300">
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Weaknesses</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {platform.weaknesses.map((weakness, idx) => (
                        <li key={`${platform.name}-weakness-${idx}`} className="text-sm text-gray-600 dark:text-gray-300">
                          {weakness}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        <section className="container mx-auto px-4 mt-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Why Choose InstantConnect?
            </h2>
            <p className="text-lg mb-8 text-center">
              InstantConnect brings together all your messaging networks into one unified experience, 
              saving you time and reducing the frustration of switching between apps.
            </p>
            
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-xl font-bold mb-4">The InstantConnect Advantage</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong>More networks:</strong> Access to 25+ messaging platforms in one app, more than any competitor
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Better privacy:</strong> End-to-end encryption and open-source code for transparency
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong>AI-powered:</strong> Smart features like message summaries, translations, and scheduling
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Cost-effective:</strong> More features at a lower price point than competitors
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Community-driven:</strong> Your feedback shapes our development roadmap
                  </span>
                </li>
              </ul>
              
              <div className="mt-8 text-center">
                <a href="/#beta-signup" className="btn-primary">
                  Join Our Beta
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

export default Compare;
