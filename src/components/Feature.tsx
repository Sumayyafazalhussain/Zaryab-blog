import React from "react";

export default function Feature() {
  return (
    <div>
      <section className="py-14 bg-gray-100 mb-36">
        {/* Blog Title */}
        <div className="text-center">
          <h2
            className="text-4xl font-extrabold text-blue-700 md:text-5xl lg:text-6xl 
            transition-transform duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-gray-900 
            animate-fade-in-up"
          >
            Zaryab Fazal: Unveiling the Future with AI
          </h2>
        </div>

        {/* Introductory Text */}
        <div className="max-w-3xl mx-auto mt-10">
          <p className="text-center text-base text-gray-600 sm:text-lg md:text-xl leading-relaxed animate-fade-in-up delay-200">
            Hello! I'm Zaryab Fazal Hussain, a curious medical student and a
            creative front-end developer. My expertise in TypeScript, HTML, and
            modern tools enables me to build seamless, user-centric web
            experiences. By bridging the gap between medicine and technology, I
            strive to leave a positive impact in both domains. Fueled by a
            passion for learning and innovation, I am always on the lookout for
            new challenges and opportunities.
          </p>
        </div>

        {/* Categories Section */}
        <div className="mx-auto max-w-5xl px-6 mt-14">
          <h3 className="text-3xl font-bold text-center mb-10 text-blue-700 animate-bounce">
            Browse Our Topics
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["AI Innovations", "HTML Mastery", "Tech Trends", "Web Design", "Future Automation", "Creative Development"].map((topic, idx) => (
              <div
                key={idx}
                className="relative group p-6 bg-white rounded-lg shadow-md 
                hover:bg-blue-300 hover:text-gray-800 transition-transform duration-300 ease-in-out 
                transform hover:scale-105 cursor-pointer text-center"
              >
                <p className="text-lg font-medium">{topic}</p>
                <div
                  className="absolute inset-0 border-2 border-transparent group-hover:border-gray-800 
                  rounded-lg transition duration-300 ease-in-out"
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Informational Footer */}
        <div className="max-w-4xl mx-auto mt-16">
          <p className="text-center text-base md:text-lg text-gray-600 leading-relaxed animate-fade-in-down delay-150">
            The synergy of Artificial Intelligence and web development is reshaping
            the digital landscape. From crafting interactive websites with HTML to
            leveraging AI for smarter automation, the potential is vast. By blending
            technology with creativity, we can design solutions that not only meet
            functional needs but also deliver exceptional user experiences. Together,
            AI and web development pave the way for a more connected, intelligent
            future.
          </p>
        </div>
      </section>
    </div>
  );
}
