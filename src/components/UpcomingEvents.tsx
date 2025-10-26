import React, { useRef } from "react";
import { ChevronRight, ChevronLeft, Pointer } from "lucide-react"; 

const UpcomingEvents = () => {
const scrollRef = useRef(null);

const handleScroll = (direction) => {
if (scrollRef.current) {
const scrollAmount = 404; 
scrollRef.current.scrollBy({
left: direction === "right" ? scrollAmount : -scrollAmount,
behavior: "smooth",
});
}
};

return (
<section 
  className="relative text-white py-12 bg-[#222222] overflow-hidden" 
>
<div 
  className="container mx-auto relative px-2"
>
<div className="flex items-center justify-center">
  
  <h1 className="text-[28px] md:text-5
  xl font-bold text-[#fefefe] leading-tight">
  Join Events
  </h1>
</div>

<hr className="border-t-2 border-[#26eeeb] my-4" />

<div className="relative">
<div
onClick={() => handleScroll("left")}
className="absolute top-1/2 -translate-y-1/4 left-0  h-44 w-12 flex items-center justify-start cursor-pointer transition-transform hover:scale-110 z-10"
>
<ChevronLeft className="w-10 h-10 text-[#26eeeb] bg-[#222222]/80 rounded-2xl" />
</div>

<div className="overflow-hidden"> 
<div
ref={scrollRef}
style={{ 
overflowX: 'scroll', 
paddingBottom: '24px', 
paddingTop: '24px', 
marginBottom: '-17px',
WebkitOverflowScrolling: 'touch', 
msOverflowStyle: 'none', 
scrollbarWidth: 'none', 
}}
className="flex gap-6 scroll-smooth"
>
<img
src="/basketball.gif"
alt="Event 1"
className="w-[400px] h-52 object-cover rounded-lg border-2 flex-shrink-0"
/>
<img
src="/running.gif"
alt="Event 2"
className="w-[400px] h-52 object-cover rounded-lg border-2 flex-shrink-0"
/>
<img
src="/ml.gif"
alt="Event 3"
className="w-[400px] h-52 object-cover rounded-lg border-2 flex-shrink-0"
/>
<img
src="/frisbee.webp"
alt="Event 4"
className="w-[400px] h-52 object-cover rounded-lg border-2 flex-shrink-0"
/>
<img
src="/volleyball.gif"
alt="Event 5"
className="w-[400px] h-52 object-cover rounded-lg border-2 flex-shrink-0"
/>
<img
src="/chess.gif"
alt="Event 6"
className="w-[400px] h-52 object-cover rounded-lg border-2 flex-shrink-0"
/>
<img
src="/badminton.gif"
alt="Event 7"
className="w-[400px] h-52 object-cover rounded-lg border-2 flex-shrink-0"
/>
<img
src="/swimming.gif"
alt="Event 8"
className="w-[400px] h-52 object-cover rounded-lg border-2 flex-shrink-0"
/>
<img
src="/football.gif"
alt="Event 9"
className="w-[400px] h-52 object-cover rounded-lg border-2 flex-shrink-0"
/>
<img
src="/taekwondo.gif"
alt="Event 10"
className="w-[400px] h-52 object-cover rounded-lg border-2 flex-shrink-0"
/>
</div>
</div>

<div
onClick={() => handleScroll("right")}
className="absolute top-1/3 -translate-y-1/4 right-0 h-44 w-12 flex items-center justify-end cursor-pointer transition-transform hover:scale-110"
>
<ChevronRight className="w-10 h-10 text-[#26eeeb] bg-[#222222]/80 rounded-2xl" />
</div>
</div>

<div className="max-w-2xl mt-4 mx-auto">
<p className="text-[24px] font-bold text-[#fefefe] text-center">
All the sports you love, They are looking for you.
</p>
<p className="text-[18px] font-bold text-[#26eeeb] text-center">
Connect with them, Share what’s new.
</p>
</div>
</div>
</section>
);
};

export default UpcomingEvents;