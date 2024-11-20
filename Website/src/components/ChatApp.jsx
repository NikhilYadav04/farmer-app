import React from "react";
import SideBar from "./SideBar";
import Main from "./Main";
import ContextProvider from "./Context";

const ChatApp = () => {
  return (
    <ContextProvider>
      <div className="flex">
        <SideBar />
        <Main />
      </div>
    </ContextProvider>
  );
};

export default ChatApp;
