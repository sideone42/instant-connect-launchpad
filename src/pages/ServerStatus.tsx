
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ServerStatus = () => {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">
              Server Status
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              This page will be hosted on a separate Docker instance.
            </p>
            <Link to="/" className="btn-primary">Return to Home Page</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ServerStatus;
