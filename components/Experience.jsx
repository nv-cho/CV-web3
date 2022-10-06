const experience = [
  {
    company: "Valtech",
    site: "https://www.valtech.com/es-ar/",
    startDate: "Dic 2021",
    endDate: "Present",
    jobDescription:
      "In my current position I am working in a multidisciplinary team attending the needs of the clients, either developing new functionalities or solving problems that arise in the system.",
    jobStack:
      "My technology stack within my work includes Javascript, React with Redux and its Next.js framework, CSS and Styled Components.",
    jobTitle: "Frontend Development",
    icon: "./icons/valtech.jfif",
  },
  {
    company: "Hackear",
    site: "https://www.hackear.com.ar/",
    startDate: "Dic 2021",
    endDate: "Present",
    jobDescription:
      "Hackear is a project in which I am part of as a collaborator with a great multidisciplinary team, all together we work to develop a platform that provides the opportunity to learn and train in computer security through practice on controlled environments and secure virtual machines, accompanied by theoretical material made by the same team Hackear.",
    jobStack:
      "The technology stack used for the platform is Javascript, React with Redux, Firebase, CSS and TailwindCSS.",
    jobTitle: "Core Technical Member",
    icon: "./icons/hackear.jfif",
  },
];

const Experience = () => {
  return (
    <div>
      <h2 className="neon-title">Experience</h2>

      <div className="flex flex-col gap-5 justify-center mt-3">
        {experience.map((experience, index) => {
          return (
            <div className="flex flex-row" key={index}>
              <img
                className="w-14 h-14 object-cover mt-1.5 mr-2.5 rounded-xl"
                src={experience.icon}
                alt="Company logo"
              />

              <div>
                <a
                  href={experience.site}
                  target="_blank"
                  className="cursor-pointer neon-link"
                  rel="noreferrer"
                >
                  {experience.jobTitle} - {experience.company}
                </a>
                <p>
                  {experience.startDate} - {experience.endDate}
                </p>
                <p className="mt-2">{experience.jobDescription}</p>
                <p className="mt-2">{experience.jobStack}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
