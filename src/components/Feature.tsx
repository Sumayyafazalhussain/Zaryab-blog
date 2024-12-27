import React from "react";

export default function Feature() {
  return (
    <div>
      <section className="py-16 bg-gradient-to-r from-teal-500 to-blue-500 mb-40">
        {/* Blog Title */}
        <div className="text-center">
          <h2
            className="text-5xl font-extrabold text-white md:text-6xl lg:text-7xl 
            transition-transform duration-500 ease-in-out transform hover:translate-y-[-8px] hover:text-yellow-300 
            animate-fade-in-up"
          >
            Sumayya Fazal Hussain: AI is Amazing
          </h2>
        </div>

        {/* Introductory Text */}
        <div className="max-w-4xl mx-auto mt-10">
          <p className="text-center text-base text-gray-200 sm:text-lg md:text-xl leading-relaxed animate-fade-in-up delay-100">
            Sumayya Fazal Hussain, I am a passionate medical student with a keen interest in web development. Balancing both fields, I specialize in TypeScript, HTML, and modern web development technologies. My unique combination of skills allows me to approach problems from a multi-disciplinary perspective, blending critical thinking from medicine with creative problem-solving in software development. Whether it’s coding an application or studying human anatomy, I strive for excellence and precision in everything I do.
          </p>
        </div>

        {/* Categories Section */}
        <div className="mx-auto max-w-6xl px-6 mt-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-yellow-300 animate-color-change">
            Explore Our Categories
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {["HTML", "AI", "Web Development"].map((category, index) => (
              <div
                key={index}
                className="relative group p-10 bg-white rounded-xl shadow-2xl 
                hover:bg-teal-200 hover:text-white transition-transform duration-300 ease-in-out 
                transform hover:scale-110 cursor-pointer text-center"
              >
                <p className="text-xl font-semibold">{category}</p>
                <div
                  className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-500 
                  rounded-xl transition duration-300 ease-in-out"
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Informational Footer */}
        <div className="max-w-5xl mx-auto mt-20">
          <p className="text-center text-base md:text-lg text-gray-200 leading-relaxed animate-fade-in-down delay-100">
            Artificial Intelligence and web development are transforming the way
            we interact with technology. From creating dynamic websites using HTML
            to building intelligent systems with AI, these fields open up endless
            possibilities. HTML, the foundation of web development, is not just
            about structuring content—it’s about creating experiences that connect
            people and information. With AI revolutionizing everything from
            automation to user experience, the combination of HTML and AI promises
            a future where the web is smarter, faster, and more personalized than
            ever before.
          </p>
        </div>
      </section>
    </div>
  );
}
