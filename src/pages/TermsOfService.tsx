
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsOfService = () => {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">
              Terms of Service
            </h1>
            
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg">Last updated: April 13, 2025</p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">Agreement to Terms</h2>
              <p>
                By accessing or using InstantConnect, you agree to be bound by these Terms of Service and all applicable laws and regulations. 
                If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on InstantConnect's website 
                for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Modify or copy the materials;</li>
                <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li>Attempt to decompile or reverse engineer any software contained on InstantConnect;</li>
                <li>Remove any copyright or other proprietary notations from the materials; or</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">User Accounts</h2>
              <p>
                When you create an account with us, you must provide accurate, complete, and current information. 
                Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our service.
              </p>
              <p className="mt-2">
                You are responsible for safeguarding the password that you use to access the service and for any activities 
                or actions under your password. We encourage you to use "strong" passwords (passwords that use a combination of 
                upper and lower case letters, numbers, and symbols) with your account.
              </p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">Prohibited Uses</h2>
              <p>
                You may use InstantConnect only for lawful purposes and in accordance with these Terms of Service. 
                You agree not to use InstantConnect:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>In any way that violates any applicable national or international law or regulation.</li>
                <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
                <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation.</li>
                <li>To impersonate or attempt to impersonate InstantConnect, an InstantConnect employee, another user, or any other person or entity.</li>
                <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which may harm InstantConnect or users of the Service.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">Limitation of Liability</h2>
              <p>
                In no event shall InstantConnect or its suppliers be liable for any damages (including, without limitation, 
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability to 
                use the materials on InstantConnect's website, even if InstantConnect or an authorized representative has been 
                notified orally or in writing of the possibility of such damage.
              </p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> legal@instantconnect.com<br />
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

export default TermsOfService;
