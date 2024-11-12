function Projects() { 
  const projects = [
    { 
      title: "To-Do List App", 
      description: "A task management app built with React.", 
      link: "https://todo-list-react-murex-three.vercel.app/"
    },
    { 
      title: "Portfolio Website", 
      description: "A personal portfolio to showcase my work.", 
      link: "https://my-portfolio-omega-cyan-41.vercel.app/"
    },
    { 
      title: "Counter App", 
      description: "A simple counter app built using React hooks.", 
      link: "https://counter-app-react-omega.vercel.app/"
    }
  ];

  return (
    <div>
      <h2 className="text-4xl text-center font-bold text-gray-800 mb-8">My Projects</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-5">
        {projects.map((project, index) => (
          <div key={index} className="p-8 bg-gray-100 shadow-lg rounded-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            <button
              className="mt-4 px-4 py-2 bg-purple-500 text-white font-semibold rounded hover:bg-purple-700 transition duration-300"
              onClick={() => window.open(project.link, '_blank')}
            >
              View Project
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
