import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
return (
<footer className="relative bg-[#222222] text-gray-300 py-10 overflow-hidden">
<div className="absolute pointer-events-none"></div>

<div className="container mx-auto px-6 text-center relative z-10">

<p className="text-sm text-gray-400">
© 2025 <span className="text-[#00e0ff] font-medium">GG App</span>. All rights reserved.
</p>
</div>
</footer>
);
};

export default Footer;
