
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Community = () => {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">
              Community
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Our community platform is hosted on a separate Docker instance. We're working on integrating it seamlessly.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              The community hub will allow you to connect with other InstantConnect users, share tips and tricks, 
              suggest features, and participate in our product development process.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/" className="btn-primary">Return to Home Page</Link>
              <a href="https://github.com/instantconnect" className="btn-outline">Visit GitHub</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Community;
