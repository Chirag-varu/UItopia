import React, { useState, useEffect, Suspense } from "react";
import CopyButton from "@/components/_components/CopyButton";
import { readComponentSource } from "@/lib/readComponentSource";
import { cn } from "@/lib/utils";

// Using React.lazy for dynamic imports
const ComponentPage = ({
  directory,
  componentName,
  className,
}: {
  directory: string;
  componentName: string;
  className?: string;
}) => {
  const [source, setSource] = useState<string | null>(null);

  useEffect(() => {
    const fetchSource = async () => {
      const componentSource = await readComponentSource(directory, componentName);
      setSource(componentSource); // Set the resolved source
    };

    fetchSource();
  }, [directory, componentName]); // Re-run when directory or componentName changes

  const LazyComponent = React.lazy(() =>
    import(/* @vite-ignore */ `@/components/${directory}/${componentName}`).then((module) => ({
      default: module.default,
    }))
  );  

  return (
    <div className={cn("group/item relative", className)}>
      {/* Suspense fallback for lazy-loaded components */}
      <Suspense fallback={<div>Loading component...</div>}>
        <LazyComponent />
      </Suspense>
      {/* Ensure source is available before passing it to CopyButton */}
      {source && <CopyButton componentSource={source} />}
    </div>
  );
};

export default ComponentPage;
