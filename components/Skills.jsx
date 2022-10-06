const skills = [
  {
    name: "HTML5",
    img: "./skill-icons/html.svg",
  },
  {
    name: "CSS",
    img: "./skill-icons/css.svg",
  },
  {
    name: "Tailwind CSS",
    img: "./skill-icons/tailwindcss.png",
  },
  {
    name: "SaSS",
    img: "./skill-icons/SaSS.svg",
  },
  {
    name: "JavaScript",
    img: "./skill-icons/javascript.svg",
  },
  {
    name: "React",
    img: "./skill-icons/react.svg",
  },
  {
    name: "Next.js",
    img: "./skill-icons/next-js.svg",
  },
  {
    name: "ether.js",
    img: "./skill-icons/etherjs.png",
  },
  {
    name: "C",
    img: "./skill-icons/C.svg",
  },
  {
    name: "Cybersecurity",
    img: "./skill-icons/cibersecurity.svg",
  },
  {
    name: "Solidity",
    img: "./skill-icons/ethereum.svg",
  },
  {
    name: "Alchemy",
    img: "./skill-icons/alchemy.png",
  },
  {
    name: "Firebase",
    img: "./skill-icons/firebase.svg",
  },
  {
    name: "Git",
    img: "./skill-icons/git.svg",
  },
];

const Skills = () => {
  return (
    <div>
      <h2 className="neon-title Skills-title">Skills</h2>

      <div className="flex flex-row flex-wrap gap-2 mt-1 justify-center items-center">
        {skills.map((skill, index) => {
          return (
            <div
              className="flex flex-row rounded-xl items-center justify-center mt-2 p-1 py-2 glass-card min-w-[160px]"
              key={index}
            >
              <img className="w-9 h-9" src={skill.img} />
              <p className="ml-2">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
