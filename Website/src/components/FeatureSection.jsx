import { timeLineElements } from "./timeLineElements";
const FeatureSection = () => {
  console.log(localStorage.getItem('userdata'));
  
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-green-400 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Feature
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-6xl text-center tracking-wide mt-10 lg:mt-20 mx-10">
          Revolutionize Agriculture with    
          <span className="bg-gradient-to-r from-green-500 text-center to-green-900 text-transparent bg-clip-text">
            {"  "}
            AI-Powered Disease Prediction
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {timeLineElements.map((timeLineElement, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex rounded-xl">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-green-500 justify-center items-center rounded-full">
                {timeLineElement.icons}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{timeLineElement.title}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {timeLineElement.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;