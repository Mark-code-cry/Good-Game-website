import React from "react";

const CUSTOM_STYLES = {
primaryColor: "text-[#26eeeb]",
primaryBg: "bg-[#222222]",
primaryBg2: "bg-[#26eeeb]",
primaryColor2: "text-[#fefefe]",
};

const PhoneMockups = () => {
return (
<div className="relative w-full mx-auto h-[650px] flex justify-center items-center overflow-hidden lg:overflow-visible">
<div className="relative w-full h-full flex justify-center items-center">
<div
className="
relative w-full h-full flex justify-center items-center 
transform scale-[.45] sm:scale-[.65] md:scale-75 lg:scale-100
origin-center transition-transform duration-300
"
>
<div
className="
absolute 
w-64 h-[440px]
bg-[#222222]
border-[10px] border-[#191919]
rounded-[2rem]
shadow-[0_20px_20px_-8px_#26eeeb] {/* Custom bottom-only shadow applied */}
flex flex-col items-center justify-center
z-10
transform
-translate-x-[160px]
transition-all
"
>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-4 bg-[#191919] rounded-b-2xl"></div>

<div className="p-5 flex flex-col items-center justify-center h-full space-y-3">
<img src="Whistle.png" alt="Good Game Logo" className="w-16 h-12" />
<h3
className={`text-white font-bold text-[14px] pt-[2px] text-center tracking-wide ${CUSTOM_STYLES.primaryColor2}`}
>
LOG INTO GG
</h3>

<div className="w-full space-y-2">
<input
type="email"
placeholder="Email"
className="w-full bg-transparent border border-[#585858]/40 text-[#fefefe]/60 text-[10px] px-2 py-2 rounded-[4px] focus:outline-none placeholder-[#fefefe]/40"
/>
<input
type="password"
placeholder="Password"
className="w-full bg-transparent border border-[#585858]/40 text-[#fefefe] text-[10px] px-2 py-2 rounded-[4px] focus:outline-none placeholder-[#fefefe]/40"
/>
</div>

<div className="w-full text-right">
<a
href="#"
className="text-[8px] text-[#fefefe] hover:text-[#26eeeb] pt-[10px] transition-colors"
>
Forgot Password?
</a>
</div>

<button
className={`w-full ${CUSTOM_STYLES.primaryBg2} text-[10px] text-[#222222] font-bold py-2 rounded-full transition-colors`}
>
Login
</button>

<p className="text-[#fefefe] text-[8px] ">
Don’t have an account?{" "}
<span className="text-[#26eeeb] cursor-pointer hover:underline">
Register
</span>
</p>
</div>
</div>

<div
className="
absolute 
w-64 h-[500px]
bg-[#222222]
border-[10px] border-[#191919]
rounded-[2rem]
shadow-[0_20px_20px_-8px_#26eeeb] {/* Custom bottom-only shadow applied */}
overflow-hidden
flex flex-col items-center justify-end
z-20
transition-all
"
>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-4 bg-[#191919] rounded-b-2xl"></div>

<div className="p-8 flex flex-col items-center justify-center h-full space-y-5 pb-12">
<img src="Whistle.png" alt="Good Game Logo" className="w-24 h-14.5" />
<div className="text-center">
<h3 className="text-[#fefefe] font-bold text-[18px]">Good Game Iloilo</h3>
<p className="text-[#fefefe]/50 text-[12px]">
Your trusted Iloilo sports ecosystem
</p>
</div>
<button
className={`w-full bg-[#26eeeb] text-[10px] font-bold py-2 rounded-full transition-colors`}
>
Ready, Set, Go...
</button>
</div>
</div>

<div
className="
absolute 
w-64 h-[440px]
bg-[#222222]
border-[10px] border-[#191919]
rounded-[3rem]
shadow-[0_20px_20px_-8px_#26eeeb] {/* Custom bottom-only shadow applied */}
overflow-hidden
flex justify-center items-center
z-10
translate-x-[160px]
transition-all
"
>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-4 bg-[#191919] rounded-b-2xl"></div>

<div className="p-4 h-full flex justify-center items-center">
<img
src="screen.jpg"
alt="Good Game Preview"
className="object-cover w-[400px] h-full pt-[8px]"
/>
</div>
</div>
</div>
</div>
</div>
);
};

export default PhoneMockups;