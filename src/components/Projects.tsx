import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('projects.project1.title'),
      description: t('projects.project1.description'),
      tech: ['LTspice', 'ESP8266', 'Matlab'],
    },
    {
      title: t('projects.project2.title'),
      description: t('projects.project2.description'),
      tech: ['MATLAB', 'Circuit Design', 'GUI Development'],
    },
    {
      title: t('projects.project3.title'),
      description: t('projects.project3.description'),
      tech: ['STM32', 'Arduino', 'PID Control'],
    },
    {
      title: t('projects.project4.title'),
      description: t('projects.project4.description'),
      tech: ['VHDL', 'Digital Logic', 'State Machines'],
    },
    {
      title: t('projects.project5.title'),
      description: t('projects.project5.description'),
      tech: ['ANSYS Maxwell', 'Electromagnetic Design'],
    },
    {
      title: t('projects.project6.title'),
      description: t('projects.project6.description'),
      tech: ['ANSYS', 'MATLAB', 'Motor Design'],
    },
    {
      title: t('projects.project7.title'),
      description: t('projects.project7.description'),
      tech: ['STM32', 'Arduino', 'React', 'Autonomous Systems'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {t('projects.title')}
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 