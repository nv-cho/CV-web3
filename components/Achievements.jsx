const achievements = [
  {
    icon: "./achievements/ef.png",
    site: "https://blog.ethereum.org/2022/07/20/devcon-scholars-returns-22",
    title: "Devcon Schoolars Program",
    company: "Ethereum Foundation",
    achievementDescription:
      "I was selected by the Ethereum Foundation to receive a schoolarship for the Devcon Schoolars Program, in which the foundation will carry fifty person from all around the world to assist the most important conference in Ethereum, the Devcon. This experience is also complemented with optional material learning and also with learning sessions about the Ethereum.",
  },
  {
    icon: "./achievements/ethglobal.jpg",
    site: "https://ethglobal.com/showcase/looking-for-group-enmkc",
    title: "Hackathon",
    company: "ETHGlobal",
    achievementDescription:
      "We present our project in the hackathon sponsored by the ETHGlobal, we develop a platform which allows people to find and create teams for any hackathon in Web3, we want to give a space to the community to connect with multidisciplinary people who wants to participate in a hackathon, for achieve this, we work on a pseudo-algorithm which work as a matchmaking system based on preferences previously setted, we also develop a Smart Contract system which handles automatically the distribution of the prizes for the winner team. In addition to that, we include a whole social aspect, which includes an integration with lens, POAPs or Kudos for the winners, personal metrics etc.",
  },

  {
    icon: "./achievements/mediaparty.png",
    site: "https://www.mediaparty.info/",
    title: "Hackathon Winners",
    company: "MediaParty",
    achievementDescription:
      "We won the first place in the MediaParty Hackathon 2022. The MediaParty is a conference on technology, journalism, innovation and emerging technologies. At the Hackathon, my team and I developed a platform that allows communicators and journalist to create and consume qualitiy knowledge and be rewarded for it, in addition, we implement tokenomics with a native ERC-20 token. The whole platform was developed thinking in the decentralization of information and putting the user as the owner of his information, fully guided by the Web3 principles.",
  },

  {
    icon: "./skill-icons/alchemy.png",
    site: "https://github.com/lukecd/team-dinamita-web3-voting",
    title: "Hackathon Winners",
    company: "Alchemy",
    achievementDescription:
      "This was my first hackathon in which me and my team develop an NFT Gated System, this means that the platform was built for Governance, we develop a system in which you had to have an special NFT to be allowed to vote, but also, that same NFT evolve every time one member of X community/DAO emit his vote.",
  },
];

const Achievements = () => {
  return (
    <div>
      <h2 className="neon-title">Achievements</h2>

      <div className="flex flex-col gap-5 justify-center mt-3">
        {achievements.map((achievement, index) => {
          return (
            <div className="flex flex-row" key={index}>
              <div className="flex items-center justify-center h-fit min-w-[7%]">
                <img
                  className="w-14 h-14 object-contain mt-1.5 mr-2.5 rounded-xl"
                  src={achievement.icon}
                  alt="logo"
                />
              </div>

              <div>
                <a
                  href={achievement.site}
                  target="_blank"
                  className="cursor-pointer neon-link"
                  rel="noreferrer"
                >
                  {achievement.title} - {achievement.company}
                </a>

                <p className="mt-2">{achievement.achievementDescription}</p>
                <p className="mt-2">{achievement?.achievementStack}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Achievements;
