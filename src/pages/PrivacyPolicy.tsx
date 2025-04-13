
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">
              Privacy Policy
            </h1>
            
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg">Last updated: April 13, 2025</p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">Introduction</h2>
              <p>
                At InstantConnect, we take your privacy seriously. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you use our messaging platform. 
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
                please do not access the application.
              </p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">Information We Collect</h2>
              <p>
                We collect information that you provide directly to us when you register for an account, 
                create or modify your profile, set preferences, or make purchases through the platform.
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Account Information:</strong> When you create an account, we collect your name, email address, and password.</li>
                <li><strong>Profile Information:</strong> This includes your profile picture, status, and any other information you choose to add to your profile.</li>
                <li><strong>Communications:</strong> We store your messages to deliver them to their intended recipients. Message content is encrypted end-to-end.</li>
                <li><strong>Usage Data:</strong> We collect information about how you access and use our services, including your IP address, device information, and operating system.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send administrative messages, updates, security alerts, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Improve our platform and develop new products and services</li>
                <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect the security of your 
                personal information. However, please also remember that no method of transmission over the 
                Internet or method of electronic storage is 100% secure.
              </p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, such as:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>The right to access and receive a copy of your personal information</li>
                <li>The right to rectify or update your personal information</li>
                <li>The right to delete your personal information</li>
                <li>The right to restrict processing of your personal information</li>
                <li>The right to data portability</li>
                <li>The right to object to processing</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> privacy@instantconnect.com<br />
                <strong>Address:</strong> 123 Main Street, Suite 100, San Francisco, CA 94105
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
