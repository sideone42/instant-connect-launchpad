
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Monitor, Smartphone, Tablet } from "lucide-react";

const WebApp = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Web Application</h1>
          <p className="text-xl text-muted-foreground">
            Access InstantConnect directly from your browser with all the power of the desktop app.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700">
            Launch Web App <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">All Your Messages in One Place</h2>
            <p className="text-lg mb-6 text-muted-foreground">
              Our web application gives you the same seamless messaging experience as our desktop and mobile apps, right in your browser.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span>No downloads or installations required</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span>Real-time synchronization with all your devices</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span>End-to-end encryption for secure messaging</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span>Full access to all integrated messaging platforms</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="aspect-video bg-gradient-to-br from-blue-500 to-indigo-600 rounded-md flex items-center justify-center text-white">
              <Monitor className="h-24 w-24" />
            </div>
          </div>
        </div>

        <Separator className="my-16" />

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Cross-Platform Experience</h2>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            InstantConnect works seamlessly across all your devices. Start a conversation on your phone and continue it on the web.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <Monitor className="h-16 w-16 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Desktop</h3>
            <p className="text-muted-foreground">
              Download our native app for Windows, macOS, or Linux for the full experience.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <Smartphone className="h-16 w-16 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Mobile</h3>
            <p className="text-muted-foreground">
              Take InstantConnect with you on iOS and Android devices.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 p-6 rounded-lg text-center border-2 border-blue-500">
            <div className="flex justify-center mb-4">
              <Tablet className="h-16 w-16 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Web App</h3>
            <p className="text-muted-foreground">
              Access all features directly from your browser, no installation needed.
            </p>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Ready to try InstantConnect?</h2>
          <p className="text-muted-foreground mb-8">
            Our web application gives you instant access to all your messages in one place.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700">
              Launch Web App <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default WebApp;
