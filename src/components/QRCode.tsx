import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const QRCode = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [progress, setProgress] = useState(0);

  const fileUrl =
    "https://dl.dropboxusercontent.com/scl/fi/5fvqjaztdyie3j65ak62j/GG_App.apk?rlkey=tyesfshf956l5b0m4x4hty1pd&st=3v7yufig";

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
    <section className="relative min-h-screen bg-[#222222] text-white flex flex-col justify-center items-center py-12 px-6 overflow-hidden">
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          isDownloading ? "backdrop-blur-md opacity-60 bg-black/40" : "opacity-0"
        }`}
      ></div>

      <div
        className={`container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 transition-all duration-300 ${
          isDownloading ? "blur-sm pointer-events-none" : ""
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center lg:text-left">
            Steps to{" "}
            <span className="text-[#26EEEB]">Download</span> and{" "}
            <span className="text-[#26EEEB]">Install</span> GG App
          </h1>

          <ol className="space-y-4 text-sm md:text-base leading-relaxed">
            {[
              "Open your camera and scan the QR code.",
              "Click the link that appears.",
              "Go to Settings → Apps.",
              "Tap the three dots in the upper-right corner.",
              "Select Special access → Install unknown apps.",
              "Enable permission for apps like My Files, Chrome, or any browser.",
              "Open My Files and go to Recent files.",
              "Tap GoodGame.apk to install the app.",
              "Enjoy exploring sports events with GG!",
            ].map((step, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-200 sm:whitespace-nowrap sm:overflow-x-auto sm:scrollbar-none"
              >
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border-2 border-[#26EEEB] text-[#fefefe] font-bold">
                  {index + 1}
                </div>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center lg:order-2 lg:self-end"
        >
          <a
            href="/qr.png"
            download="GG_QRCode.png"
            className="rounded-xl p-4 bg-[#222222] hover:scale-105 transition-transform duration-300"
          >
            <img
              src="/qr.png"
              alt="QR Code"
              className="w-40 h-40 md:w-48 md:h-48 rounded-md cursor-pointer"
            />
          </a>

          <p className="text-gray-400 text-sm mt-3">
            Scan or Download the QR Code
          </p>

          <Button
            onClick={handleDownload}
            className="mt-6 bg-[#26EEEB] text-black font-semibold px-4 h-10 rounded-[30px] hover:bg-[#22d3d0] transition-all duration-300"
          >
            Download Now
          </Button>
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

export default QRCode;
