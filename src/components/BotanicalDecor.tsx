import { motion } from "motion/react";

export const LeafSprig = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={`fill-none stroke-primary opacity-[0.15] ${className}`}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M50 85 C50 85 50 60 50 15" />
    <path d="M50 70 C65 65 75 55 75 40 C75 30 65 25 50 35" />
    <path d="M50 70 C35 65 25 55 25 40 C25 30 35 25 50 35" />
    <path d="M50 50 C65 45 75 35 75 20 C75 10 65 5 50 15" />
    <path d="M50 50 C35 45 25 35 25 20 C25 10 35 5 50 15" />
  </svg>
);

export const BotanicalDecor = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute -top-10 -left-10 w-64 h-64"
      >
        <LeafSprig className="w-full h-full" />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, rotate: 20 }}
        animate={{ opacity: 1, rotate: 10 }}
        transition={{ duration: 2.5, ease: "easeOut", delay: 0.5 }}
        className="absolute top-1/2 -right-20 w-80 h-80"
      >
        <LeafSprig className="w-full h-full opacity-[0.1]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3, ease: "easeOut", delay: 1 }}
        className="absolute -bottom-20 left-1/4 w-96 h-96"
      >
        <LeafSprig className="w-full h-full opacity-[0.08]" />
      </motion.div>
    </div>
  );
};
