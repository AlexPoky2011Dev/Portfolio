/*import { useEffect, useState } from "react";*/
import Layout from "../components/layout";
import Portfolio from "../services/portfolio";
import GitHub from "../services/github";
import TechStack from "../services/techstack";  
import Head from "next/head";

const MainPage = () => {


  return (
    <Layout>
  <Head>
      <title>Alex Pokorný - FrontEnd Vývojář</title>
  </Head>

<section className="min-h-screen bg-[#222629] text-white flex justify-center items-center mx-auto">
     <div className="container py-32 md:py-48">

      <div className="flex flex-col items-center">
        <img src="logo.png" alt="logo" height={350} width={350}/>
      </div>

      <div className="max-w-lg mx-auto">
        <h1 className="text-center font-bold text-3xl md:text-5xl mt-8 tracking-wide text-[#29648A]">Alex Pokorný <br /> FrontEnd Vývojář</h1>
      </div>

      <div className="max-w-lg mx-auto">
        <p className="mt-4 text-center text-white/70 md:text-lg">
          Ahoj, já jsem Alex Pokorný.
          Jsem FrontEnd vývojář webových stránek, specializuji se na vytváření jednoduchých webových stránek pomocí frameworku NextJS. 
          Můj zájem o webový vývoj začal 16. února 2024, a od listopadu 2023 se také věnuji vývoji Discord robotů.
        </p>
      </div>

      <div className="max-w-lg mx-auto flex justify-center items-center transform-none opacity-100">
        <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl shadow-md hover:bg-gray-100 mr-2">
          <span>👋</span>
          <a href="https://discord.com/users/999318467310268496" target="_blank" className="font-medium">Kontaktuj mě!</a>
        </button>
      </div>

     </div>
</section>   



<section id="techstack" className="min-h-screen bg-[#222629] text-white flex justify-center items-center mx-auto">
  <div className="container py-32 md:py-48">

    <div className="max-w-lg mx-auto">
          <h1 className="text-center font-bold text-3xl md:text-5xl mt-8 tracking-wide text-[#29648A]">TechStack</h1>
          <p className="text-center text-medium text-white/70 text-[20px] md:text-[27px] tracking-wide">Seznam Technologií, které používám.</p>
    </div>

    <TechStack />

  </div>
</section>



<section id="portfolio" className="min-h-screen bg-[#222629] text-white flex justify-center items-center mx-auto">
  <div className="container py-32 md:py-48">

    <div className="max-w-lg mx-auto">
          <h1 className="text-center font-bold text-3xl md:text-5xl mt-8 tracking-wide text-[#29648A]">Portfolio</h1>
          <p className="text-center text-medium text-white/70 text-[20px] md:text-[27px] tracking-wide">Projekty které jsem vytvořil.</p>
    </div>

    <Portfolio />

  </div>
</section>



<section id="github" className="min-h-[90vh] bg-[#222629] text-white flex justify-center items-center mx-auto">
  <div className="container py-32 md:py-48">

    <div className="max-w-lg mx-auto">
          <h1 className="text-center font-bold text-3xl md:text-5xl mt-8 tracking-wide text-[#29648A]">Github</h1>
          <p className="text-center text-medium text-white/70 text-[20px] md:text-[27px] tracking-wide">Repositories na mém github profilu.</p>
    </div>

    <GitHub />

  </div>
</section>

    </Layout>
  );
}

export default MainPage;
