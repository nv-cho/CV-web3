const Header = props => {
  return (
    <div className="flex flex-col items-center lg:flex-row lg:justify-start">
      <img className="w-52 h-52 rounded-full" src="./profile.png" />

      <div className="flex flex-col justify-center items-center lg:items-start lg:ml-10">
        <h1 className="neon-name">Ignacio Presas</h1>
        <h2 className="mt-2">Frontend Developer - Web3 Fullstack Developer</h2>
        {props.children}
      </div>
    </div>
  );
};

export default Header;
