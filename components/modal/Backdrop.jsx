import { motion } from "framer-motion";

export default function Backdrop({ children, onClick }) {
  return (
    <motion.div className="fixed top-0 left-0 z-20 flex h-full w-full items-center justify-center bg-black bg-opacity-70" onClick={onClick} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {children}
    </motion.div>
  );
}
