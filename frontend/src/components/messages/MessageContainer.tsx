import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageHeader from "./MessageHeader";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import NoChatSelected from "./NoChatSelected";

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
