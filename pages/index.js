import Head from "next/head";
import Header from "../components/Header";
import About from "../components/About";
import Profile from "../components/Profile";
import Experience from "../components/Experience";
import Academic from "../components/Academic";
import Skills from "../components/Skills";
import Achievements from "../components/Achievements";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div>
      <Head>
        <title>We3 CV</title>
        <meta name="description" content="Ignacio Presas Web3 CV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='w-full h-full bg-[url("../public/background.jpg")] bg-cover bg-center bg-fixed'>
        <div className="max-w-[1400px] mx-auto px-16 lg:px-36 py-10">
          <div className="flex flex-col rounded-xl px-6 py-4 gap-4 glass neon-border">
            <Header>
              <About />
            </Header>
            <span className="m-4 rounded-sm divider" />
            <Profile />
            <span className="m-4 rounded-sm divider" />

            <Skills />
            <span className="m-4 rounded-sm divider" />
            <Experience />
            <span className="m-4 rounded-sm divider" />
            <Academic />
            <span className="m-4 rounded-sm divider" />
            <Projects />
            <span className="m-4 rounded-sm divider" />
            <Achievements />
          </div>
        </div>
      </main>
    </div>
  );
}
