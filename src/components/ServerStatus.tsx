
import { Activity, CheckCircle, AlertCircle, Clock } from "lucide-react";

const ServerStatus = () => {
  // In a real app, this would be fetched from an API
  const services = [
    { name: "Messaging Service", status: "operational", uptime: "99.99%", lastIncident: "None" },
    { name: "File Storage", status: "operational", uptime: "99.95%", lastIncident: "4d ago" },
    { name: "User Authentication", status: "operational", uptime: "100%", lastIncident: "None" },
    { name: "Video Calling", status: "degraded", uptime: "97.5%", lastIncident: "Ongoing" },
    { name: "APIs", status: "operational", uptime: "99.98%", lastIncident: "7d ago" }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle size={18} className="text-green-500" />;
      case "degraded":
        return <Clock size={18} className="text-amber-500" />;
      case "outage":
        return <AlertCircle size={18} className="text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "operational":
        return "Operational";
      case "degraded":
        return "Degraded Performance";
      case "outage":
        return "Service Outage";
      default:
        return status;
    }
  };

  return (
    <section id="server-status" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Activity size={24} className="text-brand-purple" />
            <h2 className="text-2xl md:text-3xl font-bold">Service Status</h2>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div className="p-4 bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse-soft"></div>
                <span className="font-medium">All Systems Operational</span>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Updated: {new Date().toLocaleString()}
              </span>
            </div>
            
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="p-4 flex flex-wrap md:flex-nowrap justify-between items-center"
                >
                  <div className="w-full md:w-1/3 mb-2 md:mb-0">
                    <h3 className="font-medium">{service.name}</h3>
                  </div>
                  
                  <div className="flex items-center gap-2 w-full md:w-auto mb-2 md:mb-0">
                    {getStatusIcon(service.status)}
                    <span className={`text-sm ${
                      service.status === "operational" ? "text-green-600 dark:text-green-400" :
                      service.status === "degraded" ? "text-amber-600 dark:text-amber-400" :
                      "text-red-600 dark:text-red-400"
                    }`}>
                      {getStatusText(service.status)}
                    </span>
                  </div>
                  
                  <div className="w-full md:w-auto">
                    <div className="flex flex-col md:flex-row md:gap-8">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500 dark:text-gray-400">Uptime:</span>
                        <span className="text-sm font-medium">{service.uptime}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500 dark:text-gray-400">Last Incident:</span>
                        <span className="text-sm">{service.lastIncident}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
            For detailed status information and incident history, visit our{" "}
            <a href="#" className="text-brand-purple hover:underline">status page</a>.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServerStatus;
