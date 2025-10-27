import { FlameIcon } from "lucide-react";
import Navitem from "./navbar/navitem";
import Logo from "./ui/logo";
import Search from "./navbar/search";
import { motion } from "motion/react";
import { useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function Navbar() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [showInput, setShowInput] = useState<boolean>(false);
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}   
      animate={{ y: 0, opacity: 1 }}      
      transition={{
        type: 'spring',                   
        stiffness: 120,                   
        damping: 10,                      
      }}
      className="w-full max-w-4xl mx-auto bg-zinc-900/60 backdrop-blur-xl text-gray-100 lg:rounded-full fixed left-0 right-0 top-0 lg:top-4 shadow-lg py-4 px-4 md:px-8 flex items-center gap-10 z-50"
    >
      <Logo />
      {isMobile && !showInput ? <Navitem icon={<FlameIcon />} title="Tendências" to="/" /> : !isMobile && <Navitem icon={<FlameIcon />} title="Tendências" to="/" />} 
      <Search showInput={showInput} setShowInput={setShowInput} />
    </motion.nav>
  )
}