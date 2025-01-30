import Code from "./Code";
import { Separator } from "@/components/ui/Separator";

const Guide = () => {
  const steps = [
    {
      number: 1,
      title: "Create a Next.js Project",
      description: `Create a fresh React / Next project by running the following command. This will set up the latest version of Next.js:`,
      code: "create-react-app@latest / create-next-app@latest",
    },
    {
      number: 2,
      title: "Add Shadcn to the Next.js Project",
      description: `After creating the React / Next project project, add Shadcn to your project by running this command in your terminal:`,
      code: "shadcn@latest",
    },
    {
      number: 3,
      title: "Choose and Integrate UI Components",
      description: `Browse the collection of components in this library and select the ones that best fit your project. Steps include:`,
      list: [
        "Navigate to the component of your choice.",
        "Copy the component's code.",
        "Paste it directly into your project.",
      ],
    },
  ];

  return (
    <div className="relative">
      {steps.map((step, index) => (
        <div key={index}>
          {/* Step Header */}
          <div className="flex items-center gap-4 justify-items-start">
            <div className="flex items-center gap-4 justify-items-start">
              <div className="flex items-center justify-center rounded-full font-orbit-max border dark:bg-zinc-900 py-4 bg-white text-base w-8 h-8">
                {step.number}
              </div>

              <h4 className="font-orbit-max text-xl underline underline-offset-4">
                {step.title}
              </h4>
            </div>
          </div>

          {/* Step Content */}
          <div className="ml-12 py-2">
            <p>{step.description}</p>
            {step.code && <Code type="npx">{step.code}</Code>}
            {step.list && (
              <ul className="list-disc ml-4">
                {step.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Separator */}
          {index < steps.length - 1 && (
            <Separator
              orientation="vertical"
              className="bg-zinc-950 border dark:bg-zinc-900 absolute top-8 -z-10 left-4  h-[30rem] lg:h-80"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Guide;
