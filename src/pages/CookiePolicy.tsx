
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CookiePolicy = () => {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">
              Cookie Policy
            </h1>
            
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg">Last updated: April 13, 2025</p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">What Are Cookies</h2>
              <p>
                Cookies are small pieces of text sent to your web browser by a website you visit. 
                A cookie file is stored in your web browser and allows the Service or a third-party 
                to recognize you and make your next visit easier and the Service more useful to you.
              </p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">How InstantConnect Uses Cookies</h2>
              <p>
                When you use and access our service, we may place a number of cookie files in your web browser.
                We use cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  <strong>Authentication:</strong> We use cookies to identify you when you visit our website and as you navigate our website.
                </li>
                <li>
                  <strong>Status:</strong> We use cookies to help us determine if you are logged into our website.
                </li>
                <li>
                  <strong>Personalization:</strong> We use cookies to store information about your preferences and to personalize the website for you.
                </li>
                <li>
                  <strong>Security:</strong> We use cookies as an element of the security measures used to protect user accounts, including preventing fraudulent use of login credentials.
                </li>
                <li>
                  <strong>Analysis:</strong> We use cookies to help us analyze the use and performance of our website and services.
                </li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">Types of Cookies We Use</h2>
              <p>
                We use both session and persistent cookies on the Service and we use different types of cookies to run the Service:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  <strong>Essential cookies:</strong> These are cookies that are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website.
                </li>
                <li>
                  <strong>Analytical/performance cookies:</strong> These allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.
                </li>
                <li>
                  <strong>Functionality cookies:</strong> These are used to recognize you when you return to our website. This enables us to personalize our content for you, greet you by name and remember your preferences (for example, your choice of language or region).
                </li>
                <li>
                  <strong>Targeting cookies:</strong> These cookies record your visit to our website, the pages you have visited and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests.
                </li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">How to Manage Cookies</h2>
              <p>
                Most browsers allow you to refuse to accept cookies and to delete cookies. The methods for doing so vary from browser to browser, and from version to version.
              </p>
              <p className="mt-2">
                You can block cookies by activating the setting on your browser that allows you to refuse the setting of all or some cookies. However, if you use your browser settings to block all cookies (including essential cookies) you may not be able to access all or parts of our site.
              </p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">Contact Us</h2>
              <p>
                If you have any questions about our use of cookies, please contact us at:
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

export default CookiePolicy;
