import React, { useEffect, useRef } from "react";
import SingleMessage from "./SingleMessage";
// import useConversation from '../../zustand/useConversation'
import useGetMessages from "../../hooks/useGetMessages";
import MessagesSkeleton from "./MessagesSkeleton";

const Messages = () => {
  // const {messages} = useConversation();
  const { loading, messages } = useGetMessages();
  const lastMessageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setTimeout(() => {
      if (lastMessageRef.current) {
        lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }, [messages]);
  return (
    <div className="px-4 flex-1 overflow-auto flex flex-col">
      {/* {loading && <span className='loading loading-spinner mx-auto'></span>}  */}
      {loading ? (
        <MessagesSkeleton />
      ) : messages.length === 0 ? (
        <div className="text-center text-gray-400 font-bold text-lg my-auto">
          Send a message to start conversation
        </div>
      ) : (
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <SingleMessage data={message} />
          </div>
        ))
      )}
    </div>
  );
};

export default Messages;
