import React from "react";

const skills = [
  {
    name: "HTML",
    description: "Markup language for creating web pages.",
    image: "./images/html.png",
  },
  {
    name: "CSS",
    description: "Style sheet language for styling web pages.",
    image: "./images/css.png",
  },
  {
    name: "JavaScript",
    description: "Programming language for web development.",
    image: "./images/js.png",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework.",
    image: "../images/tailwindcss.png",
  },
  {
    name: "React",
    description: "JavaScript library for building user interfaces.",
    image: "../images/react.png",
  },
  {
    name: "Laravel",
    description: "PHP framework for web application development.",
    image: "../images/laravel.png",
  },
];

const SkillsPage = () => {
  return (
    <section className="bg-blue-100 bg-opacity-25 py-12" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Skills
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="card p-4 border rounded-lg shadow-md bg-white transition-transform transform hover:scale-105"
            >
              <img
                className="card-image w-32 h-32 object-cover rounded-t-lg"
                src={skill.image}
                alt={skill.name}
              />
              <div className="card-body p-4">
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
