
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Introducing InstantConnect: The Next Generation of Messaging",
      excerpt: "We're excited to announce the beta launch of InstantConnect, designed to revolutionize how we communicate online.",
      author: "Sarah Johnson",
      date: "April 10, 2025",
      category: "Announcements",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 2,
      title: "Security First: How We're Building End-to-End Encryption",
      excerpt: "Privacy is a fundamental right. Learn how we're implementing industry-leading encryption to keep your conversations secure.",
      author: "Michael Chen",
      date: "April 5, 2025",
      category: "Security",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 3,
      title: "The Technology Behind InstantConnect's Speed",
      excerpt: "Discover the innovative tech stack powering our platform and how we achieve sub-100ms message delivery worldwide.",
      author: "David Wilson",
      date: "March 28, 2025",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1034&q=80"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">
              Latest <span className="gradient-text">Updates</span> & Insights
            </h1>
            
            <div className="space-y-12">
              {blogPosts.map(post => (
                <div key={post.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="h-48 md:h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <div className="flex items-center mb-2">
                        <span className="text-sm font-medium text-brand-purple bg-brand-purple/10 rounded-full px-3 py-1">
                          {post.category}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 ml-4">
                          {post.date}
                        </span>
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold mb-2">{post.title}</h2>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          By {post.author}
                        </span>
                        <a href={`/blog/${post.id}`} className="text-brand-purple hover:underline font-medium">
                          Read More →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <p>Stay tuned for more updates as we continue developing InstantConnect.</p>
              <a href="/#beta-signup" className="btn-primary inline-block mt-4">Join Our Beta</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
