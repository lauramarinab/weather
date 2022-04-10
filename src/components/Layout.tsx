import { motion } from "framer-motion";
import { useRouter } from "next/router";

export const Layout: React.FC = ({ children }) => {
  const router = useRouter();

  const xValue = router.route === "/" ? -150 : 150;

  return (
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={{
        hidden: { opacity: 0, x: xValue },
        enter: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 0 },
      }}
      transition={{ type: "linear", duration: 0.3 }}
      css={{ height: "calc(100vh - 50px)", width: "100%", padding: "24px 32px" }}
    >
      {children}
    </motion.main>
  );
};
