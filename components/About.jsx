const About = () => {
  return (
    <>
      <div className="flex flex-col mt-4 gap-6">
        <div className="flex flex-col gap-3 justify-center items-center lg:flex-row">
          <div className="flex flex-row gap-3">
            <div className="flex flex-row gap-1 items-center">
              <img className="h-5" src="./icons/mail.svg" />
              <a
                className="neon-social"
                href="https://www.linkedin.com/in/igpresas/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </div>
            <div className="flex flex-row gap-1 items-center">
              <img className="h-5" src="./icons/github.svg" />
              <a
                className="neon-social"
                href="https://github.com/nv-cho"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </div>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <img className="h-5" src="./icons/phone.svg" />
            ignacio_0701@hotmail.com
          </div>

          <div className="flex flex-row gap-1 items-center">
            <img className="h-5" src="./icons/address.png" />
            <p>Buenos Aires, Argentina</p>
          </div>
        </div>
        <div className="flex justify-center w-full items-center p-2 h-12 neon-poap rounded-xl transition ease-in-out  hover:-translate-y-1 hover:scale-110">
          <a
            className="flex justify-center items-center w-full ml-2"
            href="https://www.welook.io/0xE912BC1F48E05629e94e5e7b7f87DC45E97f9d7e"
            target="_blank"
            rel="noreferrer"
          >
            <img className="w-8" src="./icons/poap.png" alt="Poap logo" />
            Check my POAPs!
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
