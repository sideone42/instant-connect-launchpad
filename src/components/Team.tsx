
import { Github, Linkedin, Twitter } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Former engineering lead at MessengerX with 10+ years in communication platforms.",
      links: [
        { icon: <Twitter size={18} />, url: "#" },
        { icon: <Linkedin size={18} />, url: "#" },
        { icon: <Github size={18} />, url: "#" }
      ]
    },
    {
      name: "Sophia Chen",
      role: "CTO",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "AI and encryption specialist with a background in cybersecurity.",
      links: [
        { icon: <Twitter size={18} />, url: "#" },
        { icon: <Linkedin size={18} />, url: "#" },
        { icon: <Github size={18} />, url: "#" }
      ]
    },
    {
      name: "Marcus Williams",
      role: "Head of Product",
      image: "https://randomuser.me/api/portraits/men/86.jpg",
      bio: "Passionate about creating intuitive user experiences that solve real problems.",
      links: [
        { icon: <Twitter size={18} />, url: "#" },
        { icon: <Linkedin size={18} />, url: "#" },
        { icon: <Github size={18} />, url: "#" }
      ]
    },
    {
      name: "Elena Rodriguez",
      role: "Lead Designer",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      bio: "Award-winning UI/UX designer focused on creating beautiful, functional interfaces.",
      links: [
        { icon: <Twitter size={18} />, url: "#" },
        { icon: <Linkedin size={18} />, url: "#" },
        { icon: <Github size={18} />, url: "#" }
      ]
    }
  ];

  return (
    <section id="team" className="py-24 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet the <span className="gradient-text">Team</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We're a passionate group of creators, engineers, and designers building the future of communication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 mb-4 overflow-hidden rounded-full border-4 border-brand-purple/20">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-brand-purple font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {member.bio}
                </p>
                
                <div className="flex gap-3 mt-auto">
                  {member.links.map((link, idx) => (
                    <a 
                      key={idx} 
                      href={link.url} 
                      className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-brand-purple hover:text-white transition-colors"
                      aria-label={`${member.name}'s profile`}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <h3 className="text-xl font-semibold mb-2">Join Our Team</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We're always looking for talented individuals to join our mission.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-brand-purple hover:text-brand-blue transition-colors font-medium"
          >
            View Open Positions <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
