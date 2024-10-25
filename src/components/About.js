import React from 'react';
import { motion, useInView } from 'framer-motion'; // Import useInView
import Experience from './Experience';

function About() {
  const skills = [
    { name: "HTML", logo: "/icon-js/html.png" },
    { name: "CSS", logo: "/icon-js/CSS.png" },
    { name: "JavaScript", logo: "/icon-js/javascript.png" },
    { name: "React", logo: "/icon-js/react.png" },
    { name: "Tailwind CSS", logo: "/icon-js/tailwind.png" },
    { name: "Microsoft Excel", logo: "/icon-js/excel.png" },
    { name: "Microsoft Office", logo: "/icon-js/office.png" },
    { name: "Data Analysis", logo: "/icon-js/data-analysis.png" },
    { name: "Data Entry", logo: "/icon-js/data.png" },
    { name: "Data Mining", logo: "/icon-js/mining.png" },
    { name: "Data Analytics", logo: "/icon-js/analytics.png" },
    { name: "Data Collection", logo: "/icon-js/collection.png" },
    { name: "Microsoft Word", logo: "/icon-js/word.png" },
    { name: "Google Sheets", logo: "/icon-js/sheets.png" },
    { name: "Google Slides", logo: "/icon-js/slides.png" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Hook to check if the section is in view
  const skillsRef = React.useRef(null);
  const isInView = useInView(skillsRef, { once: true });

  return (
    <div className="from-gray-50 to-gray-100">
      <h2 className="text-4xl text-center font-bold text-gray-800 mb-10 mt-10">About Me</h2>

      {/* Who I Am Section */}
      <div className="max-w-3xl mx-auto p-5 text-center">
        <h3 className="text-3xl font-semibold">Who I Am</h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          I am Muhammed Salim, a dedicated web developer transitioning from a background in the BPO industry into software development. I am passionate about building efficient, scalable web applications using modern technologies.
        </p>
      </div>

      {/* Education Section */}
      <div className="max-w-3xl mx-auto mb-8 p-5">
        <h3 className="text-3xl font-semibold text-center">Education</h3>
        <ul className="list-disc list-outside pl-5 text-gray-700 text-lg mt-2 text-left">
          <li>B.Tech (Computer Science Engineering) (2019) - Aravali Institute Of Technical Studies (AITS), Udaipur, Rajasthan</li>
          <li>Senior Secondary Examination (2014) - Class XII - PCM (Bihar State Board Examination Board)</li>
          <li>Higher Secondary Examination (2012) - Class X (Central Board of Secondary Education)</li>
        </ul>
      </div>

      {/* Skills Section */}
      <motion.div
        ref={skillsRef}
        className="max-w-4xl mx-auto p-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h3 className="text-3xl font-semibold mb-4">Skills</h3>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 w-32 h-32 flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-105 border border-gray-200"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <img src={skill.logo} alt={`${skill.name} logo`} className="h-16 w-16 mb-2" />
              <span className="text-md text-gray-800 font-medium text-center">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Experience />
    </div>
  );
}

export default About;
