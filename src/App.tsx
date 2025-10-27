import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./components/About";

const queryClient = new QueryClient();

const App = () => {
useEffect(() => {
const handleContextMenu = (e: MouseEvent) => {
e.preventDefault();
console.warn("Right-click is disabled on this site.");
};

const handleKeyDown = (e: KeyboardEvent) => {
if (
e.key === "F12" ||
(e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) ||
(e.ctrlKey && e.key === "U")
) {
e.preventDefault();
console.warn("Inspect Element is disabled on this site.");
}
};

const detectDevTools = setInterval(() => {
if (
window.outerWidth - window.innerWidth > 160 ||
window.outerHeight - window.innerHeight > 160
) {
console.warn("DevTools detected!");
}
}, 1000);

// Add listeners
document.addEventListener("contextmenu", handleContextMenu);
document.addEventListener("keydown", handleKeyDown);

// Cleanup
return () => {
document.removeEventListener("contextmenu", handleContextMenu);
document.removeEventListener("keydown", handleKeyDown);
clearInterval(detectDevTools);
};
}, []);

return (
<QueryClientProvider client={queryClient}>
<TooltipProvider>
<Toaster />
<Sonner />
<BrowserRouter>
<Routes>
<Route path="/" element={<Index />} />
<Route path="/about" element={<About />} />
</Routes>
</BrowserRouter>
</TooltipProvider>
</QueryClientProvider>
);
};

export default App;
