import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TeamSection = () => {
const teamMembers = [
{ id: 1, name: "Ronimee Patsy Gascon", role: "Team Leader", image: "/gascon.png" },
{ id: 2, name: "Mabren Quiro", role: "Project Manager", image: "/quiro.png" },
{ id: 3, name: "Ken Vincent Comoda", role: "Developer", image: "/comoda.png" },
{ id: 4, name: "Mark Arhiel Gloria", role: "Developer", image: "/gloria.png" },
{ id: 5, name: "John Carlo Villa Agustin", role: "UI Designer", image: "/vilaagustin.png" },
{ id: 6, name: "Jan Justin Kenneth Chua", role: "UI Designer", image: "/chua.png" },
{ id: 7, name: "Vince Collin Panes", role: "UI Designer", image: "/panes.png" },
{ id: 8, name: "Radiance Esteban", role: "Researcher", image: "/esteban.png" },
{ id: 9, name: "Gabriel Colud", role: "Researcher", image: "/colud.png" },
{ id: 10, name: "Raymund Altaire Eulogio", role: "Researcher", image: "/eulogio.png" },
{ id: 11, name: "Ruth Mariel Delos Reyes", role: "Researcher", image: "/delosreyes.png" },
];


const firstRow = teamMembers.slice(0, 5);
const secondRow = teamMembers.slice(5, 11);


const [gameActive, setGameActive] = useState(false);
const [category, setCategory] = useState(null);
const [question, setQuestion] = useState(null);
const [options, setOptions] = useState([]);
const [feedback, setFeedback] = useState(null);
const [score, setScore] = useState(0);
const [mistakes, setMistakes] = useState(0);
const [gameOver, setGameOver] = useState(false);
const [winConditionMet, setWinConditionMet] = useState(false);


const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

const startGame = (cat) => {
setCategory(cat);
setScore(0);
setMistakes(0);
setGameOver(false);
setWinConditionMet(false);
generateQuestion(cat);
setGameActive(true);
};

const generateQuestion = (cat) => {
const correct = teamMembers[Math.floor(Math.random() * teamMembers.length)];
let choices = shuffle(teamMembers.filter((m) => m.id !== correct.id)).slice(0, 3);
choices = shuffle([...choices, correct]);

if (cat === "name") {
setQuestion({ prompt: correct.image, answer: correct.name, type: "image" });
setOptions(choices.map((c) => c.name));
} else if (cat === "role") {
setQuestion({
prompt: `What is the role of ${correct.name}?`,
answer: correct.role,
type: "text",
});
setOptions(choices.map((c) => c.role));
} else if (cat === "picture") {
setQuestion({
prompt: `Which one is ${correct.name}?`,
answer: correct.image,
type: "imageSelect",
});
setOptions(choices.map((c) => c.image));
}
};

const checkAnswer = (option) => {
const correct = question.answer === option;

if (correct) {
const newScore = score + 1;
setScore(newScore);
setFeedback("✅ Correct!");

if (newScore >= 5) {
setWinConditionMet(true);
setGameOver(true);
return; 
}
} else {
const newMistakes = mistakes + 1;
setMistakes(newMistakes);
setFeedback("❌ Wrong!");

if (newMistakes >= 3) {
setWinConditionMet(false);
setGameOver(true);
return;
}
}

setTimeout(() => {
setFeedback(null);
if (!gameOver) generateQuestion(category);
}, 1000);
};

const resetGame = () => {
setGameActive(false);
setCategory(null);
setQuestion(null);
setOptions([]);
setFeedback(null);
setScore(0);
setMistakes(0);
setGameOver(false);
setWinConditionMet(false);
};

const TeamMemberCard = ({ member }) => (
<motion.div
key={member.id}
transition={{ type: "spring", stiffness: 200 }}
className="bg-[#0d1113] border border-[#00bcd4]/40 rounded-2xl overflow-hidden shadow-[0_0_10px_#00bcd455] w-[100px] md:w-36 lg:w-40 transition-all duration-300"
>
<img src={member.image} alt={member.name} className="w-full h-24 md:h-36 object-cover" />
<div className="p-1 bg-[#00bcd4]/10 text-center min-h-[30px] md:min-h-[50px]">
<p className="text-[8px] md:text-xs font-semibold text-[#26eeeb] leading-tight">
{member.name}
</p>
<p className="text-[9px] md:text-[10px] text-gray-300 leading-tight">{member.role}</p>
</div>
</motion.div>
);


return (
<section className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-[#222222] to-[#222222] text-white py-8
  -mt-72 sm:-mt-80 md:-mt-96 lg:mt-0 xl:mt-0">
<div className="container mx-auto px-4 text-center">
<motion.h2
initial={{ opacity: 0, y: -30 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
className="text-3xl md:text-5xl font-bold text-[#00bcd4] mb-4 md:mb-8"
>
Meet the Team
</motion.h2>

<AnimatePresence>
{!gameActive ? (
// Team View
<motion.div
key="team"
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
>
<div className="space-y-3 md:space-y-6">

<div className="block lg:hidden space-y-6">
<div className="flex justify-center flex-wrap gap-4 sm:gap-6 md:gap-8">
{teamMembers.slice(0, 2).map((member) => (
<TeamMemberCard key={member.id} member={member} />
))}
</div>

<div className="flex justify-center flex-wrap gap-4 sm:gap-6 md:gap-8">
{teamMembers.slice(2, 5).map((member) => (
<TeamMemberCard key={member.id} member={member} />
))}
</div>

<div className="flex justify-center flex-wrap gap-4 sm:gap-6 md:gap-8">
{teamMembers.slice(5, 8).map((member) => (
<TeamMemberCard key={member.id} member={member} />
))}
</div>

<div className="flex justify-center flex-wrap gap-4 sm:gap-6 md:gap-8">
{teamMembers.slice(8, 11).map((member) => (
<TeamMemberCard key={member.id} member={member} />
))}
</div>
</div>

<div className="hidden lg:block space-y-3 lg:space-y-6">
<div className="flex flex-wrap justify-center gap-2 lg:gap-6">  
{firstRow.map((member) => (
<TeamMemberCard key={member.id} member={member} />
))} 
</div>

<div className="flex flex-wrap justify-center gap-2 lg:gap-6">
{secondRow.map((member) => (
<TeamMemberCard key={member.id} member={member} />
))}
</div>
</div>

</div>


<motion.button
onClick={() => setGameActive(true)}
whileHover={{ scale: 1.1 }}
className="mt-4 md:mt-10 bg-[#00bcd4] text-black font-semibold px-8 py-3 rounded-full shadow-md hover:bg-[#26eeeb] transition"
>
🎮 Enter Guessing Arena
</motion.button>
</motion.div>
) : !category ? (
<motion.div
key="category"
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
className="space-y-6"
>
<h3 className="text-2xl text-[#00bcd4] font-semibold">Choose a Category</h3>
<div className="flex flex-wrap justify-center gap-4">
<button
onClick={() => startGame("name")}
className="bg-[#00bcd4] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#26eeeb]"
>
Guess the Name
</button>
<button
onClick={() => startGame("role")}
className="bg-[#00bcd4] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#26eeeb]"
>
Guess the Role
</button>
<button
onClick={() => startGame("picture")}
className="bg-[#00bcd4] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#26eeeb]"
>
Guess the Picture
</button>
</div>
<button onClick={resetGame} className="text-gray-400 underline mt-4">Back</button>
</motion.div>
) : gameOver ? (
<motion.div
key="gameover"
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
className="flex flex-col items-center space-y-6"
>
{winConditionMet ? (
<h3 className="text-3xl font-bold text-green-500">
You're Good! 🏆
</h3>
) : (
<h3 className="text-3xl font-bold text-red-500">
Game Over 😢
</h3>
)}
<p className="text-lg text-gray-300">Final Score: {score}</p>
<button
onClick={resetGame}
className="bg-[#00bcd4] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#26eeeb]"
>
Play Again
</button>
</motion.div>
) : (
<motion.div
key="quiz"
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
className="flex flex-col items-center space-y-6"
>
<div className="flex justify-center gap-8 text-lg font-semibold">
<p className="text-green-400">Score: {score}</p>
<p className="text-red-400">Mistakes: {mistakes}/3</p>
</div>

{category === "role" && (
<h3 className="text-xl font-semibold text-[#00bcd4] text-center px-4">
{question?.prompt}
</h3>
)}

{category === "name" && question?.type === "image" && (
<img
src={question.prompt}
alt="Guess who?"
className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl border border-[#00bcd4]/50 object-cover mx-auto"
/>
)}

{category === "picture" && (
<h3 className="text-xl font-semibold text-[#00bcd4] text-center px-4">
{question?.prompt}
</h3>
)}

<div className="grid grid-cols-2 gap-4 w-full max-w-md">
{options.map((option, i) => (
<button
key={i}
onClick={() => checkAnswer(option)}
className="bg-[#0d1113] border border-[#00bcd4]/40 rounded-lg py-3 px-2 hover:bg-[#00bcd4]/20 transition"
>
{category === "picture" ? (
<img
src={option}
alt="Option"
className="w-full h-24 object-cover rounded-md"
/>
) : (
<span>{option}</span>
)}
</button>
))}
</div>

{feedback && (
<motion.p
initial={{ scale: 0.8 }}
animate={{ scale: 1 }}
className={`font-semibold ${
feedback.includes("✅") ? "text-green-400" : "text-red-400"
}`}
>
{feedback}
</motion.p>
)}

<button onClick={resetGame} className="text-gray-400 underline mt-4">
Exit Game
</button>
</motion.div>
)}
</AnimatePresence>
</div>
</section>
);
};

export default TeamSection;
