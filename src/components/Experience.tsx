import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { HiCalendar } from 'react-icons/hi';

const Experience = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      company: 'TRT',
      location: 'Ankara',
      period: '2024',
      description: t('experience.trt.description'),
    },
    {
      company: 'Butkon Asansör',
      location: 'Konya',
      period: '2025',
      description: t('experience.butkon.description'),
    },
    {
      company: 'Göktaş AGV Teknofest Team',
      location: 'Konya',
      period: '2023–2025',
      description: t('experience.goktas.description'),
    },
    {
      company: 'Konya Şehir Hastanesi',
      location: 'Konya',
      period: '2023',
      description: t('experience.hospital.description'),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {t('experience.title')}
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-primary-200 dark:bg-primary-800" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-400 transform -translate-x-1/2" />

                {/* Content */}
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}
                >
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {exp.company}
                      </h3>
                      <span className="text-sm text-primary-600 dark:text-primary-400">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      {exp.location}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {exp.description}
                    </p>
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

export default Experience; 