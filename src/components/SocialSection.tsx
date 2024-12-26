import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "Instagram",
    icon: "fa-instagram",
    href: "https://www.instagram.com/englishlearners.ig",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Email",
    icon: "fa-envelope",
    href: "mailto:englishlearners18@gmail.com",
    color: "from-red-500 to-orange-500",
  },
  {
    name: "YouTube",
    icon: "fa-youtube",
    href: "https://www.youtube.com/@englishlearnersyt",
    color: "from-red-600 to-red-500",
  },
];

const SocialIcon = ({
  link,
  index,
}: {
  link: (typeof socialLinks)[0];
  index: number;
}) => (
  <motion.li
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2 }}
  >
    <motion.a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative group flex items-center justify-center w-16 h-16 
        rounded-2xl bg-gradient-to-br ${link.color} transform transition-all 
        duration-300 hover:scale-110 hover:rotate-3`}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Glow effect */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${link.color} 
        blur-xl opacity-50 group-hover:opacity-75 transition-opacity`}
      />

      {/* Icon */}
      <div className="relative">
        <i className={`fab ${link.icon} text-2xl text-white`} />
      </div>

      {/* Tooltip */}
      <motion.span
        className="absolute -bottom-8 px-2 py-1 bg-white dark:bg-gray-800 
          rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 
          opacity-0 group-hover:opacity-100 transition-opacity"
        initial={{ y: 10, opacity: 0 }}
        whileHover={{ y: 0, opacity: 1 }}
      >
        {link.name}
      </motion.span>
    </motion.a>
  </motion.li>
);

export default function SocialSection() {
  return (
    <section id="social-section" className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary-light/5 
        via-transparent to-secondary-light/5 dark:from-primary-dark/5 
        dark:to-secondary-dark/5"
      />

      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-primary-light/10 
          dark:bg-primary-dark/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-light/10 
          dark:bg-secondary-dark/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-primary-light via-primary 
              to-primary-dark mx-auto mb-4"
            whileInView={{
              width: ["0%", "100%"],
              opacity: [0, 1],
            }}
            transition={{ duration: 1 }}
          />
          <h2 className="text-3xl font-bold gradient-text mb-4">
            Connect With Us
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-600 dark:text-gray-300"
          >
            Subscribe • Follow • Mail
          </motion.p>
        </motion.div>

        {/* Social Links */}
        <ul className="flex justify-center items-center space-x-8">
          {socialLinks.map((link, index) => (
            <SocialIcon key={link.name} link={link} index={index} />
          ))}
        </ul>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="max-w-2xl mx-auto px-4">
            <div className="py-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <a
                  href="/privacy-policy"
                  className="hover:text-primary dark:hover:text-primary-light 
                    transition-colors"
                >
                  Privacy Policy
                </a>
                {" | "}
                Copyright © {new Date().getFullYear()} - Maintained By{" "}
                <a
                  href="https://www.linkedin.com/in/yubarajbiswas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary dark:hover:text-primary-light 
                    transition-colors"
                >
                  ybtheflash
                </a>
              </p>
            </div>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}
