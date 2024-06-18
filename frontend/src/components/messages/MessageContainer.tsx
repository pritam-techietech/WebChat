import React, { useEffect } from "react";
import MessageHeader from "./MessageHeader";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import NoChatSelected from "./NoChatSelected";
import useConversation from "../../zustand/useConversation";

const MessageContainer = () => {
  // const showNoChat = false;
  const {selectedConversation, setSelectedConversation} = useConversation();

  useEffect(() => {
    // Unmounting process
    return () => {
      console.log("unmounting");
      setSelectedConversation(null);
    };
  },[setSelectedConversation])
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {selectedConversation ? (
        <>
          <MessageHeader fullName={selectedConversation.fullName}/>
          <Messages />
          <MessageInput />
        </>
      ) : (
        <NoChatSelected />
      )}
    </div>
  );
};

export default MessageContainer;
