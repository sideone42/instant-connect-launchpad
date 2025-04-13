
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      question: "What is InstantConnect?",
      answer: "InstantConnect is a modern, secure messaging platform that allows you to connect with anyone, anywhere with lightning-fast speed and end-to-end encryption. Our platform supports text messaging, file sharing, video calls, and group collaboration features."
    },
    {
      question: "How do I join the beta program?",
      answer: "You can join our beta program by filling out the signup form on this page. Once approved, you'll receive an invitation code via email with instructions on how to download and install the application on your preferred devices."
    },
    {
      question: "Is InstantConnect free to use?",
      answer: "During the beta phase, InstantConnect is completely free for all users. After official launch, we'll offer a freemium model with a generous free tier and premium features for power users and businesses. Beta testers will receive special pricing on premium plans."
    },
    {
      question: "What platforms are supported?",
      answer: "InstantConnect is available on iOS, Android, Windows, macOS, and as a web application. All platforms offer the same core functionality with platform-specific optimizations for the best user experience."
    },
    {
      question: "How secure is my data?",
      answer: "Security is our top priority. All messages and calls are protected with end-to-end encryption, meaning only you and the intended recipients can read them. We don't store message content on our servers after delivery, and all file transfers are encrypted."
    },
    {
      question: "Can I use InstantConnect for my business?",
      answer: "Absolutely! InstantConnect is designed for both personal and professional use. We offer enhanced features for businesses including admin controls, custom integrations, and advanced analytics. Contact us for more information about our business plans."
    },
    {
      question: "What makes InstantConnect different from other messaging apps?",
      answer: "InstantConnect combines the best aspects of consumer messaging apps with enterprise-grade security and reliability. Our focus on speed, privacy, and seamless cross-platform experience sets us apart. We're also community-driven, with regular updates based on user feedback."
    },
    {
      question: "How can I provide feedback or report issues?",
      answer: "Beta users can provide feedback directly through the in-app feedback tool or by contacting our support team via the contact form on this website. We actively encourage feedback and regularly implement user suggestions in our updates."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Find answers to common questions about InstantConnect and our beta program.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold py-4 text-lg hover:text-brand-purple transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300 pb-4 pt-1">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300">
            Still have questions? We're here to help.
          </p>
          <a href="#contact" className="text-brand-purple font-medium hover:underline mt-2 inline-block">
            Contact our support team →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
