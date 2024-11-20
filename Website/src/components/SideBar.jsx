import React, { useContext, useState } from "react";
import { Menu } from "lucide-react";
import { Plus } from "lucide-react";
import { MessageSquare } from "lucide-react";
import { CircleHelp } from "lucide-react";
import { History } from "lucide-react";
import { Settings } from "lucide-react";
import { Context } from "./Context";
import "./SideBar.css";
const SideBar = () => {
  const [extended, setExtended] = React.useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div
      className={`navDrawer min-h-screen max-w-5xl inline-flex flex-col justify-between py-6 px-3 transition-all ease-out duration-500 translate-x-0 ${
        extended ? "w-80" : null
      } max-md:hidden`}
    >
      <div>
        <Menu
          onClick={() => setExtended(!extended)}
          className="w-6 block ml-3 cursor-pointer"
        />
        <div
          onClick={() => newChat()}
          className="mt-12 inline-flex items-center gap-3 py-3 px-3 bg-gradient-to-r from-green-800/50 to-green-700/80 rounded-full text-base cursor-pointer transition ease-in-out hover:scale-110 duration-300"
        >
          <Plus className="w-6" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="flex flex-col recent">
            <p className="mt-8 mb-5">Recent</p>
            {prevPrompts.map((item, index) => {
              return (
                <div
                  onClick={() => loadPrompt(item)}
                  className={`flex items-start gap-3 p-3 rounded-full cursor-pointer transition-colors hover:bg-green-400/5 hover:text-green-400`}
                >
                  <MessageSquare className="w-6" />
                  <p>{item.slice(0, 20)} ...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="flex flex-col">
        <div className="flex items-start gap-3 p-3 rounded-full cursor-pointer hover:bg-neutral-600/30 ">
          <CircleHelp className="w-6" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="flex items-start gap-3 p-3 rounded-full cursor-pointer hover:bg-neutral-600/30 ">
          <History className="w-6" />
          {extended ? <p>History</p> : null}
        </div>
        <div className="flex items-start gap-3 p-3 rounded-full cursor-pointer hover:bg-neutral-600/30">
          <Settings className="w-6" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
