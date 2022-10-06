const academic = [
  {
    degree: "Electronic Engineering",
    description:
      "I am in the first year of my university career, and throughout the road ahead my mission is to train as an engineer, to understand and create technology, to learn to understand reality from a scientific perspective, and to be able to apply all of this to develop solutions with a real impact on the world.",
    site: "https://utn.edu.ar/es/",
    institution: "Universidad Tecnologica de Buenos Aires",
    icon: "./icons/utn.jfif",
  },
  {
    degree: "Fundamentals of Hacking and Defense",
    description:
      "During my training, I developed my knowledge in computer security from the most elementary basics to real scenarios and cases, learning consisted of both theoretical and practical content in all areas of technology, from cloud computing to critical infrastructures.",
    site: "https://hackademy.ekoparty.org/",
    institution: "Ekoparty Hackademy",
    icon: "./icons/hackademy.jfif",
  },
  {
    degree: "Ecosistema Crypto & DeFi 101",
    description:
      "My training in this course consisted of developing knowledge in the crypto and defi ecosystem, we started from the beginning understanding the basics, to current technologies such as Ethereum, Smart Contracts, L2 networks, Bitcoin together with Lighting Network, and we also learned to understand how the main decentralized finance platforms work and their use.",
    site: "https://campus.defyeducation.com/courses/crypto-defi",
    institution: "Defy Education",
    icon: "./icons/defy.jfif",
  },
  {
    degree: "Ethereum Developer Program",
    description:
      "I was one of the 200 selected to be part of the program oriented to Web3 and Solidity development. Every week we have to take two courses that cover different topics, and we also have classes every week with professional experts in the area. And as a practical complement, we have challenges where we have to develop Smart Contracts and dApps.",
    site: "https://platzi.com/eth",
    institution: "Platzi & Ethereum Foundation",
    icon: "./icons/platzi.jfif",
  },
];

const Academic = () => {
  return (
    <div>
      <h2 className="text-3xl neon-title">Academic</h2>

      <div className="flex flex-col gap-5 mt-2">
        {academic.map((degree, index) => {
          return (
            <div className="flex flex-row p-1" key={index}>
              <img
                className="w-14 h-14 object-cover mt-1.5 mr-2.5 rounded-xl"
                src={degree.icon}
                alt="Institution logo"
              />
              <div>
                <a
                  href={degree.site}
                  target="_blank"
                  className="text-xl cursor-pointer neon-link"
                  rel="noreferrer"
                >
                  {degree.degree} - {degree.institution}
                </a>
                <p>{degree.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Academic;
