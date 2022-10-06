import React from "react";

const Projects = () => {
  return (
    <div>
      <h2 className="neon-title">Projects</h2>

      <p>
        The following projects are some of my favorites, although I have also built Smart Contracts
        which have no Frontend, but they are all listed in my Github.
      </p>

      <div className="flex flex-row gap-6 mt-6">
        <div className="transition ease-in-out  hover:-translate-y-1 hover:scale-110 cursor-pointer">
          <a href="https://looking-for-grooup.vercel.app/" target="_blank" rel="noreferrer">
            <img className="rounded-xl" src="./projects/lfg.png" alt="Project preview" />
          </a>
          <p className="mx-3 mt-2 text-sm text-center">
            This project was built as a final project for the Ethereum Developer Program, but also
            was built to present it in the ETHOnline hackathon sponsored by ETHGlobal.
          </p>
        </div>

        <div className="transition ease-in-out  hover:-translate-y-1 hover:scale-110 cursor-pointer">
          <a href="https://team-dinamita-web3-voting.vercel.app/" target="_blank" rel="noreferrer">
            <img className="rounded-xl" src="./projects/voting-system.png" alt="Project preview" />
          </a>
          <p className="mx-3 mt-2 text-sm text-center">
            This project was the winner of the hackathon held by Alchemy, the technologies used were
            React, Next.js, WAGMI, TailwindCSS, PostCSS, NextUI and Solidity.
          </p>
        </div>

        <div className="transition ease-in-out  hover:-translate-y-1 hover:scale-110 cursor-pointer">
          <a href="https://coffee-dapp.vercel.app/" target="_blank" rel="noreferrer">
            <img className="rounded-xl" src="./projects/coffee-dapp.png" alt="Project preview" />
          </a>
          <p className="mx-3 mt-2 text-sm text-center">
            This project was part of #RoadToWeb3 by Alchemy. The technologies used were React,
            Next.js, WAGMI, TailwindCSS, NextUI and Solidity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
