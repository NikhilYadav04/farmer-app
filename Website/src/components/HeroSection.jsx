import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center mt-[8rem] mb-[7rem]  lg:mt-[10rem] border-b border-neutral-800">
      <h1 className="text-4xl sm:text-5xl lg:text-7xl text-center tracking-wide">
        Protect Your Crops with AI-Powered
        <span className="bg-gradient-to-r from-green-900 to-green-600 text-transparent bg-clip-text">
          {" "}
          Disease Detection
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Early detection, early action. Save your yields.
      </p>
      <div className="flex justify-center gap-1 my-[5rem]">
        <a
        onClick={
          navigate("/upload")
        }
          href="#"
          className="bg-gradient-to-r flex items-center justify-between text-white gap-3 from-green-800 to-green-600 lg:py-4 py-3 lg:pl-10 pl-5 lg:pr-8 pr-3 mx-3 rounded-full transition ease-in-out hover:scale-110 duration-300"
        >
          Try it Now
          <ChevronRight />
        </a>
        <a
          href="#"
          className="bg-gradient-to-r flex items-center justify-between text-white from-green-900 to-green-600 py-[0.1rem] px-[0.1rem] rounded-full transition ease-in-out hover:scale-110 duration-300"
        >
          <span className="w-full h-full text-center bg-neutral-900 flex items-center justify-center rounded-full lg:py-5 py-2 lg:px-6 px-4">
            Learn More
          </span>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
