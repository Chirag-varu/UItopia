import { RiLinkedinFill, RiGithubFill, RiMailFill } from "@remixicon/react";

const members = [
  {
    name: "Chirag Varu",
    linkedin: "https://www.linkedin.com/in/chirag-varu",
    github: "https://github.com/in/Chirag-varu",
    email: "mailto:chirag@gmail.com",
  },
  {
    name: "Aditya Pai",
    linkedin: "https://www.linkedin.com/in/adityapai05",
    github: "https://github.com/adityapai05",
    email: "mailto:adityapai.main@gmail.com",
  },
  {
    name: "Monil Parekh",
    linkedin: "https://www.linkedin.com/in/monil-parekh",
    github: "https://github.com/monil-parekh",
    email: "mailto:monil@example.com",
  },
];

const SocialLinks = () => {
  return (
    <div className=" flex justify-center items-center gap-16">
      {members.map((member, index) => (
        <div key={index} className="flex flex-col items-center justify-center">
          <p className="mt-1 text-base md:text-lg font-semibold mb-2">
            {member.name}
          </p>
          <div className="flex space-x-4">
            <a
              href={member.linkedin}
              target="_blank"
              className="text-2xl text-blue-500 hover:text-blue-700"
            >
              <RiLinkedinFill />
            </a>
            <a
              href={member.github}
              target="_blank"
              className="text-2xl text-gray-800 dark:text-white hover:text-black dark:hover:text-slate-300"
            >
              <RiGithubFill />
            </a>
            <a
              href={member.email}
              target="_blank"
              className="text-2xl text-red-500 hover:text-red-700"
            >
              <RiMailFill />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;
