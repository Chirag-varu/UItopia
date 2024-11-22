import { useState } from "react";
import { MdExpandMore } from "react-icons/md"; // Add react-icons

const FaqAccordion = () => {
  const [open, setOpen] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {[
        { question: "FAQ 1", answer: "Answer to FAQ 1" },
        { question: "FAQ 2", answer: "Answer to FAQ 2" },
        { question: "FAQ 3", answer: "Answer to FAQ 3" },
        { question: "FAQ 4", answer: "Answer to FAQ 4" },
        { question: "FAQ 5", answer: "Answer to FAQ 5" },
      ].map((faq, index) => (
        <div key={index} className="border-b">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full text-left p-4 bg-gray-100 dark:bg-gray-800/50 text-lg font-medium flex items-center justify-between rounded"
          >
            <span>{faq.question}</span>
            <span
              className={`transition-transform duration-300 transform ${
                open === index ? "rotate-180" : "rotate-360"
              }`}
            >
              <MdExpandMore />
            </span>
          </button>
          {open === index && (
            <div className="p-4 bg-gray-50 dark:bg-gray-800">
              <p>{faq.answer}.</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
