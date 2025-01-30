// src/lib/readComponentSource.tsx

export const readComponentSource = async (
  directory: string,
  componentName: string
) => {
  const files = import.meta.glob("/src/components/**/*.tsx", { as: "raw" });
  const filePath = `/src/components/${directory}/${componentName}.tsx`;
  const loader = files[filePath];

  if (!loader) {
    console.error("Component not found:", filePath);
    return null;
  }

  try {
    const source = await loader();
    return source;
  } catch (error) {
    console.error("Error loading component source:", error);
    return null;
  }
};
