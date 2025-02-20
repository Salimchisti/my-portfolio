import { motion } from 'framer-motion';

const HomePage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // delay between children animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-100 flex flex-col justify-center items-center">
      {/* Hero Section with Flex Layout */}
      <motion.section
        className="flex flex-col md:flex-row items-center justify-between md:justify-center w-full max-w-7xl p-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Section: Image */}
        <motion.div
          className="flex-shrink-0 w-full md:w-1/3 mb-8 md:mb-0 md:mr-8 -ml-4"
          variants={itemVariants}
        >
          <img
            src="/icon-js/IMG.jpg"
            alt="Muhammed Salim"
            className="rounded-lg shadow-lg object-cover w-full h-auto max-w-sm"
          />
        </motion.div>

        {/* Right Section: Text Content */}
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="text-4xl font-bold text-gray-800 md:text-6xl" variants={itemVariants}>
            Hi,
          </motion.p>
          <motion.p
            className="text-4xl font-bold text-gray-800 md:text-6xl mt-2"
            variants={itemVariants}
          >
            I am Muhammed
          </motion.p>
          <motion.p
            className="text-4xl font-bold text-gray-800 md:text-6xl mt-2"
            variants={itemVariants}
          >
            Salim.
          </motion.p>
          <motion.p className="mt-4 text-lg text-gray-600 md:text-xl" variants={itemVariants}>
            Software Developer | React Enthusiast | Lifelong Learner
          </motion.p>
          <motion.p className="mt-2 text-lg text-gray-600 md:text-xl" variants={itemVariants}>
            Former BPO Specialist with 3 Years of Experience
          </motion.p>
          <motion.div className="mt-8" variants={itemVariants}>
            <div className="flex justify-center mt-8">
              <a
                href="/SalimResume.pdf" // Ensure this matches the file name in the public folder
                download
              >
                <button className="bg-gray-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300">
                  Download CV
                </button>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default HomePage;
