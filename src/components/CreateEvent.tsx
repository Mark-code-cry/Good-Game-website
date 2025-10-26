import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Link2, FileText, Type } from "lucide-react";

const steps = [
{
icon: <Type className="w-10 h-10 text-[#26eeeb]" />,
title: "Name Your Game",
desc: "Give your tournament a title that hypes players up before the match even begins.",
},
{
icon: <FileText className="w-10 h-10 text-[#26eeeb]" />,
title: "Write the Playbook",
desc: "Set your event’s details — format, rules, and prizes that get athletes fired up.",
},
{
icon: <Calendar className="w-10 h-10 text-[#26eeeb]" />,
title: "Set the Match Date",
desc: "Lock in your game day and make sure the crowd knows when to cheer you on.",
},
{
icon: <MapPin className="w-10 h-10 text-[#26eeeb]" />,
title: "Mark the Arena",
desc: "Drop the pin — whether it’s a gym, court, or online battlefield, let players know where to show up.",
},
{
icon: <Link2 className="w-10 h-10 text-[#26eeeb]" />,
title: "Open Registration",
desc: "Share your sign-up link and let teams rally in. The league starts here.",
},
];

const CreateEvent = () => {
const [current, setCurrent] = useState(0);
const intervalRef = useRef(null);

const goNext = () => {
setCurrent((prev) => (prev + 1) % steps.length);
restartInterval(); 
};

useEffect(() => {
startInterval();
return () => clearInterval(intervalRef.current);
}, []);

const startInterval = () => {
intervalRef.current = setInterval(() => {
setCurrent((prev) => (prev + 1) % steps.length);
}, 3000);
};

const restartInterval = () => {
clearInterval(intervalRef.current);
startInterval();
};

return (
<section className="relative w-full min-h-screen overflow-hidden text-white bg-[#222222] py-16 md:py-0">

<div className=""></div>

<div className="container mx-auto px-6 relative z-10 flex flex-col-reverse md:flex-row items-center justify-center min-h-screen gap-12 md:gap-16 pt-16 md:pt-0">

<div className="flex justify-center w-full md:w-1/2 h-[400px] md:h-[500px] order-1">
<div className="relative w-full max-w-[280px] h-full"> 
<AnimatePresence>
{steps.map((step, index) => {
const position = (index - current + steps.length) % steps.length;
if (position > 2) return null;

return (
<motion.div
key={index}
className="absolute top-0 left-0 w-full h-full bg-[#020202] rounded-[2.5rem] p-6 shadow-2xl border border-[#26eeeb]/60 backdrop-blur-md flex flex-col items-center justify-between"
initial={{ opacity: 0, x: 100, scale: 0.8 }}
animate={{
opacity: 1,
x: position * 50,
scale: 1 - position * 0.1,
zIndex: 10 - position,
}}
exit={{ opacity: 0, x: -100, scale: 0.8 }}
transition={{ duration: 0.6, ease: "easeInOut" }}
>
<motion.div
animate={{ y: [0, -6, 0] }}
transition={{
repeat: Infinity,
duration: 2,
delay: index * 0.3,
}}
>
<div className="flex justify-center">{step.icon}</div>
</motion.div>

<div className="mt-8 text-center">
<h3 className="text-lg font-semibold text-[#26eeeb] mb-2">
{step.title}
</h3>
<p className="text-gray-400 text-sm">{step.desc}</p>
</div>

<motion.button
onClick={goNext}
whileHover={{ scale: 1.1 }}
whileTap={{ scale: 0.95 }}
className="mt-6 bg-[#26eeeb] text-[#222222] font-bold px-5 py-2 rounded-full shadow-md hover:bg-[#26eeeb] transition"
>
Next
</motion.button>
</motion.div>
);
})}
</AnimatePresence>
</div>
</div>

<div className="w-full md:w-1/2 text-center md:text-right order-2">
<motion.h2
initial={{ opacity: 0, y: -30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
className="text-[35px] font-bold mb-4 text-[#26eeeb]"
>
Create Open League Events
</motion.h2>

<motion.p
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ delay: 0.3 }}
className="max-w-md md:ml-auto text-[#fefefe]/80 font-semi-bold mx-auto md:mx-0"
>
Plan your next open league tournament with ease. <br/>From naming your
event to sharing your registration link everything starts here.
</motion.p>
</div>
</div>
</section>
);
};

export default CreateEvent;
