import React from "react"
import { InputBar, Messages } from "./components";
import { DataProvider } from "./DataProvider";
import PopupUser from "./components/PopupUser";

const Container: React.FC = () => {
  const isUser = localStorage.getItem("userName");
  const [isOpen, setIsOpen] = React.useState(!isUser);

  return (
    <div className=" h-[90%]  p-6  bg-[#0f0f0f] w-2/5 flex flex-col justify-between rounded-md">
      <PopupUser isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <DataProvider>
        <Messages />
        <InputBar />
      </DataProvider>
    </div>
  )
};

export default Container;
