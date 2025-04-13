
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      name: "Jamie Smith",
      role: "Product Manager at TechCorp",
      image: "https://randomuser.me/api/portraits/women/17.jpg",
      quote: "InstantConnect has completely transformed how our team communicates. The speed and reliability are unmatched, and the intuitive interface has made adoption seamless.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Freelance Designer",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      quote: "As someone who works with clients globally, having a secure and reliable messaging platform is essential. InstantConnect delivers on all fronts, and the file sharing capabilities are excellent.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Community Leader",
      image: "https://randomuser.me/api/portraits/women/90.jpg",
      quote: "Managing our community of 500+ members has never been easier. The group features and permission controls are exactly what we needed.",
      rating: 4
    },
    {
      name: "David Wilson",
      role: "Software Engineer",
      image: "https://randomuser.me/api/portraits/men/33.jpg",
      quote: "The API is well-documented and powerful. I was able to build custom integrations for our team in just a few hours. Impressive work!",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-muted to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-purple opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-blue opacity-5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by Our <span className="gradient-text">Community</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Don't take our word for it. Here's what our beta users have to say about InstantConnect.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Slider */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((item, index) => (
                <div key={index} className="min-w-full p-4">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="md:w-1/4 flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mx-auto border-4 border-brand-purple/20"
                        />
                      </div>
                      
                      <div className="md:w-3/4">
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={18} 
                              className={i < item.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                            />
                          ))}
                        </div>
                        
                        <blockquote>
                          <p className="text-lg mb-4 italic">"{item.quote}"</p>
                        </blockquote>
                        
                        <div>
                          <h4 className="font-bold text-lg">{item.name}</h4>
                          <p className="text-gray-600 dark:text-gray-400">{item.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={prevSlide} 
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 md:translate-x-0 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide} 
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 md:translate-x-0 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? "bg-brand-purple" : "bg-gray-300 dark:bg-gray-600"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a 
            href="#beta-signup"
            className="btn-primary inline-flex items-center gap-2"
          >
            Join Our Community <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
