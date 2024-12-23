import { useState } from "react";
import { MdContentCopy } from "react-icons/md";

const Contribution = () => {
  const [_, setCopiedText] = useState("");

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(""), 2000); // Reset after 2 seconds
  };

  return (
    <div className="p-4 sm:p-6 lg:p-10 bg-gray-50 dark:bg-black text-gray-800 dark:text-gray-100 min-h-screen">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-center">
        Contribution Guide
      </h1>

      {/* Installation Section */}
      <section className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
          Installation
        </h2>
        <p className="mb-3 sm:mb-4 text-sm sm:text-base">
          To get started with{" "}
          <span className="font-semibold text-blue-600 cursor-pointer">
            <a href="/">UI-Topia</a>
          </span>
          , follow these steps:
        </p>
        <ol className="list-decimal list-inside space-y-2 bg-white dark:bg-[#18181b] p-3 sm:p-4 rounded-lg shadow-lg">
          <li>
            Clone the repository to your local machine:
            <div className="relative group">
              <pre className="bg-gray-200  dark:bg-[#000000] p-2 rounded-lg mt-2 text-xs sm:text-sm">
                git clone https://github.com/Chirag-varu/UITopia.git
              </pre>
              <button
                onClick={() =>
                  handleCopy(
                    "git clone https://github.com/Chirag-varu/UITopia.git"
                  )
                }
                className="absolute top-1 right-1 md:opacity-0 opacity-100 group-hover:opacity-100 bg-blue-500 text-white px-2 py-1 rounded-md text-xs sm:text-sm"
              >
                <MdContentCopy />
              </button>
            </div>
          </li>
          <li>
            Navigate to the project folder:
            <div className="relative group">
              <pre className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg mt-2 text-xs sm:text-sm">
                cd UITopia
              </pre>
              <button
                onClick={() => handleCopy("cd UITopia")}
                className="absolute top-1 right-1 md:opacity-0 opacity-100 group-hover:opacity-100 bg-blue-500 text-white px-2 py-1 rounded-md text-xs sm:text-sm"
              >
                <MdContentCopy />
              </button>
            </div>
          </li>
          <li>
            Install all the necessary dependencies using npm or yarn:
            <div className="relative group">
              <pre className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg mt-2 text-xs sm:text-sm">
                npm install <br /># OR<br />yarn install
              </pre>
              <button
                onClick={() => handleCopy("npm install")}
                className="absolute top-1 right-1 md:opacity-0 opacity-100 group-hover:opacity-100 bg-blue-500 text-white px-2 py-1 rounded-md text-xs sm:text-sm"
              >
                <MdContentCopy />
              </button>
            </div>
          </li>
          <li>
            Start the development server to view the project locally:
            <div className="relative group">
              <pre className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg mt-2 text-xs sm:text-sm">
                npm run dev <br /># OR<br />yarn dev
              </pre>
              <button
                onClick={() => handleCopy("npm run dev")}
                className="absolute top-1 right-1 md:opacity-0 opacity-100 group-hover:opacity-100 bg-blue-500 text-white px-2 py-1 rounded-md text-xs sm:text-sm"
              >
                <MdContentCopy />
              </button>
            </div>
            <p className="mt-2">
              This will start a local server, and you can view the project at{" "}
              <a
                href="http://localhost:5173"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                http://localhost:5173
              </a>
              .
            </p>
          </li>
        </ol>
      </section>

      {/* Contributing Section */}
      <section>
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
          Contributing
        </h2>
        <p className="mb-3 sm:mb-4 text-sm sm:text-base">
          We welcome contributions! To contribute to the project, follow these
          steps:
        </p>
        <ol className="list-decimal list-inside space-y-2 bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-lg">
          <li>
            Fork the repository by clicking on the{" "}
            <span className="font-semibold text-blue-600 cursor-pointer">
              Fork
            </span>{" "}
            button at the top-right of the repository page.
          </li>
          <li>
            Clone your forked repository to your local machine:
            <div className="relative group">
              <pre className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg mt-2 text-xs sm:text-sm">
                git clone https://github.com/Chirag-varu/UITopia.git
              </pre>
              <button
                onClick={() =>
                  handleCopy(
                    "git clone https://github.com/Chirag-varu/UITopia.git"
                  )
                }
                className="absolute top-1 right-1 md:opacity-0 opacity-100 group-hover:opacity-100 bg-blue-500 text-white px-2 py-1 rounded-md text-xs sm:text-sm"
              >
                <MdContentCopy />
              </button>
            </div>
          </li>
          <li>
            Create a new branch to work on your changes:
            <div className="relative group">
              <pre className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg mt-2 text-xs sm:text-sm">
                git checkout -b my-new-feature
              </pre>
              <button
                onClick={() => handleCopy("git checkout -b my-new-feature")}
                className="absolute top-1 right-1 md:opacity-0 opacity-100 group-hover:opacity-100 bg-blue-500 text-white px-2 py-1 rounded-md text-xs sm:text-sm"
              >
                <MdContentCopy />
              </button>
            </div>
          </li>
          <li>Make the necessary changes or additions to the project.</li>
          <li>
            Stage your modified files:
            <div className="relative group">
              <pre className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg mt-2 text-xs sm:text-sm">
                git add .
              </pre>
              <button
                onClick={() => handleCopy("git add .")}
                className="absolute top-1 right-1 md:opacity-0 opacity-100 group-hover:opacity-100 bg-blue-500 text-white px-2 py-1 rounded-md text-xs sm:text-sm"
              >
                <MdContentCopy />
              </button>
            </div>
          </li>
          <li>
            Commit the changes with a descriptive message:
            <div className="relative group">
              <pre className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg mt-2 text-xs sm:text-sm">
                git commit -m "Add new feature or fix"
              </pre>
              <button
                onClick={() =>
                  handleCopy('git commit -m "Add new feature or fix"')
                }
                className="absolute top-1 right-1 md:opacity-0 opacity-100 group-hover:opacity-100 bg-blue-500 text-white px-2 py-1 rounded-md text-xs sm:text-sm"
              >
                <MdContentCopy />
              </button>
            </div>
          </li>
          <li>
            Push your changes to your forked repository:
            <div className="relative group">
              <pre className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg mt-2 text-xs sm:text-sm">
                git push origin my-new-feature
              </pre>
              <button
                onClick={() => handleCopy("git push origin my-new-feature")}
                className="absolute top-1 right-1 md:opacity-0 opacity-100 group-hover:opacity-100 bg-blue-500 text-white px-2 py-1 rounded-md text-xs sm:text-sm"
              >
                <MdContentCopy />
              </button>
            </div>
          </li>
          <li>
            Go to the original repository on GitHub and create a pull request
            from your fork.
          </li>
        </ol>
      </section>

      {/* License Section */}
      <section className="mt-6 sm:mt-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
          License
        </h2>
        <p className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-lg text-sm sm:text-base">
          This project is licensed under the{" "}
          <span className="font-semibold text-blue-600 cursor-pointer">
            MIT License
          </span>{" "}
          - see the LICENSE file for details.
        </p>
      </section>
    </div>
  );
};

export default Contribution;
