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
      link: "https://iamsalim.vercel.app/"
    },
    { 
      title: "Counter App", 
      description: "A simple counter app built using React hooks.", 
      link: "https://counter-app-react-omega.vercel.app/"
    },
    { 
      title: "Mahua Medanta Hospital", 
      description: "Fully responsive Hospital Website", 
      link: "https://medanta-frontend-two.vercel.app/"
    },
  ];

  return (
    <div className="px-4 py-12">
      <h2 className="text-4xl text-center font-bold text-gray-800 mb-8">My Projects</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="p-8 bg-white shadow-lg rounded-lg hover:scale-105 transform transition duration-300 ease-in-out"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">{project.title}</h3>
            <p className="text-gray-600 mb-6">{project.description}</p>
            <button
              className="w-full px-4 py-2 bg-purple-500 text-white font-semibold rounded hover:bg-purple-700 transition duration-300"
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
