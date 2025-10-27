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

document.addEventListener("contextmenu", handleContextMenu);

return () => {
document.removeEventListener("contextmenu", handleContextMenu);
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
