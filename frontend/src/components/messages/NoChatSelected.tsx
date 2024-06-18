import React from "react";
import { TiMessages } from "react-icons/ti";
import { useUserContext } from "../../context/UserContext";
import { UserModel } from "../../models/UserModel";

const NoChatSelected = () => {
  const {user} = useUserContext()
  const User: UserModel = JSON.parse(user!);
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {User.fullName}</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

export default NoChatSelected;
