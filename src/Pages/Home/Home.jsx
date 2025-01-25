import React from "react";
import Header from "../../Components/Header/Header";
import CardGallery from "../../Components/ProjectCard/CardGallery";
import Secondarybtn from '../../Components/Buttons/Secondarybtn'


const Home = () => {
  return (
    <div className="h-full w-full bg-[#111a38] pb-10">
      <Header />
      <h1 className="text-white text-center font-bold my-7 text-5xl">
        30 DAYS REACT PROJECT CHALLENGE
      </h1>
      <div className="w-[90%] bg-white rounded-md px-10 mx-auto py-5 text-justify">
        <h2 className="text-center font-semibold text-3xl my-5">
          Welcome to My 30 Days React Project Challenge!!
        </h2>
        <p className="text-lg mb-3">
          <strong>Hi, I'm Naomi Ogundipe </strong>, a passionate web developer with a keen
          interest in building functional, interactive, and user-focused web
          applications. I'm also currently pursuing a degree in Mass
          Communication, which enhances my ability to communicate complex ideas
          effectively through my work. This website, which i also built with React, is the dedicated home for my 
          <strong> 30 Days React Project Challenge</strong>.
        </p>
        <p className="text-lg mb-3">
          Over the next <strong>30</strong> days, I will be pushing my creative
          and technical boundaries by building one project each day using
          <strong> React</strong>, a powerful JavaScript library for creating
          dynamic user interfaces.
        </p>
        <p className="text-lg mb-3">
          <strong className="underline">What You'll Find Here:</strong>
          <ul className="mt-3 flex flex-col gap-2">
            <li >
              <strong>Daily Projects:</strong> Each project will be showcased on its own page,
              complete with an overview, key features, and a live demo.
            </li>
            <li>
              <strong>Code Repositories:</strong> Links to the source code on GitHub for each
              project, so you can explore how everything is built. 
            </li>
            <li>
            <strong>Resources:</strong> Useful tutorials, libraries, and tools that I've used along the way.
            </li>
            <li>
              <strong>Contact Information:</strong> Whether you're interested in collaborating,
              hiring, or just connecting, my contact details are available on
              the “Contact” page.
            </li>
            <li>
              <strong>Easy Navigation:</strong> The website is designed to be simple and
              user-friendly. Use the navigation menu to browse through the
              projects, access resources, or reach out to me.
            </li>
          </ul>
        </p>
        <p className="text-lg mb-3">
          <strong>Why This Challenge?</strong> As a web developer, I believe
          that consistency and practice are key to growth. This challenge is my
          way of staying disciplined, improving my React skills, and building a
          portfolio of projects that showcase my abilities. Whether you're a
          fellow developer, a recruiter, or someone simply curious about my
          journey, this platform will give you a front-row seat to my progress.
          I hope this challenge inspires you to take on your own projects or
          sparks your interest in React development. Feel free to explore, share
          your feedback, and reach out! Let's Build Something Amazing Together!
        </p>
      </div>
      <div className="flex flex-col items-center gap-3">
      <h2 className="my-10 text-center text-white font-semibold text-3xl">PROJECTS</h2>
      <CardGallery/>
      <Secondarybtn text={"See More"} to={'/projects'}/>
      </div>
      
    </div>
  );
};

export default Home;
