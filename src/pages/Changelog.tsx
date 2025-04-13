
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Changelog = () => {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">
              Changelog
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Our detailed changelog is hosted on a separate Docker instance. We're working on integrating it seamlessly.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              The changelog documents all updates, improvements, and bug fixes to InstantConnect, 
              providing complete transparency about our development process.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/" className="btn-primary">Return to Home Page</Link>
              <a href="https://github.com/instantconnect/releases" className="btn-outline">View on GitHub</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Changelog;
