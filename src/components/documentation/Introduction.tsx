import { RiDiscordFill, RiGithubFill, RiTwitterXFill } from "@remixicon/react";
import { Link } from "react-router-dom";

const Introduction = () => {
  const faqs = [
    {
      question: "How do I install and use UI-Topia?",
      answer:
        "Currently, UI-Topia provides components via a copy-paste method, which simplifies integration without dependency management. Simply copy the component code from the documentation, customize it as needed, and paste it into your project. Detailed setup instructions are available in our documentation.",
    },
    {
      question: "Does it support dark mode?",
      answer:
        "Yes, UI-Topia components are designed with both light and dark modes in mind. By leveraging Tailwind CSS’s dark mode utilities, you can seamlessly switch themes based on your project’s requirements.",
    },
    {
      question: "Is UI-Topia mobile-friendly?",
      answer:
        "Yes, all UI-Topia components are fully responsive and optimized for mobile devices. The designs ensure compatibility across a range of screen sizes, offering a consistent user experience.",
    },
    {
      question: "What makes UI-Topia unique compared to other UI libraries?",
      answer:
        "UI-Topia focuses on providing lightweight, customizable, and developer-friendly components. Unlike other libraries, it combines simplicity with the flexibility to adapt components entirely to your project’s style.",
    },
    {
      question: "Can I contribute to UI-Topia?",
      answer:
        "Yes! We welcome contributions from the community. Visit our GitHub repository for guidelines on how to submit issues, feature requests, or pull requests.",
    },
  ];
  return (
    <div className="container md:mx-auto p-4 md:w-4/5 md:text-justify ">
      <header className="mb-6">
        <h1 className="text-4xl font-bold mb-2">Introduction</h1>
      </header>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-3">What is UI-Topia?</h2>
        <p className="text-lg">
          UI-Topia is an extensive collection of beautiful, modern, and
          accessible UI components built on top of ShadCN and styled with
          Tailwind CSS. It provides developers with a free, open-source set of
          customizable components that can be easily integrated into web
          applications.
        </p>
        <p className="mt-4 text-lg">
          Designed to accelerate development, UI-Topia offers a range of
          copy-and-paste components that help developers quickly build
          responsive, user-friendly UIs. Whether you're building a simple
          project or a complex web application, UI-Topia gives you the tools to
          create beautiful and functional interfaces with ease.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-3">FAQs</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg">{faq.question}</h3>
              <p className="text-base">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-3">Community</h2>
        <p className="text-lg mb-4">
          We’re thrilled to see developers adopting UI-Topia! Whether it’s
          reporting issues, submitting feature requests, or showcasing projects,
          we encourage you to get involved!
        </p>
        <div className="flex space-x-4">
          <a
            href="https://twitter.com/ui-topia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-950"
          >
            <RiTwitterXFill />
          </a>
          <a
            href="https://discord.com/ui-topia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
          >
            <RiDiscordFill />
          </a>
          <a
            href="https://github.com/Chirag-varu/UItopia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-900"
          >
            <RiGithubFill />
          </a>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-3">Contributing</h2>
        <p className="text-lg">
          We welcome contributions! If you'd like to contribute to UI-Topia,
          check out our{" "}
          <span>
            <Link
              to="/docs/contribution"
              className="text-blue-500 hover:underline inline-flex items-center"
            >
              Contribution Guidelines
              <svg
                aria-hidden="true"
                fill="none"
                focusable="false"
                height="1em"
                shape-rendering="geometricPrecision"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                width="1em"
                className="mx-1"
              >
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                <path d="M15 3h6v6"></path>
                <path d="M10 14L21 3"></path>
              </svg>
            </Link>{" "}
            for information on how you can help improve the library.
          </span>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-3">Installation</h2>
        <p className="text-lg">
          To get started with UI-Topia, simply follow our{" "}
          <Link
            to="/docs/installation"
            className="text-blue-500 hover:underline  inline-flex items-center"
          >
            Installation Guide
            <svg
              aria-hidden="true"
              fill="none"
              focusable="false"
              height="1em"
              shape-rendering="geometricPrecision"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              width="1em"
              className="mx-1"
            >
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
              <path d="M15 3h6v6"></path>
              <path d="M10 14L21 3"></path>
            </svg>
          </Link>{" "}
          to integrate the components into your React project and start building
          beautiful UIs.
        </p>
      </section>
    </div>
  );
};

export default Introduction;
