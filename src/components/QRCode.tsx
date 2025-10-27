import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const QRCode = () => {
  return (
    <section className="min-h-screen bg-[#222222] text-white flex flex-col justify-center items-center py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Steps Section */}
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
            href="/gg.png"
            download="GG_QRCode.png"
            className="rounded-xl p-4 bg-[#222222] hover:scale-105 transition-transform duration-300"
          >
            <img
              src="/gg.png"
              alt="QR Code"
              className="w-40 h-40 md:w-48 md:h-48 rounded-md cursor-pointer"
            />
          </a>

          <p className="text-gray-400 text-sm mt-3">
            Scan or Download the QR Code
          </p>

          <Button
            className="mt-6 bg-[#26EEEB] text-black font-semibold px-4 h-10 rounded-[30px] hover:bg-[#22d3d0] transition-all duration-300"
            onClick={() =>
              window.open(
                "https://www.dropbox.com/scl/fi/5fvqjaztdyie3j65ak62j/GG_App.apk?rlkey=tyesfshf956l5b0m4x4hty1pd&st=kvqpc5ou&dl=1",
                "_blank"
              )
            }
          >
            Download Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default QRCode;
