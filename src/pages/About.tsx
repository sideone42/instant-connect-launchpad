
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">
              About <span className="gradient-text">InstantConnect</span>
            </h1>
            
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                InstantConnect was founded with a simple mission: to make digital communication faster, 
                more secure, and more intuitive than ever before. In an age where connection is everything, 
                we believe that the tools we use to connect should enhance our relationships, not complicate them.
              </p>
              
              <h2 className="text-2xl font-semibold mt-12 mb-4">Our Story</h2>
              <p>
                Born out of frustration with existing messaging solutions that prioritized monetization over 
                user experience, our team set out to build something different. We started InstantConnect 
                in 2023 with a focus on three core principles: speed, security, and simplicity.
              </p>
              
              <h2 className="text-2xl font-semibold mt-12 mb-4">Our Mission</h2>
              <p>
                We're on a mission to create the most responsive, secure, and intuitive communication 
                platform on the market. We believe in transparent development, putting users first, 
                and building technology that brings people together.
              </p>
              
              <h2 className="text-2xl font-semibold mt-12 mb-4">Our Values</h2>
              <ul className="space-y-4 mt-4">
                <li>
                  <strong>Privacy First:</strong> We believe your conversations belong to you and only you.
                </li>
                <li>
                  <strong>Community Driven:</strong> Our roadmap is shaped by our users' needs and feedback.
                </li>
                <li>
                  <strong>Transparent Development:</strong> We share our progress, challenges, and decisions openly.
                </li>
                <li>
                  <strong>Inclusive Design:</strong> Creating technology that's accessible to everyone.
                </li>
              </ul>
              
              <div className="mt-12 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Join Us on This Journey</h3>
                <p>
                  InstantConnect is more than just a messaging app—it's a community of people who believe 
                  in better digital communication. We're currently in beta, and we'd love for you to be part 
                  of shaping the future of our platform.
                </p>
                <div className="mt-4">
                  <a href="/#beta-signup" className="btn-primary inline-block">Join Our Beta</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
