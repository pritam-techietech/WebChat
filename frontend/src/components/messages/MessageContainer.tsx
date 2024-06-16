import React from "react";
import MessageHeader from "./MessageHeader";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import NoChatSelected from "./NoChatSelected";

const MessageContainer = () => {
  const showNoChat = false;
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {showNoChat ? (
        <NoChatSelected />
      ) : (
        <>
          <MessageHeader />
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;
