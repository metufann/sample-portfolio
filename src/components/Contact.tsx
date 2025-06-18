import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {t('contact.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                {t('contact.contactInfo')}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <HiMail className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-400" />
                  <a href="mailto:bercndmr@gmail.com" className="hover:text-primary-600 dark:hover:text-primary-400">
                    {t('contact.emailValue')}
                  </a>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <HiPhone className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-400" />
                  <span>{t('contact.phoneValue')}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <HiLocationMarker className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-400" />
                  <span>{t('contact.locationValue')}</span>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-10 mb-6">
                {t('contact.socialMedia')}
              </h3>
              <div className="flex space-x-6">
                <a
                  href="https://linkedin.com/in/berfindemiroglu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  <FaLinkedin className="w-8 h-8" />
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <a
                href="mailto:bercndmr@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-400"              >
                <HiMail className="w-5 h-5 mr-2" />
                {t('contact.reachOut')}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 