const GitHub = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Project Stats */}
      {/* <div className="bg-white dark:bg-gray-800/50 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Project Stats
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-800 dark:text-white">
              Stars
            </p>
            <p className="text-xl text-blue-600">2,345</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-800 dark:text-white">
              Forks
            </p>
            <p className="text-xl text-blue-600">512</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-800 dark:text-white">
              Contributors
            </p>
            <p className="text-xl text-blue-600">45</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-800 dark:text-white">
              Open Issues
            </p>
            <p className="text-xl text-blue-600">10</p>
          </div>
        </div>
      </div> */}

      {/* Showcase Projects */}
      <div className="bg-white dark:bg-gray-800/50 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Showcase Projects
        </h2>
        <ul className="mt-4 space-y-6">
          <li>
            <a
              href="#"
              className="text-lg text-blue-600 hover:underline dark:text-blue-400"
            >
              Project 1: UI-Topia Dashboard
            </a>
            <p className="text-gray-600 dark:text-gray-300">
              A dynamic dashboard built with UI-Topia components.
            </p>
          </li>
          <li>
            <a
              href="#"
              className="text-lg text-blue-600 hover:underline dark:text-blue-400"
            >
              Project 2: UI-Topia E-commerce
            </a>
            <p className="text-gray-600 dark:text-gray-300">
              An e-commerce platform utilizing UI-Topia's modern UI components.
            </p>
          </li>
        </ul>
      </div>

      {/* Badges */}
      <div className="bg-white dark:bg-gray-800/50 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Project Badges
        </h2>
        <div className="flex flex-wrap gap-4 mt-4">
          <img
            src="https://img.shields.io/badge/build-passing-brightgreen"
            alt="Build Status"
          />
          <img
            src="https://img.shields.io/badge/coverage-95%25-brightgreen"
            alt="Code Coverage"
          />
          <img
            src="https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen"
            alt="Dependencies Status"
          />
        </div>
      </div>

      {/* Community Discussions */}
      <div className="bg-white dark:bg-gray-800/50 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Community Discussions
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Join our{" "}
          <a
            href="https://github.com/your-username/UI-Topia/discussions"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            GitHub Discussions
          </a>{" "}
          to ask questions, share ideas, or give feedback.
        </p>
      </div>

      {/* Support & Resources */}
      <div className="bg-white dark:bg-gray-800/50 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Support & Resources
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Need help? Visit our{" "}
          <a
            href="/docs"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Documentation
          </a>{" "}
          or check out our{" "}
          <a
            href="/contact"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            FAQ
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default GitHub;
