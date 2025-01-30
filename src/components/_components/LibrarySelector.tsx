import { useState } from "react";

const LibrarySelector = () => {
      const [selectedLibrary, setSelectedLibrary] = useState("React.ts");
  return (
    <div>
                <div className="flex items-center gap-2 w-full justify-center md:justify-start">
            <label
              htmlFor="librarySelect"
              className="font-semibold text-gray-800 dark:text-gray-200"
            >
              Select Framework:
            </label>
            <select
              id="librarySelect"
              className="h-10 px-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900/70 text-gray-700 dark:text-gray-200 outline-none cursor-pointer transition focus:ring-2 focus:ring-blue-500 object-"
              onChange={(e) => setSelectedLibrary(e.target.value)}
              value={selectedLibrary}
            >
              <option value="React.js" className="dark:bg-gray-900">
                React.js
              </option>
              <option value="React.ts" className="dark:bg-gray-900">
                React.ts
              </option>
              <option value="Next.js" className="dark:bg-gray-900">
                Next.js
              </option>
              <option value="Next.ts" className="dark:bg-gray-900">
                Next.ts
              </option>
            </select>
          </div>
    </div>
  )
}

export default LibrarySelector
