import { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const FaqAccordion = () => {
  const [open, setOpen] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    { question: "How do I install and use UI-Topia?", answer: "Currently, UI-Topia provides components via a copy-paste method, which simplifies integration without dependency management. Simply copy the component code from the documentation, customize it as needed, and paste it into your project. Detailed setup instructions are available in our documentation." },
    { question: "Does it support dark mode?", answer: "Yes, UI-Topia components are designed with both light and dark modes in mind. By leveraging Tailwind CSS’s dark mode utilities, you can seamlessly switch themes based on your project’s requirements." },
    { question: "Is UI-Topia's Components mobile-friendly?", answer: "Yes, all UI-Topia components are fully responsive and optimized for mobile devices. The designs ensure compatibility across a range of screen sizes, offering a consistent user experience." },
    { question: "What makes UI-Topia unique compared to other UI libraries?", answer: "UI-Topia focuses on providing lightweight, customizable, and developer-friendly components. Unlike other libraries, it combines simplicity with the flexibility to adapt components entirely to your project’s style." },
    { question: "Can I contribute to UI-Topia?", answer: "Yes! We welcome contributions from the community. Visit our GitHub repository for guidelines on how to submit issues, feature requests, or pull requests." },
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b">
          {/* Accordion Header */}
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full text-left p-4 bg-gray-100 dark:bg-gray-800/50 text-lg font-medium flex items-center justify-between rounded"
          >
            <span>{faq.question}</span>
            <span
              className={`transition-transform duration-300 transform ${
                open === index ? "rotate-180" : "rotate-0"
              }`}
            >
              <MdExpandMore />
            </span>
          </button>

          <AnimatePresence initial={false}>
            {open === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="p-4 bg-gray-50 dark:bg-gray-800">
                  <p>{faq.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
