
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import PhoneMockups from "./PhoneMockups";

const HeroSection = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();

  const fileUrl =
    "https://www.mediafire.com/file/tfjy8ecz09zqbe2/app-release.apk/file";

  const handleDownload = () => {
    setIsDownloading(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            const link = document.createElement("a");
            link.href = fileUrl;
            link.download = "Good Game";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

           

            setIsDownloading(false);
          }, 800);
        }
        return Math.min(prev + Math.random() * 8, 100);
      });
    }, 300);
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#222222] overflow-hidden py-16 lg:py-0"
    >
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          isDownloading ? "backdrop-blur-md opacity-60 bg-black/40" : "opacity-0"
        }`}
      ></div>

      <div
        className={`container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 relative transition-all duration-300 ${
          isDownloading ? "blur-sm pointer-events-none" : ""
        }`}
      >
        <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="space-y-8 text-center lg:text-left order-1 lg:order-1 mt-14 sm:mt-20 md:mt-28 lg:mt-36 xl:mt-40"
>
  <h1 className="text-4xl md:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#fefefe] to-[#fefefe]">
    Get <span className="text-[#26EEEB]">Good Game</span> App
  </h1>

  <p className="text-[#FEFEFE] font-medium text-[18px]">
    Your Very Own{" "}
    <span className="text-[#26EEEB] font-medium">
      Sports Events Ecosystem
    </span>.
  </p>

  <div
  className="
    flex flex-col lg:flex-row
    items-center lg:items-start
    justify-center lg:justify-start
    gap-6 mt-8 text-center lg:text-left
  "
>
  <div className="flex flex-col items-center lg:items-start space-y-4">
  

    <Button
      onClick={handleDownload}
      className="
        bg-[#222222]/90 text-[#fefefe] font-semibold
        px-8 h-14 rounded-xl hover:bg-[#26EEEB]
        hover:text-black border border-[#26EEEB]
        transition-all duration-300
      "
    >
      Download Now
    </Button>

    </div>
  </div>

</motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="order-2 lg:order-2"
        >
          <PhoneMockups />
        </motion.div>
      </div>

      <AnimatePresence>
        {isDownloading && (
          <motion.div
            key="downloading-overlay"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <div className="bg-[#0d1214]/90 backdrop-blur-xl border border-[#26EEEB]/30 rounded-3xl shadow-2xl p-10 text-center w-[90%] max-w-md relative">
              <motion.img
                src="/Whistle.png"
                alt="Logo"
                className="w-16 h-16 mx-auto mb-4 animate-pulse"
              />
              <h2 className="text-2xl font-semibold text-[#26EEEB] mb-4">
                Downloading Good Game App
              </h2>
              <p className="text-gray-300 mb-6">
                Please wait while the whistle loads your app...
              </p>
              <div className="relative w-64 h-16 mx-auto flex items-center justify-center">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-[#26EEEB]/30 rounded-full origin-left"
                ></motion.div>
                <motion.img
                  src="/Whistle.png"
                  alt="Whistle forming"
                  className="absolute w-20 h-20 object-contain"
                  style={{
                    opacity: progress / 100,
                    transform: `scale(${0.3 + progress / 100})`,
                    filter: "drop-shadow(0 0 10px #26EEEB)",
                  }}
                  transition={{ ease: "easeInOut", duration: 0.4 }}
                />
              </div>
              <p className="text-[#26EEEB] font-semibold mt-6">
                {Math.floor(progress)}%
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;