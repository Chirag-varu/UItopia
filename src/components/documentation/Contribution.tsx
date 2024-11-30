const Contribution = () => {
  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Contribution Guide</h1>

      {/* Installation Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <p className="mb-4">
          To get started with <span className="font-semibold text-blue-600">UI-Topia</span>, follow these steps:
        </p>
        <ol className="list-decimal list-inside space-y-2 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
          <li>
            Clone the repository to your local machine:
            <pre className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg mt-2 text-sm">
              git clone https://github.com/Chirag-varu/UITopia.git
            </pre>
          </li>
          <li>
            Navigate to the project folder:
            <pre className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg mt-2 text-sm">
              cd UITopia
            </pre>
          </li>
          <li>
            Install all the necessary dependencies using npm or yarn:
            <pre className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg mt-2 text-sm">
              npm install <br /># OR<br />yarn install
            </pre>
          </li>
          <li>
            Start the development server to view the project locally:
            <pre className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg mt-2 text-sm">
              npm run dev <br /># OR<br />yarn dev
            </pre>
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
        <h2 className="text-2xl font-semibold mb-4">Contributing</h2>
        <p className="mb-4">
          We welcome contributions! To contribute to the project, follow these steps:
        </p>
        <ol className="list-decimal list-inside space-y-2 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
          <li>
            Fork the repository by clicking on the{" "}
            <span className="font-semibold text-blue-600">Fork</span> button at
            the top-right of the repository page.
          </li>
          <li>
            Clone your forked repository to your local machine:
            <pre className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg mt-2 text-sm">
              git clone https://github.com/Chirag-varu/UITopia.git
            </pre>
          </li>
          <li>
            Create a new branch to work on your changes:
            <pre className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg mt-2 text-sm">
              git checkout -b my-new-feature
            </pre>
          </li>
          <li>Make the necessary changes or additions to the project.</li>
          <li>
            Stage your modified files:
            <pre className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg mt-2 text-sm">
              git add .
            </pre>
          </li>
          <li>
            Commit the changes with a descriptive message:
            <pre className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg mt-2 text-sm">
              git commit -m "Add new feature or fix"
            </pre>
          </li>
          <li>
            Push your changes to your forked repository:
            <pre className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg mt-2 text-sm">
              git push origin my-new-feature
            </pre>
          </li>
          <li>
            Go to the original repository on GitHub and create a pull request
            from your fork.
          </li>
        </ol>
      </section>

      {/* License Section */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">License</h2>
        <p className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
          This project is licensed under the{" "}
          <span className="font-semibold text-blue-600">MIT License</span> - see
          the LICENSE file for details.
        </p>
      </section>
    </div>
  );
};

export default Contribution;
