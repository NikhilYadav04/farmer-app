import { Context } from "./Context";
import { useContext, useRef, useState } from "react";
import { User } from "lucide-react";
import { Compass } from "lucide-react";
import { Lightbulb } from "lucide-react";
import { MessageSquare } from "lucide-react";
import { CodeXml } from "lucide-react";
import { Images } from "lucide-react";
import { Mic } from "lucide-react";
import { SendHorizontal } from "lucide-react";
import "./Main.css";
const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const inputRef = useRef(null);
  const [image, setImage] = useState("");
  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImage(event.target.files[0]);
  };

  return (
    <div className="flex-1 min-h-[80%] m-5 border rounded-3xl border-transparent bg-gradient-to-r from-green-900 via-orange-400 to-red-400 py-[0.2rem] px-[0.2rem]">
      <div className="flex-1 min-h-[100%] relative bg-neutral-900 rounded-3xl">
        <div className="flex items-center justify-between text-base p-5">
          <p>Chatbot</p>
          <User width={35} height={35} className="rounded-full border p-1" />
        </div>
        <div className="max-w-4xl m-auto ">
          {!showResult ? (
            <>
              <div className="my-12 mx-0 text-5xl font-medium p-5">
                <p>
                  <span className="bg-gradient-to-r from-green-800 font-semibold via-orange-400 to-red-500 text-transparent bg-clip-text">
                    Welcome!
                  </span>
                </p>
                <p>How can I help you today?</p>
              </div>
            </>
          ) : (
            <div className="py-0 px-[5%] max-h-[70vh] overflow-y-scroll result">
              <div className="my-10 mx-0 flex items-center gap-5">
                <User />
                <p>{recentPrompt}</p>
              </div>
              <div className="flex flex-row items-start gap-5 leading-8 font-light text-base">
                <Images width={30} height={30} />
                {loading ? (
                  <div className="w-1/2 flex flex-col gap-4 loader">
                    <hr className="rounded bg-green-400 bg-gradient-to-r from-green-400 via-green-100 to-green-300 h-4" />
                    <hr className="rounded bg-green-400 bg-gradient-to-r from-green-400 via-green-100 to-green-300 h-4" />
                    <hr className="rounded bg-green-400 bg-gradient-to-r from-green-400 via-green-100 to-green-300 h-4" />
                  </div>
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                )}
              </div>
            </div>
          )}

          <div className="absolute bottom-0 w-full max-w-4xl py-0 px-5 m-auto main-bottom">
            <div className="flex items-center justify-between gap-5 bg-neutral-800/70 py-3 px-5 rounded-full search-box">
              <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                type="text"
                placeholder="Write your doubt here"
                className="bg-transparent outline-none flex-1 p-3 text-base"
              />
              <div className="flex gap-3">
                <div onClick={handleImageClick}>
                  <Images className="cursor-pointer img" />
                  <input
                    type="file"
                    name="file"
                    ref={inputRef}
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </div>
                <Mic className="cursor-pointer img" />
                {input ? (
                  <SendHorizontal
                    onClick={() => onSent()}
                    className="cursor-pointer img"
                  />
                ) : null}
              </div>
            </div>
            <p className="text-xs my-4 mx-auto text-center font-light">
              Our chatbot may display inaccurate info, including about people,
              so double-check its responses. Your privacy and Gemini Apps
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;