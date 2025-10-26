import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
const location = useLocation();
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
setIsLoading(true);
const timer = setTimeout(() => setIsLoading(false), 2000);
return () => clearTimeout(timer);
}, [location.pathname]);

return (
<>
<AnimatePresence>
{isLoading && (
<motion.div
key="page-loader"
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
className="fixed inset-0 bg-[#13191c] flex items-center justify-center z-[9999]"
>
<motion.img
src="/Whistle.png"
alt="Loading Logo"
initial={{ scale: 0.8, opacity: 0 }}
animate={{
scale: [0.8, 1.1, 1],
opacity: [0, 1, 1],
rotate: [0, 10, -10, 0],
}}
transition={{ duration: 1, ease: "easeInOut" }}
className="w-24 h-24"
/>
</motion.div>
)}
</AnimatePresence>

{!isLoading && (
<nav className="fixed top-0 left-0 w-full h-16 z-50 bg-[#222222]/95 backdrop-blur-sm border-b border-[#26EEEB]/20 shadow-md">
<div className="container mx-auto px-6 py-2.5 flex items-left justify-leftr">
<Link to="/" className="flex items-center gap-2">
<img src="/Whistle.png" alt="GG Logo" className="w-14 h-10" />
<span className="text-2xl font-bold text-[#FEFEFE] tracking-wide">
GG
</span>
</Link>
</div>
</nav>
)}
</>
);
};

export default Navigation;
