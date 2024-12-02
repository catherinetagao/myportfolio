import React from "react";

const Projects = () => {
  return (
    <section className="bg-blue-100 bg-opacity-25 py-12" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Projects
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="card p-4 border rounded-lg shadow-md bg-white transition-transform transform hover:scale-105">
            <img className="card-image w-32 h-32 object-cover rounded-t-lg" />
            <div className="card-body p-4">
              <h3 className="text-xl font-semibold"></h3>
              <p className="text-gray-600"></p>
            </div>
          </div>
          <div className="card p-4 border rounded-lg shadow-md bg-white transition-transform transform hover:scale-105">
            <img className="card-image w-32 h-32 object-cover rounded-t-lg" />
            <div className="card-body p-4">
              <h3 className="text-xl font-semibold"></h3>
              <p className="text-gray-600"></p>
            </div>
          </div>
          <div className="card p-4 border rounded-lg shadow-md bg-white transition-transform transform hover:scale-105">
            <img className="card-image w-32 h-32 object-cover rounded-t-lg" />
            <div className="card-body p-4">
              <h3 className="text-xl font-semibold"></h3>
              <p className="text-gray-600"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
