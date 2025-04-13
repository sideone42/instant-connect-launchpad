
import { CheckCircle, Circle, Clock } from "lucide-react";

const Roadmap = () => {
  const roadmapItems = [
    {
      quarter: "Q1 2025",
      title: "Beta Launch",
      description: "Initial release with core messaging features.",
      status: "completed",
      items: [
        "Secure messaging with E2E encryption",
        "Cross-platform clients (Web, iOS, Android)",
        "Basic group chat functionality",
        "File sharing up to 500MB"
      ]
    },
    {
      quarter: "Q2 2025",
      title: "Enhanced Collaboration",
      description: "Tools for team productivity and organization.",
      status: "in-progress",
      items: [
        "Advanced group permissions and roles",
        "Threaded conversations",
        "Rich text formatting",
        "Expandable file sharing to 2GB"
      ]
    },
    {
      quarter: "Q3 2025",
      title: "Voice & Video",
      description: "HD audio and video call capabilities.",
      status: "upcoming",
      items: [
        "One-on-one video calls",
        "Group video conferences (up to 50 people)",
        "Screen sharing functionality",
        "Background noise cancellation"
      ]
    },
    {
      quarter: "Q4 2025",
      title: "Integrations & API",
      description: "Connect with other tools and services.",
      status: "upcoming",
      items: [
        "Public API for developers",
        "Integration marketplace",
        "Workflow automation tools",
        "Custom plugin support"
      ]
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle size={24} className="text-green-500" />;
      case "in-progress":
        return <Clock size={24} className="text-amber-500" />;
      case "upcoming":
        return <Circle size={24} className="text-gray-400" />;
      default:
        return null;
    }
  };

  return (
    <section id="roadmap" className="py-24 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Product Roadmap</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We believe in transparency. Here's what we're working on and what's coming next.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>

          {/* Roadmap Items */}
          <div className="space-y-12 relative">
            {roadmapItems.map((item, index) => (
              <div key={index} className="md:grid md:grid-cols-2 md:gap-8 relative">
                {/* Timeline Indicator */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-4 border-gray-200 dark:border-gray-700 z-10 flex items-center justify-center">
                  {getStatusIcon(item.status)}
                </div>

                {/* Content Positioning */}
                <div className={`md:block ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 bg-brand-purple/10 text-brand-purple">
                      {item.quarter}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                    
                    <ul className="space-y-2">
                      {item.items.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-brand-purple mt-0.5">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center gap-2 mt-4">
                      {getStatusIcon(item.status)}
                      <span className="capitalize text-sm font-medium">
                        {item.status === "completed" ? "Completed" : 
                         item.status === "in-progress" ? "In Progress" : "Upcoming"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <a href="#beta-signup" className="btn-primary inline-flex gap-2 items-center">
            Join Our Beta <span className="text-sm">&rarr;</span>
          </a>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Help shape the future of InstantConnect by providing feedback.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
