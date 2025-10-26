  import React from "react";
  import Navigation from "@/components/Navigation";
  import Footer from "@/components/Footer";
  import { motion } from "framer-motion";
  import { Info, FileText, Lock, Trophy } from "lucide-react";

  const aboutCards = [
  {
  id: 1,
  title: "App Information",
  description:
  "GG is a mobile application designed to organize and manage sports-related events in Iloilo. It connects users, organizers, and administrators in one platform. Users can browse and join events, organizers can create and manage their own events, and admins ensure the safety and quality of the platform.",
  icon: <Info className="w-10 h-10 text-[#26eeeb]" />,
  },
  {
  id: 2,
  title: "Terms of Service",
  terms: [
  "1. Users must provide accurate information when creating an account.",
  "2. Organizers are responsible for the accuracy and legitimacy of the events they post.",
  "3. GG reserves the right to remove any event or user that violates community guidelines.",
  "4. Users agree not to use the platform for fraudulent or harmful purposes.",
  "5. GG may update these terms as needed, and continued use means acceptance of changes.",
  ],
  icon: <FileText className="w-10 h-10 text-[#26eeeb]" />,
  summary:
  "Understand the rules of the game to ensure a fair and safe experience for everyone on the platform.",
  },
  {
  id: 3,
  title: "Privacy Policy",
  terms: [
  "1. GG collects only necessary data such as name, email, and event participation details.",
  "2. User data is securely stored in Supabase and will not be shared with third parties without consent.",
  "3. GG may use data for improving the platform and providing a better experience.",
  "4. Users can request deletion of their account and data anytime.",
  "5. Uploaded media (event photos, documents) remain the responsibility of the uploader.",
  ],
  icon: <Lock className="w-10 h-10 text-[#26eeeb]" />,
  summary:
  "Learn how GG protects your personal information and event data with a strict privacy commitment.",
  },
  {
  id: 4,
  title: "About GG",
  description:
  "GG stands for “Good Game”, representing fair play and sportsmanship. The app’s mission is to: make it easier for Iloilo’s sports community to discover and join events, help organizers manage leagues, tournaments, and one-day events efficiently, and build a centralized hub where sports enthusiasts can connect. GG is developed by BSIT students as part of a school project, aiming to provide a solution for both event participants and organizers.",
  icon: <Trophy className="w-10 h-10 text-[#26eeeb]" />,
  },
  ];

  const About = () => {
  const renderCardContent = (card) => (
  <div className="p-4 mt-8 text-left space-y-3 overflow-y-auto no-scrollbar">
  <div className="flex justify-center mb-1">{card.icon}</div>
  <h3 className="text-lg font-semibold text-[#26eeeb] text-center">
  {card.title}
  </h3>

  {card.description && (
  <p className="text-xs text-gray-300 leading-relaxed text-justify">
  {card.description}
  </p>
  )}

  {card.terms && (
  <ul className="text-xs text-gray-300 leading-relaxed space-y-0.5">
  {card.terms.map((term, i) => (
  <li key={i}>{term}</li>
  ))}
  </ul>
  )}
  </div>
  );

  return (
  <div className="bg-[#222222] text-white overflow-hidden">
  <Navigation />

  <section className="min-h-[80vh] flex flex-col justify-start items-center text-center bg-[#222222] relative pt-24">
  <motion.h2
  initial={{ opacity: 0, y: -30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 2 }}
  className="text-4xl md:text-6xl font-extrabold text-[#26eeeb] tracking-wide"
  >
  Know More About Us
  </motion.h2>
  <motion.p
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.3, duration: 1 }}
  className="mt-5 max-w-2xl text-gray-300 text-base md:text-lg leading-relaxed"
  >
  Scroll down to discover what makes{" "}
  <span className="text-[#26eeeb] font-semibold">GG</span> special.
  </motion.p>
  </section>

  {aboutCards.map((card, index) => (
  <section
  key={card.id}
  className={`min-h-screen flex flex-col items-center justify-center px-6 py-10 gap-10 bg-[#222222] -mt-2`}
  >
  <div className="container mx-auto px-6 relative z-10 flex flex-col-reverse md:flex-row items-center justify-center min-h-[80vh] gap-12 md:gap-16 pt-10 md:pt-0">


  <motion.div
  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className={`flex justify-center w-full md:w-1/2 h-[500px]
  -mt-[40rem] sm:-mt-[44rem] md:mt-0 md:flex md:items-center order-1
  ${index % 2 !== 0 ? 'md:order-2' : ''}`}
  >
  <div className="relative w-full max-w-[280px] h-full md:h-[500px] flex justify-center items-center">
  <div 
  className="relative w-full h-full bg-[#191919]
  border-[10px] border-[#191919] rounded-[2.5rem]
  shadow-[0_20px_20px_-1px_#26eeeb]
  flex flex-col items-center overflow-hidden transition-all duration-500"
  >
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1a1a1a] rounded-b-2xl z-10"></div>
  {renderCardContent(card)}</div>
  </div>
  </motion.div>

  <motion.div
  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="w-full md:w-1/2 text-center"
  >
  <h3 className="text-3xl font-bold mb-4 text-[#26eeeb]">
  {card.title}
  </h3>
  <p className="text-gray-300 leading-relaxed max-w-md mx-auto">
  {card.description
  ? card.description.substring(0, card.description.indexOf('.') + 1)
  : card.summary ||
  "Read the terms and privacy guidelines that ensure a safe and fair GG experience."}
  </p>
  </motion.div>
  </div>
  </section>
  ))}
  </div>
  );
  };

  export default About;
