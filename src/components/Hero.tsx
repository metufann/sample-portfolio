import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';

const Hero = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  // Elektrik akımı animasyonu için parçacık bileşeni
  const ElectricParticle = ({ path, delay = 0, duration = 3 }: { path: string; delay?: number; duration?: number }) => (
    <motion.circle
      r="3"
      fill="#3B82F6"
      filter="drop-shadow(0 0 4px #3B82F6)"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <animateMotion
        dur={`${duration}s`}
        repeatCount="indefinite"
        begin={`${delay}s`}
      >
        <mpath href={path} />
      </animateMotion>
    </motion.circle>
  );

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Circuit Background Pattern */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
        >
          <defs>
            {/* Elektrik akımı için gradient tanımları */}
            <linearGradient id="electricGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="1" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          <g stroke="currentColor" strokeWidth="2" opacity="0.18" className="transform scale-100 md:scale-100">
            {/* Karmaşık devre yolları ve elemanları */}
            {/* Üst yatay yollar */}
            <path d="M 0 80 H 400 V 200 H 800 V 80 H 1200 V 200 H 1600 V 80 H 1920" id="path1" />
            <path d="M 0 200 H 200 V 400 H 600 V 200 H 1000 V 400 H 1400 V 200 H 1920" id="path2" />
            {/* Dikey yollar ve bağlantılar */}
            <path d="M 400 80 V 400" id="path3" />
            <path d="M 800 80 V 400" id="path4" />
            <path d="M 1200 80 V 400" id="path5" />
            <path d="M 1600 80 V 400" id="path6" />
            {/* Direnç sembolleri */}
            <polyline points="300,200 310,190 320,210 330,190 340,210 350,190 360,210 370,200" />
            <polyline points="900,400 910,390 920,410 930,390 940,410 950,390 960,410 970,400" />
            {/* Kondansatör sembolleri */}
            <rect x="600" y="190" width="4" height="20" />
            <rect x="620" y="190" width="4" height="20" />
            <rect x="1400" y="190" width="4" height="20" />
            <rect x="1420" y="190" width="4" height="20" />
            {/* Diyot sembolleri */}
            <polygon points="1100,200 1120,210 1100,220" />
            <line x1="1120" y1="210" x2="1130" y2="210" />
            <polygon points="1700,80 1720,90 1700,100" />
            <line x1="1720" y1="90" x2="1730" y2="90" />
            {/* IC (entegre devre) */}
            <rect x="1500" y="350" width="60" height="40" rx="6" />
            <line x1="1500" y1="370" x2="1460" y2="370" />
            <line x1="1560" y1="370" x2="1600" y2="370" />
            {/* Alt yatay yollar */}
            <path d="M 0 900 H 400 V 700 H 800 V 900 H 1200 V 700 H 1600 V 900 H 1920" id="path7" />
            {/* Dikey yollar ve bağlantılar alt */}
            <path d="M 400 900 V 700" id="path8" />
            <path d="M 800 900 V 700" id="path9" />
            <path d="M 1200 900 V 700" id="path10" />
            <path d="M 1600 900 V 700" id="path11" />
            {/* Bağlantı noktaları */}
            <circle cx="400" cy="200" r="8" />
            <circle cx="800" cy="200" r="8" />
            <circle cx="1200" cy="200" r="8" />
            <circle cx="1600" cy="200" r="8" />
            <circle cx="400" cy="700" r="8" />
            <circle cx="800" cy="700" r="8" />
            <circle cx="1200" cy="700" r="8" />
            <circle cx="1600" cy="700" r="8" />
            {/* Karmaşık bağlantılar */}
            <path d="M 200 400 Q 300 500 400 400 T 600 400" id="path12" />
            <path d="M 1000 400 Q 1100 500 1200 400 T 1400 400" id="path13" />
            <path d="M 600 700 Q 700 800 800 700 T 1000 700" id="path14" />
            <path d="M 1200 700 Q 1300 800 1400 700 T 1600 700" id="path15" />
            {/* Daha fazla yoğunluk için tekrarlar */}
            <path d="M 0 540 H 1920" id="path16" />
            <path d="M 480 0 V 1080" id="path17" />
            <path d="M 960 0 V 1080" id="path18" />
            <path d="M 1440 0 V 1080" id="path19" />
          </g>

          {/* Elektrik akımı parçacıkları */}
          <g filter="url(#glow)">
            {/* Ana yollar boyunca akan parçacıklar */}
            <ElectricParticle path="#path1" delay={0} duration={4} />
            <ElectricParticle path="#path1" delay={1.5} duration={4} />
            <ElectricParticle path="#path2" delay={0.5} duration={3.5} />
            <ElectricParticle path="#path2" delay={2} duration={3.5} />
            <ElectricParticle path="#path7" delay={0.8} duration={4.2} />
            <ElectricParticle path="#path7" delay={2.3} duration={4.2} />
            
            {/* Dikey bağlantılar */}
            <ElectricParticle path="#path3" delay={0.3} duration={2.5} />
            <ElectricParticle path="#path4" delay={1.2} duration={2.5} />
            <ElectricParticle path="#path5" delay={0.7} duration={2.5} />
            <ElectricParticle path="#path6" delay={1.8} duration={2.5} />
            <ElectricParticle path="#path8" delay={0.4} duration={2.5} />
            <ElectricParticle path="#path9" delay={1.6} duration={2.5} />
            <ElectricParticle path="#path10" delay={0.9} duration={2.5} />
            <ElectricParticle path="#path11" delay={2.1} duration={2.5} />
            
            {/* Karmaşık bağlantılar */}
            <ElectricParticle path="#path12" delay={0.6} duration={3} />
            <ElectricParticle path="#path13" delay={1.4} duration={3} />
            <ElectricParticle path="#path14" delay={0.2} duration={3} />
            <ElectricParticle path="#path15" delay={1.9} duration={3} />
            
            {/* Merkez yollar */}
            <ElectricParticle path="#path16" delay={0.1} duration={5} />
            <ElectricParticle path="#path16" delay={2.5} duration={5} />
            <ElectricParticle path="#path17" delay={0.8} duration={4.5} />
            <ElectricParticle path="#path18" delay={1.3} duration={4.5} />
            <ElectricParticle path="#path19" delay={0.5} duration={4.5} />
          </g>
        </svg>
      </div>
      {/* Background Pattern (old grid, now commented out) */}
      {/* <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" /> */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Berfin Candemir
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl text-primary-600 dark:text-primary-400 mb-6"
        >
          {t('hero.title')}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8"
        >
          {t('hero.tagline')}
        </motion.p>

        <motion.div variants={itemVariants}>
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-colors"
          >
            {t('hero.viewProjects')}
            <HiArrowDown className="ml-2" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <HiArrowDown className="text-gray-400 dark:text-gray-600" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 