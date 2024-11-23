import { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const FaqAccordion = () => {
  const [open, setOpen] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    { question: "FAQ1", answer: "Answer to FAQ1" },
    { question: "FAQ2", answer: "Answer to FAQ2" },
    { question: "FAQ3", answer: "Answer to FAQ3" },
    { question: "FAQ54", answer: "Answer to FAQ4" },
    { question: "FAQ5", answer: "Answer to FAQ5" },
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
