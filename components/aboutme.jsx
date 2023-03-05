import React from "react";

const AboutMe = () => {
  return (
   <div id='about' className="w-full md:h-screen p-2 flex items-center py-16   ">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className= "col-span-2">
            <p className="uppercase text-xl tracking-widest text-[#071ff2]">About</p>
            <h2 className="py-4 text-3xl font-extrabold">Who I Am</h2>
            <p className="py-2 text-gray-600">
          I'm an aspiring software developer with a passion for coding and problem-solving. My journey into programming started a few years ago when I took my first computer science course in college, and since then, I've been hooked on building things with code.
        </p>
        <p className="py-2 text-gray-600">
          My main areas of interest are web development and data science, and I have experience with a variety of programming languages and frameworks, including JavaScript, React, Python, and SQL.
        </p>
        <p className="py-2 text-gray-600">
          In my free time, I enjoy working on personal coding projects and contributing to open-source software. I'm always looking to learn new skills and technologies, and I'm excited to see where my programming journey takes me next.
        </p>
        <p className="py-2 text-gray-600">
          When I'm not coding, you can find me reading, playing football, or working out at the gym.
        </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 ">
            <img className="rounded-xl"  src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="/" />
        </div>
      </div>
   </div>
  );
};

export default AboutMe;