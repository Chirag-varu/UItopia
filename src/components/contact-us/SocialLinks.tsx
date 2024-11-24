import { RiLinkedinFill, RiGithubFill, RiMailFill } from "@remixicon/react";

const members = [
  {
    name: "Chirag Varu",
    linkedin: "https://www.linkedin.com/in/chiragvaru03/",
    github: "https://github.com/Chirag-varu",
    email: "mailto:chiragvaru03@gmail.com",
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
    email: "mailto:monilparikh11@gmail.com",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-16 p-3">
      <div className="lg:w-1/2 w-full text-left space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
          Connect with Us
        </h2>
        <p className="text-lg text-black dark:text-white">
          Stay connected with us on social media or reach out directly to our
          team members.
        </p>
      </div>
      <div className="lg:w-1/2 w-full flex flex-col md:flex-row md:flex-wrap items-center lg:items-start justify-center lg:justify-end gap-8 ">
        {members.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <p className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
              {member.name}
            </p>
            <div className="flex space-x-4">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${member.name}'s LinkedIn profile`}
                className="text-2xl text-blue-500 hover:text-blue-700 transform hover:-translate-y-1 transition-all duration-300"
              >
                <RiLinkedinFill />
              </a>
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${member.name}'s GitHub profile`}
                className="text-2xl text-gray-800 dark:text-white hover:text-black dark:hover:text-slate-300 transform hover:-translate-y-1 transition-all duration-300"
              >
                <RiGithubFill />
              </a>
              <a
                href={member.email}
                aria-label={`Send an email to ${member.name}`}
                className="text-2xl text-red-500 hover:text-red-700 transform hover:-translate-y-1 transition-all duration-300"
              >
                <RiMailFill />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
